import { NextRequest } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import BlogPost from "@/models/BlogPost";
import { requireAdmin } from "@/lib/auth";
import { blogPostSchema } from "@/lib/validation";
import { jsonOk, jsonError } from "@/lib/apiResponse";

// ── GET /api/blog  (PUBLIC) ──────────────────────────────────────────────────
export async function GET(request: NextRequest) {
    try {
        await connectToDatabase();
    } catch (err) {
        console.error("GET /api/blog — DB error:", err);
        return jsonError("Something went wrong", 500);
    }

    try {
        const { searchParams } = request.nextUrl;
        const page  = Math.max(1, parseInt(searchParams.get("page")  ?? "1",  10));
        const limit = Math.max(1, parseInt(searchParams.get("limit") ?? "10", 10));
        const skip  = (page - 1) * limit;

        const [items, total] = await Promise.all([
            BlogPost.find().sort({ publishedAt: -1 }).skip(skip).limit(limit).lean(),
            BlogPost.countDocuments(),
        ]);

        return jsonOk({
            items,
            total,
            page,
            totalPages: Math.ceil(total / limit),
        });
    } catch (err) {
        console.error("GET /api/blog — query error:", err);
        return jsonError("Something went wrong", 500);
    }
}

// ── POST /api/blog  (ADMIN ONLY) ─────────────────────────────────────────────
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

    const parsed = blogPostSchema.safeParse(body);
    if (!parsed.success) {
        const message = parsed.error.issues
            .map((i) => `${i.path.join(".")}: ${i.message}`)
            .join("; ");
        return jsonError(message, 400);
    }

    try {
        await connectToDatabase();
    } catch (err) {
        console.error("POST /api/blog — DB error:", err);
        return jsonError("Something went wrong", 500);
    }

    try {
        const newDoc = await BlogPost.create(parsed.data);
        return jsonOk(newDoc, 201);
    } catch (err: unknown) {
        const e = err as { code?: number };
        if (e.code === 11000) {
            return jsonError("A blog post with that slug already exists", 409);
        }
        console.error("POST /api/blog — insert error:", err);
        return jsonError("Something went wrong", 500);
    }
}
