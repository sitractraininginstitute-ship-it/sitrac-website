import { unstable_noStore as noStore } from "next/cache";
import { connectToDatabase } from "@/lib/mongodb";
import ProcessStepModel from "@/models/ProcessStep";

interface StepSectionOneProps {
    classes?: string;
}

/** Reusable vertical arrow SVG — identical for every step */
function ArrowDown() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="140" viewBox="0 0 7 140" fill="none">
            <path
                d="M3.5 140L6.38675 135L0.613244 135L3.5 140ZM3.5 0L3 -2.84124e-08L3 135.5L3.5 135.5L4 135.5L4 2.84124e-08L3.5 0Z"
                fill="#132B49" fillOpacity="0.3"/>
        </svg>
    );
}

export default async function StepSectionOne({ classes }: StepSectionOneProps) {
    noStore();

    let steps: { _id: string; stepNumber: string; title: string; description: string }[] = [];
    try {
        await connectToDatabase();
        const docs = await ProcessStepModel.find().sort({ order: 1 }).lean();
        steps = docs.map((s) => ({
            _id:         (s._id as { toString(): string }).toString(),
            stepNumber:  s.stepNumber  as string,
            title:       s.title       as string,
            description: s.description as string,
        }));
    } catch (err) {
        console.error("StepSectionOne: failed to load process steps", err);
    }

    return (
        <section className={`step-section ${classes ?? ""}`}>
            {/*-- Divider --*/}
            <div className="divider"></div>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-10 col-md-9 col-lg-8 col-xl-7 col-xxl-6">
                        <div className="section-heading text-center">
                            <span className="subtitle fadeInUp" data-delay="0.5">Process</span>
                            <h2 className="mb-0 heading-line" data-delay="0.75">Simple Steps to Capacity Development</h2>
                        </div>
                    </div>
                </div>
            </div>

            {/*-- Divider --*/}
            <div className="divider-sm"></div>

            {steps.length > 0 && (
                <div className="container">
                    <div className="row g-5 g-lg-0">
                        {steps.map((step, index) => {
                            const delay = (0.25 * (index + 2)).toFixed(2);
                            return (
                                <div key={step._id} className="col-12 col-sm-6 col-lg-3">
                                    <div className="step-card fadeInUp" data-delay={delay}>
                                        <div className="step-number">
                                            <span>Step {step.stepNumber}</span>
                                            <div className="arrow-down">
                                                <ArrowDown />
                                            </div>
                                        </div>
                                        <div className="step-body mt-4 px-3 px-xxl-4">
                                            <h4>{step.title}</h4>
                                            <p className="mb-0">{step.description}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}

            {/*-- Divider --*/}
            <div className="divider"></div>
        </section>
    );
}