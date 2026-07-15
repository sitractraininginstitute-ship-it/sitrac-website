import { NextResponse } from "next/server";

/** Return a JSON error response: { error: message } */
export function jsonError(message: string, status: number): NextResponse {
    return NextResponse.json({ error: message }, { status });
}

/** Return a JSON success response with any data shape. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function jsonOk(data: any, status = 200): NextResponse {
    return NextResponse.json(data, { status });
}
