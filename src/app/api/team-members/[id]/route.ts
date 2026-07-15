import { NextRequest } from "next/server";
import { Types } from "mongoose";
import { connectToDatabase } from "@/lib/mongodb";
import TeamMember from "@/models/TeamMember";
import { requireAdmin } from "@/lib/auth";
import { teamMemberSchema } from "@/lib/validation";
import { jsonOk, jsonError } from "@/lib/apiResponse";

type Params = { params: Promise<{ id: string }> };

function isValidId(id: string) { return Types.ObjectId.isValid(id); }

// ── GET /api/team-members/[id]  (PUBLIC) ─────────────────────────────────────
export async function GET(_request: NextRequest, { params }: Params) {
    const { id } = await params;
    if (!isValidId(id)) return jsonError("Invalid id", 400);

    try { await connectToDatabase(); }
    catch (err) { console.error(`GET /api/team-members/${id} — DB:`, err); return jsonError("Something went wrong", 500); }

    try {
        const doc = await TeamMember.findById(id).lean();
        if (!doc) return jsonError("Not found", 404);
        return jsonOk(doc);
    } catch (err) {
        console.error(`GET /api/team-members/${id} — query:`, err);
        return jsonError("Something went wrong", 500);
    }
}

// ── PUT /api/team-members/[id]  (ADMIN ONLY) ─────────────────────────────────
export async function PUT(request: NextRequest, { params }: Params) {
    if (!requireAdmin(request)) return jsonError("Not authenticated", 401);
    const { id } = await params;
    if (!isValidId(id)) return jsonError("Invalid id", 400);

    let body: unknown;
    try { body = await request.json(); }
    catch { return jsonError("Invalid JSON", 400); }

    const parsed = teamMemberSchema.partial().safeParse(body);
    if (!parsed.success) {
        return jsonError(
            parsed.error.issues.map((i) => `${i.path.join(".")}: ${i.message}`).join("; "),
            400
        );
    }

    try { await connectToDatabase(); }
    catch (err) { console.error(`PUT /api/team-members/${id} — DB:`, err); return jsonError("Something went wrong", 500); }

    try {
        const updated = await TeamMember.findByIdAndUpdate(
            id, { $set: parsed.data }, { returnDocument: "after", new: false }
        ).lean();
        if (!updated) return jsonError("Not found", 404);
        return jsonOk(updated);
    } catch (err) {
        console.error(`PUT /api/team-members/${id} — update:`, err);
        return jsonError("Something went wrong", 500);
    }
}

// ── DELETE /api/team-members/[id]  (ADMIN ONLY) ──────────────────────────────
export async function DELETE(request: NextRequest, { params }: Params) {
    if (!requireAdmin(request)) return jsonError("Not authenticated", 401);
    const { id } = await params;
    if (!isValidId(id)) return jsonError("Invalid id", 400);

    try { await connectToDatabase(); }
    catch (err) { console.error(`DELETE /api/team-members/${id} — DB:`, err); return jsonError("Something went wrong", 500); }

    try {
        const deleted = await TeamMember.findByIdAndDelete(id).lean();
        if (!deleted) return jsonError("Not found", 404);
        return jsonOk({ deleted: true });
    } catch (err) {
        console.error(`DELETE /api/team-members/${id} — delete:`, err);
        return jsonError("Something went wrong", 500);
    }
}
