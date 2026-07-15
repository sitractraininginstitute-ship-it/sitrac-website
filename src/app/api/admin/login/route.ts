import { NextRequest } from "next/server";
import { z } from "zod";
import bcrypt from "bcryptjs";
import { connectToDatabase } from "@/lib/mongodb";
import AdminUser from "@/models/AdminUser";
import { signToken } from "@/lib/auth";
import { jsonError, jsonOk } from "@/lib/apiResponse";

const LoginSchema = z.object({
    email:    z.string().email(),
    password: z.string().min(1),
});

const COOKIE_NAME = "sitrac_admin_token";
const SEVEN_DAYS  = 60 * 60 * 24 * 7; // seconds

export async function POST(request: NextRequest) {
    // 1. Validate request body
    let body: unknown;
    try {
        body = await request.json();
    } catch {
        return jsonError("Invalid JSON", 400);
    }

    const parsed = LoginSchema.safeParse(body);
    if (!parsed.success) {
        return jsonError("Invalid request body", 400);
    }

    const { email, password } = parsed.data;

    // 2. Connect to DB and look up user
    try {
        await connectToDatabase();
    } catch {
        return jsonError("Database connection failed", 500);
    }

    const user = await AdminUser.findOne({ email }).lean();

    // 3. Validate credentials — same message for "not found" and "wrong password"
    const INVALID = "Invalid credentials";

    if (!user) {
        // Run bcrypt anyway to prevent timing-based email enumeration
        await bcrypt.compare(password, "$2b$10$invalidhashpadding000000000000000000000000000000000000");
        return jsonError(INVALID, 401);
    }

    const passwordMatch = await bcrypt.compare(password, user.passwordHash as string);
    if (!passwordMatch) {
        return jsonError(INVALID, 401);
    }

    // 4. Sign JWT and set httpOnly cookie
    const token = signToken({ email: user.email as string });

    const isProduction = process.env.NODE_ENV === "production";

    const response = jsonOk({ success: true, email: user.email });
    response.cookies.set(COOKIE_NAME, token, {
        httpOnly: true,
        secure:   isProduction,
        sameSite: "lax",
        maxAge:   SEVEN_DAYS,
        path:     "/",
    });

    return response;
}
