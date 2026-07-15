import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Terms & Conditions | SITRAC Training Institute",
    description: "Read the terms and conditions governing use of the SITRAC Training Institute website and enrolment in our training programmes and consultancy services.",
};

export default function TermsConditionsPage() {
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
                                Terms &amp; Conditions
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

                            <p>
                                Please read these Terms &amp; Conditions ("<strong>Terms</strong>") carefully before using the SITRAC
                                Training Institute website or enrolling in any of our training programmes or consultancy services.
                                By accessing our website or registering for a programme, you agree to be bound by these Terms.
                            </p>

                            <hr style={{ margin: "2rem 0", borderColor: "#e5e7eb" }} />

                            <h2 style={{ color: "#052E26", fontSize: "1.35rem", fontWeight: 700, marginBottom: "0.75rem" }}>1. About SITRAC</h2>
                            <p>
                                SITRAC Training Institute is a professional training and management consultancy registered in Kenya,
                                delivering capacity-building, governance, and institutional development programmes across East Africa.
                                References to "SITRAC", "we", "us", or "our" in these Terms mean SITRAC Training Institute.
                            </p>

                            <hr style={{ margin: "2rem 0", borderColor: "#e5e7eb" }} />

                            <h2 style={{ color: "#052E26", fontSize: "1.35rem", fontWeight: 700, marginBottom: "0.75rem" }}>2. Use of This Website</h2>
                            <p>You agree to use this website only for lawful purposes and in a manner that does not:</p>
                            <ul>
                                <li>Infringe the rights of any third party, including intellectual property rights.</li>
                                <li>Transmit unsolicited commercial communications (spam).</li>
                                <li>Attempt to gain unauthorised access to any part of the website or its underlying systems.</li>
                                <li>Upload or transmit any malicious code, viruses, or harmful data.</li>
                                <li>Impersonate SITRAC or any of its staff or representatives.</li>
                            </ul>
                            <p>
                                We reserve the right to suspend or terminate access to the website for any user who violates these Terms,
                                without prior notice.
                            </p>

                            <hr style={{ margin: "2rem 0", borderColor: "#e5e7eb" }} />

                            <h2 style={{ color: "#052E26", fontSize: "1.35rem", fontWeight: 700, marginBottom: "0.75rem" }}>3. Training Programmes — Enrolment and Payment</h2>
                            <ul>
                                <li>
                                    <strong>Enrolment:</strong> Enrolment in a SITRAC training programme is confirmed only upon receipt
                                    of a fully completed registration form and, where applicable, the required programme fee.
                                </li>
                                <li>
                                    <strong>Fees:</strong> Programme fees are stated in Kenya Shillings (KES) unless otherwise specified.
                                    Fees are inclusive of course materials, meals (where indicated), and a certificate of completion.
                                    Accommodation and travel are not included unless explicitly stated in the programme description.
                                </li>
                                <li>
                                    <strong>Payment:</strong> Payment is due before the commencement of the programme unless a formal
                                    purchase order or institutional agreement has been made in advance. SITRAC reserves the right to
                                    withhold participation for unpaid enrolments.
                                </li>
                                <li>
                                    <strong>Invoicing:</strong> Official tax invoices will be issued upon confirmed enrolment and/or
                                    receipt of payment. Participants requiring a formal LPO or commitment letter from their employer
                                    should contact us in advance.
                                </li>
                            </ul>

                            <hr style={{ margin: "2rem 0", borderColor: "#e5e7eb" }} />

                            <h2 style={{ color: "#052E26", fontSize: "1.35rem", fontWeight: 700, marginBottom: "0.75rem" }}>4. Cancellations and Refunds</h2>
                            <ul>
                                <li>
                                    <strong>Cancellation by participant:</strong> Cancellations made at least 7 working days before
                                    the programme start date will receive a full refund or credit note. Cancellations made within
                                    7 working days of the programme will forfeit 50% of the programme fee. No-shows on the day of
                                    the programme will forfeit 100% of the fee.
                                </li>
                                <li>
                                    <strong>Substitution:</strong> Participant substitutions are accepted at any time at no extra cost,
                                    provided SITRAC is notified in writing before the programme begins.
                                </li>
                                <li>
                                    <strong>Cancellation or postponement by SITRAC:</strong> SITRAC reserves the right to cancel or
                                    postpone a programme due to insufficient enrolment, facilitator unavailability, force majeure,
                                    or other circumstances beyond our reasonable control. In such cases, registered participants will
                                    receive a full refund of fees paid or the option to transfer to a rescheduled date.
                                </li>
                            </ul>

                            <hr style={{ margin: "2rem 0", borderColor: "#e5e7eb" }} />

                            <h2 style={{ color: "#052E26", fontSize: "1.35rem", fontWeight: 700, marginBottom: "0.75rem" }}>5. Certificates and CPD</h2>
                            <p>
                                Certificates of completion are issued to participants who attend the full programme (or the minimum
                                attendance threshold specified for that programme, typically 80%). SITRAC certificates are issued
                                under our own authority as a training provider. Where a programme carries Continuing Professional
                                Development (CPD) recognition from a third-party professional body, this will be clearly stated in
                                the programme description. SITRAC does not guarantee recognition by any specific professional body
                                unless explicitly stated.
                            </p>

                            <hr style={{ margin: "2rem 0", borderColor: "#e5e7eb" }} />

                            <h2 style={{ color: "#052E26", fontSize: "1.35rem", fontWeight: 700, marginBottom: "0.75rem" }}>6. Consultancy Engagements</h2>
                            <p>
                                Consultancy services are governed by a separate written service agreement or engagement letter signed
                                by both parties. In the absence of such an agreement, these Terms apply as a default framework.
                                Deliverables, timelines, fees, confidentiality obligations, and intellectual property ownership will
                                be specified in the applicable engagement documents.
                            </p>

                            <hr style={{ margin: "2rem 0", borderColor: "#e5e7eb" }} />

                            <h2 style={{ color: "#052E26", fontSize: "1.35rem", fontWeight: 700, marginBottom: "0.75rem" }}>7. Intellectual Property</h2>
                            <p>
                                All training materials, course content, presentations, manuals, case studies, and website content
                                (text, graphics, and design) are the intellectual property of SITRAC Training Institute or licensed
                                to SITRAC, and are protected by copyright law. You may not reproduce, distribute, modify, or create
                                derivative works from any SITRAC content without our prior written consent.
                            </p>
                            <p>
                                Participants may use course materials for their personal professional development only. Sharing
                                materials commercially or using them to deliver third-party training without our authorisation is
                                strictly prohibited.
                            </p>

                            <hr style={{ margin: "2rem 0", borderColor: "#e5e7eb" }} />

                            <h2 style={{ color: "#052E26", fontSize: "1.35rem", fontWeight: 700, marginBottom: "0.75rem" }}>8. Limitation of Liability</h2>
                            <p>
                                To the fullest extent permitted by applicable law, SITRAC shall not be liable for any indirect,
                                incidental, consequential, or punitive damages arising from your use of our website or participation
                                in our programmes. Our total liability for any claim arising from a specific training programme or
                                consultancy engagement shall not exceed the fees paid by you for that specific engagement.
                            </p>
                            <p>
                                We do not warrant that the website will be uninterrupted, error-free, or free from viruses or other
                                harmful components. We accept no liability for any loss or damage resulting from reliance on information
                                published on this website.
                            </p>

                            <hr style={{ margin: "2rem 0", borderColor: "#e5e7eb" }} />

                            <h2 style={{ color: "#052E26", fontSize: "1.35rem", fontWeight: 700, marginBottom: "0.75rem" }}>9. Third-Party Links</h2>
                            <p>
                                Our website may contain links to third-party websites for your convenience and information. These
                                links do not constitute endorsement of those websites or their content. SITRAC has no control over
                                third-party sites and accepts no responsibility for their content, privacy practices, or availability.
                            </p>

                            <hr style={{ margin: "2rem 0", borderColor: "#e5e7eb" }} />

                            <h2 style={{ color: "#052E26", fontSize: "1.35rem", fontWeight: 700, marginBottom: "0.75rem" }}>10. Photography and Recording</h2>
                            <p>
                                SITRAC may photograph or record training sessions for promotional and documentation purposes. By
                                attending a SITRAC event or programme, you consent to being photographed or recorded and to SITRAC
                                using such material in its marketing and communications. If you object to being photographed or recorded,
                                please notify us in writing before the programme begins.
                            </p>

                            <hr style={{ margin: "2rem 0", borderColor: "#e5e7eb" }} />

                            <h2 style={{ color: "#052E26", fontSize: "1.35rem", fontWeight: 700, marginBottom: "0.75rem" }}>11. Governing Law and Dispute Resolution</h2>
                            <p>
                                These Terms are governed by and construed in accordance with the laws of Kenya. Any dispute arising
                                from these Terms or your use of our services shall first be referred to good-faith negotiation
                                between the parties. If unresolved within 30 days, the dispute shall be submitted to the jurisdiction
                                of the courts of Kenya.
                            </p>

                            <hr style={{ margin: "2rem 0", borderColor: "#e5e7eb" }} />

                            <h2 style={{ color: "#052E26", fontSize: "1.35rem", fontWeight: 700, marginBottom: "0.75rem" }}>12. Changes to These Terms</h2>
                            <p>
                                We reserve the right to update these Terms at any time. The revised Terms will be posted on this
                                page with an updated "Last updated" date. Continued use of our website or services after any
                                revision constitutes your acceptance of the updated Terms.
                            </p>

                            <hr style={{ margin: "2rem 0", borderColor: "#e5e7eb" }} />

                            <h2 style={{ color: "#052E26", fontSize: "1.35rem", fontWeight: 700, marginBottom: "0.75rem" }}>13. Contact Us</h2>
                            <p>For questions about these Terms, please contact:</p>
                            <p>
                                <strong>SITRAC Training Institute</strong><br />
                                Nairobi, Kenya<br />
                                Email:{" "}
                                <a href="mailto:info@sitractraininginstitute.co.ke" style={{ color: "#052E26" }}>
                                    info@sitractraininginstitute.co.ke
                                </a>
                            </p>

                            <div style={{ marginTop: "2.5rem", paddingTop: "1.5rem", borderTop: "1px solid #e5e7eb", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
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
                                    Contact Us
                                </Link>
                                <Link
                                    href="/privacy-policy"
                                    style={{
                                        display: "inline-flex", alignItems: "center", gap: "0.5rem",
                                        border: "2px solid #052E26", color: "#052E26", padding: "0.75rem 1.75rem",
                                        borderRadius: "50px", fontWeight: 600, textDecoration: "none",
                                        fontSize: "0.95rem",
                                    }}
                                >
                                    <i className="ti ti-shield-lock" />
                                    Privacy Policy
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
