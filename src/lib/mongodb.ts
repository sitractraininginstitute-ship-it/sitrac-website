import mongoose from "mongoose";

/**
 * Global cache to preserve the mongoose connection across hot-reloads
 * in Next.js development (module scope is re-evaluated on every request
 * without this guard).
 */
declare global {
    var _mongooseCache: {
        conn: typeof mongoose | null;
        promise: Promise<typeof mongoose> | null;
    };
}

const cached = global._mongooseCache ?? { conn: null, promise: null };
global._mongooseCache = cached;

export async function connectToDatabase(): Promise<typeof mongoose> {
    // Validated here (not at module level) so the build doesn't fail
    // when MONGODB_URI is empty at static-analysis time.
    const MONGODB_URI = process.env.MONGODB_URI;
    if (!MONGODB_URI) {
        throw new Error(
            "Please define the MONGODB_URI environment variable in .env.local"
        );
    }

    // Return existing connection immediately
    if (cached.conn) {
        return cached.conn;
    }

    // If a connection is already being established, wait for it
    if (!cached.promise) {
        const opts: mongoose.ConnectOptions = {
            bufferCommands: false,
        };

        cached.promise = mongoose.connect(MONGODB_URI, opts);
    }

    try {
        cached.conn = await cached.promise;
    } catch (err) {
        // Reset promise so a reconnect attempt can be made
        cached.promise = null;
        throw err;
    }

    return cached.conn;
}
