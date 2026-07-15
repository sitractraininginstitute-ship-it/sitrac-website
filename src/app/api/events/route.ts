import { NextRequest } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Event from "@/models/Event";
import { requireAdmin } from "@/lib/auth";
import { eventSchema } from "@/lib/validation";
import { jsonOk, jsonError } from "@/lib/apiResponse";

// ── GET /api/events  (PUBLIC) ────────────────────────────────────────────────
//
// Supports optional query params (combinable):
//   ?category=X        exact match on category field
//   ?month=YYYY-MM     events whose `date` falls within that calendar month
//   ?page=N            (default 1)
//   ?limit=N           (default 10)
export async function GET(request: NextRequest) {
    try {
        await connectToDatabase();
    } catch (err) {
        console.error("GET /api/events — DB error:", err);
        return jsonError("Something went wrong", 500);
    }

    try {
        const { searchParams } = request.nextUrl;
        const page     = Math.max(1, parseInt(searchParams.get("page")  ?? "1",  10));
        const limit    = Math.max(1, parseInt(searchParams.get("limit") ?? "10", 10));
        const skip     = (page - 1) * limit;
        const category = searchParams.get("category");
        const month    = searchParams.get("month"); // expected format: "YYYY-MM"

        // Build filter incrementally
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const filter: Record<string, any> = {};

        if (category) {
            filter.category = category;
        }

        if (month && /^\d{4}-\d{2}$/.test(month)) {
            const [year, mon] = month.split("-").map(Number);
            const start = new Date(year, mon - 1, 1);          // first ms of month
            const end   = new Date(year, mon, 1);              // first ms of next month
            filter.date = { $gte: start, $lt: end };
        }

        const [items, total] = await Promise.all([
            Event.find(filter).sort({ date: 1 }).skip(skip).limit(limit).lean(),
            Event.countDocuments(filter),
        ]);

        return jsonOk({
            items,
            total,
            page,
            totalPages: Math.ceil(total / limit),
        });
    } catch (err) {
        console.error("GET /api/events — query error:", err);
        return jsonError("Something went wrong", 500);
    }
}

// ── POST /api/events  (ADMIN ONLY) ───────────────────────────────────────────
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

    const parsed = eventSchema.safeParse(body);
    if (!parsed.success) {
        const message = parsed.error.issues
            .map((i) => `${i.path.join(".")}: ${i.message}`)
            .join("; ");
        return jsonError(message, 400);
    }

    try {
        await connectToDatabase();
    } catch (err) {
        console.error("POST /api/events — DB error:", err);
        return jsonError("Something went wrong", 500);
    }

    try {
        const newDoc = await Event.create(parsed.data);
        return jsonOk(newDoc, 201);
    } catch (err: unknown) {
        const e = err as { code?: number };
        if (e.code === 11000) {
            return jsonError("An event with that slug already exists", 409);
        }
        console.error("POST /api/events — insert error:", err);
        return jsonError("Something went wrong", 500);
    }
}
