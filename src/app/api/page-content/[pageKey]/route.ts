import { NextRequest } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import PageContent from "@/models/PageContent";
import { requireAdmin } from "@/lib/auth";
import { pageContentSchema, PAGE_KEYS } from "@/lib/validation";
import { jsonOk, jsonError } from "@/lib/apiResponse";

type Params = { params: Promise<{ pageKey: string }> };

function isValidPageKey(key: string): key is typeof PAGE_KEYS[number] {
    return (PAGE_KEYS as readonly string[]).includes(key);
}

// ── GET /api/page-content/[pageKey]  (PUBLIC) ─────────────────────────────────
// Returns null (not 404) when no content has been set yet — valid unset state.
export async function GET(_request: NextRequest, { params }: Params) {
    const { pageKey } = await params;
    if (!isValidPageKey(pageKey)) {
        return jsonError(`pageKey must be one of: ${PAGE_KEYS.join(", ")}`, 400);
    }

    try { await connectToDatabase(); }
    catch (err) {
        console.error(`GET /api/page-content/${pageKey} — DB:`, err);
        return jsonError("Something went wrong", 500);
    }

    try {
        const doc = await PageContent.findOne({ pageKey }).lean();
        // Intentionally return null — callers must handle "no content yet" gracefully
        return jsonOk(doc ?? null);
    } catch (err) {
        console.error(`GET /api/page-content/${pageKey} — query:`, err);
        return jsonError("Something went wrong", 500);
    }
}

// ── PUT /api/page-content/[pageKey]  (ADMIN ONLY) ────────────────────────────
// Upserts — creates the doc on first save, updates thereafter.
export async function PUT(request: NextRequest, { params }: Params) {
    if (!requireAdmin(request)) return jsonError("Not authenticated", 401);

    const { pageKey } = await params;
    if (!isValidPageKey(pageKey)) {
        return jsonError(`pageKey must be one of: ${PAGE_KEYS.join(", ")}`, 400);
    }

    let body: unknown;
    try { body = await request.json(); }
    catch { return jsonError("Invalid JSON", 400); }

    const parsed = pageContentSchema.partial().safeParse(body);
    if (!parsed.success) {
        return jsonError(
            parsed.error.issues.map((i) => `${i.path.join(".")}: ${i.message}`).join("; "),
            400
        );
    }

    try { await connectToDatabase(); }
    catch (err) {
        console.error(`PUT /api/page-content/${pageKey} — DB:`, err);
        return jsonError("Something went wrong", 500);
    }

    try {
        const doc = await PageContent.findOneAndUpdate(
            { pageKey },
            { $set: { pageKey, ...parsed.data } },
            { upsert: true, returnDocument: "after", new: false }
        ).lean();
        return jsonOk(doc);
    } catch (err) {
        console.error(`PUT /api/page-content/${pageKey} — upsert:`, err);
        return jsonError("Something went wrong", 500);
    }
}
