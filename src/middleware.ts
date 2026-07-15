import { NextRequest, NextResponse } from "next/server";

/**
 * Decode the JWT payload and check if the token is expired.
 * This does NOT cryptographically verify the signature — that is
 * done by requireAdmin() inside each API/page handler.  The purpose
 * here is purely to redirect unauthenticated browser sessions to
 * /admin/login before any page code runs.
 *
 * Edge-runtime compatible: uses only atob + JSON.parse (no Node.js modules).
 */
function isTokenValid(token: string): boolean {
    try {
        const parts = token.split(".");
        if (parts.length !== 3) return false;

        // Base64-url → base64 → decode
        const b64 = parts[1].replace(/-/g, "+").replace(/_/g, "/");
        const padded = b64 + "==".slice((b64.length % 4 === 0) ? 4 : (b64.length % 4));
        const payload = JSON.parse(atob(padded)) as { exp?: number };

        // If exp is present check it; if absent treat as valid (no expiry)
        if (payload.exp !== undefined && Date.now() / 1000 > payload.exp) {
            return false;
        }
        return true;
    } catch {
        return false;
    }
}

export function middleware(request: NextRequest) {
    const token = request.cookies.get("sitrac_admin_token")?.value;

    if (!token || !isTokenValid(token)) {
        // Redirect unauthenticated requests to the login page.
        // Preserve the original destination so we could add ?from=... later.
        const loginUrl = new URL("/admin/login", request.url);
        return NextResponse.redirect(loginUrl);
    }

    return NextResponse.next();
}

export const config = {
    // Only intercept /admin/dashboard and everything beneath it.
    // /admin/login is intentionally excluded to avoid a redirect loop.
    matcher: ["/admin/dashboard/:path*"],
};
