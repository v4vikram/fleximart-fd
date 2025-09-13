"use client";
import React, { useState, useEffect } from "react";
import {
  Search,
  ShoppingBag,
  Heart,
  User,
  Star,
  Filter,
  Grid3X3,
  List,
  ArrowLeft,
  SlidersHorizontal,
  X,
  BrushCleaning,
} from "lucide-react";
import { categories, products, sortOptions, brands } from "@/data/product";

const ShopPage = () => {
  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'list'
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState("popular");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedBrands, setSelectedBrands] = useState(new Set());
  const [selectedRating, setSelectedRating] = useState(0);
  const [likedItems, setLikedItems] = useState(new Set([1, 5, 8]));
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filtersFlag, setFilterFlag] = useState(false);

  useEffect(() => {
    let filtered = products;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by category
    if (activeCategory !== "all") {
      setFilterFlag(true);
      filtered = filtered.filter(
        (product) =>
          product.category.toLowerCase() === activeCategory.toLowerCase()
      );
    }

    // Filter by price range
    filtered = filtered.filter((product) => {
      return product.price >= priceRange[0] && product.price <= priceRange[1];
    });

    if (priceRange[0] > 0 && priceRange[0] <= 1000) {
      setFilterFlag(true);
    }

    // Filter by brands
    if (selectedBrands.size > 0) {
      filtered = filtered.filter((product) =>
        selectedBrands.has(product.brand)
      );
      setFilterFlag(true);
    }

    // Filter by rating
    if (selectedRating > 0) {
      filtered = filtered.filter((product) => product.rating >= selectedRating);
      setFilterFlag(true);
    }

    // Sort products
    switch (sortBy) {
      case "price_low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price_high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        filtered.sort((a, b) => b.isNew - a.isNew);
        break;
      default:
        filtered.sort((a, b) => b.reviews - a.reviews);
    }

    if (sortBy != "popular") {
      setFilterFlag(true);
    }

    setFilteredProducts(filtered);
  }, [
    searchQuery,
    activeCategory,
    priceRange,
    selectedBrands,
    selectedRating,
    sortBy,
  ]);

  const toggleLike = (id) => {
    const newLiked = new Set(likedItems);
    if (newLiked.has(id)) {
      newLiked.delete(id);
    } else {
      newLiked.add(id);
    }
    setLikedItems(newLiked);
  };

  const toggleBrand = (brand) => {
    const newBrands = new Set(selectedBrands);
    if (newBrands.has(brand)) {
      newBrands.delete(brand);
    } else {
      newBrands.add(brand);
    }
    setSelectedBrands(newBrands);
  };

  const clearFilters = () => {
    setActiveCategory("all");
    setPriceRange([0, 1000]);
    setSelectedBrands(new Set());
    setSelectedRating(0);
    setSearchQuery("");
    setSortBy("popular");
    setFilterFlag(false);
  };

  const ProductCard = ({ product, isListView = false }) => (
    <div
      className={`bg-white rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 ${
        isListView ? "flex. gap-4 p-4" : "p-4"
      }`}
    >
      <div
        className={`relative ${
          isListView ? "w-full h-24 flex-shrink-0" : "mb-3"
        }`}
      >
        <div
          className={`bg-gray-100 rounded-2xl flex items-center justify-center text-4xl ${
            isListView ? "w-24 h-24" : "w-full h-32"
          }`}
        >
          {product.image}
        </div>
        <button
          onClick={() => toggleLike(product.id)}
          className={`absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
            likedItems.has(product.id)
              ? "bg-red-500 text-white transform scale-110"
              : "bg-white text-gray-400 hover:text-red-500"
          }`}
        >
          <Heart
            className={`w-4 h-4 ${
              likedItems.has(product.id) ? "fill-current" : ""
            }`}
          />
        </button>
        {product.discount > 0 && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
            -{product.discount}%
          </div>
        )}
        {product.isNew && (
          <div className="absolute bottom-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
            New
          </div>
        )}
      </div>
      <div
        className={`flex-1 ${
          isListView ? "flex flex-col justify-between" : ""
        }`}
      >
        <div>
          <p className="text-xs text-purple-600 font-medium mb-1">
            {product.brand}
          </p>
          <h4
            className={`font-medium mb-2 line-clamp-2 ${
              isListView ? "text-base" : "text-sm"
            }`}
          >
            {product.name}
          </h4>
          <div className="flex items-center gap-1 mb-2">
            <Star className="w-3 h-3 text-yellow-400 fill-current" />
            <span className="text-xs text-gray-600">{product.rating}</span>
            <span className="text-xs text-gray-400">({product.reviews})</span>
          </div>
        </div>
        <div
          className={`flex items-center justify-between ${
            isListView ? "mt-2" : ""
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="font-bold text-purple-600">${product.price}</span>
            {product.originalPrice && (
              <span className="text-xs text-gray-400 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
        </div>
        {isListView && (
          <button className="bg-purple-600 text-white px-4 py-2 rounded-2xl text-sm font-medium hover:bg-purple-700 transition-colors">
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );

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
      <header className="bg-white px-3 py-4 shadow-sm sticky top-0 z-50">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <ArrowLeft className="w-6 h-6" />
            <h1 className="text-xl font-bold">Shop</h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <ShoppingBag className="w-6 h-6" />
              <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-xs text-white font-medium">3</span>
              </div>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative mb-4">
          {/* Search icon */}
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />

          {/* Input field */}
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-gray-100 rounded-2xl pl-12 pr-10 py-4 text-base focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all duration-300"
          />

          {/* Clear (X) button, only show if searchQuery is not empty */}
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Controls */}
        <div className="flex flex-col gap-2 justify-between mt-3">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowFilters(true)}
              className={`flex items-center gap-2  px-4 py-2 rounded-2xl hover:bg-gray-200 transition-colors ${
                filtersFlag ? "bg-purple-600 text-white" : "bg-gray-100"
              }`}
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span className="font-medium">Filters</span>
            </button>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-gray-100 px-4 py-2 rounded-2xl font-medium focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-xl transition-colors ${
                viewMode === "grid"
                  ? "bg-purple-600 text-white"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              <Grid3X3 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-xl transition-colors ${
                viewMode === "list"
                  ? "bg-purple-600 text-white"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              <List className="w-4 h-4" />
            </button>

            <button
              onClick={clearFilters}
              className="bg-gray-100 text-gray-600 p-3 rounded-2xl font-medium hover:bg-purple-700 transition-colors flex gap-1 items-center"
            >
              Clear All <BrushCleaning className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Results Info */}
      <div className="px-6 py-4">
        <p className="text-gray-600">
          Showing {filteredProducts.length} of {products.length} products
        </p>
      </div>

      {/* Products Grid/List */}
      <div className="px-3 pb-24">
        <div
          className={
            viewMode === "grid"
              ? "grid grid-cols-2 gap-4"
              : "flex flex-col gap-4"
          }
        >
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isListView={viewMode === "list"}
            />
          ))}
        </div>
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">No products found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your filters or search terms
            </p>
            <button
              onClick={clearFilters}
              className="bg-purple-600 text-white px-6 py-3 rounded-2xl font-medium hover:bg-purple-700 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>

      {/* Filter Modal */}
      {showFilters && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end w-[300px]">
          <div className="bg-white rounded-t-3xl w-full max-h-[80vh] overflow-y-scroll">
            <div className="sticky top-0 bg-white px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Filters</h2>
                <button
                  onClick={() => setShowFilters(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Category Tabs */}
            {/* <div className="bg-white p-2 shadow-sm overflow-hidden">
              <h3>Category</h3>
              <div className="flex gap-3 overflow-x-auto scrollbar-hide">
                {categories.map((category, index) => (
                  <button
                    key={category.name}
                    onClick={() =>
                      setActiveCategory(category.name.toLocaleLowerCase())
                    }
                    className={`flex-shrink-0 px-4 py-3 rounded-2xl transition-all duration-300 ${
                      activeCategory === category.name.toLocaleLowerCase()
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg transform scale-105"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {typeof category.icon === "string" ? (
                        <span className="text-lg">{category.icon}</span>
                      ) : (
                        <category.icon className="w-4 h-4" />
                      )}
                      <span className="font-medium whitespace-nowrap">
                        {category.name}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div> */}

            <div className="p-6 space-y-8">
              {/* Price Range */}
              <div>
                <h3 className="font-semibold mb-4">Price Range</h3>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    value={priceRange[0]}
                    onChange={(e) => {
                      console.log(
                        "e.target.value",
                        e.target.value,
                        priceRange[1]
                      );
                      return setPriceRange([
                        parseInt(e.target.value),
                        priceRange[1],
                      ]);
                    }}
                    className="flex-1"
                  />
                  <span className="text-sm font-medium">
                    ${priceRange[0]} - ${priceRange[1]}
                  </span>
                </div>
              </div>

              {/* Brands */}
              <div>
                <h3 className="font-semibold mb-4">Brands</h3>
                <div className="flex flex-wrap gap-2">
                  {brands.map((brand) => (
                    <button
                      key={brand}
                      onClick={() => toggleBrand(brand)}
                      className={`px-4 py-2 rounded-2xl transition-all duration-300 ${
                        selectedBrands.has(brand)
                          ? "bg-purple-600 text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {brand}
                    </button>
                  ))}
                </div>
              </div>

              {/* Rating */}
              <div>
                <h3 className="font-semibold mb-4">Minimum Rating</h3>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                      key={rating}
                      onClick={() =>
                        setSelectedRating(
                          rating === selectedRating ? 0 : rating
                        )
                      }
                      className={`flex items-center gap-1 px-3 py-2 rounded-2xl transition-colors ${
                        selectedRating >= rating
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      <Star
                        className={`w-4 h-4 ${
                          selectedRating >= rating ? "fill-current" : ""
                        }`}
                      />
                      <span className="text-sm">{rating}+</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="sticky bottom-0 bg-white px-6 py-4 border-t border-gray-200">
              <div className="flex gap-3">
                <button
                  onClick={clearFilters}
                  className="flex-1 bg-gray-100 text-gray-600 py-4 rounded-2xl font-semibold hover:bg-gray-200 transition-colors"
                >
                  Clear All
                </button>
                <button
                  onClick={() => setShowFilters(false)}
                  className="flex-1 bg-purple-600 text-white py-4 rounded-2xl font-semibold hover:bg-purple-700 transition-colors"
                >
                  Apply Filters
                </button>
              </div>
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
            <div className="w-6 h-6 bg-purple-600 rounded-full"></div>
            <span className="text-xs font-medium text-purple-600">Shop</span>
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

export default ShopPage;
