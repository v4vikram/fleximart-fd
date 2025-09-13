"use client"
import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Eye, 
  EyeOff, 
  Mail, 
  Lock, 
  User, 
  Phone, 
  AlertCircle,
  Apple,
  Smartphone,
  Shield,
  Heart,
  Star,
  ShoppingBag,
  Gift,
  Zap,
  Users,
  CheckCircle2
} from 'lucide-react';

const AuthPage = () => {
  const [currentView, setCurrentView] = useState('welcome');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [otpTimer, setOtpTimer] = useState(30);
  const [canResendOtp, setCanResendOtp] = useState(false);

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const [registerData, setRegisterData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
    subscribeNewsletter: true
  });

  const [forgotData, setForgotData] = useState({
    email: ''
  });

  const [otpData, setOtpData] = useState({
    otp: ['', '', '', '', '', '']
  });

  // OTP Timer Effect
  useEffect(() => {
    let interval = null;
    if (currentView === 'otp' && otpTimer > 0) {
      interval = setInterval(() => {
        setOtpTimer(timer => timer - 1);
      }, 1000);
    } else if (otpTimer === 0) {
      setCanResendOtp(true);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [currentView, otpTimer]);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const validateForm = (data, type) => {
    const newErrors = {};

    if (type === 'login') {
      if (!data.email) newErrors.email = 'Email is required';
      else if (!validateEmail(data.email)) newErrors.email = 'Invalid email format';
      
      if (!data.password) newErrors.password = 'Password is required';
    }

    if (type === 'register') {
      if (!data.firstName) newErrors.firstName = 'First name is required';
      if (!data.lastName) newErrors.lastName = 'Last name is required';
      
      if (!data.email) newErrors.email = 'Email is required';
      else if (!validateEmail(data.email)) newErrors.email = 'Invalid email format';
      
      if (!data.phone) newErrors.phone = 'Phone number is required';
      
      if (!data.password) newErrors.password = 'Password is required';
      else if (!validatePassword(data.password)) newErrors.password = 'Password must be at least 8 characters';
      
      if (!data.confirmPassword) newErrors.confirmPassword = 'Please confirm your password';
      else if (data.password !== data.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
      
      if (!data.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the terms';
    }

    if (type === 'forgot') {
      if (!data.email) newErrors.email = 'Email is required';
      else if (!validateEmail(data.email)) newErrors.email = 'Invalid email format';
    }

    return newErrors;
  };

  const handleLogin = async () => {
    const formErrors = validateForm(loginData, 'login');
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setLoading(true);
    setErrors({});

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setLoading(false);
    setCurrentView('success');
  };

  const handleRegister = async () => {
    const formErrors = validateForm(registerData, 'register');
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setLoading(true);
    setErrors({});

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setLoading(false);
    setCurrentView('otp');
  };

  const handleForgotPassword = async () => {
    const formErrors = validateForm(forgotData, 'forgot');
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setLoading(true);
    setErrors({});

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setLoading(false);
    setCurrentView('otp');
    setOtpTimer(30);
    setCanResendOtp(false);
  };

  const handleOtpVerification = async () => {
    const otpValue = otpData.otp.join('');
    if (otpValue.length !== 6) {
      setErrors({ otp: 'Please enter complete OTP' });
      return;
    }

    setLoading(true);
    setErrors({});

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setLoading(false);
    setCurrentView('success');
  };

  const handleOtpChange = (index, value) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otpData.otp];
      newOtp[index] = value;
      setOtpData({ otp: newOtp });

      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  };

  const handleSocialLogin = (provider) => {
    console.log(`Login with ${provider}`);
    // Simulate social login
    setTimeout(() => {
      setCurrentView('success');
    }, 1000);
  };

  const resendOtp = () => {
    setOtpTimer(30);
    setCanResendOtp(false);
    setOtpData({ otp: ['', '', '', '', '', ''] });
    // Simulate resend API call
    console.log('OTP resent');
  };

  // Welcome Screen
  if (currentView === 'welcome') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600">
        {/* Status Bar */}
        <div className="px-6 py-2 flex justify-between items-center text-sm font-medium text-white">
          <span>9:41</span>
          <div className="flex gap-1">
            <div className="w-4 h-2 bg-white rounded-sm"></div>
            <div className="w-6 h-2 bg-white rounded-sm"></div>
            <div className="w-6 h-2 bg-white bg-opacity-60 rounded-sm"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col min-h-screen justify-between p-6">
          <div className="flex-1 flex flex-col justify-center items-center text-center text-white">
            <div className="mb-8">
              <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-6">
                <ShoppingBag className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl font-bold mb-4">ShopHub</h1>
              <p className="text-xl text-purple-100 mb-8">Your favorite shopping destination</p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6 w-full max-w-sm mb-12">
              <div className="text-center">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-6 h-6" />
                </div>
                <p className="text-sm text-purple-100">Save Favorites</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-6 h-6" />
                </div>
                <p className="text-sm text-purple-100">Fast Delivery</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="w-6 h-6" />
                </div>
                <p className="text-sm text-purple-100">Best Deals</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6" />
                </div>
                <p className="text-sm text-purple-100">Secure</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <button
              onClick={() => setCurrentView('register')}
              className="w-full bg-white text-purple-600 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-colors"
            >
              Get Started
            </button>
            <button
              onClick={() => setCurrentView('login')}
              className="w-full border-2 border-white text-white py-4 rounded-2xl font-bold text-lg hover:bg-white hover:bg-opacity-10 transition-colors"
            >
              Sign In
            </button>
            <p className="text-center text-purple-200 text-sm">
              By continuing, you agree to our{' '}
              <span className="underline">Terms of Service</span> and{' '}
              <span className="underline">Privacy Policy</span>
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Success Screen
  if (currentView === 'success') {
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

        {/* Content */}
        <div className="flex-1 flex items-center justify-center px-6 py-12">
          <div className="text-center">
            <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-3xl font-bold mb-4">Welcome to ShopHub!</h1>
            <p className="text-gray-600 mb-2">Your account is ready</p>
            <p className="text-gray-600 mb-8">Start exploring amazing products and deals</p>
            
            <div className="bg-white rounded-2xl p-6 mb-8 shadow-sm">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <Gift className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                  <p className="font-medium">Welcome Offer</p>
                  <p className="text-sm text-gray-600">10% off first order</p>
                </div>
                <div className="text-center">
                  <Users className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                  <p className="font-medium">Join Community</p>
                  <p className="text-sm text-gray-600">1M+ happy customers</p>
                </div>
              </div>
            </div>

            <button 
              onClick={() => setCurrentView('welcome')}
              className="w-full bg-purple-600 text-white py-4 rounded-2xl font-semibold hover:bg-purple-700 transition-colors mb-4"
            >
              Start Shopping
            </button>
            <button 
              onClick={() => setCurrentView('welcome')}
              className="w-full bg-white text-purple-600 py-4 rounded-2xl font-semibold border border-purple-200 hover:bg-purple-50 transition-colors"
            >
              Complete Profile
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
      <header className="bg-white px-6 py-4 shadow-sm">
        <div className="flex items-center justify-between">
          <button onClick={() => setCurrentView('welcome')}>
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="text-center">
            <h1 className="text-xl font-bold">
              {currentView === 'login' && 'Welcome Back'}
              {currentView === 'register' && 'Create Account'}
              {currentView === 'forgot' && 'Reset Password'}
              {currentView === 'otp' && 'Verification'}
            </h1>
            <p className="text-sm text-gray-500">
              {currentView === 'login' && 'Sign in to your account'}
              {currentView === 'register' && 'Join our community'}
              {currentView === 'forgot' && 'Enter your email address'}
              {currentView === 'otp' && 'Enter the code sent to your email'}
            </p>
          </div>
          <div className="w-6"></div>
        </div>
      </header>

      <div className="p-6">
        {/* Login Form */}
        {currentView === 'login' && (
          <div className="space-y-6">
            {/* Social Login */}
            <div className="space-y-3">
              <button
                onClick={() => handleSocialLogin('apple')}
                className="w-full flex items-center justify-center gap-3 bg-black text-white py-4 rounded-2xl font-medium hover:bg-gray-800 transition-colors"
              >
                <Apple className="w-5 h-5" />
                Continue with Apple
              </button>
              <button
                onClick={() => handleSocialLogin('google')}
                className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-200 text-gray-700 py-4 rounded-2xl font-medium hover:border-gray-300 transition-colors"
              >
                <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  G
                </div>
                Continue with Google
              </button>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-gray-200"></div>
              <span className="text-gray-500 text-sm">or</span>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={loginData.email}
                  onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                  className={`w-full pl-12 pr-4 py-4 border-2 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors ${
                    errors.email ? 'border-red-500' : 'border-gray-200'
                  }`}
                  placeholder="Enter your email"
                />
              </div>
              {errors.email && (
                <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={loginData.password}
                  onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                  className={`w-full pl-12 pr-12 py-4 border-2 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors ${
                    errors.password ? 'border-red-500' : 'border-gray-200'
                  }`}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.password && (
                <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.password}
                </p>
              )}
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={loginData.rememberMe}
                  onChange={(e) => setLoginData({ ...loginData, rememberMe: e.target.checked })}
                  className="w-5 h-5 text-purple-600 rounded border-gray-300 focus:ring-purple-500"
                />
                <span className="text-sm text-gray-600">Remember me</span>
              </label>
              <button
                onClick={() => setCurrentView('forgot')}
                className="text-sm text-purple-600 font-medium hover:underline"
              >
                Forgot password?
              </button>
            </div>

            {/* Login Button */}
            <button
              onClick={handleLogin}
              disabled={loading}
              className="w-full bg-purple-600 text-white py-4 rounded-2xl font-semibold hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                  Signing in...
                </>
              ) : (
                'Sign In'
              )}
            </button>

            {/* Sign Up Link */}
            <p className="text-center text-gray-600">
              Don't have an account?{' '}
              <button
                onClick={() => setCurrentView('register')}
                className="text-purple-600 font-medium hover:underline"
              >
                Sign up
              </button>
            </p>
          </div>
        )}

        {/* Register Form */}
        {currentView === 'register' && (
          <div className="space-y-6">
            {/* Social Login */}
            <div className="space-y-3">
              <button
                onClick={() => handleSocialLogin('apple')}
                className="w-full flex items-center justify-center gap-3 bg-black text-white py-4 rounded-2xl font-medium hover:bg-gray-800 transition-colors"
              >
                <Apple className="w-5 h-5" />
                Continue with Apple
              </button>
              <button
                onClick={() => handleSocialLogin('google')}
                className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-200 text-gray-700 py-4 rounded-2xl font-medium hover:border-gray-300 transition-colors"
              >
                <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  G
                </div>
                Continue with Google
              </button>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-gray-200"></div>
              <span className="text-gray-500 text-sm">or</span>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>

            {/* Name Inputs */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={registerData.firstName}
                    onChange={(e) => setRegisterData({ ...registerData, firstName: e.target.value })}
                    className={`w-full pl-12 pr-4 py-4 border-2 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors ${
                      errors.firstName ? 'border-red-500' : 'border-gray-200'
                    }`}
                    placeholder="First name"
                  />
                </div>
                {errors.firstName && (
                  <p className="mt-1 text-xs text-red-500">{errors.firstName}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                <input
                  type="text"
                  value={registerData.lastName}
                  onChange={(e) => setRegisterData({ ...registerData, lastName: e.target.value })}
                  className={`w-full px-4 py-4 border-2 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors ${
                    errors.lastName ? 'border-red-500' : 'border-gray-200'
                  }`}
                  placeholder="Last name"
                />
                {errors.lastName && (
                  <p className="mt-1 text-xs text-red-500">{errors.lastName}</p>
                )}
              </div>
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={registerData.email}
                  onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                  className={`w-full pl-12 pr-4 py-4 border-2 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors ${
                    errors.email ? 'border-red-500' : 'border-gray-200'
                  }`}
                  placeholder="Enter your email"
                />
              </div>
              {errors.email && (
                <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.email}
                </p>
              )}
            </div>

            {/* Phone Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="tel"
                  value={registerData.phone}
                  onChange={(e) => setRegisterData({ ...registerData, phone: e.target.value })}
                  className={`w-full pl-12 pr-4 py-4 border-2 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors ${
                    errors.phone ? 'border-red-500' : 'border-gray-200'
                  }`}
                  placeholder="Enter your phone number"
                />
              </div>
              {errors.phone && (
                <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Password Inputs */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={registerData.password}
                  onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                  className={`w-full pl-12 pr-12 py-4 border-2 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors ${
                    errors.password ? 'border-red-500' : 'border-gray-200'
                  }`}
                  placeholder="Create a password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.password && (
                <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.password}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={registerData.confirmPassword}
                  onChange={(e) => setRegisterData({ ...registerData, confirmPassword: e.target.value })}
                  className={`w-full pl-12 pr-12 py-4 border-2 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors ${
                    errors.confirmPassword ? 'border-red-500' : 'border-gray-200'
                  }`}
                  placeholder="Confirm your password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            {/* Terms & Newsletter */}
            <div className="space-y-4">
              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={registerData.agreeToTerms}
                  onChange={(e) => setRegisterData({ ...registerData, agreeToTerms: e.target.checked })}
                  className="w-5 h-5 text-purple-600 rounded border-gray-300 focus:ring-purple-500 mt-0.5"
                />
                <span className="text-sm text-gray-600">
                  I agree to the{' '}
                  <span className="text-purple-600 underline">Terms of Service</span> and{' '}
                  <span className="text-purple-600 underline">Privacy Policy</span>
                </span>
              </label>
              {errors.agreeToTerms && (
                <p className="text-sm text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.agreeToTerms}
                </p>
              )}

              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={registerData.subscribeNewsletter}
                  onChange={(e) => setRegisterData({ ...registerData, subscribeNewsletter: e.target.checked })}
                  className="w-5 h-5 text-purple-600 rounded border-gray-300 focus:ring-purple-500 mt-0.5"
                />
                <span className="text-sm text-gray-600">
                  Send me exclusive offers and updates
                </span>
              </label>
            </div>

            {/* Register Button */}
            <button
              onClick={handleRegister}
              disabled={loading}
              className="w-full bg-purple-600 text-white py-4 rounded-2xl font-semibold hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                  Creating account...
                </>
              ) : (
                'Create Account'
              )}
            </button>

            {/* Sign In Link */}
            <p className="text-center text-gray-600">
              Already have an account?{' '}
              <button
                onClick={() => setCurrentView('login')}
                className="text-purple-600 font-medium hover:underline"
              >
                Sign in
              </button>
            </p>
          </div>
        )}

        {/* Forgot Password Form */}
        {currentView === 'forgot' && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-purple-600" />
              </div>
              <p className="text-gray-600">
                Don't worry! Enter your email address and we'll send you a code to reset your password.
              </p>
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={forgotData.email}
                  onChange={(e) => setForgotData({ ...forgotData, email: e.target.value })}
                  className={`w-full pl-12 pr-4 py-4 border-2 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors ${
                    errors.email ? 'border-red-500' : 'border-gray-200'
                  }`}
                  placeholder="Enter your email address"
                />
              </div>
              {errors.email && (
                <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.email}
                </p>
              )}
            </div>

            {/* Send Code Button */}
            <button
              onClick={handleForgotPassword}
              disabled={loading}
              className="w-full bg-purple-600 text-white py-4 rounded-2xl font-semibold hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                  Sending code...
                </>
              ) : (
                'Send Reset Code'
              )}
            </button>

            {/* Back to Login */}
            <button
              onClick={() => setCurrentView('login')}
              className="w-full text-purple-600 font-medium hover:underline"
            >
              Back to Sign In
            </button>
          </div>
        )}

        {/* OTP Verification */}
        {currentView === 'otp' && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-purple-600" />
              </div>
              <p className="text-gray-600 mb-2">
                We've sent a 6-digit verification code to
              </p>
              <p className="font-medium">{forgotData.email || registerData.email}</p>
            </div>

            {/* OTP Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4 text-center">
                Enter Verification Code
              </label>
              <div className="flex justify-center gap-3 mb-4">
                {otpData.otp.map((digit, index) => (
                  <input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    className="w-12 h-12 text-center text-xl font-bold border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                ))}
              </div>
              {errors.otp && (
                <p className="text-sm text-red-500 flex items-center justify-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.otp}
                </p>
              )}
            </div>

            {/* Timer & Resend */}
            <div className="text-center">
              {!canResendOtp ? (
                <p className="text-gray-500">
                  Resend code in <span className="font-medium text-purple-600">{otpTimer}s</span>
                </p>
              ) : (
                <button
                  onClick={resendOtp}
                  className="text-purple-600 font-medium hover:underline"
                >
                  Resend Code
                </button>
              )}
            </div>

            {/* Verify Button */}
            <button
              onClick={handleOtpVerification}
              disabled={loading}
              className="w-full bg-purple-600 text-white py-4 rounded-2xl font-semibold hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                  Verifying...
                </>
              ) : (
                'Verify Code'
              )}
            </button>

            {/* Change Email */}
            <button
              onClick={() => setCurrentView(forgotData.email ? 'forgot' : 'register')}
              className="w-full text-gray-600 hover:text-purple-600 transition-colors"
            >
              Change email address
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthPage