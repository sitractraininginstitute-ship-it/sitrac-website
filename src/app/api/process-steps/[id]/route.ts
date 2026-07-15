import { NextRequest } from "next/server";
import { Types } from "mongoose";
import { connectToDatabase } from "@/lib/mongodb";
import ProcessStep from "@/models/ProcessStep";
import { requireAdmin } from "@/lib/auth";
import { processStepSchema } from "@/lib/validation";
import { jsonOk, jsonError } from "@/lib/apiResponse";

type Params = { params: Promise<{ id: string }> };
const isValidId = (id: string) => Types.ObjectId.isValid(id);

export async function GET(_request: NextRequest, { params }: Params) {
    const { id } = await params;
    if (!isValidId(id)) return jsonError("Invalid id", 400);

    try { await connectToDatabase(); }
    catch (err) { console.error(`GET /api/process-steps/${id} — DB:`, err); return jsonError("Something went wrong", 500); }

    try {
        const doc = await ProcessStep.findById(id).lean();
        if (!doc) return jsonError("Not found", 404);
        return jsonOk(doc);
    } catch (err) {
        console.error(`GET /api/process-steps/${id} — query:`, err);
        return jsonError("Something went wrong", 500);
    }
}

export async function PUT(request: NextRequest, { params }: Params) {
    if (!requireAdmin(request)) return jsonError("Not authenticated", 401);
    const { id } = await params;
    if (!isValidId(id)) return jsonError("Invalid id", 400);

    let body: unknown;
    try { body = await request.json(); }
    catch { return jsonError("Invalid JSON", 400); }

    const parsed = processStepSchema.partial().safeParse(body);
    if (!parsed.success) {
        return jsonError(
            parsed.error.issues.map((i) => `${i.path.join(".")}: ${i.message}`).join("; "), 400
        );
    }

    try { await connectToDatabase(); }
    catch (err) { console.error(`PUT /api/process-steps/${id} — DB:`, err); return jsonError("Something went wrong", 500); }

    try {
        const updated = await ProcessStep.findByIdAndUpdate(
            id, { $set: parsed.data }, { returnDocument: "after", new: false }
        ).lean();
        if (!updated) return jsonError("Not found", 404);
        return jsonOk(updated);
    } catch (err) {
        console.error(`PUT /api/process-steps/${id} — update:`, err);
        return jsonError("Something went wrong", 500);
    }
}

export async function DELETE(request: NextRequest, { params }: Params) {
    if (!requireAdmin(request)) return jsonError("Not authenticated", 401);
    const { id } = await params;
    if (!isValidId(id)) return jsonError("Invalid id", 400);

    try { await connectToDatabase(); }
    catch (err) { console.error(`DELETE /api/process-steps/${id} — DB:`, err); return jsonError("Something went wrong", 500); }

    try {
        const deleted = await ProcessStep.findByIdAndDelete(id).lean();
        if (!deleted) return jsonError("Not found", 404);
        return jsonOk({ deleted: true });
    } catch (err) {
        console.error(`DELETE /api/process-steps/${id} — delete:`, err);
        return jsonError("Something went wrong", 500);
    }
}
