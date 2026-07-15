/**
 * scripts/seedContent.js
 *
 * One-time migration: seeds real SITRAC content from hardcoded JSX into MongoDB.
 * Safe to re-run — every write uses findOneAndUpdate with upsert:true, matching
 * on a natural unique field, so a second run produces 0 additional documents.
 *
 * Usage:  npm run seed:content
 *
 * Models seeded: TeamMember, Testimonial, Service, ProcessStep
 * Skipped:       FAQ, BlogPost, Project, ClientLogo (still generic/placeholder)
 */

"use strict";

const fs   = require("fs");
const path = require("path");

// ── Load .env.local ──────────────────────────────────────────────────────────
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
        process.env[trimmed.slice(0, eq).trim()] = trimmed.slice(eq + 1);
        count++;
    }
    return count;
}

const envPath = path.resolve(__dirname, "..", ".env.local");
const envCount = loadEnvFile(envPath);
console.log(`📂  Loaded ${envCount} vars from .env.local`);

const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
    console.error("❌  MONGODB_URI is not set in .env.local");
    process.exit(1);
}

// ── Mongoose schemas (inline — avoids TS compilation) ────────────────────────
const mongoose = require("mongoose");
const { Schema, models, model } = mongoose;

const TeamMemberSchema = new Schema(
    {
        name:        { type: String, required: true },
        role:        { type: String, required: true },
        bio:         { type: String },
        photo:       { type: String, required: true },
        order:       { type: Number, default: 0 },
        socialLinks: { type: Array, default: [] },
    },
    { timestamps: true }
);

const TestimonialSchema = new Schema(
    {
        name:         { type: String, required: true },
        role:         { type: String },
        organization: { type: String },
        quote:        { type: String, required: true },
        photo:        { type: String },
        order:        { type: Number, default: 0 },
    },
    { timestamps: true }
);

const ServiceSchema = new Schema(
    {
        title:            { type: String, required: true },
        slug:             { type: String, required: true, unique: true },
        shortDescription: { type: String, required: true },
        fullDescription:  { type: String, required: true },
        coverImage:       { type: String, required: true },
        category:         { type: String },
        duration:         { type: String },
        price:            { type: String },
        featured:         { type: Boolean, default: false },
        order:            { type: Number, default: 0 },
        seoTitle:         { type: String },
        seoDescription:   { type: String },
    },
    { timestamps: true }
);

const ProcessStepSchema = new Schema(
    {
        stepNumber:  { type: String, required: true, unique: true },
        title:       { type: String, required: true },
        description: { type: String, required: true },
        order:       { type: Number, default: 0 },
    },
    { timestamps: true }
);

const TeamMember  = models.TeamMember  || model("TeamMember",  TeamMemberSchema);
const Testimonial = models.Testimonial || model("Testimonial", TestimonialSchema);
const Service     = models.Service     || model("Service",      ServiceSchema);
const ProcessStep = models.ProcessStep || model("ProcessStep",  ProcessStepSchema);

// ── Seed data ─────────────────────────────────────────────────────────────────

const TEAM_MEMBERS = [
    { name: "Hon. Wendy Komen",     slug: "wendy-komen",    role: "Director of Training",              photo: "/assets/img/bg-img/13.jpg", order: 1 },
    { name: "Dr. Wesley Keitany",   slug: "wesley-keitany", role: "Senior Consultant",                 photo: "/assets/img/bg-img/14.jpg", order: 2 },
    { name: "Prof. Buziba Charles", slug: "buziba-charles", role: "Lead Senior Consultant & Trainer",  photo: "/assets/img/bg-img/15.jpg", order: 3 },
    { name: "Ms. Catherine Weru",   slug: "catherine-weru", role: "Senior Consultant",                 photo: "/assets/img/bg-img/16.jpg", order: 4 },
];

const TESTIMONIALS = [
    {
        name:         "Sarah Wanjiku",
        organization: "Community Development Initiative",
        role:         "Program Coordinator",
        quote:        "Their support helped our organization strengthen community programs and improve service delivery to the people we serve.",
        photo:        "/assets/img/bg-img/48.jpg",
        order:        1,
    },
    {
        name:         "Amina Hassan",
        organization: "Youth Empowerment Network",
        role:         "Project Manager",
        quote:        "The consultancy team provided clear guidance on project planning and execution that made a real difference.",
        photo:        "/assets/img/bg-img/49.jpg",
        order:        2,
    },
    {
        name:         "David Otieno",
        organization: "Social Justice Organization",
        role:         "Advocacy Lead",
        quote:        "We appreciated their professionalism and commitment throughout our engagement.",
        photo:        "/assets/img/bg-img/50.jpg",
        order:        3,
    },
    {
        name:         "Peter Mwangi",
        organization: "NGO Sector",
        role:         "Monitoring & Evaluation Officer",
        quote:        "Their monitoring and evaluation support improved how we track our projects significantly.",
        photo:        "/assets/img/bg-img/48.jpg",
        order:        4,
    },
    {
        name:         "Grace Njeri",
        organization: "Community Trust",
        role:         "Executive Director",
        quote:        "Excellent consultancy services. They are reliable, knowledgeable, and truly professional.",
        photo:        "/assets/img/bg-img/49.jpg",
        order:        5,
    },
    {
        name:         "James Kariuki",
        organization: "Development Foundation",
        role:         "Operations Lead",
        quote:        "Working with them helped us scale our programs efficiently and effectively.",
        photo:        "/assets/img/bg-img/50.jpg",
        order:        6,
    },
];

const SERVICES = [
    {
        title:            "Claims Management Masterclass",
        slug:             "claims-management-masterclass",
        shortDescription: "A specialized, high-impact programme equipping insurance and financial services professionals with practical claims handling expertise.",
        fullDescription:  "A specialized, high-impact programme equipping insurance and financial services professionals with practical claims handling expertise.",
        coverImage:       "/assets/img/bg-img/8.jpg",
        order:            1,
        featured:         true,
    },
    {
        title:            "Modern Customer Service Training",
        slug:             "modern-customer-service-training",
        shortDescription: "A transformative programme designed to equip frontline staff and customer-facing teams with modern service excellence skills.",
        fullDescription:  "A transformative programme designed to equip frontline staff and customer-facing teams with modern service excellence skills.",
        coverImage:       "/assets/img/bg-img/9.jpg",
        order:            2,
        featured:         true,
    },
    {
        title:            "Retirement Readiness Programme",
        slug:             "retirement-readiness-programme",
        shortDescription: "A comprehensive financial and personal planning programme supporting employees in preparing for retirement.",
        fullDescription:  "A comprehensive financial and personal planning programme supporting employees in preparing for retirement.",
        coverImage:       "/assets/img/bg-img/10.jpg",
        order:            3,
        featured:         true,
    },
    {
        title:            "Administration Training",
        slug:             "administration-training",
        shortDescription: "A professional development programme building the competencies of administrative and office management staff.",
        fullDescription:  "A professional development programme building the competencies of administrative and office management staff.",
        coverImage:       "/assets/img/bg-img/11.jpg",
        order:            4,
        featured:         true,
    },
    {
        title:            "Modern Records Management Training",
        slug:             "modern-records-management-training",
        shortDescription: "An essential programme equipping professionals with the knowledge to design, implement, and manage records systems.",
        fullDescription:  "An essential programme equipping professionals with the knowledge to design, implement, and manage records systems.",
        coverImage:       "/assets/img/bg-img/12.jpg",
        order:            5,
        featured:         false,
    },
    {
        title:            "Finance Training",
        slug:             "finance-training",
        shortDescription: "Practical, scenario-based finance training building competence in budgeting, financial reporting, and public financial management.",
        fullDescription:  "Practical, scenario-based finance training building competence in budgeting, financial reporting, and public financial management.",
        coverImage:       "/assets/img/bg-img/55.jpg",
        order:            6,
        featured:         false,
    },
];

const PROCESS_STEPS = [
    { stepNumber: "01", title: "Needs Assessment", description: "We identify institutional gaps and training needs.",         order: 1 },
    { stepNumber: "02", title: "Data Collection",  description: "We gather relevant information for accurate planning.",      order: 2 },
    { stepNumber: "03", title: "Analysis & Review",description: "We assess performance gaps and improvement areas.",          order: 3 },
    { stepNumber: "04", title: "Implementation",   description: "We deliver tailored training and capacity solutions.",       order: 4 },
];

// ── Upsert helpers ────────────────────────────────────────────────────────────

async function upsertMany(Model, docs, matchFn, label) {
    let upserted = 0;
    for (const doc of docs) {
        const filter = matchFn(doc);
        const result = await Model.findOneAndUpdate(
            filter,
            { $set: doc },
            { upsert: true, returnDocument: "after", setDefaultsOnInsert: true }
        );
        // findOneAndUpdate returns null on insert (when returnDocument:"before" is default),
        // but with "after" it always returns the doc — so just count successes.
        upserted++;
    }
    console.log(`   ✅  ${label}: ${upserted} upserted`);
    return upserted;
}

// ── Main ──────────────────────────────────────────────────────────────────────

async function main() {
    console.log("\n🔌  Connecting to MongoDB...");
    await mongoose.connect(MONGODB_URI, { serverSelectionTimeoutMS: 15000 });
    console.log("    Connected.\n");

    console.log("🌱  Seeding content...\n");

    const totals = {};

    totals.TeamMember  = await upsertMany(TeamMember,  TEAM_MEMBERS,  (d) => ({ name: d.name }),                         "TeamMember  (matched on name)");
    totals.Testimonial = await upsertMany(Testimonial, TESTIMONIALS,  (d) => ({ name: d.name, quote: d.quote }),         "Testimonial (matched on name+quote)");
    totals.Service     = await upsertMany(Service,     SERVICES,      (d) => ({ slug: d.slug }),                         "Service     (matched on slug)");
    totals.ProcessStep = await upsertMany(ProcessStep, PROCESS_STEPS, (d) => ({ stepNumber: d.stepNumber }),             "ProcessStep (matched on stepNumber)");

    console.log("\n📊  Summary:");
    let grand = 0;
    for (const [model, count] of Object.entries(totals)) {
        console.log(`    ${model.padEnd(14)} ${count} docs`);
        grand += count;
    }
    console.log(`    ${"TOTAL".padEnd(14)} ${grand} docs`);

    await mongoose.disconnect();
    console.log("\n🔌  Disconnected.\n");
}

main().catch((err) => {
    console.error("\n❌  Seed failed:", err.message ?? err);
    mongoose.disconnect().finally(() => process.exit(1));
});
