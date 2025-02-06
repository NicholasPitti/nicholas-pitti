import type { NextConfig } from "next";

//const isProd = process.env.NODE_ENV === "production"
//basePath: isProd ? '/nicholas-pitti' : '',
const nextConfig: NextConfig = {
  /* config options here */
  //reactStrictMode: true,
  //basePath: isProd ? '/nicholas-pitti' : '',
  output: 'export',
  images: {
    unoptimized:true,
  },
  basePath:"/nicholas-pitti",
  assetPrefix: '/nicholas-pitti/',
};

export default nextConfig;
