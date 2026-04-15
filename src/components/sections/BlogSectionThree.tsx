import Image from "next/image";
import bgImg45 from "@/assets/img/bg-img/45.jpg";
import bgImg53 from "@/assets/img/bg-img/53.jpg";
import bgImg51 from "@/assets/img/bg-img/51.jpg";
import bgImg52 from "@/assets/img/bg-img/52.jpg";
import Link from "next/link";

export default function BlogSectionThree() {
    return (
        <section className="blog-section">
            {/*-- Divider --*/}
            <div className="divider"></div>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-10 col-md-9 col-lg-8 col-xl-7 col-xxl-6">
                        <div className="section-heading text-center">
                            <span className="subtitle">Latest Blog</span>
                            <h2 className="mb-0">Take a look at the latest articles from blog</h2>
                        </div>
                    </div>
                </div>
            </div>

            {/*-- Divider --*/}
            <div className="divider-sm"></div>

            <div className="container">
                <div className="row g-4">
                    <div className="col-12 col-lg-6">
                        <div className="blog-card-two style-two translateY8 fadeInUp" data-delay="0.5">
                            <Image src={bgImg45} alt="" className="h-auto"/>
                            {/*-- Blog Body --*/}
                            <div className="blog-body pe-xxl-5">
                                <div className="blog-meta mb-2">
                                    <a href="#" className="post-category">Consulting</a>
                                    <span className="dot"></span>
                                    <a className="post-date" href="#">26 June 2025</a>
                                </div>
                                <Link href="/blog/details" className="post-title">Predefined Chunk Necessary Generator
                                    The
                                    Internet.</Link>
                                {/*-- Button --*/}
                                <div className="d-block mt-4">
                                    <Link href="/blog/details" className="btn-view-more">
                                        <span><i className="ti ti-plus"></i></span>
                                        <span><i className="ti ti-plus"></i> View Details</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-6">
                        <div className="d-flex flex-column gap-4">
                            {/*-- Blog Card Three --*/}
                            <div className="blog-card-three translateY8 fadeInUp" data-delay="0.5">
                                <div className="blog-img">
                                    <Image src={bgImg53} alt="" className="h-auto"/>
                                </div>
                                {/*-- Blog Body --*/}
                                <div className="blog-body">
                                    <div className="blog-meta mb-2">
                                        <a href="#" className="post-category">Consulting</a>
                                        <span className="dot"></span>
                                        <a className="post-date" href="#">26 June 2025</a>
                                    </div>
                                    <Link href="/blog/details" className="post-title">How can you choose the better
                                        option for
                                        you.</Link>
                                    {/*-- Button --*/}
                                    <div className="d-block mt-3">
                                        <Link href="/blog/details" className="btn btn-link">
                                            <span><i className="ti ti-plus"></i> View Details</span>
                                            <span><i className="ti ti-plus"></i> View Details</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/*-- Blog Card Three --*/}
                            <div className="blog-card-three translateY8 fadeInUp" data-delay="0.75">
                                <div className="blog-img">
                                    <Image src={bgImg51} alt="" className="h-auto"/>
                                </div>
                                {/*-- Blog Body --*/}
                                <div className="blog-body">
                                    <div className="blog-meta mb-2">
                                        <a href="#" className="post-category">Consulting</a>
                                        <span className="dot"></span>
                                        <a className="post-date" href="#">26 June 2025</a>
                                    </div>
                                    <Link href="/blog/details" className="post-title">Standard dummy text ever since
                                        the
                                        unknown.</Link>
                                    {/*-- Button --*/}
                                    <div className="d-block mt-3">
                                        <Link href="/blog/details" className="btn btn-link">
                                            <span><i className="ti ti-plus"></i> View Details</span>
                                            <span><i className="ti ti-plus"></i> View Details</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/*-- Blog Card Three --*/}
                            <div className="blog-card-three translateY8 fadeInUp" data-delay="1">
                                <div className="blog-img">
                                    <Image src={bgImg52} alt="" className="h-auto"/>
                                </div>
                                {/*-- Blog Body --*/}
                                <div className="blog-body">
                                    <div className="blog-meta mb-2">
                                        <a href="#" className="post-category">Consulting</a>
                                        <span className="dot"></span>
                                        <a className="post-date" href="#">26 June 2025</a>
                                    </div>
                                    <Link href="/blog/details" className="post-title">Since The Unknown Took Make A
                                        Type Specimen
                                        Book.</Link>
                                    {/*-- Button --*/}
                                    <div className="d-block mt-3">
                                        <Link href="/blog/details" className="btn btn-link">
                                            <span><i className="ti ti-plus"></i> View Details</span>
                                            <span><i className="ti ti-plus"></i> View Details</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*-- Divider --*/}
            <div className="divider"></div>
            <div className="divider"></div>
        </section>
    )
}