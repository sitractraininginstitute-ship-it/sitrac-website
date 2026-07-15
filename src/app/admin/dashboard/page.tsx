import AdminLayout from "@/components/admin/AdminLayout";
import { connectToDatabase } from "@/lib/mongodb";
import ServiceModel    from "@/models/Service";
import BlogPostModel   from "@/models/BlogPost";
import TeamMemberModel from "@/models/TeamMember";
import FAQModel        from "@/models/FAQ";
import TestimonialModel from "@/models/Testimonial";
import ContactMessageModel from "@/models/ContactMessage";
import EventModel from "@/models/Event";
import Link from "next/link";

export const dynamic = "force-dynamic";

interface StatCard {
    label:   string;
    count:   number;
    icon:    string;
    href:    string;
    color:   string;
}

export default async function AdminDashboardPage() {
    await connectToDatabase();

    const [services, blogs, team, faqs, testimonials, messages, unread, eventsCount] = await Promise.all([
        ServiceModel.countDocuments(),
        BlogPostModel.countDocuments(),
        TeamMemberModel.countDocuments(),
        FAQModel.countDocuments(),
        TestimonialModel.countDocuments(),
        ContactMessageModel.countDocuments(),
        ContactMessageModel.countDocuments({ read: false }),
        EventModel.countDocuments(),
    ]);

    const stats: StatCard[] = [
        { label: "Services",      count: services,     icon: "ti ti-briefcase",        href: "/admin/dashboard/services",      color: "#3b82f6" },
        { label: "Events",        count: eventsCount,  icon: "ti ti-calendar-event",   href: "/admin/dashboard/events",        color: "#f97316" },
        { label: "Blog Posts",    count: blogs,        icon: "ti ti-article",           href: "/admin/dashboard/blog",          color: "#8b5cf6" },
        { label: "Team Members",  count: team,         icon: "ti ti-users",             href: "/admin/dashboard/team",          color: "#059669" },
        { label: "FAQs",          count: faqs,         icon: "ti ti-help-circle",       href: "/admin/dashboard/faqs",          color: "#f59e0b" },
        { label: "Testimonials",  count: testimonials, icon: "ti ti-quote",             href: "/admin/dashboard/testimonials",  color: "#ef4444" },
        { label: "Messages",      count: messages,     icon: "ti ti-mail",              href: "/admin/dashboard/contact",       color: "#0ea5e9" },
    ];

    const quickLinks = [
        { label: "Add Service",      href: "/admin/dashboard/services?action=new",     icon: "ti ti-plus" },
        { label: "Add Event",        href: "/admin/dashboard/events?action=new",       icon: "ti ti-plus" },
        { label: "Add Blog Post",    href: "/admin/dashboard/blog?action=new",         icon: "ti ti-plus" },
        { label: "Add Team Member",  href: "/admin/dashboard/team?action=new",         icon: "ti ti-plus" },
        { label: "Add FAQ",          href: "/admin/dashboard/faqs?action=new",         icon: "ti ti-plus" },
        { label: "View Messages",    href: "/admin/dashboard/contact",                 icon: "ti ti-mail" },
    ];

    return (
        <AdminLayout>
            {/* Header */}
            <div style={{ marginBottom: "1.5rem" }}>
                <h1 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#111827", margin: 0 }}>Dashboard Overview</h1>
                <p style={{ color: "#6b7280", margin: "0.25rem 0 0", fontSize: "0.9rem" }}>
                    Welcome back! Here&apos;s a summary of your content.
                </p>
            </div>

            {/* Unread messages alert */}
            {unread > 0 && (
                <Link
                    href="/admin/dashboard/contact"
                    style={{
                        display:       "flex",
                        alignItems:    "center",
                        gap:           "0.75rem",
                        background:    "#fef3c7",
                        border:        "1px solid #fbbf24",
                        borderRadius:  "10px",
                        padding:       "0.85rem 1.25rem",
                        marginBottom:  "1.5rem",
                        color:         "#92400e",
                        textDecoration: "none",
                        fontWeight:    500,
                        fontSize:      "0.9rem",
                    }}
                >
                    <i className="ti ti-bell" style={{ fontSize: "1.2rem" }}></i>
                    You have <strong style={{ margin: "0 0.25rem" }}>{unread}</strong> unread contact {unread === 1 ? "message" : "messages"} →
                </Link>
            )}

            {/* Stats Grid */}
            <div
                style={{
                    display:             "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(min(150px, 100%), 1fr))",
                    gap:                 "1rem",
                    marginBottom:        "2rem",
                }}
            >
                {stats.map((stat) => (
                    <Link
                        key={stat.label}
                        href={stat.href}
                        style={{
                            display:        "flex",
                            alignItems:     "center",
                            gap:            "1rem",
                            background:     "#fff",
                            borderRadius:   "12px",
                            padding:        "1.25rem",
                            textDecoration: "none",
                            boxShadow:      "0 1px 4px rgba(0,0,0,0.08)",
                            transition:     "box-shadow 0.2s, transform 0.2s",
                        }}
                    >
                        <div
                            style={{
                                width:        "48px",
                                height:       "48px",
                                background:   `${stat.color}1a`,
                                borderRadius: "12px",
                                display:      "flex",
                                alignItems:   "center",
                                justifyContent: "center",
                                flexShrink:   0,
                            }}
                        >
                            <i className={stat.icon} style={{ fontSize: "1.4rem", color: stat.color }}></i>
                        </div>
                        <div>
                            <div style={{ fontSize: "1.75rem", fontWeight: 800, color: "#111827", lineHeight: 1 }}>{stat.count}</div>
                            <div style={{ fontSize: "0.85rem", color: "#6b7280", marginTop: "0.2rem" }}>{stat.label}</div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Quick Actions */}
            <div
                style={{
                    background:   "#fff",
                    borderRadius: "12px",
                    padding:      "1.5rem",
                    boxShadow:    "0 1px 4px rgba(0,0,0,0.08)",
                }}
            >
                <h2 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "1rem", color: "#111827" }}>Quick Actions</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(150px, 100%), 1fr))", gap: "0.75rem" }}>
                    {quickLinks.map((ql) => (
                        <Link
                            key={ql.label}
                            href={ql.href}
                            style={{
                                display:        "flex",
                                alignItems:     "center",
                                gap:            "0.6rem",
                                background:     "#052E26",
                                color:          "#BDE162",
                                borderRadius:   "8px",
                                padding:        "0.7rem 1rem",
                                fontSize:       "0.88rem",
                                fontWeight:     600,
                                textDecoration: "none",
                            }}
                        >
                            <i className={ql.icon}></i> {ql.label}
                        </Link>
                    ))}
                </div>
            </div>
        </AdminLayout>
    );
}
