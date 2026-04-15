import Link from "next/link";
import logo from "@/assets/img/core-img/logo.png";
import Image from "next/image";

export default function FooterThree() {
    return (
        <footer className="footer-section overflow-visible bg-dark">
            {/*-- Contact Form --*/}
            <div className="container">
                <div className="footer-contact-section fadeInUp" data-delay="0.5">
                    {/*-- Contact Form --*/}
                    <div className="footer-contact-form">
                        <h5>Fill The Contact Form</h5>
                        <p className="mb-4">Feel free to contact with us, we don't spam your email.</p>
                        {/*-- Forms --*/}
                        <form action="#">
                            <div className="row g-4">
                                <div className="col-12 col-sm-6">
                                    <input type="text" className="form-control" placeholder="Your name"/>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <input type="text" className="form-control" placeholder="Phone number"/>
                                </div>
                                <div className="col-12">
                                    <input type="email" className="form-control" placeholder="Email address"/>
                                </div>
                                <div className="col-12">
                                    <textarea className="form-control" placeholder="Write your message"></textarea>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary w-100" type="submit">
                                        <span>Send Message</span>
                                        <span>Send Message</span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>

                    {/*-- Maps --*/}
                    <div className="footer-contact-maps">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20327.210856247282!2d-119.22016101883045!3d50.44293801247003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537e7c79fee95363%3A0xe0083a2333849a6f!2sArmstrong%2C%20BC%2C%20Canada!5e0!3m2!1sen!2sbd!4v1754874271818!5m2!1sen!2sbd"></iframe>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row g-5 g-md-4 g-xl-5">
                    {/*-- Footer Card --*/}
                    <div className="col-12 col-sm-6 col-md-4 col-xl-5">
                        <div className="footer-card me-lg-5">
                            {/*-- Footer Logo --*/}
                            <Link href="/" className="footer-logo mb-4">
                                <Image src={logo} alt="" className="h-auto"/>
                            </Link>
                            <p>Each demo built with Teba will look different. You can customize almost anything
                                appearance
                                of your website with only a few.</p>
                            {/*-- Social Nav --*/}
                            <div className="social-nav">
                                <a href="#">
                                    <i className="ti ti-brand-facebook"></i>
                                </a>
                                <a href="#">
                                    <i className="ti ti-brand-linkedin"></i>
                                </a>
                                <a href="#">
                                    <i className="ti ti-brand-x"></i>
                                </a>
                                <a href="#">
                                    <i className="ti ti-brand-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/*-- Footer Card --*/}
                    <div className="col-12 col-sm-6 col-md">
                        <div className="footer-card">
                            <h5 className="mb-4 text-white">Quick Links</h5>
                            <ul className="list-unstyled footer-nav">
                                <li><a href="#"><span></span>About Us</a></li>
                                <li><a href="#"><span></span>Our Team</a></li>
                                <li><a href="#"><span></span>Pricing Plans</a></li>
                                <li><a href="#"><span></span>Blogs</a></li>
                                <li><a href="#"><span></span>Contact Us</a></li>
                            </ul>
                        </div>
                    </div>

                    {/*-- Footer Card --*/}
                    <div className="col-12 col-sm-6 col-md">
                        <div className="footer-card">
                            <h5 className="mb-4 text-white">Services</h5>
                            <ul className="list-unstyled footer-nav">
                                <li><a href="#"><span></span>UI/UX Design</a></li>
                                <li><a href="#"><span></span>App Development</a></li>
                                <li><a href="#"><span></span>Digital Marketing</a></li>
                                <li><a href="#"><span></span>Web Development</a></li>
                                <li><a href="#"><span></span>Cyber Security</a></li>
                            </ul>
                        </div>
                    </div>

                    {/*-- Footer Card --*/}
                    <div className="col-12 col-sm-6 col-md">
                        <div className="footer-card">
                            <h5 className="mb-4 text-white">Information</h5>
                            <ul className="list-unstyled footer-nav">
                                <li><a href="#"><span></span>Working Process</a></li>
                                <li><a href="#"><span></span>Privacy Policy</a></li>
                                <li><a href="#"><span></span>Terms &amp; Conditions</a></li>
                                <li><a href="#"><span></span>FAQs</a></li>
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
                    <p className="mb-0 copyright">Copyright &copy; <span id="year">2025</span>
                        <a href="#">DevStarIT</a>
                        All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}