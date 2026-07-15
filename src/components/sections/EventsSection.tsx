"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";
import type { EventData } from "@/app/events/page";

// ── Constants ────────────────────────────────────────────────────────────────

const CATEGORIES = ["All", "Short Courses", "Workshops", "Seminars", "Conferences"] as const;
const DAY_NAMES  = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTH_NAMES = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December",
];

const CATEGORY_COLORS: Record<string, string> = {
    "Short Courses": "#3b82f6",
    "Workshops":     "#8b5cf6",
    "Seminars":      "#f59e0b",
    "Conferences":   "#059669",
};

// ── Helpers ──────────────────────────────────────────────────────────────────

function fmtDate(iso: string): string {
    const d = new Date(iso);
    return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

/** True if the event date is strictly in the past (before today midnight) */
function isPastEvent(iso: string): boolean {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return new Date(iso) < today;
}

// Only use next/image for known-safe hosts (must match next.config.ts remotePatterns)
const SAFE_IMAGE_HOSTS = ["res.cloudinary.com", "images.unsplash.com"];
function isSafeImageUrl(url: string): boolean {
    try {
        const { hostname } = new URL(url);
        return SAFE_IMAGE_HOSTS.some((h) => hostname === h || hostname.endsWith("." + h));
    } catch {
        return false;
    }
}


function isSameDay(a: Date, b: Date) {
    return a.getFullYear() === b.getFullYear() &&
           a.getMonth()    === b.getMonth()    &&
           a.getDate()     === b.getDate();
}

// ── Sub-components ───────────────────────────────────────────────────────────

function CategoryBadge({ category }: { category: string }) {
    const color = CATEGORY_COLORS[category] ?? "#6b7280";
    return (
        <span style={{
            display: "inline-block",
            padding: "0.2rem 0.65rem",
            borderRadius: "20px",
            fontSize: "0.72rem",
            fontWeight: 700,
            letterSpacing: "0.04em",
            background: `${color}1a`,
            color,
            border: `1px solid ${color}40`,
            textTransform: "uppercase",
        }}>
            {category}
        </span>
    );
}

// ── Event Card (List View) ───────────────────────────────────────────────────

function EventCard({ event }: { event: EventData }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <div style={{
            background: "#fff",
            borderRadius: "16px",
            boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
            overflow: "hidden",
            transition: "box-shadow 0.2s",
            border: event.featured ? "2px solid #BDE162" : "1px solid #f0f0f0",
        }}>
            <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", alignItems: "stretch" }}
                 className="event-card-inner">
                {/* Cover Image */}
                <div style={{ position: "relative", height: "220px", overflow: "hidden", flexShrink: 0,
                    background: "#f3f4f6", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {isSafeImageUrl(event.coverImage) ? (
                        <Image
                            src={event.coverImage}
                            alt={event.title}
                            fill
                            style={{ objectFit: "cover" }}
                        />
                    ) : (
                        <i className="ti ti-calendar-event"
                           style={{ fontSize: "3rem", color: "#d1d5db" }} />
                    )}
                    {event.featured && (
                        <div style={{
                            position: "absolute", top: "0.75rem", left: "0.75rem",
                            background: "#BDE162", color: "#052E26",
                            padding: "0.25rem 0.65rem", borderRadius: "20px",
                            fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.06em",
                        }}>
                            FEATURED
                        </div>
                    )}
                </div>

                {/* Content */}
                <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
                        <CategoryBadge category={event.category} />
                        {event.price && (
                            <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#052E26", marginLeft: "auto" }}>
                                {event.price}
                            </span>
                        )}
                    </div>

                    <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#111827", margin: 0, lineHeight: 1.35 }}>
                        {event.title}
                    </h3>

                    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", fontSize: "0.84rem", color: "#6b7280" }}>
                        <span><i className="ti ti-calendar me-1"></i>{fmtDate(event.date)}</span>
                        {event.time && <span><i className="ti ti-clock me-1"></i>{event.time}</span>}
                        {event.location && <span><i className="ti ti-map-pin me-1"></i>{event.location}</span>}
                    </div>

                    {/* Expandable description */}
                    {expanded && (
                        <p style={{ fontSize: "0.9rem", color: "#374151", lineHeight: 1.7, margin: "0.25rem 0" }}>
                            {event.description}
                        </p>
                    )}

                    <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap", marginTop: "auto", paddingTop: "0.5rem", alignItems: "center" }}>
                        <button
                            onClick={() => setExpanded(!expanded)}
                            style={{
                                background: "none", border: "1px solid #e5e7eb",
                                borderRadius: "8px", padding: "0.45rem 0.9rem",
                                fontSize: "0.82rem", color: "#374151", cursor: "pointer", fontWeight: 500,
                            }}
                        >
                            {expanded ? "Show Less ↑" : "Quick Preview ↓"}
                        </button>
                        <Link
                            href={`/events/${event.slug}`}
                            style={{
                                display: "inline-flex", alignItems: "center", gap: "0.3rem",
                                border: "1px solid #052E26",
                                color: "#052E26",
                                borderRadius: "8px", padding: "0.45rem 0.9rem",
                                fontSize: "0.82rem", fontWeight: 600, textDecoration: "none",
                            }}
                        >
                            View Details <i className="ti ti-arrow-right" />
                        </Link>
                        {/* Hide Register button for past events */}
                        {!isPastEvent(event.date) && event.registrationLink && (
                            <a
                                href={event.registrationLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: "inline-flex", alignItems: "center", gap: "0.35rem",
                                    background: "#052E26", color: "#BDE162",
                                    borderRadius: "8px", padding: "0.45rem 1rem",
                                    fontSize: "0.82rem", fontWeight: 700, textDecoration: "none",
                                }}
                            >
                                <i className="ti ti-external-link" /> Register
                            </a>
                        )}
                        {isPastEvent(event.date) && (
                            <span style={{
                                fontSize: "0.75rem", color: "#9ca3af", fontStyle: "italic",
                                display: "inline-flex", alignItems: "center", gap: "0.3rem",
                            }}>
                                <i className="ti ti-clock-off" /> This event has ended
                            </span>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile: stack image on top */}
            <style>{`
                @media (max-width: 640px) {
                    .event-card-inner {
                        grid-template-columns: 1fr !important;
                    }
                    .event-card-inner > div:first-child {
                        height: 180px !important;
                    }
                }
            `}</style>
        </div>
    );
}

// ── Calendar View ────────────────────────────────────────────────────────────

function CalendarView({ events }: { events: EventData[] }) {
    const today      = new Date();
    const [year,  setYear]  = useState(today.getFullYear());
    const [month, setMonth] = useState(today.getMonth()); // 0-indexed
    const [selected, setSelected] = useState<Date | null>(null);

    function prevMonth() {
        if (month === 0) { setMonth(11); setYear(y => y - 1); }
        else setMonth(m => m - 1);
        setSelected(null);
    }
    function nextMonth() {
        if (month === 11) { setMonth(0); setYear(y => y + 1); }
        else setMonth(m => m + 1);
        setSelected(null);
    }

    // Build calendar cells
    const firstDay = new Date(year, month, 1).getDay(); // 0=Sun
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const cells: (number | null)[] = [
        ...Array(firstDay).fill(null),
        ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
    ];
    // Pad to full weeks
    while (cells.length % 7 !== 0) cells.push(null);

    // Map events to day numbers for this month
    const eventsByDay = useMemo(() => {
        const map = new Map<number, EventData[]>();
        events.forEach(e => {
            const d = new Date(e.date);
            if (d.getFullYear() === year && d.getMonth() === month) {
                const day = d.getDate();
                if (!map.has(day)) map.set(day, []);
                map.get(day)!.push(e);
            }
        });
        return map;
    }, [events, year, month]);

    const selectedEvents = selected
        ? (eventsByDay.get(selected.getDate()) ?? []).filter(e => {
            const d = new Date(e.date);
            return isSameDay(d, selected);
        })
        : [];

    const isToday = (day: number) =>
        today.getFullYear() === year && today.getMonth() === month && today.getDate() === day;

    return (
        <div>
            {/* Month navigator */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                <button onClick={prevMonth} style={navBtnStyle}>
                    <i className="ti ti-arrow-left"></i>
                </button>
                <h3 style={{ margin: 0, fontWeight: 700, fontSize: "1.15rem", color: "#111827" }}>
                    {MONTH_NAMES[month]} {year}
                </h3>
                <button onClick={nextMonth} style={navBtnStyle}>
                    <i className="ti ti-arrow-right"></i>
                </button>
            </div>

            {/* Grid */}
            <div style={{
                background: "#fff", borderRadius: "16px",
                boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
                overflow: "hidden", marginBottom: "1.5rem",
            }}>
                {/* Day headers */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", background: "#052E26" }}>
                    {DAY_NAMES.map(d => (
                        <div key={d} style={{
                            textAlign: "center", padding: "0.6rem 0",
                            fontSize: "0.75rem", fontWeight: 700, color: "#BDE162",
                            letterSpacing: "0.05em",
                        }}>{d}</div>
                    ))}
                </div>

                {/* Week rows */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)" }}>
                    {cells.map((day, idx) => {
                        const evts    = day ? (eventsByDay.get(day) ?? []) : [];
                        const isSelDay = selected && day && isSameDay(selected, new Date(year, month, day));
                        return (
                            <div
                                key={idx}
                                onClick={() => day && evts.length > 0 && setSelected(
                                    isSelDay ? null : new Date(year, month, day)
                                )}
                                style={{
                                    minHeight: "70px",
                                    padding: "0.4rem 0.5rem",
                                    borderRight: "1px solid #f3f4f6",
                                    borderBottom: "1px solid #f3f4f6",
                                    background: isSelDay ? "#052E26" : (isToday(day ?? 0) && !isSelDay ? "#f0fdf4" : "#fff"),
                                    cursor: day && evts.length > 0 ? "pointer" : "default",
                                    transition: "background 0.15s",
                                    position: "relative",
                                }}
                            >
                                {day && (
                                    <>
                                        <span style={{
                                            fontSize: "0.85rem",
                                            fontWeight: isToday(day) ? 700 : 400,
                                            color: isSelDay ? "#BDE162" : (isToday(day) ? "#052E26" : "#374151"),
                                            display: "block",
                                        }}>{day}</span>
                                        {evts.length > 0 && (
                                            <div style={{ display: "flex", flexWrap: "wrap", gap: "2px", marginTop: "4px" }}>
                                                {evts.slice(0, 3).map((e, i) => (
                                                    <div key={i} style={{
                                                        width: "7px", height: "7px", borderRadius: "50%",
                                                        background: isSelDay ? "#BDE162" : (CATEGORY_COLORS[e.category] ?? "#6b7280"),
                                                    }} />
                                                ))}
                                                {evts.length > 3 && (
                                                    <span style={{ fontSize: "0.65rem", color: isSelDay ? "#BDE162" : "#6b7280" }}>
                                                        +{evts.length - 3}
                                                    </span>
                                                )}
                                            </div>
                                        )}
                                    </>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Selected day events */}
            {selected && selectedEvents.length > 0 && (
                <div>
                    <h4 style={{ fontWeight: 700, color: "#111827", marginBottom: "1rem" }}>
                        Events on {selected.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
                    </h4>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                        {selectedEvents.map(e => (
                            <CalendarEventRow key={e._id} event={e} />
                        ))}
                    </div>
                </div>
            )}

            {/* No events in this month */}
            {Array.from(eventsByDay.values()).flat().length === 0 && (
                <div style={{ textAlign: "center", padding: "2rem", color: "#9ca3af", fontSize: "0.9rem" }}>
                    <i className="ti ti-calendar-off" style={{ fontSize: "2rem", display: "block", marginBottom: "0.5rem" }}></i>
                    No events this month.
                </div>
            )}
        </div>
    );
}

function CalendarEventRow({ event }: { event: EventData }) {
    return (
        <div className="cal-event-row" style={{
            background: "#fff", borderRadius: "12px", padding: "1rem 1.25rem",
            boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
        }}>
            {/* Mobile-safe CSS to prevent badge/title overlap */}
            <style>{`
                .cal-event-row {
                    display: flex;
                    gap: 1rem;
                    align-items: flex-start;
                }
                /* On narrow mobile: stack vertically so badge never sits on title */
                @media (max-width: 480px) {
                    .cal-event-row {
                        flex-wrap: wrap;
                    }
                    .cal-event-row .cal-event-actions {
                        width: 100%;
                        flex-direction: row !important;
                        flex-wrap: wrap;
                    }
                    /* Badge stacks ABOVE title inside content block */
                    .cal-event-content {
                        order: 1;
                    }
                    .cal-event-badge {
                        order: 0;
                        width: 100%;
                        margin-left: 24px; /* account for color bar width + gap */
                    }
                    .cal-event-actions {
                        order: 2;
                    }
                }
            `}</style>

            {/* Left color bar */}
            <div style={{
                width: "4px", borderRadius: "4px", background: CATEGORY_COLORS[event.category] ?? "#6b7280",
                alignSelf: "stretch", flexShrink: 0,
            }} />

            {/* Badge — on desktop sits to the right; on mobile moves to its own row above title */}
            <span className="cal-event-badge" style={{ flexShrink: 0, order: 1 }}>
                <CategoryBadge category={event.category} />
            </span>

            {/* Content: title + meta */}
            <div className="cal-event-content" style={{ flex: 1, minWidth: 0, order: 1 }}>
                <div style={{ fontWeight: 700, color: "#111827", marginBottom: "0.2rem", lineHeight: 1.3 }}>
                    {event.title}
                </div>
                <div style={{ fontSize: "0.82rem", color: "#6b7280", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                    {event.time && <span><i className="ti ti-clock me-1"></i>{event.time}</span>}
                    {event.location && <span><i className="ti ti-map-pin me-1"></i>{event.location}</span>}
                    {event.price && <span><i className="ti ti-currency-dollar me-1"></i>{event.price}</span>}
                </div>
            </div>

            {/* Action buttons */}
            <div className="cal-event-actions" style={{ display: "flex", flexDirection: "column", gap: "0.4rem", flexShrink: 0, order: 1 }}>
                <Link
                    href={`/events/${event.slug}`}
                    style={{
                        display: "inline-flex", alignItems: "center", gap: "0.3rem",
                        background: "#f3f4f6", color: "#052E26",
                        borderRadius: "8px", padding: "0.35rem 0.75rem",
                        fontSize: "0.75rem", fontWeight: 600, textDecoration: "none",
                        whiteSpace: "nowrap",
                    }}
                >
                    More Info <i className="ti ti-arrow-right" />
                </Link>
                {/* Hide Register for past events in calendar day-click list */}
                {!isPastEvent(event.date) && event.registrationLink && (
                    <a
                        href={event.registrationLink}
                        target="_blank" rel="noopener noreferrer"
                        style={{
                            display: "inline-flex", alignItems: "center", justifyContent: "center",
                            background: "#052E26", color: "#BDE162",
                            borderRadius: "8px", padding: "0.4rem 0.9rem",
                            fontSize: "0.78rem", fontWeight: 700, textDecoration: "none",
                            whiteSpace: "nowrap",
                        }}
                    >
                        Register
                    </a>
                )}
                {isPastEvent(event.date) && (
                    <span style={{ fontSize: "0.68rem", color: "#9ca3af", fontStyle: "italic", whiteSpace: "nowrap" }}>
                        Ended
                    </span>
                )}
            </div>
        </div>
    );
}

// ── Shared styles ─────────────────────────────────────────────────────────────

const navBtnStyle: React.CSSProperties = {
    background: "#f3f4f6", border: "none", borderRadius: "8px",
    width: "38px", height: "38px", cursor: "pointer",
    display: "flex", alignItems: "center", justifyContent: "center",
    fontSize: "1rem", color: "#374151",
};

const toggleBtnStyle = (active: boolean): React.CSSProperties => ({
    background: active ? "#052E26" : "#f3f4f6",
    color: active ? "#BDE162" : "#374151",
    border: "none", borderRadius: "8px",
    padding: "0.55rem 1.1rem",
    fontWeight: 600, fontSize: "0.88rem",
    cursor: "pointer", display: "flex", alignItems: "center", gap: "0.4rem",
    transition: "all 0.15s",
});

const filterBtnStyle = (active: boolean, color?: string): React.CSSProperties => ({
    background: active ? (color ?? "#052E26") : "#f3f4f6",
    color: active ? "#fff" : "#374151",
    border: "none", borderRadius: "20px",
    padding: "0.4rem 1rem",
    fontWeight: active ? 700 : 500, fontSize: "0.82rem",
    cursor: "pointer",
    transition: "all 0.15s",
});

// ── Main exported component ──────────────────────────────────────────────────

interface Props {
    events: EventData[];
}

export default function EventsSection({ events }: Props) {
    const [view,       setView]       = useState<"list" | "calendar">("list");
    const [category,   setCategory]   = useState<string>("All");
    const [timeFilter, setTimeFilter] = useState<"upcoming" | "past">("upcoming");

    // Split events by time — used for the list view toggle
    const today = useMemo(() => {
        const d = new Date(); d.setHours(0, 0, 0, 0); return d;
    }, []);

    const filtered = useMemo(() => {
        const byCat = category === "All" ? events : events.filter(e => e.category === category);
        if (timeFilter === "upcoming") {
            // date >= today, already sorted ascending from server
            return byCat.filter(e => new Date(e.date) >= today);
        } else {
            // date < today, reverse so most recent past event comes first
            return byCat.filter(e => new Date(e.date) < today).reverse();
        }
    }, [events, category, timeFilter, today]);

    // Calendar always sees ALL events (unaffected by time filter)
    const calendarEvents = useMemo(() =>
        category === "All" ? events : events.filter(e => e.category === category),
        [events, category]
    );

    return (
        <section style={{ padding: "4rem 0" }}>
            <div className="divider" />
            <div className="container">

                {/* ── Controls bar ─────────────────────────────────────── */}
                <div style={{
                    display: "flex", flexWrap: "wrap",
                    gap: "1rem", alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "2rem",
                }}>
                    {/* Category filters */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                        {CATEGORIES.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setCategory(cat)}
                                style={filterBtnStyle(
                                    category === cat,
                                    cat === "All" ? "#052E26" : CATEGORY_COLORS[cat]
                                )}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Right-hand controls: time filter + view toggle */}
                    <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", alignItems: "center" }}>
                        {/* Upcoming / Past toggle — only meaningful for list view */}
                        {view === "list" && (
                            <div style={{ display: "flex", gap: "0.3rem", background: "#f3f4f6", borderRadius: "10px", padding: "0.25rem" }}>
                                <button
                                    onClick={() => setTimeFilter("upcoming")}
                                    style={toggleBtnStyle(timeFilter === "upcoming")}
                                >
                                    <i className="ti ti-calendar-up"></i> Upcoming
                                </button>
                                <button
                                    onClick={() => setTimeFilter("past")}
                                    style={toggleBtnStyle(timeFilter === "past")}
                                >
                                    <i className="ti ti-history"></i> Past
                                </button>
                            </div>
                        )}

                        {/* List / Calendar view toggle */}
                        <div style={{ display: "flex", gap: "0.4rem", background: "#f3f4f6", borderRadius: "10px", padding: "0.3rem" }}>
                            <button onClick={() => setView("list")} style={toggleBtnStyle(view === "list")}>
                                <i className="ti ti-list"></i> List
                            </button>
                            <button onClick={() => setView("calendar")} style={toggleBtnStyle(view === "calendar")}>
                                <i className="ti ti-calendar"></i> Calendar
                            </button>
                        </div>
                    </div>
                </div>

                {/* ── Content ──────────────────────────────────────────── */}

                {/* Global empty state */}
                {events.length === 0 ? (
                    <div style={{
                        textAlign: "center", padding: "4rem 1rem",
                        background: "#fff", borderRadius: "16px",
                        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                    }}>
                        <i className="ti ti-calendar-event" style={{ fontSize: "3.5rem", color: "#BDE162", display: "block", marginBottom: "1rem" }}></i>
                        <h3 style={{ fontWeight: 700, color: "#111827", marginBottom: "0.5rem" }}>
                            No upcoming events at the moment
                        </h3>
                        <p style={{ color: "#6b7280", maxWidth: "420px", margin: "0 auto" }}>
                            Check back soon — we&apos;re always planning new training courses, workshops, and conferences.
                        </p>
                    </div>
                ) : view === "list" ? (
                    <>
                        {/* Count label */}
                        <p style={{ color: "#6b7280", fontSize: "0.88rem", marginBottom: "1.25rem" }}>
                            {filtered.length} {timeFilter === "past" ? "past" : "upcoming"} {filtered.length === 1 ? "event" : "events"}
                            {category !== "All" && ` in ${category}`}
                        </p>

                        {filtered.length === 0 ? (
                            <div style={{ textAlign: "center", padding: "3rem", color: "#9ca3af" }}>
                                <i className="ti ti-filter-off" style={{ fontSize: "2.5rem", display: "block", marginBottom: "0.75rem" }}></i>
                                No {category !== "All" ? category : ""} {timeFilter === "past" ? "past" : "upcoming"} events{category !== "All" ? " in this category" : ""}.
                            </div>
                        ) : (
                            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                                {filtered.map(event => (
                                    <EventCard key={event._id} event={event} />
                                ))}
                            </div>
                        )}
                    </>
                ) : (
                    // Calendar shows ALL events for any month — unaffected by time filter
                    <CalendarView events={calendarEvents} />
                )}
            </div>
            <div className="divider" />
        </section>
    );
}
