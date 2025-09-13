"use client"

import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Package,
  Truck,
  Clock,
  Check,
  ChevronRight,
  MapPin,
  Star,
  AlertCircle,
  CheckCircle2,
  RefreshCw,
  Phone,
  MessageCircle,
  Download,
  RotateCcw,
  X,
  Calendar,
  DollarSign,
  CreditCard,
  ShoppingBag,
  Mail,
  Copy
} from 'lucide-react';

const OrderTrackingApp = () => {
  const [currentView, setCurrentView] = useState('orders'); // orders, orderDetails, tracking
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showReturnModal, setShowReturnModal] = useState(false);
  const [copiedTracking, setCopiedTracking] = useState(false);

  // Enhanced orders data with more details
  const orders = [
    {
      id: 'ORD-2024-001234',
      date: '2024-03-10',
      status: 'Delivered',
      total: 299.99,
      items: [
        {
          id: 1,
          name: 'Premium Wireless Headphones',
          brand: 'AudioTech',
          price: 199.99,
          quantity: 1,
          image: '🎧',
          color: 'Black',
          size: null
        },
        {
          id: 2,
          name: 'Bluetooth Speaker',
          brand: 'SoundMax',
          price: 79.99,
          quantity: 1,
          image: '🔊',
          color: 'Blue',
          size: null
        },
        {
          id: 3,
          name: 'USB-C Cable',
          brand: 'TechCorp',
          price: 19.99,
          quantity: 1,
          image: '🔌',
          color: 'White',
          size: '2m'
        }
      ],
      trackingNumber: 'TRK123456789',
      shippingAddress: {
        name: 'John Doe',
        address: '123 Main Street, Apt 4B',
        city: 'New York, NY 10001',
        phone: '+1 (555) 123-4567'
      },
      paymentMethod: 'Visa ending in 4242',
      deliveryDate: '2024-03-12',
      canReturn: true,
      canReview: true,
      trackingSteps: [
        {
          status: 'Order Placed',
          date: '2024-03-10 09:15 AM',
          description: 'Your order has been confirmed',
          completed: true,
          icon: ShoppingBag
        },
        {
          status: 'Processing',
          date: '2024-03-10 02:30 PM',
          description: 'Order is being prepared for shipment',
          completed: true,
          icon: Package
        },
        {
          status: 'Shipped',
          date: '2024-03-11 08:45 AM',
          description: 'Package is on its way to you',
          completed: true,
          icon: Truck
        },
        {
          status: 'Out for Delivery',
          date: '2024-03-12 07:20 AM',
          description: 'Package is out for delivery',
          completed: true,
          icon: MapPin
        },
        {
          status: 'Delivered',
          date: '2024-03-12 02:45 PM',
          description: 'Package delivered successfully',
          completed: true,
          icon: CheckCircle2
        }
      ]
    },
    {
      id: 'ORD-2024-001235',
      date: '2024-03-08',
      status: 'In Transit',
      total: 159.50,
      items: [
        {
          id: 4,
          name: 'Smart Fitness Watch',
          brand: 'FitPro',
          price: 139.50,
          quantity: 1,
          image: '⌚',
          color: 'Rose Gold',
          size: '42mm'
        },
        {
          id: 5,
          name: 'Screen Protector',
          brand: 'ProtectMax',
          price: 19.99,
          quantity: 1,
          image: '🛡️',
          color: 'Clear',
          size: null
        }
      ],
      trackingNumber: 'TRK987654321',
      shippingAddress: {
        name: 'John Doe',
        address: '123 Main Street, Apt 4B',
        city: 'New York, NY 10001',
        phone: '+1 (555) 123-4567'
      },
      paymentMethod: 'Mastercard ending in 8888',
      estimatedDelivery: '2024-03-14',
      canReturn: false,
      canReview: false,
      trackingSteps: [
        {
          status: 'Order Placed',
          date: '2024-03-08 11:20 AM',
          description: 'Your order has been confirmed',
          completed: true,
          icon: ShoppingBag
        },
        {
          status: 'Processing',
          date: '2024-03-08 04:15 PM',
          description: 'Order is being prepared for shipment',
          completed: true,
          icon: Package
        },
        {
          status: 'Shipped',
          date: '2024-03-09 09:30 AM',
          description: 'Package is on its way to you',
          completed: true,
          icon: Truck
        },
        {
          status: 'In Transit',
          date: '2024-03-11 01:20 PM',
          description: 'Package is in transit to delivery facility',
          completed: true,
          icon: MapPin
        },
        {
          status: 'Out for Delivery',
          date: 'Expected by end of day',
          description: 'Package will be out for delivery soon',
          completed: false,
          icon: Truck
        }
      ]
    },
    {
      id: 'ORD-2024-001236',
      date: '2024-03-05',
      status: 'Processing',
      total: 89.99,
      items: [
        {
          id: 6,
          name: 'Wireless Mouse',
          brand: 'TechPro',
          price: 49.99,
          quantity: 1,
          image: '🖱️',
          color: 'Silver',
          size: null
        },
        {
          id: 7,
          name: 'Mouse Pad',
          brand: 'DeskMate',
          price: 39.99,
          quantity: 1,
          image: '📐',
          color: 'Black',
          size: 'Large'
        }
      ],
      trackingNumber: null,
      shippingAddress: {
        name: 'John Doe',
        address: '456 Business Ave, Suite 200',
        city: 'New York, NY 10002',
        phone: '+1 (555) 987-6543'
      },
      paymentMethod: 'Visa ending in 4242',
      estimatedDelivery: '2024-03-12',
      canReturn: false,
      canReview: false,
      trackingSteps: [
        {
          status: 'Order Placed',
          date: '2024-03-05 03:45 PM',
          description: 'Your order has been confirmed',
          completed: true,
          icon: ShoppingBag
        },
        {
          status: 'Processing',
          date: 'In progress...',
          description: 'Order is being prepared for shipment',
          completed: false,
          icon: Package
        },
        {
          status: 'Shipped',
          date: 'Pending',
          description: 'Package will be shipped soon',
          completed: false,
          icon: Truck
        }
      ]
    }
  ];

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'delivered': return 'text-green-600 bg-green-100';
      case 'in transit': return 'text-blue-600 bg-blue-100';
      case 'processing': return 'text-yellow-600 bg-yellow-100';
      case 'cancelled': return 'text-red-600 bg-red-100';
      case 'returned': return 'text-purple-600 bg-purple-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const copyTrackingNumber = (trackingNumber) => {
    navigator.clipboard.writeText(trackingNumber);
    setCopiedTracking(true);
    setTimeout(() => setCopiedTracking(false), 2000);
  };

  // Orders List View
  if (currentView === 'orders') {
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
            <button>
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h1 className="text-xl font-bold">Order History</h1>
            <button>
              <RefreshCw className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </header>

        {/* Filter Tabs */}
        <div className="bg-white px-6 py-3 border-b border-gray-100">
          <div className="flex gap-4">
            <button className="px-4 py-2 bg-purple-600 text-white rounded-full text-sm font-medium">
              All Orders
            </button>
            <button className="px-4 py-2 text-gray-600 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
              Active
            </button>
            <button className="px-4 py-2 text-gray-600 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
              Delivered
            </button>
            <button className="px-4 py-2 text-gray-600 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
              Cancelled
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="space-y-4">
            {orders.map((order) => (
              <div key={order.id} className="bg-white rounded-2xl p-4 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="font-bold text-purple-600">{order.id}</p>
                    <p className="text-sm text-gray-600">{new Date(order.date).toLocaleDateString('en-US', { 
                      weekday: 'short',
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </div>
                
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Package className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{order.items.length} items</span>
                    <span className="text-gray-400">•</span>
                    <span className="font-bold text-lg">${order.total}</span>
                  </div>
                </div>

                {/* Item Preview */}
                <div className="flex gap-2 mb-4 overflow-x-auto">
                  {order.items.slice(0, 3).map((item, index) => (
                    <div key={item.id} className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-lg">
                      {item.image}
                    </div>
                  ))}
                  {order.items.length > 3 && (
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center text-xs text-gray-600 font-medium">
                      +{order.items.length - 3}
                    </div>
                  )}
                </div>

                {order.trackingNumber && (
                  <div className="flex items-center gap-2 mb-4 p-3 bg-blue-50 rounded-xl">
                    <Truck className="w-4 h-4 text-blue-500" />
                    <span className="text-sm text-blue-700 font-medium">Track: {order.trackingNumber}</span>
                    <button 
                      onClick={() => copyTrackingNumber(order.trackingNumber)}
                      className="ml-auto"
                    >
                      <Copy className="w-4 h-4 text-blue-500" />
                    </button>
                  </div>
                )}
                
                <div className="flex gap-3">
                  <button 
                    onClick={() => {
                      setSelectedOrder(order);
                      setCurrentView('tracking');
                    }}
                    className="flex-1 bg-purple-600 text-white py-3 rounded-xl font-medium hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <Package className="w-4 h-4" />
                    Track Order
                  </button>
                  <button 
                    onClick={() => {
                      setSelectedOrder(order);
                      setCurrentView('orderDetails');
                    }}
                    className="flex-1 border border-gray-200 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors"
                  >
                    View Details
                  </button>
                </div>

                {/* Quick Actions for delivered orders */}
                {order.status === 'Delivered' && (
                  <div className="flex gap-2 mt-3 pt-3 border-t border-gray-100">
                    {order.canReturn && (
                      <button className="flex-1 text-sm text-purple-600 py-2 border border-purple-200 rounded-lg hover:bg-purple-50 transition-colors">
                        Return Items
                      </button>
                    )}
                    {order.canReview && (
                      <button className="flex-1 text-sm text-yellow-600 py-2 border border-yellow-200 rounded-lg hover:bg-yellow-50 transition-colors flex items-center justify-center gap-1">
                        <Star className="w-3 h-3" />
                        Review
                      </button>
                    )}
                    <button className="flex-1 text-sm text-gray-600 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                      Buy Again
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-8">
            <button className="text-purple-600 font-medium hover:text-purple-700 transition-colors">
              Load More Orders
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Order Details View
  if (currentView === 'orderDetails' && selectedOrder) {
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
            <button onClick={() => setCurrentView('orders')}>
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h1 className="text-xl font-bold">Order Details</h1>
            <button>
              <Download className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </header>

        <div className="p-6 space-y-6">
          {/* Order Status */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-xl font-bold text-purple-600">{selectedOrder.id}</h2>
                <p className="text-gray-600">Placed on {new Date(selectedOrder.date).toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</p>
              </div>
              <span className={`px-4 py-2 rounded-full text-sm font-medium ${getStatusColor(selectedOrder.status)}`}>
                {selectedOrder.status}
              </span>
            </div>

            {selectedOrder.status === 'Delivered' ? (
              <div className="flex items-center gap-3 p-3 bg-green-50 rounded-xl">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <div>
                  <p className="font-medium text-green-800">Delivered on {selectedOrder.deliveryDate}</p>
                  <p className="text-sm text-green-600">Package was left at your doorstep</p>
                </div>
              </div>
            ) : selectedOrder.estimatedDelivery && (
              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl">
                <Clock className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="font-medium text-blue-800">Estimated Delivery</p>
                  <p className="text-sm text-blue-600">{selectedOrder.estimatedDelivery}</p>
                </div>
              </div>
            )}

            <div className="flex gap-3 mt-4">
              <button 
                onClick={() => setCurrentView('tracking')}
                className="flex-1 bg-purple-600 text-white py-3 rounded-xl font-medium hover:bg-purple-700 transition-colors"
              >
                Track Package
              </button>
              <button className="px-6 py-3 border border-gray-200 rounded-xl font-medium hover:bg-gray-50 transition-colors">
                Contact Support
              </button>
            </div>
          </div>

          {/* Items */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-lg mb-4">Items ({selectedOrder.items.length})</h3>
            <div className="space-y-4">
              {selectedOrder.items.map((item) => (
                <div key={item.id} className="flex gap-4 p-3 border border-gray-100 rounded-xl">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
                    {item.image}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">{item.name}</h4>
                    <p className="text-sm text-gray-600">{item.brand}</p>
                    <div className="flex gap-4 text-xs text-gray-500 mt-1">
                      {item.color && <span>Color: {item.color}</span>}
                      {item.size && <span>Size: {item.size}</span>}
                      <span>Qty: {item.quantity}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">${item.price}</p>
                    {selectedOrder.status === 'Delivered' && selectedOrder.canReturn && (
                      <button className="text-xs text-purple-600 mt-1 hover:underline">
                        Return
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Shipping Address */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-lg mb-4">Shipping Address</h3>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-gray-400 mt-1" />
              <div>
                <p className="font-medium">{selectedOrder.shippingAddress.name}</p>
                <p className="text-gray-600">{selectedOrder.shippingAddress.address}</p>
                <p className="text-gray-600">{selectedOrder.shippingAddress.city}</p>
                <p className="text-gray-600">{selectedOrder.shippingAddress.phone}</p>
              </div>
            </div>
          </div>

          {/* Payment & Summary */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-lg mb-4">Payment & Summary</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">${(selectedOrder.total * 0.9).toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">${(selectedOrder.total * 0.08).toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Tax</span>
                <span className="font-medium">${(selectedOrder.total * 0.02).toFixed(2)}</span>
              </div>
              <div className="border-t border-gray-200 pt-3">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-lg">Total</span>
                  <span className="font-bold text-lg">${selectedOrder.total}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-4 pt-3 border-t border-gray-100">
                <CreditCard className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-600">Paid with {selectedOrder.paymentMethod}</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          {selectedOrder.status === 'Delivered' && (
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-4">Order Actions</h3>
              <div className="grid grid-cols-2 gap-3">
                {selectedOrder.canReturn && (
                  <button 
                    onClick={() => setShowReturnModal(true)}
                    className="flex items-center justify-center gap-2 p-4 border border-purple-200 rounded-xl text-purple-600 hover:bg-purple-50 transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Return Items
                  </button>
                )}
                {selectedOrder.canReview && (
                  <button className="flex items-center justify-center gap-2 p-4 border border-yellow-200 rounded-xl text-yellow-600 hover:bg-yellow-50 transition-colors">
                    <Star className="w-4 h-4" />
                    Write Review
                  </button>
                )}
                <button className="flex items-center justify-center gap-2 p-4 border border-gray-200 rounded-xl text-gray-600 hover:bg-gray-50 transition-colors">
                  <ShoppingBag className="w-4 h-4" />
                  Buy Again
                </button>
                <button className="flex items-center justify-center gap-2 p-4 border border-blue-200 rounded-xl text-blue-600 hover:bg-blue-50 transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  Support
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Return Modal */}
        {showReturnModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end">
            <div className="bg-white rounded-t-3xl w-full max-h-[80vh] overflow-y-auto">
              <div className="sticky top-0 bg-white px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold">Return Items</h2>
                  <button onClick={() => setShowReturnModal(false)}>
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-6">Select items you want to return. Returns are free and easy.</p>
                
                <div className="space-y-4">
                  {selectedOrder.items.map((item) => (
                    <label key={item.id} className="flex items-center gap-4 p-3 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50">
                      <input type="checkbox" className="w-5 h-5 text-purple-600" />
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-lg">
                        {item.image}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-600">${item.price}</p>
                      </div>
                    </label>
                  ))}
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Reason for return
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500">
                    <option>Defective item</option>
                    <option>Wrong item received</option>
                    <option>Item not as described</option>
                    <option>No longer needed</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="sticky bottom-0 bg-white px-6 py-4 border-t border-gray-200">
                <button
                  onClick={() => setShowReturnModal(false)}
                  className="w-full bg-purple-600 text-white py-4 rounded-2xl font-semibold hover:bg-purple-700 transition-colors"
                >
                  Process Return
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Tracking View
  if (currentView === 'tracking' && selectedOrder) {
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
            <button onClick={() => setCurrentView('orders')}>
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h1 className="text-xl font-bold">Track Order</h1>
            <button>
              <RefreshCw className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </header>

        <div className="p-6 space-y-6">
          {/* Current Status */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                {selectedOrder.status === 'Delivered' ? (
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                ) : selectedOrder.status === 'In Transit' ? (
                  <Truck className="w-10 h-10 text-blue-600" />
                ) : (
                  <Package className="w-10 h-10 text-yellow-600" />
                )}
              </div>

              <h2 className="text-xl font-bold mb-2">{selectedOrder.status}</h2>
              <p className="text-gray-600 mb-4">Order {selectedOrder.id}</p>
              
              {selectedOrder.trackingNumber && (
                <div className="flex items-center justify-center gap-2 bg-gray-50 rounded-xl p-3">
                  <span className="text-sm text-gray-600">Tracking Number:</span>
                  <span className="font-mono font-bold">{selectedOrder.trackingNumber}</span>
                  <button 
                    onClick={() => copyTrackingNumber(selectedOrder.trackingNumber)}
                    className="ml-2 p-1 hover:bg-gray-200 rounded"
                  >
                    {copiedTracking ? (
                      <Check className="w-4 h-4 text-green-600" />
                    ) : (
                      <Copy className="w-4 h-4 text-gray-400" />
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Tracking Timeline */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-lg mb-6">Tracking Details</h3>
            <div className="space-y-6">
              {selectedOrder.trackingSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                      step.completed ? 'bg-purple-100' : 'bg-gray-100'
                    }`}>
                      <IconComponent className={`w-5 h-5 ${
                        step.completed ? 'text-purple-600' : 'text-gray-400'
                      }`} />
                    </div>
                    <div className="flex-1 pb-6">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className={`font-medium ${
                          step.completed ? 'text-gray-900' : 'text-gray-500'
                        }`}>{step.status}</h4>
                        <span className={`text-sm ${
                          step.completed ? 'text-gray-600' : 'text-gray-400'
                        }`}>{step.date}</span>
                      </div>
                      <p className={`text-sm ${
                        step.completed ? 'text-gray-600' : 'text-gray-400'
                      }`}>{step.description}</p>
                      {index < selectedOrder.trackingSteps.length - 1 && (
                        <div className={`w-px h-6 mt-4 ml-5 ${
                          selectedOrder.trackingSteps[index + 1].completed ? 'bg-purple-200' : 'bg-gray-200'
                        }`}></div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Delivery Info */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-lg mb-4">Delivery Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="font-medium">Delivery Address</p>
                  <p className="text-sm text-gray-600">{selectedOrder.shippingAddress.address}</p>
                  <p className="text-sm text-gray-600">{selectedOrder.shippingAddress.city}</p>
                </div>
              </div>
              
              {selectedOrder.estimatedDelivery && (
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="font-medium">Estimated Delivery</p>
                    <p className="text-sm text-gray-600">{selectedOrder.estimatedDelivery}</p>
                  </div>
                </div>
              )}

              {selectedOrder.deliveryDate && (
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <div>
                    <p className="font-medium text-green-700">Delivered</p>
                    <p className="text-sm text-green-600">{selectedOrder.deliveryDate}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Contact & Actions */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-lg mb-4">Need Help?</h3>
            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 p-4 border border-blue-200 rounded-xl text-blue-600 hover:bg-blue-50 transition-colors">
                <Phone className="w-4 h-4" />
                Call Support
              </button>
              <button className="flex items-center justify-center gap-2 p-4 border border-green-200 rounded-xl text-green-600 hover:bg-green-50 transition-colors">
                <MessageCircle className="w-4 h-4" />
                Live Chat
              </button>
              <button 
                onClick={() => setCurrentView('orderDetails')}
                className="flex items-center justify-center gap-2 p-4 border border-purple-200 rounded-xl text-purple-600 hover:bg-purple-50 transition-colors"
              >
                <Package className="w-4 h-4" />
                Order Details
              </button>
              <button className="flex items-center justify-center gap-2 p-4 border border-gray-200 rounded-xl text-gray-600 hover:bg-gray-50 transition-colors">
                <Mail className="w-4 h-4" />
                Email Updates
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default OrderTrackingApp;