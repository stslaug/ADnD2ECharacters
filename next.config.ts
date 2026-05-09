import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === 'production';
const nextConfig: NextConfig = {
  /* config options here */
    output: isProd ? 'export' : undefined,
    basePath: isProd ? '/ADnD2ECharacters' : undefined,
    assetPrefix: isProd ? '/ADnD2ECharacters/' : undefined,
    distDir: "build",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
