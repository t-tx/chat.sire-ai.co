import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true, // Optional: Disables image optimization (useful when exporting)
  },
  exportTrailingSlash: true,  // Optional: Adds a trailing slash to the URLs
};

export default nextConfig;
