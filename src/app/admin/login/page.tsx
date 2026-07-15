"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AdminLoginPage() {
    const router = useRouter();
    const [email,    setEmail]    = useState("");
    const [password, setPassword] = useState("");
    const [error,    setError]    = useState("");
    const [loading,  setLoading]  = useState(false);

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const res = await fetch("/api/admin/login", {
                method:  "POST",
                headers: { "Content-Type": "application/json" },
                body:    JSON.stringify({ email, password }),
            });
            const data = await res.json();

            if (res.ok) {
                router.push("/admin/dashboard");
            } else {
                setError(data?.error ?? "Login failed. Please try again.");
            }
        } catch {
            setError("Network error. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div
            style={{
                minHeight:       "100vh",
                background:      "linear-gradient(135deg, #052E26 0%, #0a4a3a 50%, #052E26 100%)",
                display:         "flex",
                alignItems:      "center",
                justifyContent:  "center",
                padding:         "1rem",
            }}
        >
            <div
                style={{
                    background:   "rgba(255,255,255,0.97)",
                    borderRadius: "16px",
                    padding:      "2.5rem",
                    width:        "100%",
                    maxWidth:     "420px",
                    boxShadow:    "0 20px 60px rgba(0,0,0,0.3)",
                }}
            >
                {/* Logo / Brand */}
                <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                    <div
                        style={{
                            width:        "60px",
                            height:       "60px",
                            borderRadius: "50%",
                            background:   "#052E26",
                            display:      "flex",
                            alignItems:   "center",
                            justifyContent: "center",
                            margin:       "0 auto 1rem",
                        }}
                    >
                        <i className="ti ti-shield-lock" style={{ fontSize: "1.6rem", color: "#BDE162" }}></i>
                    </div>
                    <h2 style={{ color: "#052E26", fontWeight: 700, marginBottom: "0.25rem" }}>Admin Portal</h2>
                    <p style={{ color: "#666", fontSize: "0.9rem", margin: 0 }}>SITRAC Training Institute</p>
                </div>

                {/* Error */}
                {error && (
                    <div
                        style={{
                            background:   "#fee2e2",
                            border:       "1px solid #fca5a5",
                            borderRadius: "8px",
                            padding:      "0.75rem 1rem",
                            marginBottom: "1.25rem",
                            color:        "#dc2626",
                            fontSize:     "0.9rem",
                        }}
                    >
                        <i className="ti ti-alert-circle me-2"></i>{error}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: "1rem" }}>
                        <label
                            htmlFor="admin-email"
                            style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", color: "#333", fontSize: "0.9rem" }}
                        >
                            Email Address
                        </label>
                        <input
                            id="admin-email"
                            type="email"
                            className="form-control"
                            placeholder="admin@sitrac.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            style={{ borderRadius: "8px" }}
                        />
                    </div>

                    <div style={{ marginBottom: "1.5rem" }}>
                        <label
                            htmlFor="admin-password"
                            style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", color: "#333", fontSize: "0.9rem" }}
                        >
                            Password
                        </label>
                        <input
                            id="admin-password"
                            type="password"
                            className="form-control"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            style={{ borderRadius: "8px" }}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        style={{
                            width:        "100%",
                            background:   loading ? "#6b7280" : "#052E26",
                            color:        "#fff",
                            border:       "none",
                            borderRadius: "8px",
                            padding:      "0.8rem",
                            fontWeight:   600,
                            fontSize:     "1rem",
                            cursor:       loading ? "not-allowed" : "pointer",
                            transition:   "background 0.2s",
                        }}
                    >
                        {loading ? (
                            <><i className="ti ti-loader me-2" style={{ animation: "spin 1s linear infinite" }}></i>Signing in…</>
                        ) : (
                            <><i className="ti ti-login me-2"></i>Sign In</>
                        )}
                    </button>
                </form>

                <p style={{ textAlign: "center", marginTop: "1.5rem", fontSize: "0.85rem", color: "#999", marginBottom: 0 }}>
                    ← <Link href="/" style={{ color: "#052E26", fontWeight: 500 }}>Back to website</Link>
                </p>
            </div>
        </div>
    );
}
