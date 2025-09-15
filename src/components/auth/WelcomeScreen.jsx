"use client";

import { Shield, Heart, Star, ShoppingBag, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const WelcomeScreen = ({ setCurrentView }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600">
      {/* Content */}
      <div className="flex flex-col min-h-screen justify-between p-6">
        <div className="flex-1 flex flex-col justify-center items-center text-center text-white">
          <div className="mb-8">
            <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-6">
              <ShoppingBag className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-4">ShopHub</h1>
            <p className="text-xl text-purple-100 mb-0">
              Your favorite shopping destination
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <Button
            onClick={() => setCurrentView("register")}
          >
            Get Started
          </Button>
          <Button
            onClick={() => setCurrentView("login")}
            variant={'secondary'}
          >
            Sign In
          </Button>
          <p className="text-center text-purple-200 text-sm">
            By continuing, you agree to our{" "}
            <span className="underline">Terms of Service</span> and{" "}
            <span className="underline">Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
