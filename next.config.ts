import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === 'production';
const nextConfig: NextConfig = {
  /* config options here */
    output: 'export',
    basePath: '/ADnD2ECharacters',
    assetPrefix: '/ADnD2ECharacters/',
    distDir: "build",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
