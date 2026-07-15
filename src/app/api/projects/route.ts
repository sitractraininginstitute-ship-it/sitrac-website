import { NextRequest } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Project from "@/models/Project";
import { requireAdmin } from "@/lib/auth";
import { projectSchema } from "@/lib/validation";
import { jsonOk, jsonError } from "@/lib/apiResponse";

// ── GET /api/projects  (PUBLIC) ──────────────────────────────────────────────
export async function GET(request: NextRequest) {
    try {
        await connectToDatabase();
    } catch (err) {
        console.error("GET /api/projects — DB error:", err);
        return jsonError("Something went wrong", 500);
    }

    try {
        const { searchParams } = request.nextUrl;
        const page  = Math.max(1, parseInt(searchParams.get("page")  ?? "1",  10));
        const limit = Math.max(1, parseInt(searchParams.get("limit") ?? "10", 10));
        const skip  = (page - 1) * limit;

        const [items, total] = await Promise.all([
            Project.find().sort({ createdAt: -1 }).skip(skip).limit(limit).lean(),
            Project.countDocuments(),
        ]);

        return jsonOk({
            items,
            total,
            page,
            totalPages: Math.ceil(total / limit),
        });
    } catch (err) {
        console.error("GET /api/projects — query error:", err);
        return jsonError("Something went wrong", 500);
    }
}

// ── POST /api/projects  (ADMIN ONLY) ─────────────────────────────────────────
export async function POST(request: NextRequest) {
    if (!requireAdmin(request)) {
        return jsonError("Not authenticated", 401);
    }

    let body: unknown;
    try {
        body = await request.json();
    } catch {
        return jsonError("Invalid JSON", 400);
    }

    const parsed = projectSchema.safeParse(body);
    if (!parsed.success) {
        const message = parsed.error.issues
            .map((i) => `${i.path.join(".")}: ${i.message}`)
            .join("; ");
        return jsonError(message, 400);
    }

    try {
        await connectToDatabase();
    } catch (err) {
        console.error("POST /api/projects — DB error:", err);
        return jsonError("Something went wrong", 500);
    }

    try {
        const newDoc = await Project.create(parsed.data);
        return jsonOk(newDoc, 201);
    } catch (err: unknown) {
        const e = err as { code?: number };
        if (e.code === 11000) {
            return jsonError("A project with that slug already exists", 409);
        }
        console.error("POST /api/projects — insert error:", err);
        return jsonError("Something went wrong", 500);
    }
}
