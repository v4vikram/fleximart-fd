"use client";

import React from "react";
import { Loader2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const LoadingScreen = ({ message = "Loading..." }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <Card className="w-full max-w-sm rounded-2xl border border-gray-200">
        <CardContent className="flex flex-col items-center justify-center p-8 space-y-4">
          <Loader2 className="h-10 w-10 animate-spin text-indigo-600" />
          <p className="text-lg font-medium text-gray-700">{message}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoadingScreen;
