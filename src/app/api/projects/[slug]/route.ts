import { NextRequest } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Project from "@/models/Project";
import { requireAdmin } from "@/lib/auth";
import { projectSchema } from "@/lib/validation";
import { jsonOk, jsonError } from "@/lib/apiResponse";

type Params = { params: Promise<{ slug: string }> };

// ── GET /api/projects/[slug]  (PUBLIC) ───────────────────────────────────────
export async function GET(_request: NextRequest, { params }: Params) {
    const { slug } = await params;

    try {
        await connectToDatabase();
    } catch (err) {
        console.error(`GET /api/projects/${slug} — DB error:`, err);
        return jsonError("Something went wrong", 500);
    }

    try {
        const doc = await Project.findOne({ slug }).lean();
        if (!doc) return jsonError("Not found", 404);
        return jsonOk(doc);
    } catch (err) {
        console.error(`GET /api/projects/${slug} — query error:`, err);
        return jsonError("Something went wrong", 500);
    }
}

// ── PUT /api/projects/[slug]  (ADMIN ONLY) ───────────────────────────────────
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

    const parsed = projectSchema.partial().safeParse(body);
    if (!parsed.success) {
        const message = parsed.error.issues
            .map((i) => `${i.path.join(".")}: ${i.message}`)
            .join("; ");
        return jsonError(message, 400);
    }

    try {
        await connectToDatabase();
    } catch (err) {
        console.error(`PUT /api/projects/${slug} — DB error:`, err);
        return jsonError("Something went wrong", 500);
    }

    try {
        const updatedDoc = await Project.findOneAndUpdate(
            { slug },
            { $set: parsed.data },
            { returnDocument: "after", new: false }
        ).lean();

        if (!updatedDoc) return jsonError("Not found", 404);
        return jsonOk(updatedDoc);
    } catch (err: unknown) {
        const e = err as { code?: number };
        if (e.code === 11000) {
            return jsonError("A project with that slug already exists", 409);
        }
        console.error(`PUT /api/projects/${slug} — update error:`, err);
        return jsonError("Something went wrong", 500);
    }
}

// ── DELETE /api/projects/[slug]  (ADMIN ONLY) ────────────────────────────────
export async function DELETE(request: NextRequest, { params }: Params) {
    if (!requireAdmin(request)) {
        return jsonError("Not authenticated", 401);
    }

    const { slug } = await params;

    try {
        await connectToDatabase();
    } catch (err) {
        console.error(`DELETE /api/projects/${slug} — DB error:`, err);
        return jsonError("Something went wrong", 500);
    }

    try {
        const deleted = await Project.findOneAndDelete({ slug }).lean();
        if (!deleted) return jsonError("Not found", 404);
        return jsonOk({ deleted: true });
    } catch (err) {
        console.error(`DELETE /api/projects/${slug} — delete error:`, err);
        return jsonError("Something went wrong", 500);
    }
}
