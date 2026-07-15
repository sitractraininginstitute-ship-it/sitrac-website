import { NextRequest } from "next/server";
import cloudinary from "@/lib/cloudinary";
import { requireAdmin } from "@/lib/auth";
import { jsonOk, jsonError } from "@/lib/apiResponse";

// ── Constants ─────────────────────────────────────────────────────────────────

const ALLOWED_TYPES = new Set([
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp",
    "image/gif",
]);

const MAX_BYTES = 5 * 1024 * 1024; // 5 MB

// Valid section folders — prefixed with "sitrac/" in Cloudinary
const VALID_FOLDERS = new Set([
    "services",
    "team",
    "blog",
    "projects",
    "events",
    "logos",
    "misc",
]);

// ── POST /api/upload  (ADMIN ONLY) ────────────────────────────────────────────
export async function POST(request: NextRequest) {
    // 1. Auth gate
    if (!requireAdmin(request)) {
        return jsonError("Not authenticated", 401);
    }

    // 2. Parse multipart form data
    let formData: FormData;
    try {
        formData = await request.formData();
    } catch {
        return jsonError("Expected multipart/form-data", 400);
    }

    const file = formData.get("file");
    if (!file || !(file instanceof File)) {
        return jsonError("No file field found in form data", 400);
    }

    // 3. Validate MIME type
    const mimeType = file.type;
    if (!ALLOWED_TYPES.has(mimeType)) {
        return jsonError("Only image files are allowed (jpeg, png, webp, gif)", 400);
    }

    // 4. Validate file size
    if (file.size > MAX_BYTES) {
        return jsonError("File must be under 5MB", 400);
    }

    // 5. Resolve folder — default to "misc", namespace all under "sitrac/"
    const rawFolder = (formData.get("folder") as string | null) ?? "misc";
    const section   = VALID_FOLDERS.has(rawFolder) ? rawFolder : "misc";
    const folder    = `sitrac/${section}`;

    // 6. Convert file to base64 data URI (most reliable method in App Router —
    //    avoids Node.js stream wrapping and works across all Next.js runtimes).
    let dataUri: string;
    try {
        const arrayBuffer = await file.arrayBuffer();
        const base64      = Buffer.from(arrayBuffer).toString("base64");
        dataUri           = `data:${mimeType};base64,${base64}`;
    } catch (err) {
        console.error("POST /api/upload — buffer conversion error:", err);
        return jsonError("Failed to read file", 500);
    }

    // 7. Upload to Cloudinary
    try {
        const result = await cloudinary.uploader.upload(dataUri, {
            folder,
            // Use the original filename (without extension) as a hint,
            // but let Cloudinary generate the final public_id.
            use_filename:      true,
            unique_filename:   true,
            overwrite:         false,
        });

        return jsonOk(
            {
                url:      result.secure_url,
                publicId: result.public_id,
                folder:   result.folder,
                width:    result.width,
                height:   result.height,
                format:   result.format,
                bytes:    result.bytes,
            },
            201
        );
    } catch (err) {
        console.error("POST /api/upload — Cloudinary upload error:", err);
        return jsonError("Upload failed", 500);
    }
}
