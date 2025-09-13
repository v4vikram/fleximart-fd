"use client"
import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Heart, 
  Share2, 
  Star, 
  Plus, 
  Minus, 
  ShoppingBag, 
  Truck, 
  Shield, 
  RotateCcw, 
  Award,
  ChevronDown,
  ChevronUp,
  ChevronRight,
  MessageCircle,
  ThumbsUp,
  ThumbsDown,
  Flag,
  Filter,
  CheckCircle,
  AlertCircle,
  Camera,
  Play,
  Zap,
  Tag,
  Users,
  Clock,
  X
} from 'lucide-react';

const ProductDetailsPage = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState('Space Gray');
  const [selectedSize, setSelectedSize] = useState('256GB');
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [selectedTab, setSelectedTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState({});
  const [showReviews, setShowReviews] = useState(false);
  const [reviewSort, setReviewSort] = useState('newest');
  const [showImageViewer, setShowImageViewer] = useState(false);
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const product = {
    id: 1,
    name: 'iPhone 15 Pro Max',
    brand: 'Apple',
    price: 1199,
    originalPrice: 1299,
    discount: 8,
    rating: 4.8,
    reviewCount: 12847,
    inStock: true,
    fastDelivery: true,
    freeShipping: true,
    badge: 'Best Seller',
    images: [
      '📱', '🔋', '📸', '🎵', '💻'
    ],
    colors: [
      { name: 'Space Gray', color: '#2D2D2D', available: true },
      { name: 'Silver', color: '#E8E8E8', available: true },
      { name: 'Gold', color: '#F4E4BC', available: true },
      { name: 'Deep Purple', color: '#5E4B8C', available: false }
    ],
    sizes: [
      { name: '128GB', price: 1099, available: true },
      { name: '256GB', price: 1199, available: true },
      { name: '512GB', price: 1399, available: true },
      { name: '1TB', price: 1599, available: false }
    ],
    features: [
      '6.7-inch Super Retina XDR display',
      'A17 Pro chip with 6-core GPU',
      'Pro camera system with 5x Telephoto',
      'Up to 29 hours video playback',
      'Titanium design with Ceramic Shield'
    ],
    specifications: {
      'Display': '6.7-inch Super Retina XDR',
      'Chip': 'A17 Pro',
      'Camera': '48MP Main + 12MP Ultra Wide + 12MP Telephoto',
      'Battery': 'Up to 29 hours video playback',
      'Storage': '128GB, 256GB, 512GB, 1TB',
      'Material': 'Titanium with Ceramic Shield front',
      'Water Resistance': 'IP68',
      'Connectivity': '5G, Wi-Fi 6E, Bluetooth 5.3'
    },
    shipping: {
      standard: { days: '5-7 business days', price: 0 },
      express: { days: '2-3 business days', price: 15 },
      overnight: { days: 'Next business day', price: 35 }
    },
    policies: {
      returns: '30-day return policy',
      warranty: '1-year limited warranty',
      support: '24/7 customer support'
    }
  };

  const reviews = [
    {
      id: 1,
      user: 'Sarah M.',
      avatar: '👩',
      rating: 5,
      date: '2 days ago',
      title: 'Amazing phone with incredible camera!',
      content: 'The camera quality is outstanding, especially the 5x zoom. Battery lasts all day with heavy usage. The titanium build feels premium and lightweight.',
      helpful: 24,
      images: ['📸', '🌅'],
      verified: true,
      size: '256GB',
      color: 'Space Gray'
    },
    {
      id: 2,
      user: 'Mike R.',
      avatar: '👨',
      rating: 4,
      date: '1 week ago',
      title: 'Great upgrade from iPhone 13',
      content: 'Noticeable performance improvements and the new Action Button is really useful. Only wish the price was a bit lower.',
      helpful: 18,
      images: [],
      verified: true,
      size: '512GB',
      color: 'Gold'
    },
    {
      id: 3,
      user: 'Lisa K.',
      avatar: '👩‍💼',
      rating: 5,
      date: '2 weeks ago',
      title: 'Perfect for professional photography',
      content: 'As a photographer, I love the Pro camera features. The new telephoto lens and improved low-light performance are game changers.',
      helpful: 31,
      images: ['📷', '🌙', '🏙️'],
      verified: true,
      size: '1TB',
      color: 'Silver'
    }
  ];

  const relatedProducts = [
    {
      id: 2,
      name: 'iPhone 15 Pro',
      price: 999,
      rating: 4.7,
      image: '📱',
      badge: 'Popular'
    },
    {
      id: 3,
      name: 'AirPods Pro Max',
      price: 549,
      rating: 4.8,
      image: '🎧',
      badge: null
    },
    {
      id: 4,
      name: 'MagSafe Charger',
      price: 39,
      rating: 4.6,
      image: '🔌',
      badge: 'New'
    }
  ];

  const tabs = [
    { id: 'overview', name: 'Overview', icon: null },
    { id: 'specs', name: 'Specs', icon: null },
    { id: 'reviews', name: `Reviews (${product.reviewCount})`, icon: null },
    { id: 'shipping', name: 'Shipping', icon: null }
  ];

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const addToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const shareProduct = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: `Check out this ${product.name}!`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Product link copied to clipboard!');
    }
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
      <header className="bg-white px-6 py-4 shadow-sm sticky top-0 z-40">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <ArrowLeft className="w-6 h-6" />
            <span className="font-medium text-gray-600">Back</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={shareProduct}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <Share2 className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={() => setIsWishlisted(!isWishlisted)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <Heart 
                className={`w-5 h-5 transition-colors ${
                  isWishlisted ? 'text-red-500 fill-current' : 'text-gray-600'
                }`} 
              />
            </button>
          </div>
        </div>
      </header>

      {/* Product Images */}
      <div className="bg-white">
        <div className="relative">
          <div 
            onClick={() => setShowImageViewer(true)}
            className="h-80 bg-gray-100 flex items-center justify-center text-8xl cursor-pointer"
          >
            {product.images[selectedImageIndex]}
          </div>
          
          {/* Badges */}
          <div className="absolute top-4 left-4">
            {product.badge && (
              <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                {product.badge}
              </span>
            )}
            {product.discount > 0 && (
              <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full font-medium ml-2">
                -{product.discount}% OFF
              </span>
            )}
          </div>

          {/* Image Navigation */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <div className="flex gap-2">
              {product.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    selectedImageIndex === index ? 'bg-purple-600 w-6' : 'bg-white bg-opacity-50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Image Thumbnails */}
        <div className="px-6 py-4">
          <div className="flex gap-3 overflow-x-auto">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImageIndex(index)}
                className={`flex-shrink-0 w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center text-2xl border-2 transition-all duration-300 ${
                  selectedImageIndex === index 
                    ? 'border-purple-600 bg-purple-50' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                {image}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="bg-white px-6 py-6 mb-4">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <p className="text-purple-600 font-medium text-sm mb-1">{product.brand}</p>
            <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="font-medium">{product.rating}</span>
              </div>
              <button 
                onClick={() => setSelectedTab('reviews')}
                className="text-purple-600 text-sm font-medium hover:underline"
              >
                ({product.reviewCount.toLocaleString()} reviews)
              </button>
            </div>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl font-bold text-purple-600">${product.price}</span>
          {product.originalPrice && (
            <span className="text-lg text-gray-400 line-through">${product.originalPrice}</span>
          )}
          {product.discount > 0 && (
            <span className="bg-green-100 text-green-600 text-sm px-2 py-1 rounded-full font-medium">
              Save ${product.originalPrice - product.price}
            </span>
          )}
        </div>

        {/* Quick Benefits */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {product.fastDelivery && (
            <div className="flex items-center gap-2 text-sm">
              <Zap className="w-4 h-4 text-orange-500" />
              <span className="text-gray-600">Fast Delivery</span>
            </div>
          )}
          {product.freeShipping && (
            <div className="flex items-center gap-2 text-sm">
              <Truck className="w-4 h-4 text-green-500" />
              <span className="text-gray-600">Free Shipping</span>
            </div>
          )}
          <div className="flex items-center gap-2 text-sm">
            <Shield className="w-4 h-4 text-blue-500" />
            <span className="text-gray-600">1Y Warranty</span>
          </div>
        </div>

        {/* Stock Status */}
        <div className="flex items-center gap-2 mb-6">
          {product.inStock ? (
            <>
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-green-600 font-medium">In Stock</span>
              <span className="text-gray-500">• Ready to ship</span>
            </>
          ) : (
            <>
              <AlertCircle className="w-4 h-4 text-red-500" />
              <span className="text-red-600 font-medium">Out of Stock</span>
            </>
          )}
        </div>
      </div>

      {/* Color Selection */}
      <div className="bg-white px-6 py-4 mb-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold">Color: {selectedColor}</h3>
          <span className="text-sm text-gray-500">{product.colors.filter(c => c.available).length} available</span>
        </div>
        <div className="flex gap-3">
          {product.colors.map((color) => (
            <button
              key={color.name}
              onClick={() => color.available && setSelectedColor(color.name)}
              disabled={!color.available}
              className={`relative w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                selectedColor === color.name 
                  ? 'border-purple-600 scale-110' 
                  : 'border-gray-300 hover:border-gray-400'
              } ${!color.available ? 'opacity-50 cursor-not-allowed' : ''}`}
              style={{ backgroundColor: color.color }}
            >
              {selectedColor === color.name && (
                <div className="absolute inset-0 rounded-full border-2 border-white">
                  <div className="w-full h-full rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full shadow-sm"></div>
                  </div>
                </div>
              )}
              {!color.available && (
                <div className="absolute inset-0 rounded-full bg-black bg-opacity-20 flex items-center justify-center">
                  <div className="w-0.5 h-8 bg-white transform rotate-45"></div>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Size Selection */}
      <div className="bg-white px-6 py-4 mb-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold">Storage: {selectedSize}</h3>
          <button 
            onClick={() => setShowSizeGuide(true)}
            className="text-purple-600 text-sm font-medium hover:underline"
          >
            Size Guide
          </button>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {product.sizes.map((size) => (
            <button
              key={size.name}
              onClick={() => size.available && setSelectedSize(size.name)}
              disabled={!size.available}
              className={`p-3 rounded-2xl border-2 transition-all duration-300 ${
                selectedSize === size.name 
                  ? 'border-purple-600 bg-purple-50' 
                  : 'border-gray-200 hover:border-gray-300'
              } ${!size.available ? 'opacity-50 cursor-not-allowed bg-gray-50' : ''}`}
            >
              <div className="font-medium">{size.name}</div>
              <div className={`text-sm ${selectedSize === size.name ? 'text-purple-600' : 'text-gray-600'}`}>
                ${size.price}
              </div>
              {!size.available && (
                <div className="text-xs text-red-500 mt-1">Out of Stock</div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity & Actions */}
      <div className="bg-white px-6 py-4 mb-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <span className="font-medium text-gray-700">Qty:</span>
            <div className="flex items-center bg-gray-100 rounded-2xl">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-3 hover:bg-gray-200 rounded-2xl transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="px-4 font-medium">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-3 hover:bg-gray-200 rounded-2xl transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          <button
            onClick={addToCart}
            disabled={!product.inStock}
            className={`flex-1 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
              product.inStock
                ? addedToCart
                  ? 'bg-green-500 text-white'
                  : 'bg-purple-600 text-white hover:bg-purple-700'
                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
            }`}
          >
            <ShoppingBag className="w-4 h-4" />
            {addedToCart ? 'Added to Cart!' : product.inStock ? `Add to Cart • $${(product.sizes.find(s => s.name === selectedSize)?.price || product.price) * quantity}` : 'Out of Stock'}
          </button>
        </div>
      </div>

      {/* Product Tabs */}
      <div className="bg-white">
        {/* Tab Headers */}
        <div className="flex overflow-x-auto px-6 border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`px-4 py-4 font-medium text-sm whitespace-nowrap border-b-2 transition-all duration-300 ${
                selectedTab === tab.id 
                  ? 'border-purple-600 text-purple-600' 
                  : 'border-transparent text-gray-600 hover:text-gray-800'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {selectedTab === 'overview' && (
            <div className="space-y-6">
              {/* Key Features */}
              <div>
                <h3 className="font-bold mb-4">Key Features</h3>
                <div className="space-y-3">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What's in the Box */}
              <div>
                <button
                  onClick={() => toggleSection('box')}
                  className="w-full flex items-center justify-between py-3"
                >
                  <h3 className="font-bold">What's in the Box</h3>
                  {expandedSections.box ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
                {expandedSections.box && (
                  <div className="space-y-2 pb-4">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                      <span>iPhone 15 Pro Max</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                      <span>USB-C to USB-C Cable</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                      <span>Documentation</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {selectedTab === 'specs' && (
            <div className="space-y-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between py-3 border-b border-gray-100 last:border-b-0">
                  <span className="font-medium text-gray-700">{key}</span>
                  <span className="text-gray-600 text-right flex-1 ml-4">{value}</span>
                </div>
              ))}
            </div>
          )}

          {selectedTab === 'reviews' && (
            <div>
              {/* Review Summary */}
              <div className="bg-gray-50 rounded-2xl p-4 mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">{product.rating}</div>
                    <div className="flex items-center gap-1 mb-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star 
                          key={star} 
                          className={`w-4 h-4 ${
                            star <= Math.floor(product.rating) 
                              ? 'text-yellow-400 fill-current' 
                              : 'text-gray-300'
                          }`} 
                        />
                      ))}
                    </div>
                    <div className="text-xs text-gray-600">{product.reviewCount.toLocaleString()} reviews</div>
                  </div>
                  <div className="flex-1">
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <div key={rating} className="flex items-center gap-2 mb-1">
                        <span className="text-xs text-gray-600 w-6">{rating}★</span>
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-yellow-400 h-2 rounded-full"
                            style={{ 
                              width: `${rating === 5 ? 70 : rating === 4 ? 20 : rating === 3 ? 5 : rating === 2 ? 3 : 2}%` 
                            }}
                          ></div>
                        </div>
                        <span className="text-xs text-gray-600 w-8">
                          {rating === 5 ? '70%' : rating === 4 ? '20%' : rating === 3 ? '5%' : rating === 2 ? '3%' : '2%'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sort Reviews */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold">Customer Reviews</h3>
                <select
                  value={reviewSort}
                  onChange={(e) => setReviewSort(e.target.value)}
                  className="px-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="highest">Highest Rated</option>
                  <option value="lowest">Lowest Rated</option>
                  <option value="helpful">Most Helpful</option>
                </select>
              </div>

              {/* Reviews List */}
              <div className="space-y-6">
                {reviews.map((review) => (
                  <div key={review.id} className="border-b border-gray-100 pb-6 last:border-b-0">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="text-2xl">{review.avatar}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium">{review.user}</span>
                          {review.verified && (
                            <div className="flex items-center gap-1 bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">
                              <CheckCircle className="w-3 h-3" />
                              Verified
                            </div>
                          )}
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star 
                                key={star} 
                                className={`w-3 h-3 ${
                                  star <= review.rating 
                                    ? 'text-yellow-400 fill-current' 
                                    : 'text-gray-300'
                                }`} 
                              />
                            ))}
                          </div>
                          <span className="text-xs text-gray-500">{review.date}</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-1">
                          {review.color} • {review.size}
                        </p>
                      </div>
                    </div>
                    
                    <h4 className="font-medium mb-2">{review.title}</h4>
                    <p className="text-gray-700 mb-3">{review.content}</p>
                    
                    {review.images.length > 0 && (
                      <div className="flex gap-2 mb-3">
                        {review.images.map((image, index) => (
                          <div key={index} className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center text-2xl">
                            {image}
                          </div>
                        ))}
                      </div>
                    )}
                    
                    <div className="flex items-center gap-4">
                      <button className="flex items-center gap-1 text-gray-600 hover:text-purple-600 transition-colors">
                        <ThumbsUp className="w-4 h-4" />
                        <span className="text-sm">Helpful ({review.helpful})</span>
                      </button>
                      <button className="flex items-center gap-1 text-gray-600 hover:text-red-600 transition-colors">
                        <Flag className="w-4 h-4" />
                        <span className="text-sm">Report</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-6 py-4 border border-purple-200 text-purple-600 rounded-2xl font-medium hover:bg-purple-50 transition-colors">
                Load More Reviews
              </button>
            </div>
          )}

          {selectedTab === 'shipping' && (
            <div className="space-y-6">
              <div>
                <h3 className="font-bold mb-4">Shipping Options</h3>
                <div className="space-y-3">
                  {Object.entries(product.shipping).map(([key, option]) => (
                    <div key={key} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <div className="flex items-center gap-3">
                        <Truck className="w-5 h-5 text-purple-600" />
                        <div>
                          <p className="font-medium capitalize">{key} Shipping</p>
                          <p className="text-sm text-gray-600">{option.days}</p>
                        </div>
                      </div>
                      <span className="font-bold">
                        {option.price === 0 ? 'Free' : `${option.price}`}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-bold mb-4">Policies</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <RotateCcw className="w-5 h-5 text-green-500" />
                    <span>{product.policies.returns}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-blue-500" />
                    <span>{product.policies.warranty}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-5 h-5 text-purple-500" />
                    <span>{product.policies.support}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Related Products */}
      <div className="bg-white mt-4 p-6">
        <h3 className="font-bold mb-4">You might also like</h3>
        <div className="flex gap-4 overflow-x-auto">
          {relatedProducts.map((item) => (
            <div key={item.id} className="flex-shrink-0 w-40">
              <div className="bg-gray-100 rounded-2xl h-32 flex items-center justify-center text-4xl mb-3 relative">
                {item.image}
                {item.badge && (
                  <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                    {item.badge}
                  </div>
                )}
              </div>
              <p className="font-medium text-sm mb-1 line-clamp-2">{item.name}</p>
              <div className="flex items-center gap-1 mb-1">
                <Star className="w-3 h-3 text-yellow-400 fill-current" />
                <span className="text-xs text-gray-600">{item.rating}</span>
              </div>
              <p className="font-bold text-purple-600">${item.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-50">
        <div className="flex gap-3">
          <button
            onClick={() => setIsWishlisted(!isWishlisted)}
            className={`px-6 py-4 rounded-2xl border-2 font-medium transition-all duration-300 ${
              isWishlisted 
                ? 'border-red-500 bg-red-50 text-red-600' 
                : 'border-gray-200 text-gray-600 hover:border-purple-200 hover:text-purple-600'
            }`}
          >
            <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
          </button>
          <button
            onClick={addToCart}
            disabled={!product.inStock}
            className={`flex-1 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
              product.inStock
                ? addedToCart
                  ? 'bg-green-500 text-white'
                  : 'bg-purple-600 text-white hover:bg-purple-700'
                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
            }`}
          >
            <ShoppingBag className="w-5 h-5" />
            {addedToCart ? 'Added!' : product.inStock ? `Add to Cart • ${(product.sizes.find(s => s.name === selectedSize)?.price || product.price) * quantity}` : 'Out of Stock'}
          </button>
        </div>
      </div>

      {/* Image Viewer Modal */}
      {showImageViewer && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          <button
            onClick={() => setShowImageViewer(false)}
            className="absolute top-6 right-6 text-white p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors z-60"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="text-9xl">{product.images[selectedImageIndex]}</div>
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
            <div className="flex gap-2">
              {product.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    selectedImageIndex === index ? 'bg-white w-6' : 'bg-white bg-opacity-50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Size Guide Modal */}
      {showSizeGuide && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end">
          <div className="bg-white rounded-t-3xl w-full max-h-[80vh] overflow-y-auto">
            <div className="sticky top-0 bg-white px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Storage Guide</h2>
                <button
                  onClick={() => setShowSizeGuide(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-2xl p-4">
                  <h3 className="font-bold mb-2">📱 128GB</h3>
                  <p className="text-sm text-gray-600">Perfect for basic use. Store up to 28,000 photos or 8 hours of 4K video.</p>
                </div>
                <div className="bg-purple-50 rounded-2xl p-4">
                  <h3 className="font-bold mb-2">📱 256GB (Recommended)</h3>
                  <p className="text-sm text-gray-600">Great for most users. Store up to 65,000 photos or 18 hours of 4K video.</p>
                </div>
                <div className="bg-green-50 rounded-2xl p-4">
                  <h3 className="font-bold mb-2">📱 512GB</h3>
                  <p className="text-sm text-gray-600">For power users. Store up to 131,000 photos or 37 hours of 4K video.</p>
                </div>
                <div className="bg-orange-50 rounded-2xl p-4">
                  <h3 className="font-bold mb-2">📱 1TB</h3>
                  <p className="text-sm text-gray-600">Maximum storage. Store up to 262,000 photos or 74 hours of 4K video.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Padding for Fixed Button */}
      <div className="h-24"></div>

      <style jsx>{`
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

export default ProductDetailsPage;