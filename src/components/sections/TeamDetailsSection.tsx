import Image from "next/image";
import ProgressBar from "@/components/ProgressBar";

const SOCIAL_ICON: Record<string, string> = {
    linkedin:  "ti ti-brand-linkedin",
    twitter:   "ti ti-brand-x",
    x:         "ti ti-brand-x",
    instagram: "ti ti-brand-instagram",
    facebook:  "ti ti-brand-facebook",
};

interface SocialLink {
    platform: string;
    url:      string;
}

interface Member {
    _id:         string;
    name:        string;
    role:        string;
    bio?:        string;
    photo:       string;
    socialLinks: SocialLink[];
}

interface Props {
    member: Member;
}

export default function TeamDetailsSection({ member }: Props) {
    const hasSocials = member.socialLinks && member.socialLinks.length > 0;

    return (
        <div className="team-details-section">
            {/*-- Divider --*/}
            <div className="divider"></div>

            <div className="container">
                <div className="row g-5">
                    {/*-- Photo column --*/}
                    <div className="col-12 col-md-6">
                        <div className="pe-xl-4">
                            <div
                                style={{
                                    position:     "relative",
                                    height:       "480px",
                                    overflow:     "hidden",
                                    borderRadius: "12px",
                                }}
                            >
                                <Image
                                    src={member.photo}
                                    alt={member.name}
                                    fill
                                    style={{ objectFit: "cover", objectPosition: "center top" }}
                                />
                            </div>
                        </div>
                    </div>

                    {/*-- Content column --*/}
                    <div className="col-12 col-md-6">
                        <div className="team-details-content ps-xl-4">
                            <h2 className="mb-3">{member.name}</h2>
                            <h5 className="mb-4 text-primary">{member.role}</h5>

                            {member.bio && (
                                <p className="mb-4">{member.bio}</p>
                            )}

                            {/*-- Social links --*/}
                            <div className="social-nav">
                                {hasSocials ? (
                                    member.socialLinks.map((link, i) => (
                                        <a key={i} href={link.url} target="_blank" rel="noopener noreferrer">
                                            <i className={SOCIAL_ICON[link.platform.toLowerCase()] ?? "ti ti-link"}></i>
                                        </a>
                                    ))
                                ) : (
                                    <>
                                        <a href="#"><i className="ti ti-brand-linkedin"></i></a>
                                        <a href="#"><i className="ti ti-brand-x"></i></a>
                                        <a href="#"><i className="ti ti-brand-instagram"></i></a>
                                    </>
                                )}
                            </div>

                            {/*-- Divider --*/}
                            <div className="divider-sm"></div>

                            <h3 className="mb-4">Experience Area</h3>
                            <div className="d-flex flex-column gap-4">
                                <ProgressBar label="Expertise &amp; Experience" percentage={90} shouldAnimate={true}/>
                                <ProgressBar label="Innovative Solutions"       percentage={80} shouldAnimate={true}/>
                                <ProgressBar label="Cost Efficiency"            percentage={85} shouldAnimate={true}/>
                            </div>

                            {/*-- Divider --*/}
                            <div className="divider-sm"></div>

                            <h3 className="mb-4">Send a Message</h3>
                            <form action="#" className="comment-form">
                                <div className="row g-4">
                                    <div className="col-12 col-md-6">
                                        <div className="form-group">
                                            <input type="text"  className="form-control" placeholder="Full Name*"/>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="Your Email*"/>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <input type="text"  className="form-control" placeholder="Phone Number*"/>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <textarea className="form-control" placeholder="Message Here*"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" className="btn btn-primary">
                                            <span>Send Message</span>
                                            <span>Send Message</span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/*-- Divider --*/}
            <div className="divider"></div>
        </div>
    );
}