"use client";

import { useState } from "react";

// ── Types ────────────────────────────────────────────────────────────────────

export interface FieldDef {
    key:          string;
    label:        string;
    type:         "text" | "email" | "textarea" | "number" | "url" | "checkbox" | "select" | "image" | "date";
    required?:    boolean;
    options?:     string[];   // for select
    placeholder?: string;
    rows?:        number;     // for textarea
    folder?:      string;     // for image — Cloudinary folder hint (services/team/blog/misc)
}

interface GenericCRUDProps {
    title:       string;
    apiBase:     string;
    fields:      FieldDef[];
    items:       Record<string, unknown>[];
    displayKey:  string;
    idKey?:      string;
    slugBased?:  boolean;
    slugKey?:    string;
}

type Status = "idle" | "saving" | "deleting";

const PAGE_SIZE = 10;

// ── Image Upload Field ───────────────────────────────────────────────────────

function ImageUploadField({
    value,
    onChange,
    placeholder,
    folder = "misc",
}: {
    value:        string;
    onChange:     (url: string) => void;
    placeholder?: string;
    folder?:      string;
}) {
    const [uploading, setUploading] = useState(false);
    const [uploadErr, setUploadErr] = useState("");

    async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (!file) return;
        setUploading(true);
        setUploadErr("");

        try {
            const fd = new FormData();
            fd.append("file", file);
            fd.append("folder", folder);

            const res  = await fetch("/api/upload", { method: "POST", body: fd });
            const data = await res.json();

            if (!res.ok) {
                setUploadErr(data?.error ?? "Upload failed");
                return;
            }

            // jsonOk wraps as { success, data: { url, ... } }
            const url = data?.data?.url ?? data?.url ?? "";
            onChange(url);
        } catch {
            setUploadErr("Upload failed. Please try again.");
        } finally {
            setUploading(false);
            // reset so the same file can be re-uploaded
            e.target.value = "";
        }
    }

    return (
        <div>
            {/* Preview thumbnail */}
            {value && (
                <div style={{ marginBottom: "0.5rem" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={value}
                        alt="preview"
                        style={{ height: "80px", width: "auto", maxWidth: "100%", borderRadius: "6px", objectFit: "cover", border: "1px solid #e5e7eb" }}
                    />
                </div>
            )}

            {/* URL text input (manual paste still works) */}
            <input
                type="url"
                className="form-control"
                placeholder={placeholder ?? "https://res.cloudinary.com/..."}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                style={{ borderRadius: "8px", marginBottom: "0.5rem" }}
            />

            {/* File picker trigger */}
            <label style={{
                display: "inline-flex", alignItems: "center", gap: "0.4rem",
                background: uploading ? "#e5e7eb" : "#f3f4f6",
                color: "#374151", borderRadius: "8px",
                padding: "0.45rem 0.9rem", fontSize: "0.82rem", fontWeight: 600,
                cursor: uploading ? "not-allowed" : "pointer",
                userSelect: "none",
            }}>
                <i className="ti ti-upload" />
                {uploading ? "Uploading…" : "Upload Image"}
                <input
                    type="file"
                    accept="image/jpeg,image/png,image/webp,image/gif"
                    style={{ display: "none" }}
                    onChange={handleFile}
                    disabled={uploading}
                />
            </label>

            {uploadErr && (
                <p style={{ color: "#dc2626", fontSize: "0.8rem", marginTop: "0.35rem", marginBottom: 0 }}>
                    {uploadErr}
                </p>
            )}
        </div>
    );
}

// ── Main Component ───────────────────────────────────────────────────────────

export default function GenericCRUD({
    title,
    apiBase,
    fields,
    items: initialItems,
    displayKey,
    idKey     = "_id",
    slugBased = false,
    slugKey   = "slug",
}: GenericCRUDProps) {
    const [items,          setItems]          = useState<Record<string, unknown>[]>(initialItems);
    const [showForm,       setShowForm]       = useState(false);
    const [editing,        setEditing]        = useState<Record<string, unknown> | null>(null);
    const [formData,       setFormData]       = useState<Record<string, unknown>>({});
    const [status,         setStatus]         = useState<Status>("idle");
    const [errorMsg,       setErrorMsg]       = useState("");
    const [successMsg,     setSuccessMsg]     = useState("");
    const [deleteConfirm,  setDeleteConfirm]  = useState<string | null>(null);
    const [page,           setPage]           = useState(1);

    const totalPages = Math.max(1, Math.ceil(items.length / PAGE_SIZE));
    const pageItems  = items.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

    // ── Helpers ──────────────────────────────────────────────────────────────

    function openCreate() {
        setEditing(null);
        const empty: Record<string, unknown> = {};
        fields.forEach((f) => {
            empty[f.key] = f.type === "checkbox" ? false : f.type === "number" ? 0 : "";
        });
        setFormData(empty);
        setShowForm(true);
        setErrorMsg("");
        setSuccessMsg("");
    }

    function openEdit(item: Record<string, unknown>) {
        setEditing(item);
        const prefilled: Record<string, unknown> = {};
        fields.forEach((f) => {
            prefilled[f.key] = item[f.key] ?? (f.type === "checkbox" ? false : f.type === "number" ? 0 : "");
        });
        setFormData(prefilled);
        setShowForm(true);
        setErrorMsg("");
        setSuccessMsg("");
    }

    function handleChange(key: string, value: unknown) {
        setFormData((prev) => ({ ...prev, [key]: value }));
    }

    function closeForm() {
        setShowForm(false);
        setEditing(null);
        setErrorMsg("");
    }

    function getEndpoint(item: Record<string, unknown>) {
        if (slugBased) return `${apiBase}/${item[slugKey]}`;
        return `${apiBase}/${item[idKey]}`;
    }

    async function handleSave() {
        setStatus("saving");
        setErrorMsg("");

        // ── Client-side required-field validation ────────────────────────────
        const missing: string[] = [];
        fields.forEach((f) => {
            if (!f.required) return;
            const val = formData[f.key];
            if (f.type === "checkbox") return; // checkboxes are never "missing"
            if (
                val === undefined ||
                val === null ||
                String(val).trim() === ""
            ) {
                missing.push(f.label);
            }
        });
        if (missing.length > 0) {
            setErrorMsg(`Required fields missing: ${missing.join(", ")}`);
            setStatus("idle");
            return;
        }
        // ─────────────────────────────────────────────────────────────────────

        const body: Record<string, unknown> = { ...formData };
        fields.forEach((f) => {
            if (f.type === "number" && typeof body[f.key] === "string") {
                body[f.key] = parseFloat(body[f.key] as string) || 0;
            }
        });

        try {
            let res: Response;
            if (editing) {
                res = await fetch(getEndpoint(editing), {
                    method:  "PUT",
                    headers: { "Content-Type": "application/json" },
                    body:    JSON.stringify(body),
                });
            } else {
                res = await fetch(apiBase, {
                    method:  "POST",
                    headers: { "Content-Type": "application/json" },
                    body:    JSON.stringify(body),
                });
            }

            const data = await res.json();
            if (!res.ok) {
                setErrorMsg(data?.error ?? "An error occurred.");
                setStatus("idle");
                return;
            }

            const saved = data.data ?? data;
            if (editing) {
                setItems((prev) => prev.map((it) => (it[idKey] === editing[idKey] ? { ...it, ...saved } : it)));
            } else {
                setItems((prev) => [...prev, saved]);
                // Jump to last page so new item is visible
                setPage(Math.ceil((items.length + 1) / PAGE_SIZE));
            }
            setSuccessMsg(editing ? "Updated successfully!" : "Created successfully!");
            setShowForm(false);
            setEditing(null);
        } catch {
            setErrorMsg("Network error. Please try again.");
        } finally {
            setStatus("idle");
        }
    }

    async function handleDelete(item: Record<string, unknown>) {
        setStatus("deleting");
        setErrorMsg("");
        try {
            const res = await fetch(getEndpoint(item), { method: "DELETE" });
            if (!res.ok) {
                const data = await res.json();
                setErrorMsg(data?.error ?? "Delete failed.");
                setStatus("idle");
                return;
            }
            const nextItems = items.filter((it) => it[idKey] !== item[idKey]);
            setItems(nextItems);
            // Clamp page if we deleted the last item on the current page
            const newTotal = Math.max(1, Math.ceil(nextItems.length / PAGE_SIZE));
            if (page > newTotal) setPage(newTotal);
            setSuccessMsg("Deleted successfully.");
            setDeleteConfirm(null);
        } catch {
            setErrorMsg("Network error. Please try again.");
        } finally {
            setStatus("idle");
        }
    }

    // ── Render ───────────────────────────────────────────────────────────────

    return (
        <div>
            {/* Header */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem", flexWrap: "wrap", gap: "0.75rem" }}>
                <div>
                    <h1 style={{ fontSize: "1.4rem", fontWeight: 700, margin: 0, color: "#111827" }}>{title}</h1>
                    <p style={{ color: "#6b7280", margin: "0.2rem 0 0", fontSize: "0.88rem" }}>
                        {items.length} {items.length === 1 ? "record" : "records"}
                    </p>
                </div>
                <button
                    onClick={openCreate}
                    style={{ background: "#052E26", color: "#BDE162", border: "none", borderRadius: "8px", padding: "0.65rem 1.25rem", fontWeight: 600, fontSize: "0.9rem", cursor: "pointer", display: "flex", alignItems: "center", gap: "0.4rem" }}
                >
                    <i className="ti ti-plus"></i> Add New
                </button>
            </div>

            {/* Status banners */}
            {successMsg && (
                <div style={{ background: "#d1fae5", border: "1px solid #6ee7b7", borderRadius: "8px", padding: "0.75rem 1rem", marginBottom: "1rem", color: "#065f46", fontSize: "0.9rem" }}>
                    <i className="ti ti-check me-2"></i>{successMsg}
                    <button onClick={() => setSuccessMsg("")} style={{ float: "right", background: "none", border: "none", cursor: "pointer", color: "#065f46" }}>✕</button>
                </div>
            )}
            {errorMsg && !showForm && (
                <div style={{ background: "#fee2e2", border: "1px solid #fca5a5", borderRadius: "8px", padding: "0.75rem 1rem", marginBottom: "1rem", color: "#dc2626", fontSize: "0.9rem" }}>
                    <i className="ti ti-alert-circle me-2"></i>{errorMsg}
                    <button onClick={() => setErrorMsg("")} style={{ float: "right", background: "none", border: "none", cursor: "pointer", color: "#dc2626" }}>✕</button>
                </div>
            )}

            {/* Card grid */}
            {items.length === 0 ? (
                <div style={{ background: "#fff", borderRadius: "12px", boxShadow: "0 1px 4px rgba(0,0,0,0.08)", padding: "3rem", textAlign: "center", color: "#9ca3af" }}>
                    <i className="ti ti-inbox" style={{ fontSize: "2.5rem", display: "block", marginBottom: "0.75rem" }}></i>
                    No records yet. Click &quot;Add New&quot; to get started.
                </div>
            ) : (
                <>
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                        gap: "1rem",
                        marginBottom: "1rem",
                    }}>
                        {pageItems.map((item, idx) => {
                            const itemId        = String(item[idKey] ?? idx);
                            const isDelConfirm  = deleteConfirm === itemId;
                            // Secondary preview fields — skip displayKey, skip image/textarea/checkbox
                            const secondaryFields = fields
                                .filter((f) => f.key !== displayKey && f.type !== "image" && f.type !== "textarea" && f.type !== "checkbox")
                                .slice(0, 2);

                            // Image field value for thumbnail
                            const imageField = fields.find((f) => f.type === "image");
                            const thumbUrl   = imageField ? String(item[imageField.key] ?? "") : "";

                            return (
                                <div
                                    key={itemId}
                                    style={{
                                        background:   "#fff",
                                        borderRadius: "12px",
                                        boxShadow:    "0 1px 4px rgba(0,0,0,0.08)",
                                        overflow:     "hidden",
                                        display:      "flex",
                                        flexDirection: "column",
                                    }}
                                >
                                    {/* Thumbnail strip */}
                                    {thumbUrl && (
                                        // eslint-disable-next-line @next/next/no-img-element
                                        <img
                                            src={thumbUrl}
                                            alt=""
                                            style={{ width: "100%", height: "140px", objectFit: "cover", display: "block" }}
                                        />
                                    )}

                                    {/* Card body */}
                                    <div style={{ padding: "1rem", flex: 1 }}>
                                        <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "#111827", marginBottom: "0.4rem", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                                            {String(item[displayKey] ?? "—")}
                                        </div>
                                        {secondaryFields.map((f) => (
                                            <div key={f.key} style={{ fontSize: "0.82rem", color: "#6b7280", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", marginBottom: "0.15rem" }}>
                                                <span style={{ fontWeight: 600, color: "#9ca3af" }}>{f.label}: </span>
                                                {String(item[f.key] ?? "—")}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Card footer actions */}
                                    <div style={{ padding: "0.75rem 1rem", borderTop: "1px solid #f3f4f6", display: "flex", gap: "0.5rem", justifyContent: "flex-end" }}>
                                        {isDelConfirm ? (
                                            <>
                                                <span style={{ fontSize: "0.8rem", color: "#dc2626", alignSelf: "center" }}>Confirm?</span>
                                                <button
                                                    onClick={() => handleDelete(item)}
                                                    disabled={status === "deleting"}
                                                    style={{ background: "#dc2626", color: "#fff", border: "none", borderRadius: "6px", padding: "0.35rem 0.75rem", fontSize: "0.8rem", cursor: "pointer", fontWeight: 600 }}
                                                >
                                                    {status === "deleting" ? "…" : "Yes"}
                                                </button>
                                                <button
                                                    onClick={() => setDeleteConfirm(null)}
                                                    style={{ background: "#e5e7eb", color: "#374151", border: "none", borderRadius: "6px", padding: "0.35rem 0.75rem", fontSize: "0.8rem", cursor: "pointer" }}
                                                >
                                                    No
                                                </button>
                                            </>
                                        ) : (
                                            <>
                                                <button
                                                    onClick={() => openEdit(item)}
                                                    style={{ background: "#eff6ff", color: "#2563eb", border: "none", borderRadius: "6px", padding: "0.4rem 0.75rem", fontSize: "0.82rem", cursor: "pointer", fontWeight: 600 }}
                                                >
                                                    <i className="ti ti-edit me-1"></i>Edit
                                                </button>
                                                <button
                                                    onClick={() => setDeleteConfirm(itemId)}
                                                    style={{ background: "#fef2f2", color: "#dc2626", border: "none", borderRadius: "6px", padding: "0.4rem 0.75rem", fontSize: "0.82rem", cursor: "pointer", fontWeight: 600 }}
                                                >
                                                    <i className="ti ti-trash me-1"></i>Delete
                                                </button>
                                            </>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Pagination controls */}
                    {totalPages > 1 && (
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", padding: "0.5rem 0 1rem" }}>
                            <button
                                onClick={() => setPage((p) => Math.max(1, p - 1))}
                                disabled={page === 1}
                                style={{ background: page === 1 ? "#f3f4f6" : "#052E26", color: page === 1 ? "#9ca3af" : "#BDE162", border: "none", borderRadius: "8px", padding: "0.5rem 1rem", fontWeight: 600, fontSize: "0.88rem", cursor: page === 1 ? "default" : "pointer" }}
                            >
                                ← Prev
                            </button>
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pg) => (
                                <button
                                    key={pg}
                                    onClick={() => setPage(pg)}
                                    style={{ background: pg === page ? "#052E26" : "#f3f4f6", color: pg === page ? "#BDE162" : "#374151", border: "none", borderRadius: "8px", padding: "0.5rem 0.85rem", fontWeight: 600, fontSize: "0.88rem", cursor: "pointer", minWidth: "40px" }}
                                >
                                    {pg}
                                </button>
                            ))}
                            <button
                                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                                disabled={page === totalPages}
                                style={{ background: page === totalPages ? "#f3f4f6" : "#052E26", color: page === totalPages ? "#9ca3af" : "#BDE162", border: "none", borderRadius: "8px", padding: "0.5rem 1rem", fontWeight: 600, fontSize: "0.88rem", cursor: page === totalPages ? "default" : "pointer" }}
                            >
                                Next →
                            </button>
                        </div>
                    )}
                </>
            )}

            {/* Create / Edit Modal */}
            {showForm && (
                <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 2000, display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem" }}>
                    <div style={{ background: "#fff", borderRadius: "16px", width: "100%", maxWidth: "560px", maxHeight: "90vh", overflow: "auto", boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.25rem 1.5rem", borderBottom: "1px solid #e5e7eb" }}>
                            <h3 style={{ margin: 0, fontWeight: 700, fontSize: "1.1rem", color: "#111827" }}>
                                {editing ? `Edit ${title}` : `Add ${title}`}
                            </h3>
                            <button onClick={closeForm} style={{ background: "none", border: "none", cursor: "pointer", fontSize: "1.3rem", color: "#6b7280" }}>✕</button>
                        </div>

                        <div style={{ padding: "1.5rem" }}>
                            {errorMsg && (
                                <div style={{ background: "#fee2e2", border: "1px solid #fca5a5", borderRadius: "8px", padding: "0.75rem", marginBottom: "1rem", color: "#dc2626", fontSize: "0.88rem" }}>
                                    {errorMsg}
                                </div>
                            )}

                            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                                {fields.map((f) => (
                                    <div key={f.key}>
                                        <label style={{ display: "block", fontWeight: 600, marginBottom: "0.3rem", fontSize: "0.88rem", color: "#374151" }}>
                                            {f.label}{f.required && <span style={{ color: "#dc2626", marginLeft: "0.2rem" }}>*</span>}
                                        </label>

                                        {f.type === "image" ? (
                                            <ImageUploadField
                                                value={String(formData[f.key] ?? "")}
                                                onChange={(url) => handleChange(f.key, url)}
                                                placeholder={f.placeholder}
                                                folder={f.folder ?? "misc"}
                                            />
                                        ) : f.type === "textarea" ? (
                                            <textarea
                                                className="form-control"
                                                rows={f.rows ?? 4}
                                                placeholder={f.placeholder}
                                                value={String(formData[f.key] ?? "")}
                                                onChange={(e) => handleChange(f.key, e.target.value)}
                                                required={f.required}
                                                style={{ borderRadius: "8px", resize: "vertical" }}
                                            />
                                        ) : f.type === "checkbox" ? (
                                            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                                                <input
                                                    type="checkbox"
                                                    id={`field-${f.key}`}
                                                    checked={Boolean(formData[f.key])}
                                                    onChange={(e) => handleChange(f.key, e.target.checked)}
                                                    style={{ width: "16px", height: "16px", cursor: "pointer" }}
                                                />
                                                <label htmlFor={`field-${f.key}`} style={{ cursor: "pointer", fontWeight: 400, fontSize: "0.9rem", color: "#374151" }}>
                                                    {f.placeholder ?? f.label}
                                                </label>
                                            </div>
                                        ) : f.type === "select" ? (
                                            <select
                                                className="form-control"
                                                value={String(formData[f.key] ?? "")}
                                                onChange={(e) => handleChange(f.key, e.target.value)}
                                                required={f.required}
                                                style={{ borderRadius: "8px" }}
                                            >
                                                <option value="">— Select —</option>
                                                {(f.options ?? []).map((opt) => (
                                                    <option key={opt} value={opt}>{opt}</option>
                                                ))}
                                            </select>
                                        ) : (
                                            <input
                                                type={f.type}
                                                className="form-control"
                                                placeholder={f.placeholder}
                                                value={String(formData[f.key] ?? "")}
                                                onChange={(e) => handleChange(f.key, e.target.value)}
                                                required={f.required}
                                                style={{ borderRadius: "8px" }}
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div style={{ display: "flex", gap: "0.75rem", justifyContent: "flex-end", padding: "1rem 1.5rem", borderTop: "1px solid #e5e7eb" }}>
                            <button
                                onClick={closeForm}
                                style={{ background: "#f3f4f6", color: "#374151", border: "none", borderRadius: "8px", padding: "0.65rem 1.25rem", fontWeight: 600, fontSize: "0.9rem", cursor: "pointer" }}
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSave}
                                disabled={status === "saving"}
                                style={{ background: "#052E26", color: "#BDE162", border: "none", borderRadius: "8px", padding: "0.65rem 1.5rem", fontWeight: 700, fontSize: "0.9rem", cursor: status === "saving" ? "not-allowed" : "pointer", opacity: status === "saving" ? 0.7 : 1 }}
                            >
                                {status === "saving" ? "Saving…" : (editing ? "Update" : "Create")}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
