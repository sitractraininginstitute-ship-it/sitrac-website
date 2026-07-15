import { unstable_noStore as noStore } from "next/cache";
import Image from "next/image";
import questionMark from "@/assets/img/core-img/question-mark.png";
import Link from "next/link";
import { connectToDatabase } from "@/lib/mongodb";
import FAQModel from "@/models/FAQ";

export default async function FaqSectionTwo() {
    noStore();

    let faqs: { _id: string; question: string; answer: string }[] = [];
    try {
        await connectToDatabase();
        const docs = await FAQModel.find().sort({ order: 1 }).limit(5).lean();
        faqs = docs.map((f) => ({
            _id:      (f._id as { toString(): string }).toString(),
            question: f.question as string,
            answer:   f.answer   as string,
        }));
    } catch (err) {
        console.error("FaqSectionTwo: failed to load FAQs", err);
    }

    return (
        <section className="faq-section">
            {/*-- Divider --*/}
            <div className="divider"></div>

            <div className="container">
                <div className="row g-4 g-lg-5">
                    {/*-- Section Heading --*/}
                    <div className="col-12 col-md-6">
                        <div className="section-heading pe-xxl-5">
                            <span className="subtitle">Question</span>
                            <h2 className="mb-4">Frequently Asked Questions</h2>
                            <p className="mb-5">Find answers to common questions about our services, process, timelines, and how we work with clients and partners.</p>
                            <Link href="/contact" className="btn btn-primary">
                                <span>Everything you need to know</span>
                                <span>Ask Your Question</span>
                            </Link>
                            {/*-- Question Mark --*/}
                            <div className="question-mark scroll-image">
                                <Image src={questionMark} alt=""/>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        {/*-- FAQ Accordion --*/}
                        <div className="faq-accordion">
                            <div className="accordion" id="faqAccordionHome">
                                {faqs.length > 0 ? faqs.map((faq, index) => (
                                    <div key={faq._id} className="accordion-item">
                                        <div className="accordion-header">
                                            <button
                                                className={`accordion-button${index === 0 ? "" : " collapsed"}`}
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target={`#homeFaq${index}`}
                                                aria-expanded={index === 0 ? "true" : "false"}
                                                aria-controls={`homeFaq${index}`}
                                            >
                                                {faq.question}
                                            </button>
                                        </div>
                                        <div
                                            id={`homeFaq${index}`}
                                            className={`accordion-collapse collapse${index === 0 ? " show" : ""}`}
                                            data-bs-parent="#faqAccordionHome"
                                        >
                                            <div className="accordion-body">{faq.answer}</div>
                                        </div>
                                    </div>
                                )) : (
                                    /* Fallback static FAQs if DB is empty */
                                    <>
                                        <div className="accordion-item">
                                            <div className="accordion-header">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#homeFaqFallback1" aria-expanded="true" aria-controls="homeFaqFallback1">
                                                    What services do you offer?
                                                </button>
                                            </div>
                                            <div id="homeFaqFallback1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordionHome">
                                                <div className="accordion-body">We provide capacity building, institutional development, and strategic support services.</div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <div className="accordion-header">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#homeFaqFallback2" aria-expanded="false" aria-controls="homeFaqFallback2">
                                                    Who can use your services?
                                                </button>
                                            </div>
                                            <div id="homeFaqFallback2" className="accordion-collapse collapse" data-bs-parent="#faqAccordionHome">
                                                <div className="accordion-body">Our services are available to NGOs, government institutions, private organizations, and community-based groups.</div>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*-- Divider --*/}
            <div className="divider"></div>
        </section>
    );
}