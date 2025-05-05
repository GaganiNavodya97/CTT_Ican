import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  swcMinify: true, // Enables SWC minification for smaller JS payloads
  reactStrictMode: false, // Disabling to reduce development overhead
  /* config options here */
};

export default nextConfig;
