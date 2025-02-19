import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === "production";
const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: isProd ? "/astrogenesis" : "",
  assetPrefix: isProd ? "/astrogenesis/" : "",
  images: {
    unoptimized: true,
  },
};



export default nextConfig;
