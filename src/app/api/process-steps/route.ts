import { NextRequest } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import ProcessStep from "@/models/ProcessStep";
import { requireAdmin } from "@/lib/auth";
import { processStepSchema } from "@/lib/validation";
import { jsonOk, jsonError } from "@/lib/apiResponse";

export async function GET(request: NextRequest) {
    try { await connectToDatabase(); }
    catch (err) { console.error("GET /api/process-steps — DB:", err); return jsonError("Something went wrong", 500); }

    try {
        const { searchParams } = request.nextUrl;
        const page  = Math.max(1, parseInt(searchParams.get("page")  ?? "1",  10));
        const limit = Math.max(1, parseInt(searchParams.get("limit") ?? "50", 10));
        const skip  = (page - 1) * limit;

        const [items, total] = await Promise.all([
            ProcessStep.find().sort({ order: 1 }).skip(skip).limit(limit).lean(),
            ProcessStep.countDocuments(),
        ]);

        return jsonOk({ items, total, page, totalPages: Math.ceil(total / limit) });
    } catch (err) {
        console.error("GET /api/process-steps — query:", err);
        return jsonError("Something went wrong", 500);
    }
}

export async function POST(request: NextRequest) {
    if (!requireAdmin(request)) return jsonError("Not authenticated", 401);

    let body: unknown;
    try { body = await request.json(); }
    catch { return jsonError("Invalid JSON", 400); }

    const parsed = processStepSchema.safeParse(body);
    if (!parsed.success) {
        return jsonError(
            parsed.error.issues.map((i) => `${i.path.join(".")}: ${i.message}`).join("; "), 400
        );
    }

    try { await connectToDatabase(); }
    catch (err) { console.error("POST /api/process-steps — DB:", err); return jsonError("Something went wrong", 500); }

    try {
        return jsonOk(await ProcessStep.create(parsed.data), 201);
    } catch (err) {
        console.error("POST /api/process-steps — insert:", err);
        return jsonError("Something went wrong", 500);
    }
}
