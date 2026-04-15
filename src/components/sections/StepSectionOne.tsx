interface StepSectionOneProps {
    classes? : string
}

export default function StepSectionOne({classes}: StepSectionOneProps) {
    return (
        <section className={`step-section ${classes}`}>
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

            <div className="container">
                <div className="row g-5 g-lg-0">
                    {/*-- Step Card --*/}
                    <div className="col-12 col-sm-6 col-lg-3">
                        <div className="step-card fadeInUp" data-delay="0.5">
                            <div className="step-number">
                                <span>Step 01</span>
                                <div className="arrow-down">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="7" height="140" viewBox="0 0 7 140"
                                         fill="none">
                                        <path
                                            d="M3.5 140L6.38675 135L0.613244 135L3.5 140ZM3.5 0L3 -2.84124e-08L3 135.5L3.5 135.5L4 135.5L4 2.84124e-08L3.5 0Z"
                                            fill="#132B49" fillOpacity="0.3"/>
                                    </svg>
                                </div>
                            </div>
                            <div className="step-body mt-4 px-3 px-xxl-4">
                                <h4>Needs Assessment</h4>
                                <p className="mb-0">We identify institutional gaps and training needs.</p>
                            </div>
                        </div>
                    </div>

                    {/*-- Step Card --*/}
                    <div className="col-12 col-sm-6 col-lg-3">
                        <div className="step-card fadeInUp" data-delay="0.75">
                            <div className="step-number">
                                <span>Step 02</span>
                                <div className="arrow-down">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="7" height="140" viewBox="0 0 7 140"
                                         fill="none">
                                        <path
                                            d="M3.5 140L6.38675 135L0.613244 135L3.5 140ZM3.5 0L3 -2.84124e-08L3 135.5L3.5 135.5L4 135.5L4 2.84124e-08L3.5 0Z"
                                            fill="#132B49" fillOpacity="0.3"/>
                                    </svg>
                                </div>
                            </div>
                            <div className="step-body mt-4 px-3 px-xxl-4">
                                <h4>Data Collection</h4>
                                <p className="mb-0">We gather relevant information for accurate planning.</p>
                            </div>
                        </div>
                    </div>

                    {/*-- Step Card --*/}
                    <div className="col-12 col-sm-6 col-lg-3">
                        <div className="step-card fadeInUp" data-delay="1">
                            <div className="step-number">
                                <span>Step 03</span>
                                <div className="arrow-down">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="7" height="140" viewBox="0 0 7 140"
                                         fill="none">
                                        <path
                                            d="M3.5 140L6.38675 135L0.613244 135L3.5 140ZM3.5 0L3 -2.84124e-08L3 135.5L3.5 135.5L4 135.5L4 2.84124e-08L3.5 0Z"
                                            fill="#132B49" fillOpacity="0.3"/>
                                    </svg>
                                </div>
                            </div>
                            <div className="step-body mt-4 px-3 px-xxl-4">
                                <h4>Analysis & Review</h4>
                                <p className="mb-0">We assess performance gaps and improvement areas.</p>
                            </div>
                        </div>
                    </div>

                    {/*-- Step Card --*/}
                    <div className="col-12 col-sm-6 col-lg-3">
                        <div className="step-card fadeInUp" data-delay="1.25">
                            <div className="step-number">
                                <span>Step 04</span>
                                <div className="arrow-down">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="7" height="140" viewBox="0 0 7 140"
                                         fill="none">
                                        <path
                                            d="M3.5 140L6.38675 135L0.613244 135L3.5 140ZM3.5 0L3 -2.84124e-08L3 135.5L3.5 135.5L4 135.5L4 2.84124e-08L3.5 0Z"
                                            fill="#132B49" fillOpacity="0.3"/>
                                    </svg>
                                </div>
                            </div>
                            <div className="step-body mt-4 px-3 px-xxl-4">
                                <h4>Implementation</h4>
                                <p className="mb-0">We deliver tailored training and capacity solutions.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*-- Divider --*/}
            <div className="divider"></div>
        </section>
    )
}