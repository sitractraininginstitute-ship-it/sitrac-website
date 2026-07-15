import { notFound }        from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";
import type { Metadata }   from "next";
import Image               from "next/image";
import Link                from "next/link";
import Breadcrumb          from "@/components/Breadcrumb";
import CtaSectionOne       from "@/components/sections/CtaSectionOne";
import { connectToDatabase } from "@/lib/mongodb";
import EventModel          from "@/models/Event";

// ── Types ─────────────────────────────────────────────────────────────────────

type Category = "Short Courses" | "Workshops" | "Seminars" | "Conferences";

interface EventDoc {
    _id:              string;
    title:            string;
    slug:             string;
    date:             string;
    time?:            string;
    location?:        string;
    description:      string;
    category:         Category;
    price?:           string;
    registrationLink?: string;
    coverImage:       string;
    featured:         boolean;
}

type PageProps = { params: Promise<{ slug: string }> };

// ── generateMetadata ──────────────────────────────────────────────────────────

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    try {
        await connectToDatabase();
        const doc = await EventModel.findOne({ slug })
            .select("title description coverImage date category")
            .lean() as { title?: string; description?: string; coverImage?: string } | null;
        if (!doc) return { title: "Event Not Found" };

        const title       = doc.title as string;
        const description = (doc.description as string).slice(0, 155) +
            ((doc.description as string).length > 155 ? "…" : "");
        const image = doc.coverImage as string | undefined;

        return {
            title,
            description,
            openGraph: {
                title:       `${title} | SITRAC`,
                description,
                type:        "article",
                url:         `https://www.sitractraininginstitute.co.ke/events/${slug}`,
                ...(image ? { images: [{ url: image, alt: title }] } : {}),
            },
        };
    } catch {
        return { title: "Event" };
    }
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function fmtDate(iso: string): string {
    return new Date(iso).toLocaleDateString("en-GB", {
        day: "numeric", month: "long", year: "numeric",
    });
}

const CATEGORY_COLORS: Record<string, string> = {
    "Short Courses": "#3b82f6",
    "Workshops":     "#8b5cf6",
    "Seminars":      "#f59e0b",
    "Conferences":   "#059669",
};

const SAFE_IMAGE_HOSTS = ["res.cloudinary.com", "images.unsplash.com"];
function isSafeImageUrl(url: string): boolean {
    try {
        const { hostname } = new URL(url);
        return SAFE_IMAGE_HOSTS.some(h => hostname === h || hostname.endsWith("." + h));
    } catch { return false; }
}

// ── Page component ────────────────────────────────────────────────────────────

export default async function EventDetailPage({ params }: PageProps) {
    noStore();
    const { slug } = await params;

    await connectToDatabase();

    // Fetch the target event
    const raw = await EventModel.findOne({ slug }).lean() as Record<string, unknown> | null;
    if (!raw) notFound();

    const event: EventDoc = {
        _id:              String(raw._id),
        title:            raw.title            as string,
        slug:             raw.slug             as string,
        date:             (raw.date as Date).toISOString(),
        time:             raw.time             as string | undefined,
        location:         raw.location         as string | undefined,
        description:      raw.description      as string,
        category:         raw.category         as Category,
        price:            raw.price            as string | undefined,
        registrationLink: raw.registrationLink as string | undefined,
        coverImage:       raw.coverImage       as string,
        featured:         Boolean(raw.featured),
    };

    // Related events: same category first, then soonest upcoming, max 3
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const allOtherRaw = await EventModel
        .find({ _id: { $ne: raw._id }, date: { $gte: today } })
        .sort({ date: 1 })
        .lean() as Record<string, unknown>[];

    const toDoc = (r: Record<string, unknown>): EventDoc => ({
        _id:              String(r._id),
        title:            r.title            as string,
        slug:             r.slug             as string,
        date:             (r.date as Date).toISOString(),
        time:             r.time             as string | undefined,
        location:         r.location         as string | undefined,
        description:      r.description      as string,
        category:         r.category         as Category,
        price:            r.price            as string | undefined,
        registrationLink: r.registrationLink as string | undefined,
        coverImage:       r.coverImage       as string,
        featured:         Boolean(r.featured),
    });

    const sameCategory = allOtherRaw.filter(r => r.category === event.category).slice(0, 3);
    const needed       = 3 - sameCategory.length;
    const fallback     = needed > 0
        ? allOtherRaw.filter(r => r.category !== event.category).slice(0, needed)
        : [];
    const related      = [...sameCategory, ...fallback].map(toDoc);

    const breadcrumbItems = [
        { label: "Events", href: "/events" },
        { label: event.title },
    ];

    const categoryColor = CATEGORY_COLORS[event.category] ?? "#6b7280";

    return (
        <>
            <Breadcrumb title={event.title} items={breadcrumbItems} />

            {/* ── Main two-column layout ─────────────────────────────────── */}
            <div className="divider" />
            <div className="container" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
                <div className="row g-5">

                    {/* ── Left: hero + description ──────────────────────── */}
                    <div className="col-12 col-lg-8">

                        {/* Hero image */}
                        <div style={{
                            position: "relative", height: "420px", overflow: "hidden",
                            borderRadius: "16px", marginBottom: "2rem",
                            background: "#f3f4f6",
                            display: "flex", alignItems: "center", justifyContent: "center",
                        }}>
                            {isSafeImageUrl(event.coverImage) ? (
                                <Image
                                    src={event.coverImage}
                                    alt={event.title}
                                    fill
                                    style={{ objectFit: "cover" }}
                                    priority
                                />
                            ) : (
                                <i className="ti ti-calendar-event"
                                   style={{ fontSize: "4rem", color: "#d1d5db" }} />
                            )}
                            {event.featured && (
                                <div style={{
                                    position: "absolute", top: "1rem", left: "1rem",
                                    background: "#BDE162", color: "#052E26",
                                    padding: "0.3rem 0.8rem", borderRadius: "20px",
                                    fontSize: "0.72rem", fontWeight: 800, letterSpacing: "0.07em",
                                }}>
                                    FEATURED
                                </div>
                            )}
                            {/* Category badge overlapping bottom of hero */}
                            <div style={{
                                position: "absolute", bottom: "1rem", left: "1rem",
                                background: `${categoryColor}e6`,
                                color: "#fff",
                                padding: "0.3rem 0.9rem", borderRadius: "20px",
                                fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.05em",
                                backdropFilter: "blur(4px)",
                            }}>
                                {event.category}
                            </div>
                        </div>

                        {/* Title */}
                        <h1 style={{
                            fontSize: "clamp(1.5rem, 3vw, 2.1rem)",
                            fontWeight: 800, color: "#111827",
                            lineHeight: 1.25, marginBottom: "1.5rem",
                        }}>
                            {event.title}
                        </h1>

                        {/* Description */}
                        <div style={{ marginBottom: "2rem" }}>
                            <h2 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#111827", marginBottom: "0.75rem" }}>
                                About This Event
                            </h2>
                            {event.description.split("\n\n").map((para, i) => (
                                <p key={i} style={{ color: "#374151", lineHeight: 1.8, marginBottom: "1rem", fontSize: "0.97rem" }}>
                                    {para}
                                </p>
                            ))}
                        </div>

                        {/* Back link */}
                        <Link
                            href="/events"
                            style={{
                                display: "inline-flex", alignItems: "center", gap: "0.4rem",
                                color: "#052E26", fontWeight: 600, fontSize: "0.9rem",
                                textDecoration: "none", borderBottom: "2px solid #BDE162",
                                paddingBottom: "2px",
                            }}
                        >
                            <i className="ti ti-arrow-left" /> Back to All Events
                        </Link>
                    </div>

                    {/* ── Right: info widget ────────────────────────────── */}
                    <div className="col-12 col-lg-4">
                        <div style={{ position: "sticky", top: "100px" }}>

                            {/* Info card */}
                            <div className="widget-card" style={{ marginBottom: "1.5rem" }}>
                                <h4 className="h4 widget-title" style={{ marginBottom: "1.25rem" }}>
                                    Event Details
                                </h4>

                                <ul className="list-unstyled" style={{ display: "flex", flexDirection: "column", gap: "0.9rem", margin: 0 }}>
                                    {/* Date */}
                                    <li style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                                        <span style={{
                                            width: "36px", height: "36px", borderRadius: "8px",
                                            background: "#f3f4f6", display: "flex",
                                            alignItems: "center", justifyContent: "center", flexShrink: 0,
                                        }}>
                                            <i className="ti ti-calendar" style={{ color: "#052E26", fontSize: "1rem" }} />
                                        </span>
                                        <div>
                                            <div style={{ fontSize: "0.72rem", fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.06em" }}>Date</div>
                                            <div style={{ fontWeight: 600, color: "#111827", fontSize: "0.92rem" }}>{fmtDate(event.date)}</div>
                                        </div>
                                    </li>

                                    {/* Time */}
                                    {event.time && (
                                        <li style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                                            <span style={{
                                                width: "36px", height: "36px", borderRadius: "8px",
                                                background: "#f3f4f6", display: "flex",
                                                alignItems: "center", justifyContent: "center", flexShrink: 0,
                                            }}>
                                                <i className="ti ti-clock" style={{ color: "#052E26", fontSize: "1rem" }} />
                                            </span>
                                            <div>
                                                <div style={{ fontSize: "0.72rem", fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.06em" }}>Time</div>
                                                <div style={{ fontWeight: 600, color: "#111827", fontSize: "0.92rem" }}>{event.time}</div>
                                            </div>
                                        </li>
                                    )}

                                    {/* Location */}
                                    {event.location && (
                                        <li style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                                            <span style={{
                                                width: "36px", height: "36px", borderRadius: "8px",
                                                background: "#f3f4f6", display: "flex",
                                                alignItems: "center", justifyContent: "center", flexShrink: 0,
                                            }}>
                                                <i className="ti ti-map-pin" style={{ color: "#052E26", fontSize: "1rem" }} />
                                            </span>
                                            <div>
                                                <div style={{ fontSize: "0.72rem", fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.06em" }}>Location</div>
                                                <div style={{ fontWeight: 600, color: "#111827", fontSize: "0.92rem" }}>{event.location}</div>
                                            </div>
                                        </li>
                                    )}

                                    {/* Category */}
                                    <li style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                                        <span style={{
                                            width: "36px", height: "36px", borderRadius: "8px",
                                            background: "#f3f4f6", display: "flex",
                                            alignItems: "center", justifyContent: "center", flexShrink: 0,
                                        }}>
                                            <i className="ti ti-tag" style={{ color: "#052E26", fontSize: "1rem" }} />
                                        </span>
                                        <div>
                                            <div style={{ fontSize: "0.72rem", fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.06em" }}>Category</div>
                                            <div style={{ fontWeight: 600, fontSize: "0.92rem" }}>
                                                <span style={{
                                                    color: categoryColor,
                                                    background: `${categoryColor}18`,
                                                    padding: "0.15rem 0.6rem",
                                                    borderRadius: "12px",
                                                    fontSize: "0.82rem",
                                                    fontWeight: 700,
                                                }}>
                                                    {event.category}
                                                </span>
                                            </div>
                                        </div>
                                    </li>

                                    {/* Price */}
                                    <li style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                                        <span style={{
                                            width: "36px", height: "36px", borderRadius: "8px",
                                            background: "#f3f4f6", display: "flex",
                                            alignItems: "center", justifyContent: "center", flexShrink: 0,
                                        }}>
                                            <i className="ti ti-coin" style={{ color: "#052E26", fontSize: "1rem" }} />
                                        </span>
                                        <div>
                                            <div style={{ fontSize: "0.72rem", fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.06em" }}>Investment</div>
                                            <div style={{ fontWeight: 700, color: "#052E26", fontSize: "0.97rem" }}>
                                                {event.price ?? "Contact us for pricing"}
                                            </div>
                                        </div>
                                    </li>
                                </ul>

                                {/* Divider */}
                                <hr style={{ margin: "1.25rem 0", borderColor: "#f0f0f0" }} />

                                {/* Register button */}
                                {event.registrationLink ? (
                                    <a
                                        href={event.registrationLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-primary"
                                        style={{ width: "100%", textAlign: "center", display: "block" }}
                                    >
                                        <span>Register Now</span>
                                        <span>Register Now</span>
                                    </a>
                                ) : (
                                    <Link
                                        href="/contact"
                                        className="btn btn-primary"
                                        style={{ width: "100%", textAlign: "center", display: "block" }}
                                    >
                                        <span>Contact to Register</span>
                                        <span>Contact to Register</span>
                                    </Link>
                                )}
                            </div>

                            {/* Contact nudge card (matching service-info-card style) */}
                            <div className="service-info-card service-details-bg">
                                <div className="icon fadeInUp" data-delay="0.5">
                                    <i className="ti ti-headset" style={{ fontSize: "2rem", color: "#052E26" }} />
                                </div>
                                <h3 className="text-white fadeInUp" data-delay="0.7">
                                    Need more information?
                                </h3>
                                <p className="text-white fadeInUp" data-delay="0.8">
                                    Our team is happy to answer your questions about this event.
                                </p>
                                <Link href="/contact" className="btn btn-primary fadeInUp" data-delay="0.9">
                                    <span>Get in Touch</span>
                                    <span>Get in Touch</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="divider" />

            {/* ── Related Events ─────────────────────────────────────────────── */}
            {related.length > 0 && (
                <section style={{ padding: "4rem 0", background: "#f9fafb" }}>
                    <div className="divider" />
                    <div className="container">
                        <div style={{ marginBottom: "2rem" }}>
                            <h2 style={{ fontWeight: 800, color: "#111827", marginBottom: "0.4rem", fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)" }}>
                                You Might Also Be Interested In
                            </h2>
                            <p style={{ color: "#6b7280", fontSize: "0.92rem" }}>
                                More upcoming training events from SITRAC
                            </p>
                        </div>

                        <div className="row g-4">
                            {related.map(e => (
                                <div key={e._id} className="col-12 col-md-6 col-lg-4">
                                    <RelatedEventCard event={e} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="divider" />
                </section>
            )}

            <CtaSectionOne />
        </>
    );
}

// ── Related event mini-card ───────────────────────────────────────────────────

function RelatedEventCard({ event }: { event: EventDoc }) {
    const color = CATEGORY_COLORS[event.category] ?? "#6b7280";
    return (
        <Link href={`/events/${event.slug}`} style={{ textDecoration: "none", display: "block", height: "100%" }}>
            {/* event-card-hover class handles lift/shadow via pure CSS — no JS handlers needed in this server component */}
            <div className="event-card-hover" style={{
                background: "#fff", borderRadius: "16px",
                boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
                overflow: "hidden", height: "100%",
                border: event.featured ? "2px solid #BDE162" : "1px solid #f0f0f0",
            }}>
                {/* Thumbnail */}
                <div style={{
                    position: "relative", height: "180px", overflow: "hidden",
                    background: "#f3f4f6", display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                    {isSafeImageUrl(event.coverImage) ? (
                        <Image
                            src={event.coverImage}
                            alt={event.title}
                            fill
                            style={{ objectFit: "cover" }}
                        />
                    ) : (
                        <i className="ti ti-calendar-event" style={{ fontSize: "2.5rem", color: "#d1d5db" }} />
                    )}
                    <div style={{
                        position: "absolute", top: "0.6rem", left: "0.6rem",
                        background: `${color}e6`, color: "#fff",
                        padding: "0.2rem 0.6rem", borderRadius: "12px",
                        fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.05em",
                    }}>
                        {event.category}
                    </div>
                </div>

                {/* Content */}
                <div style={{ padding: "1.1rem 1.25rem" }}>
                    <h4 style={{ fontWeight: 700, color: "#111827", fontSize: "0.97rem", lineHeight: 1.35, marginBottom: "0.5rem" }}>
                        {event.title}
                    </h4>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", fontSize: "0.8rem", color: "#6b7280" }}>
                        <span><i className="ti ti-calendar me-1" />{fmtDate(event.date)}</span>
                        {event.location && <span><i className="ti ti-map-pin me-1" />{event.location}</span>}
                    </div>
                    {event.price && (
                        <div style={{ marginTop: "0.6rem", fontWeight: 700, color: "#052E26", fontSize: "0.88rem" }}>
                            {event.price}
                        </div>
                    )}
                    <div style={{ marginTop: "0.8rem", color: "#052E26", fontWeight: 700, fontSize: "0.82rem", display: "flex", alignItems: "center", gap: "0.3rem" }}>
                        View Details <i className="ti ti-arrow-right" />
                    </div>
                </div>
            </div>
        </Link>
    );
}
