/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
      },
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
      },
      {
        protocol: "https",
        hostname: "crm.prodoc.ai",
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
      },
      {
        protocol: "https",
        hostname: "console.firebase.google.com",
      },
      {
        protocol: "https",
        hostname: "cdn.prod.website-files.com",
      },
    ],
  },
};

export default nextConfig;
