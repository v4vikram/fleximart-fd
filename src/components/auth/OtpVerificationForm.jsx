"use client";

import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AlertCircle, Smartphone } from "lucide-react";

const OtpVerificationForm = ({
  email = "defaul@gmail.com",
  handleOtpVerification,
  resendOtp,
  canResendOtp,
  otpTimer,
  setCurrentView,
}) => {
  const [loading, setLoading] = useState(false);

  const initialValues = {
    otp: ["", "", "", "", "", ""], // 6-digit OTP
  };

  const validationSchema = Yup.object({
    otp: Yup.array()
      .of(Yup.string().required("Required"))
      .min(6, "Enter all 6 digits")
      .max(6, "Enter all 6 digits"),
  });

  const handleChange = (setFieldValue, index, value) => {
    if (/^\d?$/.test(value)) {
      const otpArray = [...initialValues.otp];
      otpArray[index] = value;
      setFieldValue("otp", otpArray);

      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const onSubmit = async (values) => {
    setLoading(true);
    try {
      await handleOtpVerification(values.otp.join(""));
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Smartphone className="w-8 h-8 text-purple-600" />
        </div>
        <p className="text-gray-600 mb-2">We've sent a 6-digit verification code to</p>
        <p className="font-medium">{email}</p>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form className="space-y-6">
            {/* OTP Inputs */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4 text-center">
                Enter Verification Code
              </label>
              <div className="flex justify-center gap-3 mb-4">
                {values.otp.map((digit, index) => (
                  <Field key={index}>
                    {() => (
                      <input
                        id={`otp-${index}`}
                        type="text"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleChange(setFieldValue, index, e.target.value)}
                        className="w-12 h-12 text-center text-xl font-bold border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      />
                    )}
                  </Field>
                ))}
              </div>
              <ErrorMessage
                name="otp"
                component="p"
                className="text-sm text-red-500 flex items-center justify-center gap-1"
              >
                {(msg) => (
                  <>
                    <AlertCircle className="w-4 h-4" />
                    {msg}
                  </>
                )}
              </ErrorMessage>
            </div>

            {/* Timer & Resend */}
            <div className="text-center">
              {!canResendOtp ? (
                <p className="text-gray-500">
                  Resend code in{" "}
                  <span className="font-medium text-purple-600">{otpTimer}s</span>
                </p>
              ) : (
                <Button variant="link" onClick={resendOtp} className="text-purple-600 font-medium hover:underline">
                  Resend Code
                </Button>
              )}
            </div>

            {/* Verify Button */}
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-purple-600 text-white py-4 rounded-2xl font-semibold hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                  Verifying...
                </>
              ) : (
                "Verify Code"
              )}
            </Button>

            {/* Change Email */}
            <Button
              variant="link"
              onClick={() => setCurrentView("forgot")}
              className="w-full text-gray-600 hover:text-purple-600 transition-colors"
            >
              Change email address
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default OtpVerificationForm;
