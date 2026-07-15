"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useState } from "react";

interface NavItem {
    href:  string;
    label: string;
    icon:  string;
}

const NAV_ITEMS: NavItem[] = [
    { href: "/admin/dashboard",               label: "Overview",       icon: "ti ti-layout-dashboard" },
    { href: "/admin/dashboard/services",      label: "Services",       icon: "ti ti-briefcase" },
    { href: "/admin/dashboard/events",        label: "Events",         icon: "ti ti-calendar-event" },
    { href: "/admin/dashboard/blog",          label: "Blog Posts",     icon: "ti ti-article" },
    { href: "/admin/dashboard/team",          label: "Team Members",   icon: "ti ti-users" },
    { href: "/admin/dashboard/faqs",          label: "FAQs",           icon: "ti ti-help-circle" },
    { href: "/admin/dashboard/testimonials",  label: "Testimonials",   icon: "ti ti-quote" },
    { href: "/admin/dashboard/process-steps", label: "Process Steps",  icon: "ti ti-list-numbers" },
    { href: "/admin/dashboard/contact",       label: "Messages",       icon: "ti ti-mail" },
];

interface AdminLayoutProps {
    children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
    const pathname  = usePathname();
    const router    = useRouter();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    async function handleLogout() {
        await fetch("/api/admin/logout", { method: "POST" });
        router.push("/admin/login");
    }

    return (
        <div style={{ display: "flex", minHeight: "100vh", background: "#f4f6f9", fontFamily: "Inter, sans-serif", overflowX: "hidden" }}>
            {/* ── Sidebar ── */}
            <aside
                style={{
                    width:         "260px",
                    flexShrink:    0,
                    background:    "#052E26",
                    color:         "#fff",
                    display:       "flex",
                    flexDirection: "column",
                    padding:       "0",
                    position:      "fixed",
                    top:           0,
                    // On mobile (controlled by toggle), on desktop always visible
                    left:          sidebarOpen ? 0 : "var(--sidebar-left, -260px)",
                    height:        "100vh",
                    zIndex:        1000,
                    transition:    "left 0.3s ease",
                    overflowY:     "auto",
                }}
            >
                {/* Brand */}
                <div style={{ padding: "1.5rem 1.5rem 1rem", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                        <div style={{ width: "40px", height: "40px", background: "#BDE162", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                            <i className="ti ti-building-community" style={{ fontSize: "1.3rem", color: "#052E26" }}></i>
                        </div>
                        <div>
                            <div style={{ fontWeight: 700, fontSize: "0.95rem" }}>SITRAC</div>
                            <div style={{ fontSize: "0.75rem", opacity: 0.6 }}>Admin Portal</div>
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <nav style={{ padding: "1rem 0", flex: 1 }}>
                    <div style={{ padding: "0 0.75rem 0.5rem", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.1em", opacity: 0.4, textTransform: "uppercase" }}>
                        Content
                    </div>
                    {NAV_ITEMS.map((item) => {
                        const active = pathname === item.href || (item.href !== "/admin/dashboard" && pathname.startsWith(item.href));
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                style={{
                                    display:       "flex",
                                    alignItems:    "center",
                                    gap:           "0.75rem",
                                    padding:       "0.65rem 1.25rem",
                                    margin:        "0.1rem 0.5rem",
                                    borderRadius:  "10px",
                                    color:         active ? "#052E26" : "rgba(255,255,255,0.7)",
                                    background:    active ? "#BDE162" : "transparent",
                                    fontWeight:    active ? 600 : 400,
                                    fontSize:      "0.9rem",
                                    textDecoration: "none",
                                    transition:    "all 0.15s ease",
                                }}
                                onClick={() => setSidebarOpen(false)}
                            >
                                <i className={item.icon} style={{ fontSize: "1.1rem", flexShrink: 0 }}></i>
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

                {/* Footer actions */}
                <div style={{ padding: "1rem", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                    <Link
                        href="/"
                        target="_blank"
                        style={{ display: "flex", alignItems: "center", gap: "0.6rem", color: "rgba(255,255,255,0.6)", fontSize: "0.85rem", textDecoration: "none", padding: "0.5rem", marginBottom: "0.5rem" }}
                    >
                        <i className="ti ti-external-link"></i> View Website
                    </Link>
                    <button
                        onClick={handleLogout}
                        style={{
                            display:      "flex",
                            alignItems:   "center",
                            gap:          "0.6rem",
                            color:        "#ff6b6b",
                            fontSize:     "0.85rem",
                            background:   "none",
                            border:       "none",
                            cursor:       "pointer",
                            padding:      "0.5rem",
                            width:        "100%",
                        }}
                    >
                        <i className="ti ti-logout"></i> Log Out
                    </button>
                </div>
            </aside>

            {/* Backdrop for mobile */}
            {sidebarOpen && (
                <div
                    onClick={() => setSidebarOpen(false)}
                    style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 999 }}
                />
            )}

            {/* ── Main Content ── */}
            {/*
              On desktop (≥768px): sidebar is always visible at left:0,
              so main content is offset by 260px.
              On mobile (<768px):  sidebar starts at left:-260px (hidden),
              so main content starts at marginLeft:0 and fills full width.
              We use a style tag for this media-query since inline styles
              don't support media queries.
            */}
            <style>{`
              :root { --sidebar-left: -260px; }
              @media (min-width: 768px) {
                :root { --sidebar-left: 0px; }
                .admin-main { margin-left: 260px !important; }
              }
            `}</style>
            <div className="admin-main" style={{ flex: 1, marginLeft: 0, display: "flex", flexDirection: "column", minHeight: "100vh", width: "100%", maxWidth: "100%", overflowX: "hidden" }}>
                {/* Top bar */}
                <header style={{ background: "#fff", borderBottom: "1px solid #e5e7eb", padding: "0.9rem 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 100 }}>
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        style={{ background: "none", border: "none", cursor: "pointer", fontSize: "1.4rem", color: "#374151" }}
                    >
                        <i className="ti ti-menu-2"></i>
                    </button>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                        <span style={{ fontSize: "0.85rem", color: "#6b7280" }}>SITRAC Admin</span>
                        <div style={{ width: "36px", height: "36px", background: "#052E26", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <i className="ti ti-user" style={{ color: "#BDE162", fontSize: "1rem" }}></i>
                        </div>
                    </div>
                </header>

                {/* Page content */}
                <main style={{ flex: 1, padding: "1.5rem" }}>
                    {children}
                </main>
            </div>
        </div>
    );
}
