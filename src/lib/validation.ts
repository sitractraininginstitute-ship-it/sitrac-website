import { z } from "zod";

export const serviceSchema = z.object({
    title:            z.string().min(1),
    slug:             z.string().min(1),
    shortDescription: z.string().min(1),
    fullDescription:  z.string().min(1),
    coverImage:       z.string().min(1),
    category:         z.string().optional(),
    duration:         z.string().optional(),
    price:            z.string().optional(),
    featured:         z.boolean().optional(),
    order:            z.number().optional(),
    seoTitle:         z.string().optional(),
    seoDescription:   z.string().optional(),
});

export type ServiceInput = z.infer<typeof serviceSchema>;

// ── BlogPost ──────────────────────────────────────────────────────────────────

export const blogPostSchema = z.object({
    title:          z.string().min(1),
    slug:           z.string().min(1),
    excerpt:        z.string().min(1),
    body:           z.string().min(1),
    coverImage:     z.string().min(1),
    category:       z.string().optional(),
    author:         z.string().optional(),
    publishedAt:    z.string().optional(), // ISO date string — Mongoose converts to Date
    seoTitle:       z.string().optional(),
    seoDescription: z.string().optional(),
});

export type BlogPostInput = z.infer<typeof blogPostSchema>;

// ── Project ───────────────────────────────────────────────────────────────────

export const projectSchema = z.object({
    title:       z.string().min(1),
    slug:        z.string().min(1),
    category:    z.string().optional(),
    description: z.string().min(1),
    coverImage:  z.string().min(1),
    images:      z.array(z.string()).optional(),
    client:      z.string().optional(),
    year:        z.string().optional(),
});

export type ProjectInput = z.infer<typeof projectSchema>;

// ── Event ─────────────────────────────────────────────────────────────────────

export const eventSchema = z.object({
    title:            z.string().min(1),
    slug:             z.string().min(1),
    date:             z.string().min(1), // ISO date string — Mongoose converts to Date
    time:             z.string().optional(),
    location:         z.string().optional(),
    description:      z.string().min(1),
    category:         z.enum(["Short Courses", "Workshops", "Seminars", "Conferences"]),
    price:            z.string().optional(),
    registrationLink: z.string().optional(),
    coverImage:       z.string().min(1),
    featured:         z.boolean().optional(),
    // Optional PDF attachment (brochure / info sheet)
    attachmentUrl:    z.string().optional(),
    attachmentName:   z.string().optional(),
});

export type EventInput = z.infer<typeof eventSchema>;

// ── TeamMember ────────────────────────────────────────────────────────────────

export const teamMemberSchema = z.object({
    name:        z.string().min(1),
    role:        z.string().min(1),
    bio:         z.string().optional(),
    photo:       z.string().min(1),
    order:       z.number().optional(),
    socialLinks: z.array(z.object({ platform: z.string(), url: z.string() })).optional(),
});

export type TeamMemberInput = z.infer<typeof teamMemberSchema>;

// ── Testimonial ───────────────────────────────────────────────────────────────

export const testimonialSchema = z.object({
    name:         z.string().min(1),
    role:         z.string().optional(),
    organization: z.string().optional(),
    quote:        z.string().min(1),
    photo:        z.string().optional(),
    order:        z.number().optional(),
});

export type TestimonialInput = z.infer<typeof testimonialSchema>;

// ── FAQ ───────────────────────────────────────────────────────────────────────

export const faqSchema = z.object({
    question: z.string().min(1),
    answer:   z.string().min(1),
    order:    z.number().optional(),
});

export type FAQInput = z.infer<typeof faqSchema>;

// ── ClientLogo ────────────────────────────────────────────────────────────────

export const clientLogoSchema = z.object({
    name:  z.string().min(1),
    logo:  z.string().min(1),
    order: z.number().optional(),
});

export type ClientLogoInput = z.infer<typeof clientLogoSchema>;

// ── ProcessStep ───────────────────────────────────────────────────────────────

export const processStepSchema = z.object({
    stepNumber:  z.string().min(1),
    title:       z.string().min(1),
    description: z.string().min(1),
    order:       z.number().optional(),
});

export type ProcessStepInput = z.infer<typeof processStepSchema>;

// ── PageContent ───────────────────────────────────────────────────────────────

export const PAGE_KEYS = ["home", "about", "contact"] as const;
export type PageKey = typeof PAGE_KEYS[number];

export const pageContentSchema = z.object({
    heroTitle:    z.string().optional(),
    heroSubtitle: z.string().optional(),
    stats:        z.array(z.object({ label: z.string(), value: z.string() })).optional(),
    extra:        z.any().optional(),
});

export type PageContentInput = z.infer<typeof pageContentSchema>;

// ── ContactMessage ────────────────────────────────────────────────────────────

export const contactMessageSchema = z.object({
    name:    z.string().min(1),
    email:   z.string().email(),
    service: z.string().optional(),
    message: z.string().min(1),
});

export type ContactMessageInput = z.infer<typeof contactMessageSchema>;

// Mark-as-read schema (admin only — PATCH /api/contact/[id])
export const markReadSchema = z.object({ read: z.boolean() });
