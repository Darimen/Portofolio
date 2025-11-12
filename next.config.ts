import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // disable eslint during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'export'
};

export default nextConfig;
