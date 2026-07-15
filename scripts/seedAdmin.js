/**
 * scripts/seedAdmin.js
 *
 * One-time script to upsert the AdminUser document in MongoDB.
 * Reads all credentials from .env.local — no secrets hardcoded here.
 *
 * Usage:  npm run seed:admin
 */

"use strict";

const fs   = require("fs");
const path = require("path");

/**
 * Minimal .env parser — splits on the FIRST '=' only, skips comments and
 * blank lines. More robust than dotenv for values containing special chars
 * (%, @, $, ?, =). Sets process.env[key] = value for every parsed line.
 */
function loadEnvFile(filePath) {
    if (!fs.existsSync(filePath)) {
        throw new Error(".env.local not found at: " + filePath);
    }
    const lines = fs.readFileSync(filePath, "utf8").split(/\r?\n/);
    let count = 0;
    for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith("#")) continue;
        const eq = trimmed.indexOf("=");
        if (eq === -1) continue;
        const key   = trimmed.slice(0, eq).trim();
        const value = trimmed.slice(eq + 1); // no trim — preserve value as-is
        process.env[key] = value;
        count++;
    }
    return count;
}

const envPath = path.resolve(__dirname, "..", ".env.local");
const count   = loadEnvFile(envPath);
console.log(`📂  Loaded ${count} vars from .env.local`);

// Confirm vars are present — print presence only, never the actual values
const MONGODB_URI     = process.env.MONGODB_URI;
const ADMIN_EMAIL     = process.env.ADMIN_EMAIL;
const ADMIN_PASS_HASH = process.env.ADMIN_PASSWORD_HASH;

console.log("    MONGODB_URI set:         ", !!MONGODB_URI);
console.log("    ADMIN_EMAIL set:         ", !!ADMIN_EMAIL);
console.log("    ADMIN_PASSWORD_HASH set: ", !!ADMIN_PASS_HASH);

if (!MONGODB_URI || !ADMIN_EMAIL || !ADMIN_PASS_HASH) {
    console.error("❌  One or more required env vars are missing — check .env.local.");
    process.exit(1);
}

const mongoose = require("mongoose");

const AdminUserSchema = new mongoose.Schema(
    {
        email:        { type: String, required: true, unique: true },
        passwordHash: { type: String, required: true },
    },
    { timestamps: true }
);

async function main() {
    console.log("\n🔌  Connecting to MongoDB...");
    await mongoose.connect(MONGODB_URI, {
        serverSelectionTimeoutMS: 10000,
    });
    console.log("    Connected.");

    const AdminUser =
        mongoose.models.AdminUser ||
        mongoose.model("AdminUser", AdminUserSchema);

    await AdminUser.findOneAndUpdate(
        { email: ADMIN_EMAIL },
        { $set: { email: ADMIN_EMAIL, passwordHash: ADMIN_PASS_HASH } },
        { upsert: true, returnDocument: "after", setDefaultsOnInsert: true }
    );

    console.log(`\n✅  Admin user upserted for ${ADMIN_EMAIL}`);

    const count = await AdminUser.countDocuments({ email: ADMIN_EMAIL });
    console.log(`🔎  Documents in collection for this email: ${count}`);

    await mongoose.disconnect();
    console.log("🔌  Disconnected.\n");
}

main().catch(function (err) {
    console.error("❌  Seed failed:", err.message ?? err);
    mongoose.disconnect().finally(function () { process.exit(1); });
});
