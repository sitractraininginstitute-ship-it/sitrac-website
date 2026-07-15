import Image from "next/image";
import Link from "next/link";

interface Project {
    _id:         string;
    title:       string;
    slug:        string;
    category?:   string;
    description: string;
    coverImage:  string;
    images:      string[];
    client?:     string;
    year?:       string;
}

interface Props {
    project: Project;
}

/** Render each paragraph of the description separately */
function DescriptionBody({ text }: { text: string }) {
    const paragraphs = text.split(/\n\n+/).filter(Boolean);
    return (
        <>
            {paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
            ))}
        </>
    );
}

export default function ProjectDetailsSection({ project }: Props) {
    const galleryImages = project.images.slice(0, 2); // show up to 2 gallery images

    return (
        <div className="project-details-section">
            {/*-- Divider --*/}
            <div className="divider"></div>

            {/*-- Project Details Hero Image --*/}
            <div className="custom-container imgZoomInOut mb-5">
                <div style={{ position: "relative", height: "480px", overflow: "hidden" }}>
                    <Image
                        src={project.coverImage}
                        alt={project.title}
                        fill
                        style={{ objectFit: "cover" }}
                        className="project-details-img"
                    />
                </div>
            </div>

            <div className="container">
                <div className="row g-5">
                    {/*-- Main content --*/}
                    <div className="col-12 col-md-7 col-lg-8">
                        <div className="project-details-content">
                            <h2>Project overview</h2>
                            <DescriptionBody text={project.description} />

                            {/*-- Gallery images --*/}
                            {galleryImages.length > 0 && (
                                <div className="row g-4 my-2">
                                    {galleryImages.map((imgUrl, i) => (
                                        <div key={i} className="col-12 col-sm-6">
                                            <div style={{ position: "relative", height: "220px", overflow: "hidden", borderRadius: "8px" }}>
                                                <Image
                                                    src={imgUrl}
                                                    alt={`${project.title} — image ${i + 1}`}
                                                    fill
                                                    style={{ objectFit: "cover" }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/*-- Sidebar widget --*/}
                    <div className="col-12 col-md-5 col-lg-4">
                        <div className="project-widget">
                            <h4 className="widget-title mb-4">Project Details</h4>

                            <ul className="project-meta-list list-unstyled">
                                {project.client && (
                                    <li>
                                        <h6 className="mb-0">Client</h6>
                                        <span>:</span>
                                        <p className="mb-0">{project.client}</p>
                                    </li>
                                )}
                                {project.category && (
                                    <li>
                                        <h6 className="mb-0">Category</h6>
                                        <span>:</span>
                                        <p className="mb-0">{project.category}</p>
                                    </li>
                                )}
                                {project.year && (
                                    <li>
                                        <h6 className="mb-0">Year</h6>
                                        <span>:</span>
                                        <p className="mb-0">{project.year}</p>
                                    </li>
                                )}
                            </ul>

                            {/*-- Back to projects --*/}
                            <div className="mt-5">
                                <Link href="/projects" className="btn btn-primary">
                                    <span>Back to Projects</span>
                                    <span>Back to Projects</span>
                                </Link>
                            </div>

                            {/*-- Social Nav --*/}
                            <div className="social-nav mt-4">
                                <a href="#"><i className="ti ti-brand-facebook"></i></a>
                                <a href="#"><i className="ti ti-brand-linkedin"></i></a>
                                <a href="#"><i className="ti ti-brand-x"></i></a>
                                <a href="#"><i className="ti ti-brand-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*-- Divider --*/}
            <div className="divider"></div>
        </div>
    );
}