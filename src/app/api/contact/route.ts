import { NextRequest } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import ContactMessage from "@/models/ContactMessage";
import { requireAdmin } from "@/lib/auth";
import { contactMessageSchema } from "@/lib/validation";
import { jsonOk, jsonError } from "@/lib/apiResponse";

// ── POST /api/contact  (PUBLIC) ──────────────────────────────────────────────
// Accepts a contact form submission. Returns only { success: true } — never
// echoes the saved document back to the public caller.
export async function POST(request: NextRequest) {
    let body: unknown;
    try { body = await request.json(); }
    catch { return jsonError("Invalid JSON", 400); }

    const parsed = contactMessageSchema.safeParse(body);
    if (!parsed.success) {
        return jsonError(
            parsed.error.issues.map((i) => `${i.path.join(".")}: ${i.message}`).join("; "),
            400
        );
    }

    try { await connectToDatabase(); }
    catch (err) {
        console.error("POST /api/contact — DB:", err);
        return jsonError("Something went wrong", 500);
    }

    try {
        await ContactMessage.create({ ...parsed.data, read: false });
        return jsonOk({ success: true }, 201);
    } catch (err) {
        console.error("POST /api/contact — insert:", err);
        return jsonError("Something went wrong", 500);
    }
}

// ── GET /api/contact  (ADMIN ONLY) ───────────────────────────────────────────
// Lists contact messages. Supports ?read=true|false filter and pagination.
// Sorted newest first.
export async function GET(request: NextRequest) {
    if (!requireAdmin(request)) return jsonError("Not authenticated", 401);

    try { await connectToDatabase(); }
    catch (err) {
        console.error("GET /api/contact — DB:", err);
        return jsonError("Something went wrong", 500);
    }

    try {
        const { searchParams } = request.nextUrl;
        const page  = Math.max(1, parseInt(searchParams.get("page")  ?? "1",  10));
        const limit = Math.max(1, parseInt(searchParams.get("limit") ?? "10", 10));
        const skip  = (page - 1) * limit;
        const readParam = searchParams.get("read"); // "true" | "false" | null

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const filter: Record<string, any> = {};
        if (readParam === "true")  filter.read = true;
        if (readParam === "false") filter.read = false;

        const [items, total] = await Promise.all([
            ContactMessage.find(filter).sort({ createdAt: -1 }).skip(skip).limit(limit).lean(),
            ContactMessage.countDocuments(filter),
        ]);

        return jsonOk({ items, total, page, totalPages: Math.ceil(total / limit) });
    } catch (err) {
        console.error("GET /api/contact — query:", err);
        return jsonError("Something went wrong", 500);
    }
}
