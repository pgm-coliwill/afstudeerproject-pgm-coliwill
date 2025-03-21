import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["kampvuur.s3.eu-central-1.amazonaws.com"],
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
