"use client";

import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  AlertCircle,
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  Phone,
  Apple,
} from "lucide-react";
import { useAuthStore } from "@/store/authStore";
import { toast } from "sonner";

const RegisterForm = ({ handleSocialLogin, setCurrentView }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { register, errors } = useAuthStore();

  const initialValues = {
    name: "test",
    email: "test@gmail.com",
    password: "123456",
    confirmPassword: "123456",
    agreeToTerms: true, // checkbox default checked
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("First name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
    agreeToTerms: Yup.boolean().oneOf(
      [true],
      "You must accept the terms and privacy policy"
    ),
  });

const handleRegister = async (values, { setSubmitting, setErrors }) => {
  try {
    const registerRes = await register(values);   // ✅ only once
    console.log("Register :", registerRes);
    if(registerRes?.success){
         toast.error(`${registerRes.message}`, {
        style: { backgroundColor: "#45d17e", color: "white" },
      });

      setCurrentView("login")
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
        <Button
          variant="default"
          className="bg-black hover:bg-gray-800 text-white"
          onClick={() => handleSocialLogin("apple")}
        >
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
        onSubmit={handleRegister}
      >
        {({ values, setFieldValue, isSubmitting }) => (
          <Form className="space-y-6">
            {/* {console.log("isSubmitting", isSubmitting)} */}
            {[
              {
                name: "name",
                label: "Name",
                type: "text",
                placeholder: "First name",
                icon: User,
              },
              {
                name: "email",
                label: "Email",
                type: "email",
                placeholder: "Enter your email",
                icon: Mail,
              },
              {
                name: "password",
                label: "Password",
                type: showPassword ? "text" : "password",
                placeholder: "Create a password",
                icon: Lock,
                toggle: {
                  state: showPassword,
                  setState: setShowPassword,
                },
              },
              {
                name: "confirmPassword",
                label: "Confirm Password",
                type: showConfirmPassword ? "text" : "password",
                placeholder: "Confirm your password",
                icon: Lock,
                toggle: {
                  state: showConfirmPassword,
                  setState: setShowConfirmPassword,
                },
              },
            ].map((field) => (
              <div key={field.name}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {field.label}
                </label>
                <div className="relative">
                  <field.icon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Field
                    as={Input}
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                  />
                  {field.toggle && (
                    <button
                      type="button"
                      onClick={() => field.toggle.setState(!field.toggle.state)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {field.toggle.state ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  )}
                </div>
                <ErrorMessage
                  name={field.name}
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
            ))}

            {/* Terms & Newsletter */}
            <div className="space-y-4">
              <label className="flex items-start gap-3">
                <Field
                  type="checkbox"
                  name="agreeToTerms"
                  className="w-5 h-5 text-purple-600 rounded border-gray-300 focus:ring-purple-500 mt-0.5"
                />
                <span className="text-sm text-gray-600">
                  I agree to the{" "}
                  <span className="text-purple-600 underline">
                    Terms of Service
                  </span>{" "}
                  and{" "}
                  <span className="text-purple-600 underline">
                    Privacy Policy
                  </span>
                </span>
              </label>
              <ErrorMessage
                name="agreeToTerms"
                component="p"
                className="text-sm text-red-500 flex items-center gap-1"
              >
                {(msg) => (
                  <p className="text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {msg}
                  </p>
                )}
              </ErrorMessage>
            </div>

            {/* Register Button */}
            <Button type="submit" variant={"purple"} disabled={isSubmitting}>
              {isSubmitting ? "Creating..." : "Create Account"}
            </Button>

            {/* Sign In Link */}
            <p className="text-center text-gray-600">
              Already have an account?{" "}
              <Button
                type="button"
                variant={"purple"}
                onClick={() => setCurrentView("login")}
              >
                Sign in
              </Button>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;
