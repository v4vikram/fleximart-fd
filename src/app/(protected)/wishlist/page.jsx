"use client"
import React, { useState, useEffect } from 'react';
import { ArrowLeft, Heart, ShoppingBag, User, Star, Share2, Filter, Grid3X3, List, Trash2, Plus, Tag, Gift, Bell, SlidersHorizontal, X } from 'lucide-react';

const WishlistPage = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortBy, setSortBy] = useState('date_added');
  const [selectedItems, setSelectedItems] = useState(new Set());
  const [showBulkActions, setShowBulkActions] = useState(false);

  const [wishlistItems, setWishlistItems] = useState([
    { 
      id: 1, 
      name: 'Wireless AirPods Pro Max', 
      price: 549, 
      originalPrice: 599, 
      image: '🎧', 
      rating: 4.8,
      reviews: 2341,
      category: 'Electronics',
      brand: 'Apple',
      inStock: true,
      dateAdded: '2024-01-15',
      priceDropped: true,
      previousPrice: 579,
      discount: 8
    },
    { 
      id: 2, 
      name: 'Designer Leather Jacket', 
      price: 299, 
      originalPrice: 450, 
      image: '🧥', 
      rating: 4.9,
      reviews: 1876,
      category: 'Fashion',
      brand: 'LuxFashion',
      inStock: true,
      dateAdded: '2024-01-12',
      priceDropped: false,
      discount: 34
    },
    { 
      id: 3, 
      name: 'Premium Coffee Machine', 
      price: 389, 
      originalPrice: 499, 
      image: '☕', 
      rating: 4.7,
      reviews: 1234,
      category: 'Home',
      brand: 'BrewMaster',
      inStock: false,
      dateAdded: '2024-01-10',
      priceDropped: false,
      discount: 22
    },
    { 
      id: 4, 
      name: 'Organic Skincare Bundle', 
      price: 149, 
      originalPrice: 199, 
      image: '🧴', 
      rating: 4.6,
      reviews: 897,
      category: 'Beauty',
      brand: 'PureGlow',
      inStock: true,
      dateAdded: '2024-01-08',
      priceDropped: true,
      previousPrice: 169,
      discount: 25
    },
    { 
      id: 5, 
      name: 'Gaming Mechanical Keyboard', 
      price: 159, 
      originalPrice: 199, 
      image: '⌨️', 
      rating: 4.8,
      reviews: 3456,
      category: 'Electronics',
      brand: 'GameTech',
      inStock: true,
      dateAdded: '2024-01-05',
      priceDropped: false,
      discount: 20
    },
    { 
      id: 6, 
      name: 'Yoga Mat Premium', 
      price: 79, 
      originalPrice: 99, 
      image: '🧘', 
      rating: 4.5,
      reviews: 567,
      category: 'Sports',
      brand: 'ZenFit',
      inStock: true,
      dateAdded: '2024-01-03',
      priceDropped: false,
      discount: 20
    }
  ]);

  const categories = ['All', 'Electronics', 'Fashion', 'Home', 'Beauty', 'Sports'];
  const sortOptions = [
    { value: 'date_added', label: 'Recently Added' },
    { value: 'price_low', label: 'Price: Low to High' },
    { value: 'price_high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'name', label: 'Name A-Z' }
  ];

  const [filteredItems, setFilteredItems] = useState(wishlistItems);

  useEffect(() => {
    let filtered = wishlistItems;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item =>
        item.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Filter by price range
    filtered = filtered.filter(item =>
      item.price >= priceRange[0] && item.price <= priceRange[1]
    );

    // Sort items
    switch (sortBy) {
      case 'price_low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price_high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        filtered.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
    }

    setFilteredItems(filtered);
  }, [selectedCategory, priceRange, sortBy, wishlistItems]);

  const removeFromWishlist = (id) => {
    setWishlistItems(items => items.filter(item => item.id !== id));
    setSelectedItems(selected => {
      const newSelected = new Set(selected);
      newSelected.delete(id);
      return newSelected;
    });
  };

  const addToCart = (item) => {
    if (!item.inStock) return;
    // Simulate adding to cart
    console.log(`Added ${item.name} to cart`);
    // Could show a toast notification here
  };

  const shareWishlist = () => {
    // Simulate sharing
    if (navigator.share) {
      navigator.share({
        title: 'My Wishlist',
        text: 'Check out my wishlist!',
        url: window.location.href,
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('Wishlist link copied to clipboard!');
    }
  };

  const toggleItemSelection = (id) => {
    const newSelected = new Set(selectedItems);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedItems(newSelected);
    setShowBulkActions(newSelected.size > 0);
  };

  const selectAllItems = () => {
    const allIds = new Set(filteredItems.map(item => item.id));
    setSelectedItems(allIds);
    setShowBulkActions(true);
  };

  const clearSelection = () => {
    setSelectedItems(new Set());
    setShowBulkActions(false);
  };

  const bulkAddToCart = () => {
    const itemsToAdd = filteredItems.filter(item => selectedItems.has(item.id) && item.inStock);
    console.log(`Added ${itemsToAdd.length} items to cart`);
    clearSelection();
  };

  const bulkRemove = () => {
    setWishlistItems(items => items.filter(item => !selectedItems.has(item.id)));
    clearSelection();
  };

  const WishlistCard = ({ item, isListView = false }) => (
    <div className={`bg-white rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 relative ${
      isListView ? 'flex gap-4 p-4' : 'p-4'
    } ${selectedItems.has(item.id) ? 'ring-2 ring-purple-500' : ''}`}>
      
      {/* Selection Checkbox */}
      <button
        onClick={() => toggleItemSelection(item.id)}
        className={`absolute top-3 left-3 w-6 h-6 rounded-full border-2 transition-all duration-300 z-10 ${
          selectedItems.has(item.id)
            ? 'bg-purple-600 border-purple-600'
            : 'bg-white border-gray-300 hover:border-purple-400'
        }`}
      >
        {selectedItems.has(item.id) && (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        )}
      </button>

      <div className={`relative ${isListView ? 'w-24 h-24 flex-shrink-0' : 'mb-3'}`}>
        <div className={`bg-gray-100 rounded-2xl flex items-center justify-center text-4xl ${
          isListView ? 'w-24 h-24' : 'w-full h-32'
        }`}>
          {item.image}
        </div>
        
        {/* Price Drop Badge */}
        {item.priceDropped && (
          <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium flex items-center gap-1">
            <span>📉</span> Price Drop
          </div>
        )}
        
        {/* Discount Badge */}
        {item.discount > 0 && !item.priceDropped && (
          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
            -{item.discount}%
          </div>
        )}

        {!item.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-2xl flex items-center justify-center">
            <span className="text-white text-sm font-medium">Out of Stock</span>
          </div>
        )}
      </div>

      <div className={`flex-1 ${isListView ? 'flex flex-col justify-between' : ''}`}>
        <div>
          <p className="text-xs text-purple-600 font-medium mb-1">{item.brand}</p>
          <h3 className={`font-medium mb-2 line-clamp-2 ${isListView ? 'text-base' : 'text-sm'}`}>
            {item.name}
          </h3>
          
          <div className="flex items-center gap-1 mb-2">
            <Star className="w-3 h-3 text-yellow-400 fill-current" />
            <span className="text-xs text-gray-600">{item.rating}</span>
            <span className="text-xs text-gray-400">({item.reviews})</span>
          </div>

          <div className="flex items-center gap-2 mb-2">
            <span className="font-bold text-purple-600">${item.price}</span>
            {item.originalPrice && (
              <span className="text-xs text-gray-400 line-through">${item.originalPrice}</span>
            )}
            {item.priceDropped && item.previousPrice && (
              <span className="text-xs text-green-600">was ${item.previousPrice}</span>
            )}
          </div>

          <p className="text-xs text-gray-500 mb-3">
            Added {new Date(item.dateAdded).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
          </p>
        </div>

        <div className={`flex gap-2 ${isListView ? 'mt-2' : ''}`}>
          <button
            onClick={() => addToCart(item)}
            disabled={!item.inStock}
            className={`flex-1 py-2 rounded-2xl font-medium text-sm transition-all duration-300 ${
              item.inStock
                ? 'bg-purple-600 text-white hover:bg-purple-700'
                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
            }`}
          >
            {item.inStock ? 'Add to Cart' : 'Out of Stock'}
          </button>
          <button
            onClick={() => removeFromWishlist(item.id)}
            className="p-2 bg-gray-100 rounded-2xl hover:bg-red-100 hover:text-red-600 transition-all duration-300"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );

  if (wishlistItems.length === 0) {
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
        <header className="bg-white px-6 py-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <ArrowLeft className="w-6 h-6" />
              <h1 className="text-xl font-bold">Wishlist</h1>
            </div>
          </div>
        </header>

        {/* Empty State */}
        <div className="flex-1 flex items-center justify-center px-6 py-12">
          <div className="text-center">
            <div className="text-8xl mb-6">💝</div>
            <h2 className="text-2xl font-bold mb-4">Your wishlist is empty</h2>
            <p className="text-gray-600 mb-8">Save items you love to buy them later</p>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300">
              Start Shopping
            </button>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-2">
          <div className="flex justify-around items-center">
            <button className="flex flex-col items-center gap-1 py-2">
              <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
              <span className="text-xs text-gray-400">Home</span>
            </button>
            <button className="flex flex-col items-center gap-1 py-2">
              <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
              <span className="text-xs text-gray-400">Shop</span>
            </button>
            <button className="flex flex-col items-center gap-1 py-2">
              <ShoppingBag className="w-6 h-6 text-gray-400" />
              <span className="text-xs text-gray-400">Cart</span>
            </button>
            <button className="flex flex-col items-center gap-1 py-2">
              <div className="w-6 h-6 bg-purple-600 rounded-full"></div>
              <span className="text-xs font-medium text-purple-600">Wishlist</span>
            </button>
            <button className="flex flex-col items-center gap-1 py-2">
              <User className="w-6 h-6 text-gray-400" />
              <span className="text-xs text-gray-400">Profile</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

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
          <div className="flex items-center gap-4">
            <ArrowLeft className="w-6 h-6" />
            <div>
              <h1 className="text-xl font-bold">My Wishlist</h1>
              <p className="text-sm text-gray-500">{wishlistItems.length} items</p>
            </div>
          </div>
          <button
            onClick={shareWishlist}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <Share2 className="w-6 h-6 text-gray-400" />
          </button>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-3 overflow-x-auto scrollbar-hide mb-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category.toLowerCase())}
              className={`flex-shrink-0 px-4 py-2 rounded-2xl transition-all duration-300 ${
                selectedCategory === category.toLowerCase()
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <span className="font-medium whitespace-nowrap">{category}</span>
            </button>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowFilters(true)}
              className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-2xl hover:bg-gray-200 transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span className="font-medium">Sort</span>
            </button>
            {selectedItems.size === 0 ? (
              <button
                onClick={selectAllItems}
                className="bg-gray-100 px-4 py-2 rounded-2xl font-medium hover:bg-gray-200 transition-colors"
              >
                Select All
              </button>
            ) : (
              <button
                onClick={clearSelection}
                className="bg-purple-100 text-purple-600 px-4 py-2 rounded-2xl font-medium hover:bg-purple-200 transition-colors"
              >
                Clear ({selectedItems.size})
              </button>
            )}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-xl transition-colors ${
                viewMode === 'grid' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-600'
              }`}
            >
              <Grid3X3 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-xl transition-colors ${
                viewMode === 'list' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-600'
              }`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Price Drop Alert */}
      {wishlistItems.some(item => item.priceDropped) && (
        <div className="bg-gradient-to-r from-green-500 to-teal-500 mx-6 mt-6 rounded-2xl p-4 text-white">
          <div className="flex items-center gap-3">
            <Bell className="w-6 h-6" />
            <div>
              <p className="font-semibold">Price Drop Alert! 📉</p>
              <p className="text-sm opacity-90">{wishlistItems.filter(item => item.priceDropped).length} items have dropped in price</p>
            </div>
          </div>
        </div>
      )}

      {/* Results Info */}
      <div className="px-6 py-4">
        <p className="text-gray-600">
          Showing {filteredItems.length} of {wishlistItems.length} items
        </p>
      </div>

      {/* Wishlist Items */}
      <div className="px-6 pb-32">
        <div className={
          viewMode === 'grid' 
            ? 'grid grid-cols-2 gap-4' 
            : 'flex flex-col gap-4'
        }>
          {filteredItems.map((item) => (
            <WishlistCard 
              key={item.id} 
              item={item} 
              isListView={viewMode === 'list'} 
            />
          ))}
        </div>
      </div>

      {/* Bulk Actions */}
      {showBulkActions && (
        <div className="fixed bottom-20 left-6 right-6 bg-white rounded-2xl shadow-lg p-4 border border-gray-200">
          <div className="flex items-center justify-between">
            <span className="font-medium">{selectedItems.size} items selected</span>
            <div className="flex gap-2">
              <button
                onClick={bulkAddToCart}
                className="bg-purple-600 text-white px-4 py-2 rounded-xl font-medium hover:bg-purple-700 transition-colors"
              >
                Add to Cart
              </button>
              <button
                onClick={bulkRemove}
                className="bg-red-100 text-red-600 px-4 py-2 rounded-xl font-medium hover:bg-red-200 transition-colors"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Sort Modal */}
      {showFilters && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end">
          <div className="bg-white rounded-t-3xl w-full">
            <div className="sticky top-0 bg-white px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Sort & Filter</h2>
                <button
                  onClick={() => setShowFilters(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Sort Options */}
              <div>
                <h3 className="font-semibold mb-4">Sort by</h3>
                <div className="space-y-2">
                  {sortOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setSortBy(option.value)}
                      className={`w-full text-left p-3 rounded-2xl transition-colors ${
                        sortBy === option.value
                          ? 'bg-purple-100 text-purple-600 font-medium'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="font-semibold mb-4">Price Range</h3>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                    className="flex-1"
                  />
                  <span className="text-sm font-medium">${priceRange[0]} - ${priceRange[1]}</span>
                </div>
              </div>
            </div>

            <div className="sticky bottom-0 bg-white px-6 py-4 border-t border-gray-200">
              <button
                onClick={() => setShowFilters(false)}
                className="w-full bg-purple-600 text-white py-4 rounded-2xl font-semibold hover:bg-purple-700 transition-colors"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-2">
        <div className="flex justify-around items-center">
          <button className="flex flex-col items-center gap-1 py-2">
            <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
            <span className="text-xs text-gray-400">Home</span>
          </button>
          <button className="flex flex-col items-center gap-1 py-2">
            <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
            <span className="text-xs text-gray-400">Shop</span>
          </button>
          <button className="flex flex-col items-center gap-1 py-2">
            <ShoppingBag className="w-6 h-6 text-gray-400" />
            <span className="text-xs text-gray-400">Cart</span>
          </button>
          <button className="flex flex-col items-center gap-1 py-2">
            <div className="w-6 h-6 bg-purple-600 rounded-full"></div>
            <span className="text-xs font-medium text-purple-600">Wishlist</span>
          </button>
          <button className="flex flex-col items-center gap-1 py-2">
            <User className="w-6 h-6 text-gray-400" />
            <span className="text-xs text-gray-400">Profile</span>
          </button>
        </div>
      </div>

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
      `}</style>
    </div>
  );
};

export default WishlistPage;