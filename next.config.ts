import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        // Production: all Cloudinary-hosted images (uploads via /api/upload)
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        // Dev/test only: Unsplash placeholder images used in seed scripts.
        // Remove this entry once all real event/blog cover images are
        // uploaded through the admin and stored in Cloudinary.
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
