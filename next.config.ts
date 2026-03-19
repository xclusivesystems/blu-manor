import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["http://97.79.43.202:3101"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io", // Pre-wired for Phase 2
      },
    ],
  },
};

export default nextConfig;
