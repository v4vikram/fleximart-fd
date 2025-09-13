"use client"

import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  User, 
  Settings, 
  CreditCard, 
  MapPin, 
  Heart, 
  ShoppingBag, 
  Bell, 
  Shield, 
  HelpCircle, 
  LogOut,
  Edit3,
  Camera,
  Mail,
  Phone,
  Calendar,
  Star,
  Package,
  Gift,
  Truck,
  Clock,
  Check,
  ChevronRight,
  Eye,
  EyeOff,
  X,
  Plus,
  Trash2,
  AlertCircle,
  CheckCircle2
} from 'lucide-react';

const ProfileApp = () => {
  const [currentView, setCurrentView] = useState('main'); // main, profile, settings, addresses, payments, orders, wishlist, notifications
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [showAddAddress, setShowAddAddress] = useState(false);
  const [showAddPayment, setShowAddPayment] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false
  });

  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    birthday: '1990-05-15',
    avatar: null,
    memberSince: '2020-01-15'
  });

  const [editData, setEditData] = useState({ ...profileData });
  
  const [passwordData, setPasswordData] = useState({
    current: '',
    new: '',
    confirm: ''
  });

  const [newAddress, setNewAddress] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    isDefault: false
  });

  const [newCard, setNewCard] = useState({
    number: '',
    name: '',
    expiry: '',
    cvv: ''
  });

  const [notifications, setNotifications] = useState({
    orderUpdates: true,
    promotions: false,
    newsletter: true,
    recommendations: true
  });

  // Sample data
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
      id: 1,
      name: 'Visa ending in 4242',
      type: 'Visa',
      last4: '4242',
      expiry: '12/25',
      isDefault: true
    },
    {
      id: 2,
      name: 'Mastercard ending in 8888',
      type: 'Mastercard',
      last4: '8888',
      expiry: '09/26',
      isDefault: false
    }
  ];

  const orders = [
    {
      id: 'ORD-2024-001234',
      date: '2024-03-10',
      status: 'Delivered',
      total: 299.99,
      items: 3,
      trackingNumber: 'TRK123456789'
    },
    {
      id: 'ORD-2024-001235',
      date: '2024-03-08',
      status: 'In Transit',
      total: 159.50,
      items: 2,
      trackingNumber: 'TRK987654321'
    },
    {
      id: 'ORD-2024-001236',
      date: '2024-03-05',
      status: 'Processing',
      total: 89.99,
      items: 1,
      trackingNumber: null
    }
  ];

  const wishlistItems = [
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      price: 299,
      originalPrice: 399,
      brand: 'AudioTech',
      image: '🎧',
      inStock: true,
      rating: 4.8
    },
    {
      id: 2,
      name: 'Smart Fitness Watch',
      price: 249,
      originalPrice: null,
      brand: 'FitPro',
      image: '⌚',
      inStock: false,
      rating: 4.6
    },
    {
      id: 3,
      name: 'Bluetooth Speaker',
      price: 79,
      originalPrice: 99,
      brand: 'SoundMax',
      image: '🔊',
      inStock: true,
      rating: 4.4
    }
  ];

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'delivered': return 'text-green-600 bg-green-100';
      case 'in transit': return 'text-blue-600 bg-blue-100';
      case 'processing': return 'text-yellow-600 bg-yellow-100';
      case 'cancelled': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  // Main Account Page
  if (currentView === 'main') {
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
        <header className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-8 text-white">
          <div className="flex items-center justify-between mb-6">
            <button>
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h1 className="text-xl font-bold">My Account</h1>
            <button onClick={() => setCurrentView('settings')}>
              <Settings className="w-6 h-6" />
            </button>
          </div>

          {/* Profile Section */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                {profileData.avatar ? (
                  <img src={profileData.avatar} alt="Profile" className="w-20 h-20 rounded-full object-cover" />
                ) : (
                  <User className="w-10 h-10 text-white" />
                )}
              </div>
              <button 
                onClick={() => setShowEditProfile(true)}
                className="absolute -bottom-1 -right-1 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center shadow-lg"
              >
                <Camera className="w-4 h-4 text-white" />
              </button>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold">{profileData.name}</h2>
              <p className="text-purple-100">{profileData.email}</p>
              <p className="text-purple-200 text-sm">Member since {new Date(profileData.memberSince).getFullYear()}</p>
            </div>
          </div>
        </header>

        {/* Quick Stats */}
        <div className="px-6 -mt-4 mb-6">
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <ShoppingBag className="w-6 h-6 text-purple-600" />
                </div>
                <p className="text-2xl font-bold text-purple-600">24</p>
                <p className="text-xs text-gray-600">Orders</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Heart className="w-6 h-6 text-pink-600" />
                </div>
                <p className="text-2xl font-bold text-pink-600">12</p>
                <p className="text-xs text-gray-600">Wishlist</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Gift className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-2xl font-bold text-blue-600">350</p>
                <p className="text-xs text-gray-600">Points</p>
              </div>
            </div>
          </div>
        </div>

        {/* Menu Options */}
        <div className="px-6 space-y-4">
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
            <button 
              onClick={() => setCurrentView('profile')}
              className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-purple-600" />
                </div>
                <div className="text-left">
                  <p className="font-medium">Profile Information</p>
                  <p className="text-sm text-gray-600">Manage your personal details</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>

            <button 
              onClick={() => setCurrentView('orders')}
              className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors border-t border-gray-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Package className="w-5 h-5 text-blue-600" />
                </div>
                <div className="text-left">
                  <p className="font-medium">My Orders</p>
                  <p className="text-sm text-gray-600">Track and manage orders</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>

            <button 
              onClick={() => setCurrentView('addresses')}
              className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors border-t border-gray-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-green-600" />
                </div>
                <div className="text-left">
                  <p className="font-medium">Addresses</p>
                  <p className="text-sm text-gray-600">Manage delivery addresses</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>

            <button 
              onClick={() => setCurrentView('payments')}
              className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors border-t border-gray-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-yellow-600" />
                </div>
                <div className="text-left">
                  <p className="font-medium">Payment Methods</p>
                  <p className="text-sm text-gray-600">Manage cards and payments</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
            <button 
              onClick={() => setCurrentView('wishlist')}
              className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-pink-600" />
                </div>
                <div className="text-left">
                  <p className="font-medium">Wishlist</p>
                  <p className="text-sm text-gray-600">Items you want to buy later</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>

            <button 
              onClick={() => setCurrentView('notifications')}
              className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors border-t border-gray-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <Bell className="w-5 h-5 text-orange-600" />
                </div>
                <div className="text-left">
                  <p className="font-medium">Notifications</p>
                  <p className="text-sm text-gray-600">Manage your preferences</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>

            <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors border-t border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  <HelpCircle className="w-5 h-5 text-gray-600" />
                </div>
                <div className="text-left">
                  <p className="font-medium">Help & Support</p>
                  <p className="text-sm text-gray-600">Get help and contact us</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-sm">
            <button className="w-full flex items-center justify-between p-4 hover:bg-red-50 transition-colors text-red-600">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <LogOut className="w-5 h-5 text-red-600" />
                </div>
                <p className="font-medium">Sign Out</p>
              </div>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="h-8"></div>
      </div>
    );
  }

  // Profile Information Page
  if (currentView === 'profile') {
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
            <button onClick={() => setCurrentView('main')}>
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h1 className="text-xl font-bold">Profile Information</h1>
            <button onClick={() => setShowEditProfile(true)}>
              <Edit3 className="w-6 h-6 text-purple-600" />
            </button>
          </div>
        </header>

        <div className="p-6">
          {/* Profile Picture */}
          <div className="bg-white rounded-2xl p-6 mb-6 text-center shadow-sm">
            <div className="relative inline-block">
              <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                {profileData.avatar ? (
                  <img src={profileData.avatar} alt="Profile" className="w-24 h-24 rounded-full object-cover" />
                ) : (
                  <User className="w-12 h-12 text-purple-600" />
                )}
              </div>
              <button className="absolute -bottom-2 -right-2 w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <Camera className="w-5 h-5 text-white" />
              </button>
            </div>
            <h2 className="text-xl font-bold">{profileData.name}</h2>
            <p className="text-gray-600">Member since {new Date(profileData.memberSince).getFullYear()}</p>
          </div>

          {/* Profile Details */}
          <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm">
            <h3 className="font-bold mb-4">Personal Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="font-medium">{profileData.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <p className="font-medium">{profileData.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Birthday</p>
                  <p className="font-medium">{new Date(profileData.birthday).toLocaleDateString()}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Security */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold mb-4">Security</h3>
            <button 
              onClick={() => setShowChangePassword(true)}
              className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors"
            >
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-purple-600" />
                <div className="text-left">
                  <p className="font-medium">Change Password</p>
                  <p className="text-sm text-gray-600">Update your password</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Edit Profile Modal */}
        {showEditProfile && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end">
            <div className="bg-white rounded-t-3xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold">Edit Profile</h2>
                  <button onClick={() => setShowEditProfile(false)}>
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={editData.name}
                  onChange={(e) => setEditData({...editData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={editData.email}
                  onChange={(e) => setEditData({...editData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  value={editData.phone}
                  onChange={(e) => setEditData({...editData, phone: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <input
                  type="date"
                  placeholder="Birthday"
                  value={editData.birthday}
                  onChange={(e) => setEditData({...editData, birthday: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div className="sticky bottom-0 bg-white px-6 py-4 border-t border-gray-200">
                <button
                  onClick={() => {
                    setProfileData(editData);
                    setShowEditProfile(false);
                  }}
                  className="w-full bg-purple-600 text-white py-4 rounded-2xl font-semibold hover:bg-purple-700 transition-colors"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Change Password Modal */}
        {showChangePassword && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end">
            <div className="bg-white rounded-t-3xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold">Change Password</h2>
                  <button onClick={() => setShowChangePassword(false)}>
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="relative">
                  <input
                    type={showPassword.current ? 'text' : 'password'}
                    placeholder="Current Password"
                    value={passwordData.current}
                    onChange={(e) => setPasswordData({...passwordData, current: e.target.value})}
                    className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword({...showPassword, current: !showPassword.current})}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  >
                    {showPassword.current ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                
                <div className="relative">
                  <input
                    type={showPassword.new ? 'text' : 'password'}
                    placeholder="New Password"
                    value={passwordData.new}
                    onChange={(e) => setPasswordData({...passwordData, new: e.target.value})}
                    className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword({...showPassword, new: !showPassword.new})}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  >
                    {showPassword.new ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                
                <div className="relative">
                  <input
                    type={showPassword.confirm ? 'text' : 'password'}
                    placeholder="Confirm New Password"
                    value={passwordData.confirm}
                    onChange={(e) => setPasswordData({...passwordData, confirm: e.target.value})}
                    className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword({...showPassword, confirm: !showPassword.confirm})}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  >
                    {showPassword.confirm ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="sticky bottom-0 bg-white px-6 py-4 border-t border-gray-200">
                <button
                  onClick={() => {
                    setPasswordData({ current: '', new: '', confirm: '' });
                    setShowChangePassword(false);
                  }}
                  className="w-full bg-purple-600 text-white py-4 rounded-2xl font-semibold hover:bg-purple-700 transition-colors"
                >
                  Update Password
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Orders Page
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
            <button onClick={() => setCurrentView('main')}>
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h1 className="text-xl font-bold">My Orders</h1>
            <div className="w-6"></div>
          </div>
        </header>

        <div className="p-6">
          <div className="space-y-4">
            {orders.map((order) => (
              <div key={order.id} className="bg-white rounded-2xl p-4 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="font-bold">{order.id}</p>
                    <p className="text-sm text-gray-600">{new Date(order.date).toLocaleDateString()}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </div>
                
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Package className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{order.items} items</span>
                  </div>
                  <span className="font-bold">${order.total}</span>
                </div>
                
                {order.trackingNumber && (
                  <div className="flex items-center gap-2 mb-3">
                    <Truck className="w-4 h-4 text-blue-500" />
                    <span className="text-sm text-blue-600">Tracking: {order.trackingNumber}</span>
                  </div>
                )}
                
                <div className="flex gap-3">
                  <button className="flex-1 bg-purple-600 text-white py-3 rounded-xl font-medium hover:bg-purple-700 transition-colors">
                    Track Order
                  </button>
                  <button className="flex-1 border border-gray-200 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Addresses Page
  if (currentView === 'addresses') {
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
            <button onClick={() => setCurrentView('main')}>
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h1 className="text-xl font-bold">My Addresses</h1>
            <button onClick={() => setShowAddAddress(true)}>
              <Plus className="w-6 h-6 text-purple-600" />
            </button>
          </div>
        </header>

        <div className="p-6">
          <div className="space-y-4">
            {addresses.map((address) => (
              <div key={address.id} className="bg-white rounded-2xl p-4 shadow-sm">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-bold">{address.name}</span>
                      {address.isDefault && (
                        <span className="bg-purple-100 text-purple-600 text-xs px-2 py-1 rounded-full font-medium">
                          Default
                        </span>
                      )}
                    </div>
                    <p className="font-medium text-gray-800">{address.fullName}</p>
                    <p className="text-gray-600">{address.address}</p>
                    <p className="text-gray-600">{address.city}, {address.state} {address.zip}</p>
                    <p className="text-gray-600">{address.phone}</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                      <Edit3 className="w-4 h-4 text-gray-400" />
                    </button>
                    <button className="p-2 hover:bg-red-100 rounded-full transition-colors">
                      <Trash2 className="w-4 h-4 text-red-400" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add Address Modal */}
        {showAddAddress && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end">
            <div className="bg-white rounded-t-3xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold">Add New Address</h2>
                  <button onClick={() => setShowAddAddress(false)}>
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <input
                  type="text"
                  placeholder="Address Name (e.g., Home, Office)"
                  value={newAddress.name}
                  onChange={(e) => setNewAddress({...newAddress, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <input
                  type="text"
                  placeholder="Full Address"
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
                
                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={newAddress.isDefault}
                    onChange={(e) => setNewAddress({...newAddress, isDefault: e.target.checked})}
                    className="w-5 h-5 text-purple-600 rounded border-gray-300 focus:ring-purple-500"
                  />
                  <span className="text-gray-700">Set as default address</span>
                </label>
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
      </div>
    );
  }

  // Payment Methods Page
  if (currentView === 'payments') {
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
            <button onClick={() => setCurrentView('main')}>
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h1 className="text-xl font-bold">Payment Methods</h1>
            <button onClick={() => setShowAddPayment(true)}>
              <Plus className="w-6 h-6 text-purple-600" />
            </button>
          </div>
        </header>

        <div className="p-6">
          <div className="space-y-4">
            {paymentMethods.map((method) => (
              <div key={method.id} className="bg-white rounded-2xl p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                      <CreditCard className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">{method.name}</p>
                      <p className="text-sm text-gray-600">Expires {method.expiry}</p>
                      {method.isDefault && (
                        <span className="bg-purple-100 text-purple-600 text-xs px-2 py-1 rounded-full font-medium">
                          Default
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                      <Edit3 className="w-4 h-4 text-gray-400" />
                    </button>
                    <button className="p-2 hover:bg-red-100 rounded-full transition-colors">
                      <Trash2 className="w-4 h-4 text-red-400" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add Payment Modal */}
        {showAddPayment && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end">
            <div className="bg-white rounded-t-3xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold">Add Payment Method</h2>
                  <button onClick={() => setShowAddPayment(false)}>
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
  }

  // Wishlist Page
  if (currentView === 'wishlist') {
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
            <button onClick={() => setCurrentView('main')}>
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h1 className="text-xl font-bold">My Wishlist</h1>
            <div className="w-6"></div>
          </div>
        </header>

        <div className="p-6">
          <div className="space-y-4">
            {wishlistItems.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl p-4 shadow-sm">
                <div className="flex gap-3">
                  <div className="w-20 h-20 bg-gray-100 rounded-xl flex items-center justify-center text-3xl">
                    {item.image}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <p className="font-bold">{item.name}</p>
                        <p className="text-sm text-gray-600">{item.brand}</p>
                        <div className="flex items-center gap-1 mt-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-600">{item.rating}</span>
                        </div>
                      </div>
                      <button className="p-2 hover:bg-red-100 rounded-full transition-colors">
                        <Heart className="w-5 h-5 text-red-500 fill-current" />
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-lg">${item.price}</span>
                        {item.originalPrice && (
                          <span className="text-gray-500 line-through text-sm">${item.originalPrice}</span>
                        )}
                      </div>
                      <div className="flex gap-2">
                        {item.inStock ? (
                          <button className="bg-purple-600 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-purple-700 transition-colors">
                            Add to Cart
                          </button>
                        ) : (
                          <button className="bg-gray-200 text-gray-500 px-4 py-2 rounded-xl text-sm font-medium cursor-not-allowed">
                            Out of Stock
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Notifications Page
  if (currentView === 'notifications') {
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
            <button onClick={() => setCurrentView('main')}>
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h1 className="text-xl font-bold">Notifications</h1>
            <div className="w-6"></div>
          </div>
        </header>

        <div className="p-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold mb-4">Notification Preferences</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Order Updates</p>
                  <p className="text-sm text-gray-600">Get notified about your order status</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={notifications.orderUpdates}
                    onChange={(e) => setNotifications({...notifications, orderUpdates: e.target.checked})}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Promotions & Deals</p>
                  <p className="text-sm text-gray-600">Special offers and discounts</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={notifications.promotions}
                    onChange={(e) => setNotifications({...notifications, promotions: e.target.checked})}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Newsletter</p>
                  <p className="text-sm text-gray-600">Weekly updates and tips</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={notifications.newsletter}
                    onChange={(e) => setNotifications({...notifications, newsletter: e.target.checked})}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Recommendations</p>
                  <p className="text-sm text-gray-600">Product suggestions for you</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={notifications.recommendations}
                    onChange={(e) => setNotifications({...notifications, recommendations: e.target.checked})}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default ProfileApp;