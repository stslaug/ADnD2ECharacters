import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  /* config options here */
    output: 'export',
    basePath: '/ADnD2ECharacters',
    assetPrefix: '/ADnD2ECharacters/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
