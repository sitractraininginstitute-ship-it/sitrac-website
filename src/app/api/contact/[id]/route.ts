import { NextRequest } from "next/server";
import { Types } from "mongoose";
import { connectToDatabase } from "@/lib/mongodb";
import ContactMessage from "@/models/ContactMessage";
import { requireAdmin } from "@/lib/auth";
import { markReadSchema } from "@/lib/validation";
import { jsonOk, jsonError } from "@/lib/apiResponse";

type Params = { params: Promise<{ id: string }> };
const isValidId = (id: string) => Types.ObjectId.isValid(id);

// ── PATCH /api/contact/[id]  (ADMIN ONLY) ────────────────────────────────────
// Updates only the `read` boolean field.
export async function PATCH(request: NextRequest, { params }: Params) {
    if (!requireAdmin(request)) return jsonError("Not authenticated", 401);

    const { id } = await params;
    if (!isValidId(id)) return jsonError("Invalid id", 400);

    let body: unknown;
    try { body = await request.json(); }
    catch { return jsonError("Invalid JSON", 400); }

    const parsed = markReadSchema.safeParse(body);
    if (!parsed.success) {
        return jsonError(
            parsed.error.issues.map((i) => `${i.path.join(".")}: ${i.message}`).join("; "),
            400
        );
    }

    try { await connectToDatabase(); }
    catch (err) {
        console.error(`PATCH /api/contact/${id} — DB:`, err);
        return jsonError("Something went wrong", 500);
    }

    try {
        const updated = await ContactMessage.findByIdAndUpdate(
            id,
            { $set: { read: parsed.data.read } },
            { returnDocument: "after", new: false }
        ).lean();

        if (!updated) return jsonError("Not found", 404);
        return jsonOk(updated);
    } catch (err) {
        console.error(`PATCH /api/contact/${id} — update:`, err);
        return jsonError("Something went wrong", 500);
    }
}

// ── DELETE /api/contact/[id]  (ADMIN ONLY) ───────────────────────────────────
export async function DELETE(request: NextRequest, { params }: Params) {
    if (!requireAdmin(request)) return jsonError("Not authenticated", 401);

    const { id } = await params;
    if (!isValidId(id)) return jsonError("Invalid id", 400);

    try { await connectToDatabase(); }
    catch (err) {
        console.error(`DELETE /api/contact/${id} — DB:`, err);
        return jsonError("Something went wrong", 500);
    }

    try {
        const deleted = await ContactMessage.findByIdAndDelete(id).lean();
        if (!deleted) return jsonError("Not found", 404);
        return jsonOk({ deleted: true });
    } catch (err) {
        console.error(`DELETE /api/contact/${id} — delete:`, err);
        return jsonError("Something went wrong", 500);
    }
}
