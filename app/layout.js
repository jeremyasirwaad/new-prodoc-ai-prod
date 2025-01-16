// app/layout.jsx
import "./globals.css"; // Include your global styles
import { Navbar } from "@/components/Navbar/Navbar";

import { Footer } from "@/components/Footer/Footer";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Prodoc AI</title>
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
