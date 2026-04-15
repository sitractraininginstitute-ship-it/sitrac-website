import Image from "next/image";
import Link from "next/link";
import bgImg74 from "@/assets/img/bg-img/74.jpg";
import bgImg75 from "@/assets/img/bg-img/75.jpg";
import bgImg76 from "@/assets/img/bg-img/76.jpg";
import bgImg77 from "@/assets/img/bg-img/77.jpg";
import bgImg70 from "@/assets/img/bg-img/70.jpg";
import bgImg71 from "@/assets/img/bg-img/71.jpg";
import bgImg72 from "@/assets/img/bg-img/72.jpg";
import bgImg73 from "@/assets/img/bg-img/73.jpg";

export default function BlogSectionFour() {
    return (
        <div className="blog-section">
            {/*-- Divider --*/}
            <div className="divider"></div>

            <div className="container">
                <div className="row g-5 g-md-4 g-xl-5">
                    <div className="col-12 col-md-7 col-lg-8">
                        {/*-- Blog Standard --*/}
                        <div className="d-flex flex-column gap-5 pe-lg-3">
                            {/*-- Blog Card --*/}
                            <div className="blog-card style-two fadeInUp" data-delay="0.5">
                                <div className="blog-img">
                                    <Image src={bgImg74} alt="" className="h-auto"/>
                                </div>
                                <div className="blog-body">
                                    <div className="blog-meta mb-2">
                                        <a href="#" className="post-category">Knowledge</a>
                                        <span className="dot"></span>
                                        <a className="post-date" href="#">27 May, 2025</a>
                                    </div>
                                    <Link href="/blog/details" className="post-title">How You Can Find A Design Job You
                                        Will Truly</Link>
                                    <div className="mt-5">
                                        <Link href="/blog/details" className="btn btn-primary">
                                            <span>View Details</span>
                                            <span>View Details</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/*-- Blog Card --*/}
                            <div className="blog-card style-two fadeInUp" data-delay="0.5">
                                <div className="blog-img">
                                    <Image src={bgImg75} alt="" className="h-auto"/>
                                </div>
                                <div className="blog-body">
                                    <div className="blog-meta mb-2">
                                        <a href="#" className="post-category">Knowledge</a>
                                        <span className="dot"></span>
                                        <a className="post-date" href="#">27 May, 2025</a>
                                    </div>
                                    <Link href="/blog/details" className="post-title">The Missing Advice I Needed When
                                        Starting My
                                        Career</Link>
                                    <div className="mt-5">
                                        <Link href="/blog/details" className="btn btn-primary">
                                            <span>View Details</span>
                                            <span>View Details</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/*-- Blog Card --*/}
                            <div className="blog-card style-two fadeInUp" data-delay="0.5">
                                <div className="blog-img">
                                    <Image src={bgImg76} alt="" className="h-auto"/>
                                </div>
                                <div className="blog-body">
                                    <div className="blog-meta mb-2">
                                        <a href="#" className="post-category">Knowledge</a>
                                        <span className="dot"></span>
                                        <a className="post-date" href="#">27 May, 2025</a>
                                    </div>
                                    <Link href="/blog/details" className="post-title">How to Craft The Perfect Web
                                        Design and
                                        Developer</Link>
                                    <div className="mt-5">
                                        <Link href="/blog/details" className="btn btn-primary">
                                            <span>View Details</span>
                                            <span>View Details</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/*-- Blog Card --*/}
                            <div className="blog-card style-two fadeInUp" data-delay="0.5">
                                <div className="blog-img">
                                    <Image src={bgImg77} alt="" className="h-auto"/>
                                </div>
                                <div className="blog-body">
                                    <div className="blog-meta mb-2">
                                        <a href="#" className="post-category">Knowledge</a>
                                        <span className="dot"></span>
                                        <a className="post-date" href="#">27 May, 2025</a>
                                    </div>
                                    <Link href="/blog/details" className="post-title">Essential for Effective Market
                                        Research &
                                        Analysis</Link>
                                    <div className="mt-5">
                                        <Link href="/blog/details" className="btn btn-primary">
                                            <span>View Details</span>
                                            <span>View Details</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/*-- Pagination --*/}
                            <ul className="bizora-pagination justify-content-start list-unstyled">
                                <li className="active"><a href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#"><i className="ti ti-chevron-right"></i></a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-12 col-md-5 col-lg-4">
                        <div className="d-flex flex-column gap-5">
                            {/*-- Widget --*/}
                            <div className="widget-card">
                                <h4 className="h4 widget-title">Search Here</h4>

                                {/*-- Form --*/}
                                <form action="#" method="get">
                                    <input type="search" placeholder="Search..." className="form-control"/>
                                    <button type="submit">
                                        <i className="ti ti-search"></i>
                                    </button>
                                </form>
                            </div>

                            {/*-- Widget --*/}
                            <div className="widget-card">
                                <h4 className="h4 widget-title">Categories</h4>

                                <ul className="blog-list">
                                    <li>
                                        <Link href="/blog-grid">
                                            Business
                                            <span>(2)</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/blog-grid">
                                            Uncategorized
                                            <span>(18)</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/blog-grid">
                                            Consulting
                                            <span>(4)</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/blog-grid">
                                            Cyber Security
                                            <span>(8)</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/blog-grid">
                                            Technology
                                            <span>(11)</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/blog-grid">
                                            Marketing
                                            <span>(5)</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            {/*-- Widget --*/}
                            <div className="widget-card">
                                <h4 className="h4 widget-title">Recent Posts</h4>

                                <div className="d-flex flex-column gap-4">
                                    {/*-- Widget Post --*/}
                                    <div className="widget-blog">
                                        <div className="blog-thumbnail">
                                            <Image src={bgImg70} alt="" className="h-auto"/>
                                        </div>
                                        <div className="blog-content">
                                            <Link href="/blog/details" className="post-title mb-2">How You Can Find A
                                                Design Job
                                                You Will Truly</Link>
                                            <a href="#" className="post-date">July 9 2025</a>
                                        </div>
                                    </div>

                                    {/*-- Widget Post --*/}
                                    <div className="widget-blog">
                                        <div className="blog-thumbnail">
                                            <Image src={bgImg71} alt="" className="h-auto"/>
                                        </div>
                                        <div className="blog-content">
                                            <Link href="/blog/details" className="post-title mb-2">The Missing Advice I
                                                Needed When
                                                Starting My Career</Link>
                                            <a href="#" className="post-date">July 9 2025</a>
                                        </div>
                                    </div>

                                    {/*-- Widget Post --*/}
                                    <div className="widget-blog">
                                        <div className="blog-thumbnail">
                                            <Image src={bgImg72} alt="" className="h-auto"/>
                                        </div>
                                        <div className="blog-content">
                                            <Link href="/blog/details" className="post-title mb-2">How to Craft The
                                                Perfect Web
                                                Design and Developer</Link>
                                            <a href="#" className="post-date">July 9 2025</a>
                                        </div>
                                    </div>

                                    {/*-- Widget Post --*/}
                                    <div className="widget-blog">
                                        <div className="blog-thumbnail">
                                            <Image src={bgImg73} alt="" className="h-auto"/>
                                        </div>
                                        <div className="blog-content">
                                            <Link href="/blog/details" className="post-title mb-2">Essential for
                                                Effective Market
                                                Research & Analysis</Link>
                                            <a href="#" className="post-date">July 9 2025</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/*-- Widget --*/}
                            <div className="widget-card">
                                <h4 className="h4 widget-title">Tags</h4>

                                {/*-- Tag List --*/}
                                <ul className="tag-list list-unstyled">
                                    <li><a href="#">All Project</a></li>
                                    <li><a href="#">Interior</a></li>
                                    <li><a href="#">Planting</a></li>
                                    <li><a href="#">Daily Inspiration</a></li>
                                    <li><a href="#">Mobile</a></li>
                                    <li><a href="#">Trend</a></li>
                                    <li><a href="#">Design</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*-- Divider --*/}
            <div className="divider"></div>
        </div>
    )
}