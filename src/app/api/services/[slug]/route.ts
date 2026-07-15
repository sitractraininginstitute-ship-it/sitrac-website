import { NextRequest } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Service from "@/models/Service";
import { requireAdmin } from "@/lib/auth";
import { serviceSchema } from "@/lib/validation";
import { jsonOk, jsonError } from "@/lib/apiResponse";

type Params = { params: Promise<{ slug: string }> };

// ── GET /api/services/[slug]  (PUBLIC) ──────────────────────────────────────
export async function GET(_request: NextRequest, { params }: Params) {
    const { slug } = await params;

    try {
        await connectToDatabase();
    } catch (err) {
        console.error(`GET /api/services/${slug} — DB error:`, err);
        return jsonError("Something went wrong", 500);
    }

    try {
        const doc = await Service.findOne({ slug }).lean();
        if (!doc) return jsonError("Not found", 404);
        return jsonOk(doc);
    } catch (err) {
        console.error(`GET /api/services/${slug} — query error:`, err);
        return jsonError("Something went wrong", 500);
    }
}

// ── PUT /api/services/[slug]  (ADMIN ONLY) ──────────────────────────────────
export async function PUT(request: NextRequest, { params }: Params) {
    if (!requireAdmin(request)) {
        return jsonError("Not authenticated", 401);
    }

    const { slug } = await params;

    let body: unknown;
    try {
        body = await request.json();
    } catch {
        return jsonError("Invalid JSON", 400);
    }

    // Partial: only validates fields that are actually provided
    const parsed = serviceSchema.partial().safeParse(body);
    if (!parsed.success) {
        const message = parsed.error.issues
            .map((i) => `${i.path.join(".")}: ${i.message}`)
            .join("; ");
        return jsonError(message, 400);
    }

    try {
        await connectToDatabase();
    } catch (err) {
        console.error(`PUT /api/services/${slug} — DB error:`, err);
        return jsonError("Something went wrong", 500);
    }

    try {
        const updatedDoc = await Service.findOneAndUpdate(
            { slug },
            { $set: parsed.data },
            { returnDocument: "after", new: false }
        ).lean();

        if (!updatedDoc) return jsonError("Not found", 404);
        return jsonOk(updatedDoc);
    } catch (err: unknown) {
        const e = err as { code?: number };
        if (e.code === 11000) {
            return jsonError("A service with that slug already exists", 409);
        }
        console.error(`PUT /api/services/${slug} — update error:`, err);
        return jsonError("Something went wrong", 500);
    }
}

// ── DELETE /api/services/[slug]  (ADMIN ONLY) ────────────────────────────────
export async function DELETE(request: NextRequest, { params }: Params) {
    if (!requireAdmin(request)) {
        return jsonError("Not authenticated", 401);
    }

    const { slug } = await params;

    try {
        await connectToDatabase();
    } catch (err) {
        console.error(`DELETE /api/services/${slug} — DB error:`, err);
        return jsonError("Something went wrong", 500);
    }

    try {
        const deleted = await Service.findOneAndDelete({ slug }).lean();
        if (!deleted) return jsonError("Not found", 404);
        return jsonOk({ deleted: true });
    } catch (err) {
        console.error(`DELETE /api/services/${slug} — delete error:`, err);
        return jsonError("Something went wrong", 500);
    }
}
