"use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { useQueryClientStore } from "@/store/queryClientStore";
import { Toaster } from "@/components/ui/sonner";

export default function RootLayout({ children }) {

  const { queryClient } = useQueryClientStore();
  return (
    <html lang="en">
      <body
        className={`antialiased max-w-5xl mx-auto`}
      >
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
         <Toaster position="top-center"/>
      </body>
    </html>
  );
}
