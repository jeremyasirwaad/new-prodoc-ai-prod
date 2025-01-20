"use client";
// app/layout.jsx
import "./globals.css"; // Include your global styles
import { Navbar } from "@/components/Navbar/Navbar";
import { Button } from "antd";

import { Footer } from "@/components/Footer/Footer";
import { useEffect, useState } from "react";

export default function Layout({ children }) {
  const [showBanner, setShowBanner] = useState(false);
  const [isConsentGiven, setIsConsentGiven] = useState(false);

  useEffect(() => {
    const consent = sessionStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    } else if (consent === "accepted") {
      setIsConsentGiven(true);
    }
  }, []);

  const handleAccept = () => {
    sessionStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
    setIsConsentGiven(true);
    loadGoogleTagManager();
    loadClarity();
  };

  const handleReject = () => {
    sessionStorage.setItem("cookieConsent", "rejected");
    setShowBanner(false);
    setIsConsentGiven(false);
  };

  const loadGoogleTagManager = () => {
    const script = document.createElement("script");
    script.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-KMVB8GQ2');
    `;
    document.head.appendChild(script);
  };

  const loadClarity = () => {
    const clarityScript = document.createElement("script");
    clarityScript.async = true;
    clarityScript.innerHTML = `
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "pgid7hprwo");
    `;
    document.body.appendChild(clarityScript);
  };

  useEffect(() => {
    if (isConsentGiven) {
      // loadGoogleTagManager();
      // loadClarity();
    }
  }, [isConsentGiven]);

  return (
    <html lang="en">
      <head>
        <title>Prodoc AI</title>
      </head>
      <body>
        <Navbar />

        {showBanner && (
          <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 z-50">
            <div className="container mx-auto flex justify-between   items-center">
              <p className="text-sm w-full text-center">
                We use cookies to improve your experience. By clicking "Accept",
                you consent to our use of cookies for analytics and tracking.{" "}
                <a
                  href="/privacy-policy"
                  className="underline text-blue-400 hover:text-blue-300"
                >
                  Learn more
                </a>
              </p>
              <div className="sm:flex ml-4 wrap sm:items-center justify-end sm:justify-end sm:mr-10">
                <Button
                  size={20}
                  onClick={handleAccept}
                  className="bg-blue-500 mr-4 mb-2 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                >
                  Accept
                </Button>
                <Button size={20} onClick={handleReject}>
                  Reject
                </Button>
              </div>
            </div>
          </div>
        )}

        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
