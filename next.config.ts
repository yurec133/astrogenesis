import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/astrogenesis',
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};



export default nextConfig;
