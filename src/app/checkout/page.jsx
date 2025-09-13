"use client"
import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  CreditCard, 
  MapPin, 
  Truck, 
  Shield, 
  Plus, 
  Edit3, 
  Check, 
  ChevronRight,
  Gift,
  Tag,
  Lock,
  AlertCircle,
  Smartphone,
  CheckCircle2,
  Clock,
  Star,
  X
} from 'lucide-react';

const CheckoutPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedAddress, setSelectedAddress] = useState(1);
  const [selectedPayment, setSelectedPayment] = useState('card');
  const [selectedShipping, setSelectedShipping] = useState('standard');
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [showAddAddress, setShowAddAddress] = useState(false);
  const [showAddPayment, setShowAddPayment] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [newAddress, setNewAddress] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    phone: ''
  });
  const [newCard, setNewCard] = useState({
    number: '',
    name: '',
    expiry: '',
    cvv: ''
  });

  const cartItems = [
    {
      id: 1,
      name: 'Wireless AirPods Pro Max',
      price: 549,
      quantity: 1,
      image: '🎧',
      brand: 'Apple',
      color: 'Silver',
      size: 'One Size'
    },
    {
      id: 2,
      name: 'Designer Leather Jacket',
      price: 299,
      quantity: 1,
      image: '🧥',
      brand: 'LuxFashion',
      color: 'Black',
      size: 'M'
    },
    {
      id: 3,
      name: 'Gaming Mechanical Keyboard',
      price: 159,
      quantity: 2,
      image: '⌨️',
      brand: 'GameTech',
      color: 'RGB',
      size: 'Full Size'
    }
  ];

  const addresses = [
    {
      id: 1,
      name: 'Home',
      fullName: 'John Doe',
      address: '123 Main Street, Apt 4B',
      city: 'New York',
      state: 'NY',
      zip: '10001',
      phone: '+1 (555) 123-4567',
      isDefault: true
    },
    {
      id: 2,
      name: 'Office',
      fullName: 'John Doe',
      address: '456 Business Ave, Suite 200',
      city: 'New York',
      state: 'NY',
      zip: '10002',
      phone: '+1 (555) 987-6543',
      isDefault: false
    }
  ];

  const paymentMethods = [
    {
      id: 'card',
      name: 'Credit/Debit Card',
      icon: '💳',
      last4: '4242',
      type: 'Visa',
      expiry: '12/25'
    },
    {
      id: 'paypal',
      name: 'PayPal',
      icon: '🅿️',
      email: 'john@example.com'
    },
    {
      id: 'apple',
      name: 'Apple Pay',
      icon: '🍎',
      device: 'iPhone 13'
    },
    {
      id: 'google',
      name: 'Google Pay',
      icon: '🅖',
      device: 'Saved cards'
    }
  ];

  const shippingOptions = [
    {
      id: 'standard',
      name: 'Standard Shipping',
      description: '5-7 business days',
      price: 0,
      icon: '📦'
    },
    {
      id: 'express',
      name: 'Express Shipping',
      description: '2-3 business days',
      price: 15,
      icon: '⚡'
    },
    {
      id: 'overnight',
      name: 'Overnight Delivery',
      description: 'Next business day',
      price: 35,
      icon: '🚀'
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shippingCost = shippingOptions.find(option => option.id === selectedShipping)?.price || 0;
  const tax = Math.round((subtotal + shippingCost) * 0.08);
  const discount = promoApplied ? 50 : 0;
  const total = subtotal + shippingCost + tax - discount;

  const steps = [
    { id: 1, name: 'Address', icon: MapPin },
    { id: 2, name: 'Shipping', icon: Truck },
    { id: 3, name: 'Payment', icon: CreditCard },
    { id: 4, name: 'Review', icon: Check }
  ];

  const handlePromoCode = () => {
    if (promoCode.toLowerCase() === 'save50') {
      setPromoApplied(true);
    }
  };

  const placeOrder = async () => {
    setProcessing(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 3000));
    setProcessing(false);
    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50">
        {/* Status Bar */}
        <div className="bg-white px-6 py-2 flex justify-between items-center text-sm font-medium">
          <span>9:41</span>
          <div className="flex gap-1">
            <div className="w-4 h-2 bg-black rounded-sm"></div>
            <div className="w-6 h-2 bg-black rounded-sm"></div>
            <div className="w-6 h-2 bg-gray-300 rounded-sm"></div>
          </div>
        </div>

        {/* Order Success */}
        <div className="flex-1 flex items-center justify-center px-6 py-12">
          <div className="text-center">
            <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-3xl font-bold mb-4">Order Placed!</h1>
            <p className="text-gray-600 mb-2">Order #ORD-2024-001234</p>
            <p className="text-gray-600 mb-8">Thank you for your purchase. You'll receive a confirmation email shortly.</p>
            
            <div className="bg-white rounded-2xl p-6 mb-8 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <Clock className="w-5 h-5 text-blue-500" />
                <div className="text-left">
                  <p className="font-medium">Estimated Delivery</p>
                  <p className="text-sm text-gray-600">March 15-17, 2024</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Truck className="w-5 h-5 text-purple-500" />
                <div className="text-left">
                  <p className="font-medium">Track Your Order</p>
                  <p className="text-sm text-gray-600">We'll send updates via email & SMS</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <button className="w-full bg-purple-600 text-white py-4 rounded-2xl font-semibold hover:bg-purple-700 transition-colors">
                Track Order
              </button>
              <button className="w-full bg-white text-purple-600 py-4 rounded-2xl font-semibold border border-purple-200 hover:bg-purple-50 transition-colors">
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (processing) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-16 h-16 border-4 border-purple-200 border-t-purple-600 rounded-full mx-auto mb-6"></div>
          <h2 className="text-xl font-bold mb-2">Processing Your Order</h2>
          <p className="text-gray-600">Please don't close this page...</p>
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
            <button onClick={() => currentStep > 1 ? setCurrentStep(currentStep - 1) : null}>
              <ArrowLeft className="w-6 h-6" />
            </button>
            <div>
              <h1 className="text-xl font-bold">Checkout</h1>
              <p className="text-sm text-gray-500">Step {currentStep} of 4</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-green-500" />
            <span className="text-sm text-green-600 font-medium">Secure</span>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-between mt-4">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  currentStep >= step.id 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  {currentStep > step.id ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <step.icon className="w-5 h-5" />
                  )}
                </div>
                <span className={`text-xs mt-1 font-medium ${
                  currentStep >= step.id ? 'text-purple-600' : 'text-gray-500'
                }`}>
                  {step.name}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div className={`flex-1 h-0.5 mx-2 transition-all duration-300 ${
                  currentStep > step.id ? 'bg-purple-600' : 'bg-gray-200'
                }`} />
              )}
            </React.Fragment>
          ))}
        </div>
      </header>

      <div className="pb-32">
        {/* Step 1: Delivery Address */}
        {currentStep === 1 && (
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Delivery Address</h2>
              <button 
                onClick={() => setShowAddAddress(true)}
                className="flex items-center gap-2 text-purple-600 font-medium"
              >
                <Plus className="w-4 h-4" />
                Add New
              </button>
            </div>

            <div className="space-y-4">
              {addresses.map((address) => (
                <div
                  key={address.id}
                  onClick={() => setSelectedAddress(address.id)}
                  className={`bg-white rounded-2xl p-4 border-2 transition-all duration-300 cursor-pointer ${
                    selectedAddress === address.id 
                      ? 'border-purple-600 bg-purple-50' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-bold">{address.name}</span>
                        {address.isDefault && (
                          <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full font-medium">
                            Default
                          </span>
                        )}
                      </div>
                      <p className="font-medium text-gray-800">{address.fullName}</p>
                      <p className="text-gray-600">{address.address}</p>
                      <p className="text-gray-600">{address.city}, {address.state} {address.zip}</p>
                      <p className="text-gray-600">{address.phone}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      {selectedAddress === address.id && (
                        <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                      )}
                      <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                        <Edit3 className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Shipping Options */}
        {currentStep === 2 && (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-6">Choose Shipping</h2>

            <div className="space-y-4">
              {shippingOptions.map((option) => (
                <div
                  key={option.id}
                  onClick={() => setSelectedShipping(option.id)}
                  className={`bg-white rounded-2xl p-4 border-2 transition-all duration-300 cursor-pointer ${
                    selectedShipping === option.id 
                      ? 'border-purple-600 bg-purple-50' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="text-2xl">{option.icon}</div>
                      <div>
                        <p className="font-bold">{option.name}</p>
                        <p className="text-gray-600">{option.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-lg">
                        {option.price === 0 ? 'Free' : `$${option.price}`}
                      </span>
                      {selectedShipping === option.id && (
                        <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 rounded-2xl p-4 mt-6">
              <div className="flex items-center gap-3">
                <Truck className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="font-medium text-blue-800">Estimated Delivery</p>
                  <p className="text-blue-600 text-sm">
                    {selectedShipping === 'standard' && 'March 18-22, 2024'}
                    {selectedShipping === 'express' && 'March 15-17, 2024'}
                    {selectedShipping === 'overnight' && 'March 14, 2024'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Payment Method */}
        {currentStep === 3 && (
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Payment Method</h2>
              <button 
                onClick={() => setShowAddPayment(true)}
                className="flex items-center gap-2 text-purple-600 font-medium"
              >
                <Plus className="w-4 h-4" />
                Add New
              </button>
            </div>

            <div className="space-y-4 mb-6">
              {paymentMethods.map((method) => (
                <div
                  key={method.id}
                  onClick={() => setSelectedPayment(method.id)}
                  className={`bg-white rounded-2xl p-4 border-2 transition-all duration-300 cursor-pointer ${
                    selectedPayment === method.id 
                      ? 'border-purple-600 bg-purple-50' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="text-2xl">{method.icon}</div>
                      <div>
                        <p className="font-bold">{method.name}</p>
                        <p className="text-gray-600 text-sm">
                          {method.last4 && `•••• ${method.last4}`}
                          {method.email}
                          {method.device}
                        </p>
                      </div>
                    </div>
                    {selectedPayment === method.id && (
                      <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Promo Code */}
            <div className="bg-white rounded-2xl p-4">
              <div className="flex items-center gap-3 mb-3">
                <Tag className="w-5 h-5 text-purple-600" />
                <span className="font-medium">Have a promo code?</span>
              </div>
              <div className="flex gap-3">
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="Enter code"
                  className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button
                  onClick={handlePromoCode}
                  disabled={promoApplied}
                  className={`px-6 py-3 rounded-xl font-medium transition-colors ${
                    promoApplied 
                      ? 'bg-green-100 text-green-600 cursor-not-allowed'
                      : 'bg-purple-600 text-white hover:bg-purple-700'
                  }`}
                >
                  {promoApplied ? 'Applied' : 'Apply'}
                </button>
              </div>
              {promoApplied && (
                <p className="text-green-600 text-sm mt-2 flex items-center gap-1">
                  <Check className="w-4 h-4" />
                  Promo code applied! You saved $50
                </p>
              )}
            </div>
          </div>
        )}

        {/* Step 4: Review Order */}
        {currentStep === 4 && (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-6">Review Your Order</h2>

            {/* Order Items */}
            <div className="bg-white rounded-2xl p-4 mb-6">
              <h3 className="font-bold mb-4">Items ({cartItems.length})</h3>
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center text-2xl">
                      {item.image}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-600">{item.brand} • {item.color}</p>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-sm text-gray-500">Qty: {item.quantity}</span>
                        <span className="font-bold">${item.price * item.quantity}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery Info */}
            <div className="bg-white rounded-2xl p-4 mb-6">
              <h3 className="font-bold mb-4">Delivery Information</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  <div className="text-sm">
                    <p className="font-medium">
                      {addresses.find(addr => addr.id === selectedAddress)?.name}
                    </p>
                    <p className="text-gray-600">
                      {addresses.find(addr => addr.id === selectedAddress)?.address}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Truck className="w-4 h-4 text-gray-500" />
                  <div className="text-sm">
                    <p className="font-medium">
                      {shippingOptions.find(opt => opt.id === selectedShipping)?.name}
                    </p>
                    <p className="text-gray-600">
                      {shippingOptions.find(opt => opt.id === selectedShipping)?.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Info */}
            <div className="bg-white rounded-2xl p-4 mb-6">
              <h3 className="font-bold mb-4">Payment Method</h3>
              <div className="flex items-center gap-3">
                <div className="text-lg">
                  {paymentMethods.find(method => method.id === selectedPayment)?.icon}
                </div>
                <div className="text-sm">
                  <p className="font-medium">
                    {paymentMethods.find(method => method.id === selectedPayment)?.name}
                  </p>
                  <p className="text-gray-600">
                    {paymentMethods.find(method => method.id === selectedPayment)?.last4 && 
                      `•••• ${paymentMethods.find(method => method.id === selectedPayment)?.last4}`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Order Summary - Always visible */}
        <div className="bg-white mx-6 rounded-2xl p-4 shadow-sm">
          <h3 className="font-bold mb-4">Order Summary</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span>${subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Shipping</span>
              <span>{shippingCost === 0 ? 'Free' : `$${shippingCost}`}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Tax</span>
              <span>${tax}</span>
            </div>
            {promoApplied && (
              <div className="flex justify-between text-green-600">
                <span>Promo Discount</span>
                <span>-$50</span>
              </div>
            )}
            <div className="border-t border-gray-200 pt-3">
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold">Total</span>
                <span className="text-xl font-bold text-purple-600">${total}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-6">
        <div className="flex gap-3">
          {currentStep > 1 && (
            <button
              onClick={() => setCurrentStep(currentStep - 1)}
              className="flex-1 py-4 border border-gray-200 rounded-2xl font-semibold text-gray-600 hover:bg-gray-50 transition-colors"
            >
              Back
            </button>
          )}
          <button
            onClick={() => {
              if (currentStep < 4) {
                setCurrentStep(currentStep + 1);
              } else {
                placeOrder();
              }
            }}
            className="flex-1 bg-purple-600 text-white py-4 rounded-2xl font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
          >
            {currentStep === 4 ? (
              <>
                <Lock className="w-4 h-4" />
                Place Order • ${total}
              </>
            ) : (
              <>
                Continue
                <ChevronRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
        
        {currentStep === 4 && (
          <div className="flex items-center justify-center gap-2 mt-3 text-sm text-gray-500">
            <Shield className="w-4 h-4" />
            <span>Your payment information is secure and encrypted</span>
          </div>
        )}
      </div>

      {/* Add Address Modal */}
      {showAddAddress && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end">
          <div className="bg-white rounded-t-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Add New Address</h2>
                <button
                  onClick={() => setShowAddAddress(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="p-6 space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                value={newAddress.name}
                onChange={(e) => setNewAddress({...newAddress, name: e.target.value})}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="text"
                placeholder="Address"
                value={newAddress.address}
                onChange={(e) => setNewAddress({...newAddress, address: e.target.value})}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="City"
                  value={newAddress.city}
                  onChange={(e) => setNewAddress({...newAddress, city: e.target.value})}
                  className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <input
                  type="text"
                  placeholder="State"
                  value={newAddress.state}
                  onChange={(e) => setNewAddress({...newAddress, state: e.target.value})}
                  className="w-20 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="ZIP Code"
                  value={newAddress.zip}
                  onChange={(e) => setNewAddress({...newAddress, zip: e.target.value})}
                  className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  value={newAddress.phone}
                  onChange={(e) => setNewAddress({...newAddress, phone: e.target.value})}
                  className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>

            <div className="sticky bottom-0 bg-white px-6 py-4 border-t border-gray-200">
              <button
                onClick={() => setShowAddAddress(false)}
                className="w-full bg-purple-600 text-white py-4 rounded-2xl font-semibold hover:bg-purple-700 transition-colors"
              >
                Save Address
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Payment Modal */}
      {showAddPayment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end">
          <div className="bg-white rounded-t-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Add Payment Method</h2>
                <button
                  onClick={() => setShowAddPayment(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="p-6 space-y-4">
              <input
                type="text"
                placeholder="Card Number"
                value={newCard.number}
                onChange={(e) => setNewCard({...newCard, number: e.target.value})}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="text"
                placeholder="Cardholder Name"
                value={newCard.name}
                onChange={(e) => setNewCard({...newCard, name: e.target.value})}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="MM/YY"
                  value={newCard.expiry}
                  onChange={(e) => setNewCard({...newCard, expiry: e.target.value})}
                  className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <input
                  type="text"
                  placeholder="CVV"
                  value={newCard.cvv}
                  onChange={(e) => setNewCard({...newCard, cvv: e.target.value})}
                  className="w-24 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>

            <div className="sticky bottom-0 bg-white px-6 py-4 border-t border-gray-200">
              <button
                onClick={() => setShowAddPayment(false)}
                className="w-full bg-purple-600 text-white py-4 rounded-2xl font-semibold hover:bg-purple-700 transition-colors"
              >
                Save Payment Method
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;