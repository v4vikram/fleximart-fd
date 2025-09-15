"use client";

import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, Lock, AlertCircle } from "lucide-react";

const ForgotPasswordForm = ({ setCurrentView, handleForgotPassword }) => {
  const [loading, setLoading] = useState(false);

  const initialValues = {
    email: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

  const onSubmit = async (values) => {
    setLoading(true);
    try {
      await handleForgotPassword(values.email);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Lock className="w-8 h-8 text-purple-600" />
        </div>
        <p className="text-gray-600">
          Don't worry! Enter your email address and we'll send you a code to reset your password.
        </p>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {() => (
          <Form className="space-y-6">
            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Field
                  as={Input}
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                />
              </div>
              <ErrorMessage
                name="email"
                component="p"
                className="mt-2 text-sm text-red-500 flex items-center gap-1"
              >
                {(msg) => (
                  <>
                    <AlertCircle className="w-4 h-4" />
                    {msg}
                  </>
                )}
              </ErrorMessage>
            </div>

            {/* Send Code Button */}
            <Button
              type="submit"
              variant={'purple'}
              disabled={loading}
            >
              {loading ? (
                <>
                  <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                  Sending code...
                </>
              ) : (
                "Send Reset Code"
              )}
            </Button>

            {/* Back to Login */}
            <Button
              variant="link"
              onClick={() => setCurrentView("login")}
              className="w-full text-purple-600 font-medium hover:underline"
            >
              Back to Sign In
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ForgotPasswordForm;
