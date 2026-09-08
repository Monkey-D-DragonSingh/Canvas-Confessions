import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // OneDrive's directory reparse points can make Next's cache cleanup fail with EPERM.
  cleanDistDir: false,
  turbopack: { root: process.cwd() },
  outputFileTracingRoot: process.cwd(),
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;
