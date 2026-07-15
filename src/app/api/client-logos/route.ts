import { NextRequest } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import ClientLogo from "@/models/ClientLogo";
import { requireAdmin } from "@/lib/auth";
import { clientLogoSchema } from "@/lib/validation";
import { jsonOk, jsonError } from "@/lib/apiResponse";

export async function GET(request: NextRequest) {
    try { await connectToDatabase(); }
    catch (err) { console.error("GET /api/client-logos — DB:", err); return jsonError("Something went wrong", 500); }

    try {
        const { searchParams } = request.nextUrl;
        const page  = Math.max(1, parseInt(searchParams.get("page")  ?? "1",  10));
        const limit = Math.max(1, parseInt(searchParams.get("limit") ?? "50", 10));
        const skip  = (page - 1) * limit;

        const [items, total] = await Promise.all([
            ClientLogo.find().sort({ order: 1 }).skip(skip).limit(limit).lean(),
            ClientLogo.countDocuments(),
        ]);

        return jsonOk({ items, total, page, totalPages: Math.ceil(total / limit) });
    } catch (err) {
        console.error("GET /api/client-logos — query:", err);
        return jsonError("Something went wrong", 500);
    }
}

export async function POST(request: NextRequest) {
    if (!requireAdmin(request)) return jsonError("Not authenticated", 401);

    let body: unknown;
    try { body = await request.json(); }
    catch { return jsonError("Invalid JSON", 400); }

    const parsed = clientLogoSchema.safeParse(body);
    if (!parsed.success) {
        return jsonError(
            parsed.error.issues.map((i) => `${i.path.join(".")}: ${i.message}`).join("; "), 400
        );
    }

    try { await connectToDatabase(); }
    catch (err) { console.error("POST /api/client-logos — DB:", err); return jsonError("Something went wrong", 500); }

    try {
        return jsonOk(await ClientLogo.create(parsed.data), 201);
    } catch (err) {
        console.error("POST /api/client-logos — insert:", err);
        return jsonError("Something went wrong", 500);
    }
}
