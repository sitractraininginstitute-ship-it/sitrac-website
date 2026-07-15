import { NextRequest } from "next/server";
import { Types } from "mongoose";
import { connectToDatabase } from "@/lib/mongodb";
import ClientLogo from "@/models/ClientLogo";
import { requireAdmin } from "@/lib/auth";
import { clientLogoSchema } from "@/lib/validation";
import { jsonOk, jsonError } from "@/lib/apiResponse";

type Params = { params: Promise<{ id: string }> };
const isValidId = (id: string) => Types.ObjectId.isValid(id);

export async function GET(_request: NextRequest, { params }: Params) {
    const { id } = await params;
    if (!isValidId(id)) return jsonError("Invalid id", 400);

    try { await connectToDatabase(); }
    catch (err) { console.error(`GET /api/client-logos/${id} — DB:`, err); return jsonError("Something went wrong", 500); }

    try {
        const doc = await ClientLogo.findById(id).lean();
        if (!doc) return jsonError("Not found", 404);
        return jsonOk(doc);
    } catch (err) {
        console.error(`GET /api/client-logos/${id} — query:`, err);
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

    const parsed = clientLogoSchema.partial().safeParse(body);
    if (!parsed.success) {
        return jsonError(
            parsed.error.issues.map((i) => `${i.path.join(".")}: ${i.message}`).join("; "), 400
        );
    }

    try { await connectToDatabase(); }
    catch (err) { console.error(`PUT /api/client-logos/${id} — DB:`, err); return jsonError("Something went wrong", 500); }

    try {
        const updated = await ClientLogo.findByIdAndUpdate(
            id, { $set: parsed.data }, { returnDocument: "after", new: false }
        ).lean();
        if (!updated) return jsonError("Not found", 404);
        return jsonOk(updated);
    } catch (err) {
        console.error(`PUT /api/client-logos/${id} — update:`, err);
        return jsonError("Something went wrong", 500);
    }
}

export async function DELETE(request: NextRequest, { params }: Params) {
    if (!requireAdmin(request)) return jsonError("Not authenticated", 401);
    const { id } = await params;
    if (!isValidId(id)) return jsonError("Invalid id", 400);

    try { await connectToDatabase(); }
    catch (err) { console.error(`DELETE /api/client-logos/${id} — DB:`, err); return jsonError("Something went wrong", 500); }

    try {
        const deleted = await ClientLogo.findByIdAndDelete(id).lean();
        if (!deleted) return jsonError("Not found", 404);
        return jsonOk({ deleted: true });
    } catch (err) {
        console.error(`DELETE /api/client-logos/${id} — delete:`, err);
        return jsonError("Something went wrong", 500);
    }
}
