/**
 * scripts/seedSampleContent.js
 *
 * Populates PLACEHOLDER / SAMPLE content for site preview purposes.
 * ──────────────────────────────────────────────────────────────────
 * ⚠️  THIS IS TEMPORARY PREVIEW CONTENT — NOT PRODUCTION CONTENT.
 *     It is designed to look professional and relevant so the client
 *     can visualise the finished site. All content should be reviewed
 *     and replaced via the admin dashboard before going live.
 * ──────────────────────────────────────────────────────────────────
 *
 * Safe to re-run: every write uses findOneAndUpdate with upsert:true,
 * matched on a natural unique field (slug, question, or name).
 *
 * Usage:  npm run seed:sample
 *
 * Models seeded: FAQ, BlogPost, Project, ClientLogo, Event
 * Models skipped: TeamMember, Testimonial, Service, ProcessStep
 *   (those already have real content from seedContent.js — do NOT overwrite)
 */

"use strict";

const fs   = require("fs");
const path = require("path");

// ── Load .env.local ──────────────────────────────────────────────────────────
function loadEnvFile(filePath) {
    if (!fs.existsSync(filePath)) throw new Error(".env.local not found at: " + filePath);
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

const envPath  = path.resolve(__dirname, "..", ".env.local");
const envCount = loadEnvFile(envPath);
console.log(`📂  Loaded ${envCount} vars from .env.local`);

const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) { console.error("❌  MONGODB_URI not set"); process.exit(1); }

// ── Mongoose (inline schemas to avoid TS compilation) ────────────────────────
const mongoose              = require("mongoose");
const { Schema, models, model } = mongoose;

const FAQSchema = new Schema(
    { question: { type: String, required: true }, answer: { type: String, required: true }, order: { type: Number, default: 0 } },
    { timestamps: true }
);

const BlogPostSchema = new Schema(
    {
        title:       { type: String, required: true },
        slug:        { type: String, required: true, unique: true },
        excerpt:     { type: String, required: true },
        body:        { type: String, required: true },
        coverImage:  { type: String, required: true },
        category:    { type: String },
        author:      { type: String },
        publishedAt: { type: Date, default: Date.now },
        seoTitle:    { type: String },
        seoDescription: { type: String },
    },
    { timestamps: true }
);

const ProjectSchema = new Schema(
    {
        title:       { type: String, required: true },
        slug:        { type: String, required: true, unique: true },
        category:    { type: String },
        description: { type: String, required: true },
        coverImage:  { type: String, required: true },
        images:      { type: [String], default: [] },
        client:      { type: String },
        year:        { type: String },
    },
    { timestamps: true }
);

const ClientLogoSchema = new Schema(
    { name: { type: String, required: true }, logo: { type: String, required: true }, order: { type: Number, default: 0 } },
    { timestamps: true }
);

const EventSchema = new Schema(
    {
        title:            { type: String, required: true },
        slug:             { type: String, required: true, unique: true },
        date:             { type: Date, required: true },
        time:             { type: String },
        location:         { type: String },
        description:      { type: String, required: true },
        category:         { type: String, required: true, enum: ["Short Courses", "Workshops", "Seminars", "Conferences"] },
        price:            { type: String },
        registrationLink: { type: String },
        coverImage:       { type: String, required: true },
        featured:         { type: Boolean, default: false },
    },
    { timestamps: true }
);

const FAQ        = models.FAQ        || model("FAQ",        FAQSchema);
const BlogPost   = models.BlogPost   || model("BlogPost",   BlogPostSchema);
const Project    = models.Project    || model("Project",    ProjectSchema);
const ClientLogo = models.ClientLogo || model("ClientLogo", ClientLogoSchema);
const Event      = models.Event      || model("Event",      EventSchema);

// ── Seed data ─────────────────────────────────────────────────────────────────

// ── 1. FAQs ──────────────────────────────────────────────────────────────────
const FAQS = [
    {
        question: "Is SITRAC accredited and are your certificates recognised?",
        answer:   "Yes. SITRAC is a duly registered training and consultancy institution operating under the relevant Kenyan regulatory frameworks. Our certificates of completion are recognised by partner organisations, government agencies, and professional bodies across the region. Participants who require formal academic recognition for specific professional bodies should confirm eligibility requirements with the relevant body prior to enrolment.",
        order:    1,
    },
    {
        question: "How do I enrol in a training programme?",
        answer:   "You can enrol by visiting our Events page to view upcoming scheduled programmes and clicking the registration link for your preferred course. For bespoke or in-house training, contact us directly via our Contact page or email us at info@sitractraininginstitute.co.ke. Our team will guide you through the enrolment process, confirm availability, and issue a confirmation letter upon payment.",
        order:    2,
    },
    {
        question: "Do you offer corporate or group training packages?",
        answer:   "Absolutely. We work extensively with organisations — including county governments, NGOs, financial institutions, and private sector firms — to design and deliver customised in-house training programmes. Corporate packages often include tailored content, flexible scheduling, and on-site delivery at your premises. Contact our team to request a proposal and discuss your organisation's specific capacity building needs.",
        order:    3,
    },
    {
        question: "What is your payment and refund policy?",
        answer:   "Full payment is required prior to the commencement of training. We accept bank transfer, M-Pesa, and cheque payments. If you need to withdraw from a programme, cancellations made more than 5 business days before the start date are eligible for a full refund or credit towards a future programme. Cancellations within 5 business days will incur a 30% administrative fee. Substitutions (sending a colleague in your place) are accepted at any time at no additional charge.",
        order:    4,
    },
    {
        question: "How long are SITRAC certificates valid?",
        answer:   "SITRAC certificates of completion do not expire — they reflect skills and competencies acquired at a specific point in time. However, for fast-evolving fields such as digital records management, public financial management, and customer service, we recommend participants attend refresher or advanced programmes every 2–3 years to stay current with sector developments and regulatory changes.",
        order:    5,
    },
    {
        question: "Can training be delivered virtually or online?",
        answer:   "Yes. We offer both in-person and virtual delivery options for most of our standard programmes. Virtual sessions are conducted via Zoom or Microsoft Teams, with the same level of facilitation, materials, and assessment as our in-person courses. Hybrid formats (blended in-person and virtual cohorts) can also be arranged for large organisations. Please indicate your preferred delivery mode when registering or requesting a proposal.",
        order:    6,
    },
];

// ── 2. Blog Posts ─────────────────────────────────────────────────────────────
const BLOG_POSTS = [
    {
        title:      "5 Skills Every Modern Public Servant Needs in 2026",
        slug:       "5-skills-every-modern-public-servant-needs-2026",
        excerpt:    "The public sector is transforming rapidly. Here are the five competencies that separate effective public servants from those being left behind.",
        body:       `The world of public service has changed dramatically over the past decade. Citizens now expect faster, more transparent, and digitally accessible services. Yet many public institutions still operate on outdated systems, processes, and mindsets. Investing in the right competencies is no longer optional — it is a governance imperative.

**1. Digital Literacy and E-Government Readiness**
Public servants who cannot navigate digital systems are increasingly unable to serve their constituents effectively. From integrated financial management systems to online service portals, digital literacy is now a baseline requirement across all cadres of government service. Institutions that invest in targeted digital skills training see measurable improvements in service delivery turnaround times.

**2. Data-Driven Decision Making**
Modern governance relies on evidence. Public servants must understand how to collect, analyse, and interpret data to inform policy, allocate resources, and evaluate programme impact. This does not require advanced statistical expertise — but it does require familiarity with basic data tools, reporting frameworks, and logical analysis skills that can be built through structured training.

**3. Ethical Leadership and Anti-Corruption Awareness**
Trust in public institutions depends heavily on the ethical conduct of their staff. Training in public sector ethics, conflict of interest management, and whistle-blower protection is critical at all levels. Organisations that embed ethics into their induction and professional development programmes consistently report stronger accountability cultures.

**4. Communication and Stakeholder Engagement**
Effective public servants must communicate clearly — in writing, verbally, and increasingly through digital channels. Whether preparing Cabinet memos, facilitating public participation forums, or managing media inquiries, strong communication skills are essential. Training should cover report writing, presentation skills, and community engagement techniques relevant to the Kenyan public sector context.

**5. Records and Knowledge Management**
Poor records management costs institutions money, exposes them to legal risk, and erodes institutional memory. Modern records management — including electronic document management systems, archiving protocols, and information security practices — is a critical competency for any public servant handling official correspondence, contracts, or financial documentation.

At SITRAC, we offer structured programmes in all five of these competency areas. Contact us to discuss how we can help your team build the skills required for effective public service delivery in 2026 and beyond.`,
        coverImage:  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
        category:    "Capacity Building",
        author:      "SITRAC Editorial Team",
        publishedAt: new Date("2026-06-10"),
        seoTitle:    "5 Skills Every Modern Public Servant Needs in 2026 | SITRAC",
        seoDescription: "Discover the five critical competencies that modern public servants need to deliver effective, accountable, and digitally-ready government services.",
    },
    {
        title:      "How Effective Records Management Protects Your Institution",
        slug:       "how-effective-records-management-protects-your-institution",
        excerpt:    "Weak records management doesn't just create administrative headaches — it exposes organisations to legal liability, audit failures, and lost institutional knowledge.",
        body:       `Records management is one of the most underestimated functions in any institution. When it works well, nobody notices. When it fails, the consequences can be severe — from failed audits and procurement disputes to the complete loss of organisational memory when key staff members leave.

**The Legal and Compliance Dimension**
Every Kenyan public institution is governed by the Kenya National Archives and Documentation Service Act, the Public Finance Management Act, and a range of sector-specific regulations that prescribe how long different categories of records must be retained. Failure to maintain compliant records exposes institutions to adverse audit findings, legal liability, and reputational damage. A well-implemented records management programme addresses these risks systematically.

**Institutional Memory and Knowledge Continuity**
One of the most overlooked costs of poor records management is the loss of institutional knowledge when staff transition. When correspondence, decisions, contracts, and project reports are not properly indexed, classified, and stored, successor staff cannot build on prior work. This leads to duplication of effort, policy inconsistencies, and avoidable errors. Strong records systems create continuity across leadership changes.

**The Digital Transition: Opportunity and Risk**
Many organisations are transitioning from paper-based to electronic records management. This transition brings efficiency gains but also introduces new risks — including inadequate digital preservation formats, loss of audit trails, and cybersecurity vulnerabilities. Effective digital records management requires both technical implementation and staff training to ensure that new systems are used correctly and consistently.

**What Good Records Management Looks Like**
Leading institutions classify records by category and sensitivity, establish clear retention and disposal schedules, train all staff on filing protocols, and conduct periodic compliance audits. They also designate trained records officers who serve as internal champions and points of expertise. SITRAC's Modern Records Management Training programme is designed to equip records officers and administrative staff with exactly these capabilities.

Whether your organisation is just beginning to formalise its records function or is looking to upgrade an existing system, investing in structured records management training delivers measurable returns in compliance, efficiency, and institutional resilience.`,
        coverImage:  "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
        category:    "Records Management",
        author:      "SITRAC Editorial Team",
        publishedAt: new Date("2026-06-25"),
        seoTitle:    "How Effective Records Management Protects Your Institution | SITRAC",
        seoDescription: "Explore why records management is critical for legal compliance, audit readiness, and preserving institutional knowledge in Kenyan organisations.",
    },
    {
        title:      "The Real Cost of Neglecting Customer Service Training",
        slug:       "the-real-cost-of-neglecting-customer-service-training",
        excerpt:    "Poor customer service is expensive — not just in lost clients, but in staff morale, complaint handling costs, and long-term reputational damage.",
        body:       `Organisations often view customer service training as a discretionary expense — something to invest in when budgets allow. This perspective is fundamentally mistaken. The cost of poor customer service — in lost revenue, complaint resolution, staff turnover, and reputational damage — consistently exceeds the cost of investing in frontline service excellence training.

**The Numbers Don't Lie**
Research across service sectors consistently shows that acquiring a new customer costs five to seven times more than retaining an existing one. Poor service interactions are a primary driver of customer attrition. In the public sector, poor service erodes citizen trust and increases the volume of formal complaints, appeals, and media scrutiny — all of which consume institutional resources far beyond the cost of effective frontline training.

**Staff Morale and Retention**
Frontline staff who receive inadequate training to handle difficult customer interactions experience higher levels of stress, burnout, and disengagement. High turnover in customer-facing roles creates a vicious cycle — new, untrained staff deliver inconsistent service, leading to more complaints, which further demoralises existing staff. Organisations that invest in customer service training report lower turnover rates and higher staff satisfaction scores in service roles.

**The Service Recovery Opportunity**
Organisations often lose customers not because of initial service failures, but because of how those failures are handled. Effective service recovery — acknowledging the issue, empathising, and resolving it promptly — can actually increase customer loyalty compared to situations where no problem occurred. Training frontline staff in service recovery techniques is one of the highest-ROI investments an organisation can make.

**Building a Service Culture, Not Just Compliance**
The most effective customer service programmes go beyond procedures and scripts. They build a genuine service culture — where staff understand the purpose behind service standards, feel empowered to resolve issues, and take personal ownership of customer outcomes. SITRAC's Modern Customer Service Training programme is designed to achieve exactly this cultural shift, combining skills development with attitudinal transformation.

If your organisation is experiencing declining satisfaction scores, rising complaint volumes, or high frontline turnover, the root cause is almost always a training and development gap — not a staffing problem. The solution starts with investment, not recruitment.`,
        coverImage:  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800",
        category:    "Customer Service",
        author:      "SITRAC Editorial Team",
        publishedAt: new Date("2026-07-05"),
        seoTitle:    "The Real Cost of Neglecting Customer Service Training | SITRAC",
        seoDescription: "Understand the true financial and reputational cost of poor customer service — and why frontline training is the most cost-effective investment.",
    },
    {
        title:      "Why Retirement Planning Should Start Earlier Than You Think",
        slug:       "why-retirement-planning-should-start-earlier-than-you-think",
        excerpt:    "Most employees begin thinking about retirement planning too late. The earlier you start, the more options — and financial security — you create.",
        body:       `Retirement planning is one of those topics that feels distant and abstract until it suddenly becomes urgent. The challenge is that by the time urgency sets in, the window for effective planning has significantly narrowed. Whether you are an employer designing employee benefits programmes or an individual professional, the message is consistent: start earlier than feels necessary.

**The Compounding Advantage**
The most powerful force in retirement planning is compound growth. An employee who begins contributing to a pension scheme at age 30 will accumulate dramatically more than one who begins at 45 — not just because of more years of contributions, but because each year's returns generate their own returns. Even modest monthly contributions, started early, can produce a retirement fund that far exceeds the expectations of a late starter making larger contributions.

**Beyond Finances: The Emotional and Practical Dimensions**
Effective retirement planning is not purely financial. It also involves planning for the transition itself — the psychological shift from a structured working life to retirement, the social dimensions of leaving a professional community, and the practical questions of healthcare, housing, and post-retirement purpose. Organisations that support employees through this transition — not just with pension schemes but with holistic readiness programmes — report significantly smoother transitions and less productivity disruption in the lead-up to retirement.

**The Employer's Role**
Forward-thinking organisations recognise that supporting employee retirement readiness is both a duty of care and a strategic investment. Employees who feel financially secure and prepared for retirement are less distracted and more productive in their final working years. They are also more likely to engage in formal knowledge transfer, reducing the institutional memory risk associated with retirement transitions.

**What a Good Retirement Readiness Programme Covers**
SITRAC's Retirement Readiness Programme addresses the full spectrum of retirement preparation — from pension and investment planning to lifestyle planning, healthcare considerations, and the legal aspects of estate management. The programme is designed for employees in the three to ten year pre-retirement window and is regularly customised for organisations seeking to support their senior staff cohorts.

If you are an HR or training manager considering how to support your pre-retirement employees, or an individual professional wondering whether it is too late to start planning, the answer is the same: now is the right time to begin.`,
        coverImage:  "https://images.unsplash.com/photo-1559526324-593bc073d938?w=800",
        category:    "Financial Planning",
        author:      "SITRAC Editorial Team",
        publishedAt: new Date("2026-07-12"),
        seoTitle:    "Why Retirement Planning Should Start Earlier Than You Think | SITRAC",
        seoDescription: "Learn why early retirement planning is critical — and how SITRAC's Retirement Readiness Programme helps employees and organisations prepare effectively.",
    },
];

// ── 3. Projects ───────────────────────────────────────────────────────────────
const PROJECTS = [
    {
        title:       "County Government Institutional Capacity Assessment",
        slug:        "county-government-institutional-capacity-assessment",
        category:    "Institutional Development",
        description: "A comprehensive institutional capacity assessment conducted for a devolved county government in the Rift Valley region, covering governance structures, human resource management, financial systems, and service delivery mechanisms. The assessment produced a detailed capacity development roadmap with prioritised interventions, which was subsequently adopted as the county's five-year institutional development plan.",
        coverImage:  "https://images.unsplash.com/photo-1462206092226-f46025ffe607?w=800",
        client:      "A county government in the Rift Valley region, Kenya",
        year:        "2025",
    },
    {
        title:       "NGO Financial Management Training Programme",
        slug:        "ngo-financial-management-training-programme",
        category:    "Training & Capacity Building",
        description: "A structured five-day financial management training programme delivered to finance and programme staff of a national NGO network operating across twelve counties. The programme covered donor compliance, financial reporting standards, internal controls, and fraud prevention — equipping 48 participants with practical skills directly applicable to their roles.",
        coverImage:  "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800",
        client:      "A national NGO network operating across multiple Kenyan counties",
        year:        "2025",
    },
    {
        title:       "Public Sector Digital Transformation Workshop Series",
        slug:        "public-sector-digital-transformation-workshop-series",
        category:    "Digital Governance",
        description: "A series of six facilitated workshops designed to support a national government parastatal in developing its digital transformation strategy. The workshops brought together senior leadership, IT staff, and frontline service staff to co-create a digital roadmap aligned with Kenya's national e-government agenda, resulting in a phased implementation plan endorsed by the institution's board.",
        coverImage:  "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800",
        client:      "A national government parastatal in the financial services sector",
        year:        "2026",
    },
    {
        title:       "Youth Employment Skills Initiative",
        slug:        "youth-employment-skills-initiative",
        category:    "Youth Development",
        description: "A six-week skills development programme targeting 120 unemployed youth aged 18–35 in peri-urban Nairobi, covering entrepreneurship, financial literacy, customer service, and digital skills. The programme was designed in partnership with a donor-funded development foundation and incorporated practical business development support alongside classroom instruction, with 68% of participants reporting income-generating activity six months post-training.",
        coverImage:  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800",
        client:      "A donor-funded youth development foundation operating in Nairobi",
        year:        "2024",
    },
    {
        title:       "National Records Digitisation and Management Programme",
        slug:        "national-records-digitisation-management-programme",
        category:    "Records Management",
        description: "An end-to-end records digitisation and management programme for a national regulatory body, encompassing policy development, staff training, system implementation support, and compliance audit. SITRAC developed the institution's records management policy framework, trained 35 records and administrative staff, and supported the migration of over 12,000 physical records to a structured electronic document management system.",
        coverImage:  "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800",
        client:      "A national regulatory body in the professional services sector, Kenya",
        year:        "2024",
    },
];

// ── 4. Client Logos ───────────────────────────────────────────────────────────
// NOTE: These are structural placeholders. The client should replace these
// with real partner/client organisation logos via the admin dashboard.
// Using abstract/minimal Unsplash images as visual stand-ins.
const CLIENT_LOGOS = [
    {
        name:  "Partner Organisation 1",
        logo:  "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300",
        order: 1,
    },
    {
        name:  "Partner Organisation 2",
        logo:  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=300",
        order: 2,
    },
    {
        name:  "Partner Organisation 3",
        logo:  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=300",
        order: 3,
    },
    {
        name:  "Partner Organisation 4",
        logo:  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=300",
        order: 4,
    },
    {
        name:  "Partner Organisation 5",
        logo:  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300",
        order: 5,
    },
    {
        name:  "Partner Organisation 6",
        logo:  "https://images.unsplash.com/photo-1462206092226-f46025ffe607?w=300",
        order: 6,
    },
];

// ── 5. Events ─────────────────────────────────────────────────────────────────
// Dates spread across August–October 2026 (2–3 months from July 2026)
const EVENTS = [
    {
        title:       "Public Financial Management Masterclass",
        slug:        "public-financial-management-masterclass-aug-2026",
        date:        new Date("2026-08-12"),
        time:        "08:30 AM – 05:00 PM",
        location:    "Sarova Stanley Hotel, Nairobi, Kenya",
        description: "A two-day intensive masterclass for finance officers, accountants, and budget managers in public sector institutions. Participants will gain practical skills in PFM frameworks, IPSAS compliance, financial reporting, and internal controls under Kenya's Public Finance Management Act.\n\nThe programme is facilitated by experienced public finance practitioners and includes case studies drawn from real Kenyan county and national government scenarios. Participants receive a certificate of completion and comprehensive reference materials.",
        category:    "Short Courses",
        price:       "KES 35,000 per participant",
        registrationLink: "https://www.sitractraininginstitute.co.ke/contact",
        coverImage:  "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800",
        featured:    true,
    },
    {
        title:       "Modern Customer Service Excellence Workshop",
        slug:        "modern-customer-service-excellence-workshop-aug-2026",
        date:        new Date("2026-08-26"),
        time:        "09:00 AM – 04:30 PM",
        location:    "Nairobi, Kenya",
        description: "A focused one-day workshop for frontline service staff, supervisors, and team leaders seeking to build practical customer service and service recovery skills. This interactive session combines skills training with attitudinal development, helping participants understand the connection between service quality, customer retention, and organisational reputation.\n\nThe workshop uses role-play scenarios, group exercises, and real-world case studies tailored to the Kenyan service environment. Suitable for both public and private sector participants.",
        category:    "Workshops",
        price:       "KES 18,000 per participant",
        registrationLink: "https://www.sitractraininginstitute.co.ke/contact",
        coverImage:  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800",
        featured:    false,
    },
    {
        title:       "Governance, Ethics and Accountability Seminar",
        slug:        "governance-ethics-accountability-seminar-sep-2026",
        date:        new Date("2026-09-18"),
        time:        "09:00 AM – 01:00 PM",
        location:    "Crowne Plaza Hotel, Nairobi, Kenya",
        description: "A half-day seminar for senior managers, board members, and governance professionals on ethical leadership, accountability frameworks, and anti-corruption practices in the Kenyan institutional context. The seminar features presentations from governance practitioners, panel discussions, and interactive breakout sessions.\n\nParticipants will leave with a clearer understanding of their governance obligations under Kenya's legal and regulatory framework, and practical tools for embedding ethical culture within their institutions.",
        category:    "Seminars",
        price:       "KES 12,000 per participant",
        registrationLink: "https://www.sitractraininginstitute.co.ke/contact",
        coverImage:  "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
        featured:    true,
    },
    {
        title:       "5th Annual East Africa Capacity Building Conference",
        slug:        "5th-annual-east-africa-capacity-building-conference-oct-2026",
        date:        new Date("2026-10-08"),
        time:        "08:00 AM – 06:00 PM",
        location:    "Kenyatta International Convention Centre (KICC), Nairobi, Kenya",
        description: "SITRAC's flagship annual conference bringing together training professionals, institutional development practitioners, government officials, NGO leaders, and development partners from across East Africa. The 2026 conference theme is 'Building Institutions That Last: Sustainability, Systems, and People.'\n\nThe conference features keynote addresses from regional leaders, parallel technical sessions, a research paper presentation track, an exhibition of institutional development tools and resources, and a networking dinner. Early-bird registration is available until 31 August 2026.",
        category:    "Conferences",
        price:       "KES 55,000 per participant (early bird: KES 45,000 before 31 Aug)",
        registrationLink: "https://www.sitractraininginstitute.co.ke/contact",
        coverImage:  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
        featured:    false,
    },
];

// ── Upsert helper (same as seedContent.js) ───────────────────────────────────
async function upsertMany(Model, docs, matchFn, label) {
    let upserted = 0;
    for (const doc of docs) {
        await Model.findOneAndUpdate(
            matchFn(doc),
            { $set: doc },
            { upsert: true, returnDocument: "after", setDefaultsOnInsert: true }
        );
        upserted++;
    }
    console.log(`   ✅  ${label}: ${upserted} upserted`);
    return upserted;
}

// ── Main ──────────────────────────────────────────────────────────────────────
async function main() {
    console.log("\n⚠️   REMINDER: This script seeds PLACEHOLDER / SAMPLE content.");
    console.log("    It is designed for site preview only — NOT for production use.");
    console.log("    Replace all content via the admin dashboard before going live.\n");

    console.log("🔌  Connecting to MongoDB...");
    await mongoose.connect(MONGODB_URI, { serverSelectionTimeoutMS: 15000 });
    console.log("    Connected.\n");

    console.log("🌱  Seeding sample content...\n");
    console.log("    Skipping: TeamMember, Testimonial, Service, ProcessStep");
    console.log("    (those have real content from seedContent.js)\n");

    const totals = {};
    totals.FAQ        = await upsertMany(FAQ,        FAQS,         (d) => ({ question: d.question }),  "FAQ         (matched on question)");
    totals.BlogPost   = await upsertMany(BlogPost,   BLOG_POSTS,   (d) => ({ slug: d.slug }),           "BlogPost    (matched on slug)    ");
    totals.Project    = await upsertMany(Project,    PROJECTS,     (d) => ({ slug: d.slug }),           "Project     (matched on slug)    ");
    totals.ClientLogo = await upsertMany(ClientLogo, CLIENT_LOGOS, (d) => ({ name: d.name }),           "ClientLogo  (matched on name)    ");
    totals.Event      = await upsertMany(Event,      EVENTS,       (d) => ({ slug: d.slug }),           "Event       (matched on slug)    ");

    console.log("\n📊  Summary:");
    let grand = 0;
    for (const [modelName, count] of Object.entries(totals)) {
        console.log(`    ${modelName.padEnd(14)} ${count} docs`);
        grand += count;
    }
    console.log(`    ${"TOTAL".padEnd(14)} ${grand} docs`);

    console.log("\n⚠️   All seeded content is PLACEHOLDER for preview purposes.");
    console.log("    Replace via the admin dashboard before the site goes live.");
    console.log("    Client logos in particular need replacing with real partner logos.\n");

    await mongoose.disconnect();
    console.log("🔌  Disconnected.\n");
}

main().catch((err) => {
    console.error("\n❌  Seed failed:", err.message ?? err);
    mongoose.disconnect().finally(() => process.exit(1));
});
