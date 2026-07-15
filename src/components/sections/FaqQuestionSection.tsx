import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";
import { connectToDatabase } from "@/lib/mongodb";
import FAQModel from "@/models/FAQ";

export default async function FaqQuestionSection() {
    noStore();

    let faqs: { _id: string; question: string; answer: string }[] = [];
    try {
        await connectToDatabase();
        const docs = await FAQModel.find().sort({ order: 1 }).lean();
        faqs = docs.map((f) => ({
            _id:      (f._id as { toString(): string }).toString(),
            question: f.question as string,
            answer:   f.answer   as string,
        }));
    } catch (err) {
        console.error("FaqQuestionSection: failed to load FAQs", err);
    }

    return (
        <div className="faq-question-section">
            {/*-- Divider --*/}
            <div className="divider"></div>

            <div className="container">
                <div className="row justify-content-center g-5">
                    <div className="col-12 col-lg-8">
                        {/*-- FAQ Accordion --*/}
                        <div className="faq-accordion style-three">
                            <div className="accordion" id="faqPageAccordion">
                                {faqs.length > 0 ? faqs.map((faq, index) => (
                                    <div key={faq._id} className="accordion-item">
                                        <div className="accordion-header">
                                            <button
                                                className={`accordion-button${index === 0 ? "" : " collapsed"}`}
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target={`#faqPage${index}`}
                                                aria-expanded={index === 0 ? "true" : "false"}
                                                aria-controls={`faqPage${index}`}
                                            >
                                                {faq.question}
                                            </button>
                                        </div>
                                        <div
                                            id={`faqPage${index}`}
                                            className={`accordion-collapse collapse${index === 0 ? " show" : ""}`}
                                            data-bs-parent="#faqPageAccordion"
                                        >
                                            <div className="accordion-body">{faq.answer}</div>
                                        </div>
                                    </div>
                                )) : (
                                    <p className="text-muted">No FAQs found. Please check back later.</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*-- Divider --*/}
            <div className="divider"></div>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-10 col-md-8 col-lg-6">
                        <div className="section-heading text-center">
                            <h2 className="mb-3">Still have questions?</h2>
                            <p className="mb-5">Our team is happy to help with any queries about our training programmes, consultancy services, or enrolment process.</p>
                            <Link href="/contact" className="btn btn-primary">
                                <span>Contact Support</span>
                                <span>Contact Support</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/*-- Divider --*/}
            <div className="divider"></div>
        </div>
    );
}