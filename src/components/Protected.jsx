"use client";
import axiosInstance from "@/lib/axiosIntrance";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import LoadingScreen from "./common/LoadindScreen";
import { useAuthStore } from "@/store/authStore";

const Protected = ({ children }) => {
  const { user, getMe, logout } = useAuthStore();
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function loadUser() {
      try {
        const me = await axiosInstance.get(`/auth/me`);

        if (me?.data?.data) {
          console.log("✅ User found");
          setSuccess(true);
        } else {
          console.log("❌ User not found");
          setSuccess(false);
        }
      } catch (error) {
        console.log("⚠️ Auth error:", error);
        setSuccess(false);
      } finally {
        setLoading(false);
      }
    }
    loadUser();
  }, []);

  useEffect(() => {
    if (!success && !loading) {
      router.replace("/auth");
    }
  }, [loading]);

  if (loading) {
    return <LoadingScreen message="Checking authentication..." />;
  }

  return <>{children}</>;
};

export default Protected;

// init success = false, render  success = true/false
// init loading = true, render = false
