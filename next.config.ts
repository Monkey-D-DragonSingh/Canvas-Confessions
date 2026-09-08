import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // OneDrive's directory reparse points can make Next's cache cleanup fail with EPERM.
  cleanDistDir: false,
  turbopack: { root: process.cwd() },
  outputFileTracingRoot: process.cwd(),
  images: {
    imageSizes: [32, 48, 64, 96, 128, 256, 320, 384, 480],
    deviceSizes: [640, 750, 828, 1080, 1200, 1600, 1920, 2048, 3840],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;
