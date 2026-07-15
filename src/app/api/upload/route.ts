import { NextRequest } from "next/server";
import cloudinary from "@/lib/cloudinary";
import { requireAdmin } from "@/lib/auth";
import { jsonOk, jsonError } from "@/lib/apiResponse";

// ── Constants ─────────────────────────────────────────────────────────────────

const ALLOWED_IMAGE_TYPES = new Set([
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp",
    "image/gif",
]);

const PDF_TYPE = "application/pdf";

const IMAGE_MAX_BYTES = 5  * 1024 * 1024; // 5 MB  (images)
const PDF_MAX_BYTES   = 10 * 1024 * 1024; // 10 MB (PDF brochures can be larger)

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
    const isPdf    = mimeType === PDF_TYPE;
    if (!ALLOWED_IMAGE_TYPES.has(mimeType) && !isPdf) {
        return jsonError("Only image files (jpeg, png, webp, gif) and PDF documents are allowed", 400);
    }

    // 4. Validate file size (PDFs get a larger limit)
    const maxBytes = isPdf ? PDF_MAX_BYTES : IMAGE_MAX_BYTES;
    if (file.size > maxBytes) {
        return jsonError(`File must be under ${isPdf ? "10" : "5"}MB`, 400);
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
    //    Images use default resource_type "image".
    //    PDFs must use resource_type "raw" — Cloudinary rejects PDF uploads
    //    under the image resource type.
    try {
        // For PDFs: derive a sanitized filename for use in the Cloudinary public_id.
        // When uploading via data URI (base64), Cloudinary ignores `use_filename`
        // because there is no filename embedded in the data URI — `filename_override`
        // explicitly sets the public_id stem, giving the stored asset a human-readable
        // name (e.g. "sitrac-claims-masterclass-2026") instead of a random hash.
        const sanitizedName = isPdf
            ? file.name
                .replace(/\.pdf$/i, "")          // strip .pdf — Cloudinary adds it for raw
                .toLowerCase()
                .replace(/[^a-z0-9._-]/g, "-")   // only safe URL chars
                .replace(/-{2,}/g, "-")           // collapse repeated hyphens
                .replace(/^-|-$/g, "")            // trim leading/trailing hyphens
                .substring(0, 80)                 // keep it reasonable
            : undefined;

        const result = await cloudinary.uploader.upload(dataUri, {
            folder,
            use_filename:      true,
            unique_filename:   true,
            overwrite:         false,
            ...(isPdf
                ? {
                    resource_type:     "raw" as const,
                    filename_override: sanitizedName,
                }
                : {}
            ),
        });

        return jsonOk(
            {
                url:          result.secure_url,
                publicId:     result.public_id,
                folder:       result.folder,
                width:        result.width,
                height:       result.height,
                format:       result.format,
                bytes:        result.bytes,
                // For PDFs: expose the sanitized name so callers can
                // construct fl_attachment download URLs client-side if needed.
                ...(isPdf ? { originalName: sanitizedName } : {}),
            },
            201
        );
    } catch (err) {
        console.error("POST /api/upload — Cloudinary upload error:", err);
        return jsonError("Upload failed", 500);
    }
}
