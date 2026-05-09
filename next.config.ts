import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/ADND-Sheet",
  assetPrefix: "/ADND-Sheet",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
