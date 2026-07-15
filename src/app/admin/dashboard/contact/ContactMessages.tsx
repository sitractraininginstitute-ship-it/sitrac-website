"use client";

import { useState } from "react";

interface Message {
    _id:       string;
    name:      string;
    email:     string;
    service?:  string;
    message:   string;
    read:      boolean;
    createdAt: string;
}

function formatDate(iso: string): string {
    if (!iso) return "";
    try {
        return new Date(iso).toLocaleDateString("en-GB", {
            day: "numeric", month: "short", year: "numeric",
            hour: "2-digit", minute: "2-digit",
        });
    } catch { return iso; }
}

const PAGE_SIZE = 10;

export default function ContactMessages({ messages: initialMessages }: { messages: Message[] }) {
    const [messages, setMessages] = useState<Message[]>(initialMessages);
    const [selected, setSelected] = useState<Message | null>(null);
    const [page,     setPage]     = useState(1);
    const [deleting, setDeleting] = useState<string | null>(null);

    const totalPages = Math.max(1, Math.ceil(messages.length / PAGE_SIZE));
    const pageItems  = messages.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
    const unread     = messages.filter((m) => !m.read).length;

    async function markRead(id: string, read: boolean) {
        try {
            await fetch(`/api/contact/${id}`, {
                method:  "PATCH",
                headers: { "Content-Type": "application/json" },
                body:    JSON.stringify({ read }),
            });
            setMessages((prev) => prev.map((m) => m._id === id ? { ...m, read } : m));
            if (selected?._id === id) setSelected((prev) => prev ? { ...prev, read } : null);
        } catch {
            // silent fail
        }
    }

    async function handleDelete(id: string) {
        setDeleting(id);
        try {
            const res = await fetch(`/api/contact/${id}`, { method: "DELETE" });
            if (res.ok) {
                const next = messages.filter((m) => m._id !== id);
                setMessages(next);
                if (selected?._id === id) setSelected(null);
                // Clamp page
                const newTotal = Math.max(1, Math.ceil(next.length / PAGE_SIZE));
                if (page > newTotal) setPage(newTotal);
            }
        } catch {
            // silent fail
        } finally {
            setDeleting(null);
        }
    }

    return (
        <div>
            {/* Header */}
            <div style={{ marginBottom: "1.5rem" }}>
                <h1 style={{ fontSize: "1.4rem", fontWeight: 700, margin: 0, color: "#111827" }}>Contact Messages</h1>
                <p style={{ color: "#6b7280", margin: "0.2rem 0 0", fontSize: "0.88rem" }}>
                    {messages.length} total — <strong style={{ color: unread > 0 ? "#dc2626" : "#059669" }}>{unread} unread</strong>
                </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: selected ? "1fr 1fr" : "1fr", gap: "1rem" }}>
                {/* Message list */}
                <div style={{ background: "#fff", borderRadius: "12px", boxShadow: "0 1px 4px rgba(0,0,0,0.08)", overflow: "hidden" }}>
                    {messages.length === 0 ? (
                        <div style={{ padding: "3rem", textAlign: "center", color: "#9ca3af" }}>
                            <i className="ti ti-inbox" style={{ fontSize: "2.5rem", display: "block", marginBottom: "0.75rem" }}></i>
                            No messages yet.
                        </div>
                    ) : (
                        <div>
                            {pageItems.map((msg) => (
                                <div
                                    key={msg._id}
                                    onClick={() => { setSelected(msg); markRead(msg._id, true); }}
                                    style={{
                                        padding:      "1rem 1.25rem",
                                        borderBottom: "1px solid #f3f4f6",
                                        cursor:       "pointer",
                                        background:   selected?._id === msg._id ? "#f0fdf4" : (msg.read ? "#fff" : "#eff6ff"),
                                        display:      "flex",
                                        alignItems:   "flex-start",
                                        gap:          "0.75rem",
                                        transition:   "background 0.15s",
                                    }}
                                >
                                    {/* Unread dot */}
                                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: msg.read ? "transparent" : "#3b82f6", flexShrink: 0, marginTop: "6px" }}></div>
                                    <div style={{ flex: 1, minWidth: 0 }}>
                                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "0.5rem" }}>
                                            <span style={{ fontWeight: msg.read ? 500 : 700, color: "#111827", fontSize: "0.9rem", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                                                {msg.name}
                                            </span>
                                            <span style={{ fontSize: "0.75rem", color: "#9ca3af", flexShrink: 0 }}>{formatDate(msg.createdAt)}</span>
                                        </div>
                                        <div style={{ fontSize: "0.82rem", color: "#6b7280", marginTop: "0.1rem" }}>{msg.email}</div>
                                        <div style={{ fontSize: "0.85rem", color: "#374151", marginTop: "0.3rem", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                                            {msg.message}
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Pagination */}
                            {totalPages > 1 && (
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.4rem", padding: "0.75rem" }}>
                                    <button
                                        onClick={(e) => { e.stopPropagation(); setPage((p) => Math.max(1, p - 1)); }}
                                        disabled={page === 1}
                                        style={{ background: page === 1 ? "#f3f4f6" : "#052E26", color: page === 1 ? "#9ca3af" : "#BDE162", border: "none", borderRadius: "6px", padding: "0.35rem 0.75rem", fontWeight: 600, fontSize: "0.8rem", cursor: page === 1 ? "default" : "pointer" }}
                                    >
                                        ← Prev
                                    </button>
                                    <span style={{ fontSize: "0.82rem", color: "#6b7280" }}>{page} / {totalPages}</span>
                                    <button
                                        onClick={(e) => { e.stopPropagation(); setPage((p) => Math.min(totalPages, p + 1)); }}
                                        disabled={page === totalPages}
                                        style={{ background: page === totalPages ? "#f3f4f6" : "#052E26", color: page === totalPages ? "#9ca3af" : "#BDE162", border: "none", borderRadius: "6px", padding: "0.35rem 0.75rem", fontWeight: 600, fontSize: "0.8rem", cursor: page === totalPages ? "default" : "pointer" }}
                                    >
                                        Next →
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Message detail panel */}
                {selected && (
                    <div style={{ background: "#fff", borderRadius: "12px", boxShadow: "0 1px 4px rgba(0,0,0,0.08)", padding: "1.5rem" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.25rem" }}>
                            <div>
                                <h3 style={{ margin: "0 0 0.25rem", fontWeight: 700, color: "#111827" }}>{selected.name}</h3>
                                <a href={`mailto:${selected.email}`} style={{ color: "#3b82f6", fontSize: "0.9rem" }}>{selected.email}</a>
                            </div>
                            <button
                                onClick={() => setSelected(null)}
                                style={{ background: "none", border: "none", cursor: "pointer", fontSize: "1.2rem", color: "#6b7280" }}
                            >
                                ✕
                            </button>
                        </div>

                        {selected.service && (
                            <div style={{ background: "#f9fafb", borderRadius: "8px", padding: "0.6rem 0.9rem", marginBottom: "1rem", fontSize: "0.85rem", color: "#374151" }}>
                                <strong>Service enquiry:</strong> {selected.service}
                            </div>
                        )}

                        <div style={{ background: "#f9fafb", borderRadius: "8px", padding: "1rem", marginBottom: "1.25rem", fontSize: "0.9rem", lineHeight: 1.6, color: "#111827", whiteSpace: "pre-wrap" }}>
                            {selected.message}
                        </div>

                        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                            {/* Reply */}
                            <a
                                href={`mailto:${selected.email}?subject=Re: Your Enquiry to SITRAC`}
                                style={{ display: "flex", alignItems: "center", gap: "0.4rem", background: "#052E26", color: "#BDE162", borderRadius: "8px", padding: "0.6rem 1.1rem", fontSize: "0.88rem", fontWeight: 600, textDecoration: "none" }}
                            >
                                <i className="ti ti-mail"></i> Reply via Email
                            </a>

                            {/* Mark read / unread */}
                            {selected.read ? (
                                <button
                                    onClick={() => markRead(selected._id, false)}
                                    style={{ display: "flex", alignItems: "center", gap: "0.4rem", background: "#eff6ff", color: "#3b82f6", border: "none", borderRadius: "8px", padding: "0.6rem 1.1rem", fontSize: "0.88rem", fontWeight: 600, cursor: "pointer" }}
                                >
                                    <i className="ti ti-mail-opened"></i> Mark Unread
                                </button>
                            ) : (
                                <button
                                    onClick={() => markRead(selected._id, true)}
                                    style={{ display: "flex", alignItems: "center", gap: "0.4rem", background: "#f0fdf4", color: "#059669", border: "none", borderRadius: "8px", padding: "0.6rem 1.1rem", fontSize: "0.88rem", fontWeight: 600, cursor: "pointer" }}
                                >
                                    <i className="ti ti-check"></i> Mark Read
                                </button>
                            )}

                            {/* Delete */}
                            <button
                                onClick={() => handleDelete(selected._id)}
                                disabled={deleting === selected._id}
                                style={{ display: "flex", alignItems: "center", gap: "0.4rem", background: "#fef2f2", color: "#dc2626", border: "none", borderRadius: "8px", padding: "0.6rem 1.1rem", fontSize: "0.88rem", fontWeight: 600, cursor: deleting === selected._id ? "not-allowed" : "pointer", opacity: deleting === selected._id ? 0.6 : 1 }}
                            >
                                <i className="ti ti-trash"></i>
                                {deleting === selected._id ? "Deleting…" : "Delete"}
                            </button>
                        </div>

                        <p style={{ marginTop: "1rem", fontSize: "0.78rem", color: "#9ca3af" }}>
                            Received: {formatDate(selected.createdAt)}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
