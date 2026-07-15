import Image from "next/image";
import shapeImg from "@/assets/img/core-img/shape4.png";
import Link from "next/link";
import logo from "@/assets/img/core-img/logo.png";

export default function FooterOne() {
    return (
        <footer className="footer-section bg-dark">
            {/*-- Divider --*/}
            <div className="divider"></div>

            {/*-- Shape --*/}
            <div className="shape">
                <Image src={shapeImg} alt=""/>
            </div>

            <div className="container">
                <div className="row g-5 g-md-4 g-xl-5">
                    {/*-- Footer Card: Brand --*/}
                    <div className="col-12 col-sm-6 col-md-4 col-xl-5">
                        <div className="footer-card me-lg-5">
                            {/*-- Footer Logo --*/}
                            <Link href="/" className="footer-logo mb-4">
                                <Image src={logo} alt="SITRAC Training Institute" className="h-auto"/>
                            </Link>
                            <p>SITRAC delivers training and consultancy solutions that strengthen institutions, improve governance, and build capacity across Africa.</p>
                            {/*-- Social Nav --*/}
                            <div className="social-nav">
                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                    <i className="ti ti-brand-facebook"></i>
                                </a>
                                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                    <i className="ti ti-brand-linkedin"></i>
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="X / Twitter">
                                    <i className="ti ti-brand-x"></i>
                                </a>
                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                    <i className="ti ti-brand-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/*-- Footer Card: Quick Links --*/}
                    <div className="col-12 col-sm-6 col-md">
                        <div className="footer-card">
                            <h5 className="mb-4 text-white">Quick Links</h5>
                            <ul className="list-unstyled footer-nav">
                                <li><Link href="/about-us"><span></span>About Us</Link></li>
                                <li><Link href="/team"><span></span>Our Team</Link></li>
                                <li><Link href="/projects"><span></span>Projects &amp; Impact</Link></li>
                                <li><Link href="/blog"><span></span>Publications &amp; Reports</Link></li>
                                <li><Link href="/contact"><span></span>Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/*-- Footer Card: Our Programmes --*/}
                    <div className="col-12 col-sm-6 col-md">
                        <div className="footer-card">
                            <h5 className="mb-4 text-white">Our Programmes</h5>
                            <ul className="list-unstyled footer-nav">
                                <li><Link href="/services/claims-management-masterclass"><span></span>Claims Management</Link></li>
                                <li><Link href="/services/modern-customer-service-training"><span></span>Customer Service Training</Link></li>
                                <li><Link href="/services/retirement-readiness-programme"><span></span>Retirement Readiness</Link></li>
                                <li><Link href="/services/administration-training"><span></span>Administration Training</Link></li>
                                <li><Link href="/services/finance-training"><span></span>Finance Training</Link></li>
                                <li><Link href="/services"><span></span>View All Programmes →</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/*-- Footer Card: Information --*/}
                    <div className="col-12 col-sm-6 col-md">
                        <div className="footer-card">
                            <h5 className="mb-4 text-white">Information</h5>
                            <ul className="list-unstyled footer-nav">
                                <li><Link href="/about-us"><span></span>Our Approach</Link></li>
                                <li><Link href="/privacy-policy"><span></span>Privacy Policy</Link></li>
                                <li><Link href="/terms-conditions"><span></span>Terms &amp; Conditions</Link></li>
                                <li><Link href="/faqs"><span></span>FAQs</Link></li>
                                <li><Link href="/events"><span></span>Upcoming Events</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/*-- Divider --*/}
            <div className="divider"></div>

            {/*-- Copyright --*/}
            <div className="container">
                <div className="copyright-section">
                    <p className="mb-0 copyright">Copyright &copy; <span id="year">{new Date().getFullYear()}</span>{" "}
                        <Link href="/">SITRAC Training Institute</Link>.{" "}
                        All rights reserved.
                        {" · "}
                        <Link href="/privacy-policy" style={{ opacity: 0.7 }}>Privacy</Link>
                        {" · "}
                        <Link href="/terms-conditions" style={{ opacity: 0.7 }}>Terms</Link>
                    </p>
                </div>
            </div>
        </footer>
    )
}