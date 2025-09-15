
export default function AuthLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased max-w-5xl mx-auto`}
      >
        {children}
      </body>
    </html>
  );
}
