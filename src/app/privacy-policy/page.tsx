import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Privacy Policy | SITRAC Training Institute",
    description: "Learn how SITRAC Training Institute collects, uses, and protects your personal information when you use our website or training services.",
};

export default function PrivacyPolicyPage() {
    return (
        <>
            {/* ── Page Hero ── */}
            <section
                style={{
                    background: "linear-gradient(135deg, #052E26 0%, #0a5c48 100%)",
                    padding: "80px 0 60px",
                    color: "#fff",
                }}
            >
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-8">
                            <p style={{ color: "#4ade80", fontWeight: 600, letterSpacing: "0.1em", fontSize: "0.85rem", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                                Legal
                            </p>
                            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, marginBottom: "1rem" }}>
                                Privacy Policy
                            </h1>
                            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "1.05rem", marginBottom: 0 }}>
                                Last updated: 1 July 2026
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Content ── */}
            <section style={{ padding: "70px 0 80px", background: "#fff" }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8" style={{ fontSize: "1rem", lineHeight: "1.85", color: "#374151" }}>

                            <h2 style={{ color: "#052E26", fontSize: "1.35rem", fontWeight: 700, marginBottom: "0.75rem" }}>1. Who We Are</h2>
                            <p>
                                SITRAC Training Institute ("<strong>SITRAC</strong>", "we", "us", or "our") is a training and management consultancy
                                registered in Kenya. Our registered office is located in Nairobi, Kenya. We operate the website{" "}
                                <a href="https://www.sitractraininginstitute.co.ke" style={{ color: "#052E26" }}>www.sitractraininginstitute.co.ke</a>{" "}
                                (the "Site") and provide professional training programmes, capacity-building services, and institutional consultancy
                                across East Africa and beyond.
                            </p>
                            <p>
                                This Privacy Policy explains what personal data we collect, how we use it, and what rights you have regarding
                                your personal information, in compliance with the <strong>Kenya Data Protection Act, 2019</strong> (and its
                                subsequent regulations) as well as applicable international best practices.
                            </p>

                            <hr style={{ margin: "2rem 0", borderColor: "#e5e7eb" }} />

                            <h2 style={{ color: "#052E26", fontSize: "1.35rem", fontWeight: 700, marginBottom: "0.75rem" }}>2. Information We Collect</h2>
                            <p>We collect personal information in the following ways:</p>
                            <ul>
                                <li>
                                    <strong>Contact form submissions:</strong> When you fill in our contact form, we collect your name, email
                                    address, organisation (if provided), and the content of your message.
                                </li>
                                <li>
                                    <strong>Event registrations:</strong> When you register for a training programme or event via an external
                                    registration link, the data collected is governed by the privacy policy of that registration platform.
                                    SITRAC may receive your name, email, and organisation for the purpose of event administration.
                                </li>
                                <li>
                                    <strong>Enquiry emails:</strong> If you email us directly, we retain the content of that correspondence
                                    and your contact details for the purpose of responding to your enquiry.
                                </li>
                                <li>
                                    <strong>Cookies and analytics:</strong> Our Site may use essential cookies required for it to function
                                    correctly and, where you consent, analytics cookies to help us understand how visitors use the Site
                                    (see Section 5 below).
                                </li>
                                <li>
                                    <strong>Automatically collected data:</strong> When you visit our Site, our hosting infrastructure
                                    may automatically log your IP address, browser type, referring URL, and pages visited. This information
                                    is used solely for security and diagnostic purposes.
                                </li>
                            </ul>
                            <p>We do <strong>not</strong> collect sensitive personal data (e.g. financial account details, health information)
                            through this website.</p>

                            <hr style={{ margin: "2rem 0", borderColor: "#e5e7eb" }} />

                            <h2 style={{ color: "#052E26", fontSize: "1.35rem", fontWeight: 700, marginBottom: "0.75rem" }}>3. How We Use Your Information</h2>
                            <p>We use the personal data we collect for the following purposes:</p>
                            <ul>
                                <li>To respond to enquiries and provide information about our programmes and services.</li>
                                <li>To administer training enrolments, issue certificates, and communicate logistical details.</li>
                                <li>To improve the content and usability of our website.</li>
                                <li>To comply with legal and regulatory obligations applicable to our operations in Kenya.</li>
                                <li>To send you information about upcoming programmes, events, or publications — only where you have expressly
                                    opted in or where a legitimate interest exists under applicable law.</li>
                            </ul>
                            <p>
                                We will not use your personal data for automated decision-making or profiling that significantly affects you.
                            </p>

                            <hr style={{ margin: "2rem 0", borderColor: "#e5e7eb" }} />

                            <h2 style={{ color: "#052E26", fontSize: "1.35rem", fontWeight: 700, marginBottom: "0.75rem" }}>4. Lawful Basis for Processing</h2>
                            <p>Under the Kenya Data Protection Act 2019, we process your personal data on the following lawful bases:</p>
                            <ul>
                                <li><strong>Consent:</strong> Where you have given explicit consent (e.g. opting in to our mailing list).</li>
                                <li><strong>Legitimate interests:</strong> Where processing is necessary for our legitimate business interests,
                                    provided those interests are not overridden by your rights (e.g. responding to a direct enquiry you initiated).</li>
                                <li><strong>Contractual necessity:</strong> Where processing is necessary to fulfil a training contract or
                                    service agreement with you or your organisation.</li>
                                <li><strong>Legal obligation:</strong> Where processing is required to comply with applicable law.</li>
                            </ul>

                            <hr style={{ margin: "2rem 0", borderColor: "#e5e7eb" }} />

                            <h2 style={{ color: "#052E26", fontSize: "1.35rem", fontWeight: 700, marginBottom: "0.75rem" }}>5. Cookies</h2>
                            <p>
                                Our Site uses cookies — small text files stored on your device. We use the following categories:
                            </p>
                            <ul>
                                <li>
                                    <strong>Strictly necessary cookies:</strong> Required for the Site to function (e.g. session management,
                                    security tokens). These cannot be disabled.
                                </li>
                                <li>
                                    <strong>Analytics cookies:</strong> Help us understand how visitors interact with the Site (e.g. pages
                                    most visited, referral sources). We only enable these where you have provided consent via our cookie notice.
                                    No personally identifiable information is shared with analytics providers.
                                </li>
                            </ul>
                            <p>
                                You can control cookie settings through your browser. Disabling analytics cookies will not affect your
                                ability to use the Site.
                            </p>

                            <hr style={{ margin: "2rem 0", borderColor: "#e5e7eb" }} />

                            <h2 style={{ color: "#052E26", fontSize: "1.35rem", fontWeight: 700, marginBottom: "0.75rem" }}>6. Data Sharing and Third Parties</h2>
                            <p>
                                We do not sell or rent your personal data to third parties. We may share your data with:
                            </p>
                            <ul>
                                <li>
                                    <strong>Service providers:</strong> Trusted technology partners who help us operate our website and deliver
                                    our services (e.g. cloud hosting providers, email service providers). These providers are contractually
                                    bound to process data only on our instructions and in compliance with applicable data protection law.
                                </li>
                                <li>
                                    <strong>Regulatory authorities:</strong> Where required by law, court order, or regulatory requirement
                                    within Kenya or applicable international law.
                                </li>
                                <li>
                                    <strong>Partner organisations:</strong> Where you register for a joint programme delivered in partnership
                                    with another institution, we may share your details with that institution solely for programme administration
                                    purposes, and we will inform you of this at the point of registration.
                                </li>
                            </ul>

                            <hr style={{ margin: "2rem 0", borderColor: "#e5e7eb" }} />

                            <h2 style={{ color: "#052E26", fontSize: "1.35rem", fontWeight: 700, marginBottom: "0.75rem" }}>7. Data Retention</h2>
                            <p>
                                We retain personal data only for as long as necessary for the purposes for which it was collected:
                            </p>
                            <ul>
                                <li>Contact form enquiries: up to 2 years from the date of last interaction.</li>
                                <li>Training enrolment records: up to 7 years, to comply with financial and audit requirements.</li>
                                <li>Certificates issued: retained permanently as records of professional development.</li>
                            </ul>
                            <p>After the applicable retention period, data is securely deleted or anonymised.</p>

                            <hr style={{ margin: "2rem 0", borderColor: "#e5e7eb" }} />

                            <h2 style={{ color: "#052E26", fontSize: "1.35rem", fontWeight: 700, marginBottom: "0.75rem" }}>8. Your Rights</h2>
                            <p>Under the Kenya Data Protection Act 2019, you have the right to:</p>
                            <ul>
                                <li>Request access to the personal data we hold about you.</li>
                                <li>Request correction of inaccurate or incomplete data.</li>
                                <li>Request deletion of your personal data (subject to legal retention obligations).</li>
                                <li>Object to or restrict certain processing activities.</li>
                                <li>Withdraw consent at any time (where processing is based on consent).</li>
                                <li>Lodge a complaint with the Office of the Data Protection Commissioner (ODPC) of Kenya.</li>
                            </ul>
                            <p>
                                To exercise any of these rights, please contact us at{" "}
                                <a href="mailto:info@sitractraininginstitute.co.ke" style={{ color: "#052E26" }}>
                                    info@sitractraininginstitute.co.ke
                                </a>. We will respond within 30 days of receiving your request.
                            </p>

                            <hr style={{ margin: "2rem 0", borderColor: "#e5e7eb" }} />

                            <h2 style={{ color: "#052E26", fontSize: "1.35rem", fontWeight: 700, marginBottom: "0.75rem" }}>9. Data Security</h2>
                            <p>
                                We implement appropriate technical and organisational measures to protect your personal data against
                                unauthorised access, disclosure, alteration, or destruction. These include SSL/TLS encryption on data in
                                transit, access controls limiting who within SITRAC can access personal data, and regular security reviews
                                of our systems. However, no internet transmission is completely secure, and we encourage you to use
                                secure connections when communicating with us.
                            </p>

                            <hr style={{ margin: "2rem 0", borderColor: "#e5e7eb" }} />

                            <h2 style={{ color: "#052E26", fontSize: "1.35rem", fontWeight: 700, marginBottom: "0.75rem" }}>10. Changes to This Policy</h2>
                            <p>
                                We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law.
                                The "Last updated" date at the top of this page will always reflect the most recent revision. We encourage
                                you to review this policy periodically.
                            </p>

                            <hr style={{ margin: "2rem 0", borderColor: "#e5e7eb" }} />

                            <h2 style={{ color: "#052E26", fontSize: "1.35rem", fontWeight: 700, marginBottom: "0.75rem" }}>11. Contact Us</h2>
                            <p>If you have any questions about this Privacy Policy or our data handling practices, please contact:</p>
                            <p>
                                <strong>SITRAC Training Institute</strong><br />
                                Nairobi, Kenya<br />
                                Email:{" "}
                                <a href="mailto:info@sitractraininginstitute.co.ke" style={{ color: "#052E26" }}>
                                    info@sitractraininginstitute.co.ke
                                </a>
                            </p>

                            <div style={{ marginTop: "2.5rem", paddingTop: "1.5rem", borderTop: "1px solid #e5e7eb" }}>
                                <Link
                                    href="/contact"
                                    style={{
                                        display: "inline-flex", alignItems: "center", gap: "0.5rem",
                                        background: "#052E26", color: "#fff", padding: "0.75rem 1.75rem",
                                        borderRadius: "50px", fontWeight: 600, textDecoration: "none",
                                        fontSize: "0.95rem",
                                    }}
                                >
                                    <i className="ti ti-mail" />
                                    Contact Us with Questions
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
