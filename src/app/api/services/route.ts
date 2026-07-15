import { NextRequest } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Service from "@/models/Service";
import { requireAdmin } from "@/lib/auth";
import { serviceSchema } from "@/lib/validation";
import { jsonOk, jsonError } from "@/lib/apiResponse";

// ── GET /api/services  (PUBLIC) ──────────────────────────────────────────────
export async function GET(request: NextRequest) {
    try {
        await connectToDatabase();
    } catch (err) {
        console.error("GET /api/services — DB error:", err);
        return jsonError("Something went wrong", 500);
    }

    try {
        const { searchParams } = request.nextUrl;
        const page  = Math.max(1, parseInt(searchParams.get("page")  ?? "1",  10));
        const limit = Math.max(1, parseInt(searchParams.get("limit") ?? "10", 10));
        const skip  = (page - 1) * limit;

        const [items, total] = await Promise.all([
            Service.find().sort({ order: 1 }).skip(skip).limit(limit).lean(),
            Service.countDocuments(),
        ]);

        return jsonOk({
            items,
            total,
            page,
            totalPages: Math.ceil(total / limit),
        });
    } catch (err) {
        console.error("GET /api/services — query error:", err);
        return jsonError("Something went wrong", 500);
    }
}

// ── POST /api/services  (ADMIN ONLY) ────────────────────────────────────────
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

    const parsed = serviceSchema.safeParse(body);
    if (!parsed.success) {
        const message = parsed.error.issues
            .map((i) => `${i.path.join(".")}: ${i.message}`)
            .join("; ");
        return jsonError(message, 400);
    }

    try {
        await connectToDatabase();
    } catch (err) {
        console.error("POST /api/services — DB error:", err);
        return jsonError("Something went wrong", 500);
    }

    try {
        const newDoc = await Service.create(parsed.data);
        return jsonOk(newDoc, 201);
    } catch (err: unknown) {
        // Duplicate slug → Mongo code 11000
        const e = err as { code?: number };
        if (e.code === 11000) {
            return jsonError("A service with that slug already exists", 409);
        }
        console.error("POST /api/services — insert error:", err);
        return jsonError("Something went wrong", 500);
    }
}
