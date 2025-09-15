"use client";

import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AlertCircle, Eye, EyeOff, Mail, Lock, Apple } from "lucide-react";
import { toast } from "sonner";
import { useAuthStore } from "@/store/authStore";

const LoginForm = ({ handleSocialLogin, setCurrentView }) => {
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuthStore();

  const initialValues = {
    email: "",
    password: "",
    rememberMe: false,
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleLogin = async (values, { setSubmitting, setErrors }) => {
    console.log("values", values);
    try {
      const loginRes = await login(values); // ✅ only once
      console.log("loginRes :", loginRes);
      if (loginRes?.success) {
        toast.error(`${loginRes.message}`, {
          style: { backgroundColor: "#45d17e", color: "white" },
        });
      }
    } catch (error) {
      console.error("error", error);
      setErrors(error.errors);

      if (error.message) {
        toast.error(`${error.message}`, {
          style: { backgroundColor: "#ff3030", color: "white" },
        });
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Social Login */}
      <div className="space-y-3">
        <Button onClick={() => handleSocialLogin("apple")}>
          <Apple className="w-5 h-5" />
          Continue with Apple
        </Button>

        <Button variant="outline" onClick={() => handleSocialLogin("google")}>
          <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
            G
          </div>
          Continue with Google
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex-1 h-px bg-gray-200"></div>
        <span className="text-gray-500 text-sm">or</span>
        <div className="flex-1 h-px bg-gray-200"></div>
      </div>

      {/* Formik Form */}
      <Formik
        initialValues={initialValues}
        // validationSchema={validationSchema}
        onSubmit={handleLogin}
      >
        {({ values, setFieldValue, isSubmitting }) => (
          <Form className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Field
                  as={Input}
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
              <ErrorMessage
                name="email"
                component="p"
                className="mt-2 text-sm text-red-500 flex items-center gap-1"
              >
                {(msg) => (
                  <p className="text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {msg}
                  </p>
                )}
              </ErrorMessage>
            </div>

            {/* Password */}
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Field
                  as={Input}
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
              <ErrorMessage
                name="password"
                component="p"
                className="mt-2 text-sm text-red-500 flex items-center gap-1"
              >
                {(msg) => (
                  <p className="text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {msg}
                  </p>
                )}
              </ErrorMessage>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-1">
                <input
                  type="checkbox"
                  checked={values.rememberMe}
                  onChange={(e) =>
                    setFieldValue("rememberMe", e.target.checked)
                  }
                  className="w-4 h-4 text-purple-600 rounded border-gray-300 focus:ring-purple-500"
                />
                <span className="text-[12px] text-gray-600">Remember me</span>
              </label>
              <button
                type="button"
                onClick={() => setCurrentView("forgot")}
                className="text-sm text-purple-600 font-medium hover:underline"
              >
                Forgot password?
              </button>
            </div>

            {/* Login Button */}
            <Button type="submit" variant={"purple"} disabled={isSubmitting}>
              {isSubmitting ? "Signing in..." : "Signing in"}
            </Button>

            {/* Sign Up Link */}
            <p className="text-center text-gray-600">
              Don't have an account?{" "}
              <button
                type="button"
                onClick={() => setCurrentView("register")}
                className="text-purple-600 font-medium hover:underline"
              >
                Sign up
              </button>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
