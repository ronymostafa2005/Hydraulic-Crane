import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  agentRules: false,
  devIndicators: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [{ source: "/privacy-policy", destination: "/privacy", permanent: true }];
  },
  async rewrites() {
    return [{ source: "/favicon.ico", destination: "/images/logo.png" }];
  },
};

export default nextConfig;
