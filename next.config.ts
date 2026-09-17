import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  experimental: {
    optimizePackageImports: ["lucide-react"],
    staleTimes: {
      dynamic: 60,
      static: 300,
    },
    preloadEntriesOnStart: true,
  },
};

export default nextConfig;
