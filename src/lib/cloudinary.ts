import { v2 as cloudinary } from "cloudinary";

/**
 * Cloudinary v2 SDK configured from environment variables.
 * Imported by any route that needs to upload or manage assets.
 */
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key:    process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure:     true, // always return https URLs
});

export default cloudinary;
