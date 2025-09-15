"use client";

import { CheckCircle2, Gift, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const SuccessScreen = ({ setCurrentView }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50 flex flex-col">
  
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

          <Button
            onClick={() => setCurrentView("welcome")}
            variant={"purple"}
          >
            Start Shopping
          </Button>
          <Button
            onClick={() => setCurrentView("welcome")}
            variant="outline"
          >
            Complete Profile
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SuccessScreen;
