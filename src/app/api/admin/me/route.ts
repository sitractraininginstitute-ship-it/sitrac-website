import { NextRequest } from "next/server";
import { requireAdmin } from "@/lib/auth";
import { jsonError, jsonOk } from "@/lib/apiResponse";

export async function GET(request: NextRequest) {
    const payload = requireAdmin(request);

    if (!payload) {
        return jsonError("Not authenticated", 401);
    }

    return jsonOk({ email: payload.email });
}
