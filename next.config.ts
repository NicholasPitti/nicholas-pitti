import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production"

const nextConfig: NextConfig = {
  /* config options here */
  basePath: isProd ? '/nicholas-pitti' : '',
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized:true,
  },
  //basePath:"/nicholas-pitti",
  assetPrefix: '/nicholas-pitti/',
};

export default nextConfig;
