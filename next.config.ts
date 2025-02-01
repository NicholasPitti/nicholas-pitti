import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized:true,
  },
  basePath:"/nicholas-pitti",
  assetPrefix: './',
};

export default nextConfig;
