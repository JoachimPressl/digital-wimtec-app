import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://www.wimtec.com/fileadmin/product_upload/media/**')],
  }
};

export default nextConfig;
