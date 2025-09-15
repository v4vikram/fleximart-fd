import { Geist, Geist_Mono } from "next/font/google";
import Protected from "@/components/Protected";


export default function ProtectedLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased max-w-5xl mx-auto`}
      >

        <Protected>
          {children}
        </Protected>
      </body>
    </html>
  );
}
