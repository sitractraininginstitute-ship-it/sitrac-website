import { jsonOk } from "@/lib/apiResponse";

const COOKIE_NAME = "sitrac_admin_token";

export async function POST() {
    const response = jsonOk({ success: true });

    // Clear the auth cookie immediately
    response.cookies.set(COOKIE_NAME, "", {
        httpOnly: true,
        secure:   process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge:   0,
        path:     "/",
    });

    return response;
}
