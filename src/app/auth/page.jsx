"use client";
import React, { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import LoginForm from "@/components/auth/LoginForm";
import WelcomeScreen from "@/components/auth/WelcomeScreen";
import RegisterForm from "@/components/auth/RegisterForm";
import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";
import OtpVerificationForm from "@/components/auth/OtpVerificationForm";
import SuccessScreen from "@/components/auth/SuccessScreen";

const AuthPage = () => {
  const [currentView, setCurrentView] = useState("login");
  const [otpTimer, setOtpTimer] = useState(30);
  const [canResendOtp, setCanResendOtp] = useState(false);

  const [otpData, setOtpData] = useState({
    otp: ["", "", "", "", "", ""],
  });

  // OTP Timer Effect
  useEffect(() => {
    let interval = null;
    if (currentView === "otp" && otpTimer > 0) {
      interval = setInterval(() => {
        setOtpTimer((timer) => timer - 1);
      }, 1000);
    } else if (otpTimer === 0) {
      setCanResendOtp(true);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [currentView, otpTimer]);

  const resendOtp = () => {
    setOtpTimer(30);
    setCanResendOtp(false);
    setOtpData({ otp: ["", "", "", "", "", ""] });
    // Simulate resend API call
    console.log("OTP resent");
  };

  const handleSocialLogin = (provider) => {
    console.log(`Login with ${provider}`);
    // Simulate social login
    setTimeout(() => {
      setCurrentView("success");
    }, 1000);
  };
  // Welcome Screen
  if (currentView === "welcome") {
    return <WelcomeScreen setCurrentView={setCurrentView} />;
  }

  // Success Screen
  if (currentView === "success") {
    return <SuccessScreen setCurrentView={setCurrentView} />;
  }


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white px-6 py-4 shadow-sm">
        <div className="flex items-center justify-between">
          <button onClick={() => setCurrentView("welcome")}>
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="text-center">
            <h1 className="text-xl font-bold">
              {currentView === "login" && "Welcome Back"}
              {currentView === "register" && "Create Account"}
              {currentView === "forgot" && "Reset Password"}
              {currentView === "otp" && "Verification"}
            </h1>
            <p className="text-sm text-gray-500">
              {currentView === "login" && "Sign in to your account"}
              {currentView === "register" && "Join our community"}
              {currentView === "forgot" && "Enter your email address"}
              {currentView === "otp" && "Enter the code sent to your email"}
            </p>
          </div>
          <div className="w-6"></div>
        </div>
      </header>

      <div className="p-6">
        {/* Login Form */}
        {currentView === "login" && (
          <LoginForm
            handleSocialLogin={handleSocialLogin}
            setCurrentView={setCurrentView}
          />
        )}

        {/* Register Form */}
        {currentView === "register" && (
          <RegisterForm
            handleSocialLogin={handleSocialLogin}
            setCurrentView={setCurrentView}
          />
        )}

        {/* Forgot Password Form */}
        {currentView === "forgot" && (
          <ForgotPasswordForm
            handleSocialLogin={handleSocialLogin}
            setCurrentView={setCurrentView}
          />
        )}

        {/* OTP Verification */}
        {currentView === "otp" && (
          <OtpVerificationForm
            handleSocialLogin={handleSocialLogin}
            setCurrentView={setCurrentView}
            handleOtpVerification={handleOtpVerification}
            resendOtp={resendOtp}
            canResendOtp={canResendOtp}
            otpTimer={otpTimer}
          />
        )}
      </div>
    </div>
  );
};

export default AuthPage;
