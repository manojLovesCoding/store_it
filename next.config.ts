import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
      bodySizeLimit: "100MB"
    }
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.pixabay.com"
      },
      {
        protocol: "https",
        hostname: "img.freepik.com"
      },
      {
        protocol: "https",
        hostname: "cloud.appwrite.io"
      },
      {
        protocol: "https",
        hostname: "fra.cloud.appwrite.io" // ✅ Add this line
      }
    ]
  }
};

export default nextConfig;
