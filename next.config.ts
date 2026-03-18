import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
