import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET as string;

export interface AdminTokenPayload {
    email: string;
    iat?: number;
    exp?: number;
}

/** Sign a 7-day JWT containing { email }. */
export function signToken(payload: { email: string }): string {
    if (!JWT_SECRET) {
        throw new Error("JWT_SECRET environment variable is not defined");
    }
    return jwt.sign(payload, JWT_SECRET, { expiresIn: "7d" });
}

/**
 * Verify a JWT and return the decoded payload.
 * Returns null instead of throwing on any error (expired, invalid, etc.).
 */
export function verifyToken(token: string): AdminTokenPayload | null {
    if (!JWT_SECRET) return null;
    try {
        return jwt.verify(token, JWT_SECRET) as AdminTokenPayload;
    } catch {
        return null;
    }
}

/**
 * Read the "sitrac_admin_token" cookie from a Request and verify it.
 * Returns the decoded payload if valid, or null if missing / invalid.
 * Does NOT return a Response — callers decide what to do on null.
 */
export function requireAdmin(request: Request): AdminTokenPayload | null {
    const cookieHeader = request.headers.get("cookie") ?? "";

    // Parse the cookie string manually (no external dep needed)
    const token = cookieHeader
        .split(";")
        .map((c) => c.trim())
        .find((c) => c.startsWith("sitrac_admin_token="))
        ?.split("=")
        .slice(1)
        .join("="); // handle any '=' chars inside the token value

    if (!token) return null;
    return verifyToken(token);
}
