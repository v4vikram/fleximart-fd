"use client"
import React, { useState, useEffect } from 'react';
import { ArrowLeft, Plus, Minus, Trash2, Heart, ShoppingBag, User, Tag, Truck, Shield, Star, ChevronRight, Gift } from 'lucide-react';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    { 
      id: 1, 
      name: 'Wireless AirPods Pro', 
      price: 249, 
      originalPrice: 299, 
      image: '🎧', 
      quantity: 1,
      color: 'White',
      size: 'Standard',
      rating: 4.8,
      inStock: true
    },
    { 
      id: 2, 
      name: 'Smart Watch Series 8', 
      price: 399, 
      originalPrice: 499, 
      image: '⌚', 
      quantity: 2,
      color: 'Space Gray',
      size: '44mm',
      rating: 4.9,
      inStock: true
    },
    { 
      id: 3, 
      name: 'Designer Running Shoes', 
      price: 179, 
      originalPrice: 229, 
      image: '👟', 
      quantity: 1,
      color: 'Black',
      size: 'US 10',
      rating: 4.7,
      inStock: false
    }
  ]);

  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState(null);
  const [showPromoInput, setShowPromoInput] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const promoCodes = {
    'SAVE10': { discount: 10, type: 'percentage', description: '10% off your order' },
    'FREE50': { discount: 50, type: 'fixed', description: '$50 off orders over $500' },
    'WELCOME': { discount: 15, type: 'percentage', description: '15% off for new customers' }
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) {
      removeItem(id);
      return;
    }
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const moveToWishlist = (id) => {
    // Simulate moving to wishlist
    removeItem(id);
    // Show success toast (simplified)
  };

  const applyPromoCode = () => {
    const code = promoCodes[promoCode.toUpperCase()];
    if (code) {
      const subtotal = calculateSubtotal();
      if (code.type === 'fixed' && subtotal < 500 && promoCode.toUpperCase() === 'FREE50') {
        alert('Minimum order of $500 required for this promo code');
        return;
      }
      setAppliedPromo({ code: promoCode.toUpperCase(), ...code });
      setPromoCode('');
      setShowPromoInput(false);
    } else {
      alert('Invalid promo code');
    }
  };

  const removePromoCode = () => {
    setAppliedPromo(null);
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };

  const calculateSavings = () => {
    return cartItems.reduce((sum, item) => {
      const savings = item.originalPrice ? (item.originalPrice - item.price) * item.quantity : 0;
      return sum + savings;
    }, 0);
  };

  const calculatePromoDiscount = () => {
    if (!appliedPromo) return 0;
    const subtotal = calculateSubtotal();
    if (appliedPromo.type === 'percentage') {
      return (subtotal * appliedPromo.discount) / 100;
    }
    return appliedPromo.discount;
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const promoDiscount = calculatePromoDiscount();
    const shipping = subtotal > 50 ? 0 : 9.99;
    const tax = (subtotal - promoDiscount) * 0.08; // 8% tax
    return subtotal - promoDiscount + shipping + tax;
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    // Simulate checkout process
    setTimeout(() => {
      setIsCheckingOut(false);
      alert('Redirecting to checkout...');
    }, 2000);
  };

  const subtotal = calculateSubtotal();
  const savings = calculateSavings();
  const promoDiscount = calculatePromoDiscount();
  const shipping = subtotal > 50 ? 0 : 9.99;
  const tax = (subtotal - promoDiscount) * 0.08;
  const total = calculateTotal();

  if (cartItems.length === 0) {
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
              <h1 className="text-xl font-bold">Shopping Cart</h1>
            </div>
          </div>
        </header>

        {/* Empty State */}
        <div className="flex-1 flex items-center justify-center px-6 py-12">
          <div className="text-center">
            <div className="text-8xl mb-6">🛒</div>
            <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Looks like you haven't added anything to your cart yet</p>
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
              <div className="w-6 h-6 bg-purple-600 rounded-full"></div>
              <span className="text-xs font-medium text-purple-600">Cart</span>
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
      <header className="bg-white px-6 py-4 shadow-sm sticky top-0 z-40">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <ArrowLeft className="w-6 h-6" />
            <div>
              <h1 className="text-xl font-bold">Shopping Cart</h1>
              <p className="text-sm text-gray-500">{cartItems.length} items</p>
            </div>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Heart className="w-6 h-6 text-gray-400" />
          </button>
        </div>
      </header>

      {/* Delivery Banner */}
      <div className="bg-gradient-to-r from-green-500 to-teal-500 mx-6 mt-6 rounded-2xl p-4 text-white">
        <div className="flex items-center gap-3">
          <Truck className="w-6 h-6" />
          <div>
            <p className="font-semibold">Free Delivery</p>
            <p className="text-sm opacity-90">Your order qualifies for free shipping!</p>
          </div>
        </div>
      </div>

      {/* Cart Items */}
      <div className="px-6 py-6 space-y-4">
        {cartItems.map((item) => (
          <div key={item.id} className="bg-white rounded-3xl p-4 shadow-sm">
            <div className="flex flex-col gap-4">
              {/* Product Image */}
              <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0">
                {item.image}
              </div>

              {/* Product Details */}
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-base line-clamp-2 mb-1">{item.name}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                        <span className="text-xs text-gray-600">{item.rating}</span>
                      </div>
                      {!item.inStock && (
                        <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full font-medium">
                          Out of Stock
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-gray-500 mb-2">
                      <span className="mr-3">Color: {item.color}</span>
                      <span>Size: {item.size}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-purple-600">${item.price}</span>
                      {item.originalPrice && (
                        <span className="text-sm text-gray-400 line-through">${item.originalPrice}</span>
                      )}
                    </div>
                  </div>
                  <button 
                    onClick={() => removeItem(item.id)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <Trash2 className="w-4 h-4 text-gray-400" />
                  </button>
                </div>

                {/* Quantity Controls & Actions */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 bg-gray-100 rounded-2xl p-1">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-gray-50 transition-colors"
                      disabled={!item.inStock}
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-12 text-center font-semibold">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-gray-50 transition-colors"
                      disabled={!item.inStock}
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <button 
                    onClick={() => moveToWishlist(item.id)}
                    className="flex items-center gap-1 text-purple-600 font-medium text-sm hover:text-purple-700 transition-colors"
                  >
                    <Heart className="w-4 h-4" />
                    Move to Wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Promo Code Section */}
      <div className="px-6 mb-6">
        <div className="bg-white rounded-3xl p-4 shadow-sm">
          {!showPromoInput && !appliedPromo && (
            <button
              onClick={() => setShowPromoInput(true)}
              className="w-full flex items-center justify-between p-4 hover:bg-gray-50 rounded-2xl transition-colors"
            >
              <div className="flex items-center gap-3">
                <Tag className="w-5 h-5 text-purple-600" />
                <span className="font-medium">Add promo code</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          )}

          {showPromoInput && (
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Tag className="w-5 h-5 text-purple-600" />
                <span className="font-medium">Enter promo code</span>
              </div>
              <div className="flex gap-3">
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="Enter code here..."
                  className="flex-1 bg-gray-100 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button
                  onClick={applyPromoCode}
                  className="bg-purple-600 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-purple-700 transition-colors"
                >
                  Apply
                </button>
              </div>
              <div className="text-xs text-gray-500">
                Try: SAVE10, FREE50, or WELCOME
              </div>
            </div>
          )}

          {appliedPromo && (
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-2xl">
              <div className="flex items-center gap-3">
                <Gift className="w-5 h-5 text-green-600" />
                <div>
                  <span className="font-medium text-green-700">{appliedPromo.code}</span>
                  <p className="text-sm text-green-600">{appliedPromo.description}</p>
                </div>
              </div>
              <button 
                onClick={removePromoCode}
                className="text-green-600 hover:text-green-700 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Order Summary */}
      <div className="px-6 mb-6">
        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <h3 className="font-bold text-lg mb-4">Order Summary</h3>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-semibold">${subtotal.toFixed(2)}</span>
            </div>
            
            {savings > 0 && (
              <div className="flex justify-between items-center text-green-600">
                <span>You saved</span>
                <span className="font-semibold">-${savings.toFixed(2)}</span>
              </div>
            )}
            
            {appliedPromo && (
              <div className="flex justify-between items-center text-green-600">
                <span>Promo ({appliedPromo.code})</span>
                <span className="font-semibold">-${promoDiscount.toFixed(2)}</span>
              </div>
            )}
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Shipping</span>
              <span className={`font-semibold ${shipping === 0 ? 'text-green-600' : ''}`}>
                {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Tax</span>
              <span className="font-semibold">${tax.toFixed(2)}</span>
            </div>
            
            <div className="border-t border-gray-200 pt-3">
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">Total</span>
                <span className="text-xl font-bold text-purple-600">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Security Badge */}
          <div className="flex items-center gap-2 mt-4 p-3 bg-gray-50 rounded-2xl">
            <Shield className="w-4 h-4 text-green-600" />
            <span className="text-sm text-gray-600">Secure checkout with SSL encryption</span>
          </div>
        </div>
      </div>

      {/* Checkout Button */}
      <div className="px-6 pb-24">
        <button
          onClick={handleCheckout}
          disabled={isCheckingOut || cartItems.some(item => !item.inStock)}
          className={`w-full py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
            isCheckingOut || cartItems.some(item => !item.inStock)
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg transform hover:scale-105'
          }`}
        >
          {isCheckingOut ? (
            <div className="flex items-center justify-center gap-3">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Processing...
            </div>
          ) : cartItems.some(item => !item.inStock) ? (
            'Remove out of stock items to continue'
          ) : (
            `Checkout • $${total.toFixed(2)}`
          )}
        </button>
        
        {shipping > 0 && (
          <p className="text-center text-sm text-gray-500 mt-3">
            Add ${(50 - subtotal).toFixed(2)} more for free shipping
          </p>
        )}
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
            <div className="relative">
              <div className="w-6 h-6 bg-purple-600 rounded-full"></div>
              <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-xs text-white font-medium">{cartItems.length}</span>
              </div>
            </div>
            <span className="text-xs font-medium text-purple-600">Cart</span>
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

export default CartPage;