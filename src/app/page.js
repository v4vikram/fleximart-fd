"use client"

import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Heart, User, Star, ChevronRight, Bell, Menu, Filter, Grid3X3 } from 'lucide-react';
import { categories, featuredProducts, trendingProducts } from '@/data/product';

const EcommerceHomepage = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [likedItems, setLikedItems] = useState(new Set());
  const [searchFocused, setSearchFocused] = useState(false);



  const toggleLike = (id) => {
    const newLiked = new Set(likedItems);
    if (newLiked.has(id)) {
      newLiked.delete(id);
    } else {
      newLiked.add(id);
    }
    setLikedItems(newLiked);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Status Bar */}
      <div className="bg-white px-6 py-2 flex justify-between items-center text-sm font-medium">
        <span>9:41</span>
        <div className="flex gap-1">
          <div className="w-4 h-2 bg-black rounded-sm"></div>
          <div className="w-6 h-2 bg-black rounded-sm"></div>
          <div className="w-6 h-2 bg-gray-300 rounded-sm"></div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white px-6 py-4 shadow-sm sticky top-0 z-50">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Menu className="w-6 h-6" />
            <div>
              <p className="text-sm text-gray-500">Good morning</p>
              <p className="font-semibold text-lg">Alex Johnson</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Bell className="w-6 h-6" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
            </div>
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className={`relative transition-all duration-300 ${searchFocused ? 'transform scale-105' : ''}`}>
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search products..."
            className="w-full bg-gray-100 rounded-2xl pl-12 pr-4 py-4 text-base focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all duration-300"
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
          />
          <Filter className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        </div>
      </header>

      {/* Categories */}
      <div className="bg-white p-2 shadow-sm">
        <div className="flex gap-3 overflow-x-auto scrollbar-hide">
          {categories.map((category, index) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(index)}
              className={`flex-shrink-0 px-4 py-3 rounded-2xl transition-all duration-300 ${
                activeCategory === index
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg transform scale-105'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <div className="flex items-center gap-2">
                {typeof category.icon === 'string' ? (
                  <span className="text-lg">{category.icon}</span>
                ) : (
                  <category.icon className="w-4 h-4" />
                )}
                <span className="font-medium whitespace-nowrap">{category.name}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Hero Banner */}
      <div className="mx-6 mt-6 mb-8">
        <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-3xl p-8 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-2">Summer Sale</h2>
            <p className="text-purple-100 mb-4">Up to 70% off on selected items</p>
            <button className="bg-white text-purple-600 px-6 py-3 rounded-2xl font-semibold hover:bg-gray-100 transition-colors duration-300">
              Shop Now
            </button>
          </div>
          <div className="absolute right-4 top-4 text-6xl opacity-20">🌟</div>
          <div className="absolute right-8 bottom-6 text-4xl opacity-30">🛍️</div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="px-6 mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Featured Deals</h3>
          <button className="text-purple-600 font-medium flex items-center gap-1 hover:gap-2 transition-all duration-300">
            See all <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-3xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
              <div className="relative mb-3">
                <div className="w-full h-32 bg-gray-100 rounded-2xl flex items-center justify-center text-4xl mb-3">
                  {product.image}
                </div>
                <button
                  onClick={() => toggleLike(product.id)}
                  className={`absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    likedItems.has(product.id) 
                      ? 'bg-red-500 text-white transform scale-110' 
                      : 'bg-white text-gray-400 hover:text-red-500'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${likedItems.has(product.id) ? 'fill-current' : ''}`} />
                </button>
                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                  -{product.discount}
                </div>
              </div>
              <h4 className="font-medium text-sm mb-2 line-clamp-2">{product.name}</h4>
              <div className="flex items-center gap-1 mb-2">
                <Star className="w-3 h-3 text-yellow-400 fill-current" />
                <span className="text-xs text-gray-600">{product.rating} ({product.reviews})</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-purple-600">{product.price}</span>
                <span className="text-xs text-gray-400 line-through">{product.originalPrice}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trending Products */}
      <div className="px-6 mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Trending Now</h3>
          <button className="text-purple-600 font-medium flex items-center gap-1 hover:gap-2 transition-all duration-300">
            See all <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
          {trendingProducts.map((product) => (
            <div key={product.id} className="flex-shrink-0 bg-white rounded-3xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 w-40">
              <div className="relative mb-3">
                <div className="w-full h-24 bg-gray-100 rounded-2xl flex items-center justify-center text-3xl mb-3">
                  {product.image}
                </div>
                {product.isNew && (
                  <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                    New
                  </div>
                )}
                <button
                  onClick={() => toggleLike(product.id)}
                  className={`absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    likedItems.has(product.id) 
                      ? 'bg-red-500 text-white transform scale-110' 
                      : 'bg-white text-gray-400 hover:text-red-500'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${likedItems.has(product.id) ? 'fill-current' : ''}`} />
                </button>
              </div>
              <h4 className="font-medium text-sm mb-2 line-clamp-2">{product.name}</h4>
              <div className="flex items-center gap-1 mb-2">
                <Star className="w-3 h-3 text-yellow-400 fill-current" />
                <span className="text-xs text-gray-600">{product.rating}</span>
              </div>
              <span className="font-bold text-purple-600">{product.price}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-6 mb-8">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl p-6 text-white">
            <div className="text-3xl mb-2">🚚</div>
            <h4 className="font-semibold mb-1">Free Delivery</h4>
            <p className="text-sm opacity-90">On orders over $50</p>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-teal-500 rounded-3xl p-6 text-white">
            <div className="text-3xl mb-2">🎁</div>
            <h4 className="font-semibold mb-1">Gift Cards</h4>
            <p className="text-sm opacity-90">Perfect for everyone</p>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-2 safe-area-pb">
        <div className="flex justify-around items-center">
          <button className="flex flex-col items-center gap-1 py-2">
            <div className="w-6 h-6 bg-purple-600 rounded-full"></div>
            <span className="text-xs font-medium text-purple-600">Home</span>
          </button>
          <button className="flex flex-col items-center gap-1 py-2">
            <Search className="w-6 h-6 text-gray-400" />
            <span className="text-xs text-gray-400">Search</span>
          </button>
          <button className="flex flex-col items-center gap-1 py-2">
            <div className="relative">
              <ShoppingBag className="w-6 h-6 text-gray-400" />
              <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-xs text-white font-medium">3</span>
              </div>
            </div>
            <span className="text-xs text-gray-400">Cart</span>
          </button>
          <button className="flex flex-col items-center gap-1 py-2">
            <Heart className="w-6 h-6 text-gray-400" />
            <span className="text-xs text-gray-400">Wishlist</span>
          </button>
          <button className="flex flex-col items-center gap-1 py-2">
            <User className="w-6 h-6 text-gray-400" />
            <span className="text-xs text-gray-400">Profile</span>
          </button>
        </div>
      </div>

      {/* Safe area for bottom navigation */}
      <div className="h-20"></div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .safe-area-pb {
          padding-bottom: env(safe-area-inset-bottom);
        }
      `}</style>
    </div>
  );
};

export default EcommerceHomepage;