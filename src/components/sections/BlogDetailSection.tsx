import Image from "next/image";
import Link from "next/link";

interface BlogPost {
    _id:         string;
    title:       string;
    slug:        string;
    excerpt:     string;
    body:        string;
    coverImage:  string;
    category?:   string;
    author?:     string;
    publishedAt?: string;
}

interface RecentPost {
    _id:         string;
    title:       string;
    slug:        string;
    coverImage:  string;
    publishedAt?: string;
}

interface Props {
    post:        BlogPost;
    recentPosts: RecentPost[];
}

function formatDate(dateStr?: string): string {
    if (!dateStr) return "";
    try {
        return new Date(dateStr).toLocaleDateString("en-GB", {
            day: "numeric", month: "long", year: "numeric",
        });
    } catch { return dateStr; }
}

/** Render each paragraph of the body separately */
function BodyContent({ body }: { body: string }) {
    const paragraphs = body.split(/\n\n+/).filter(Boolean);
    return (
        <>
            {paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
            ))}
        </>
    );
}

export default function BlogDetailSection({ post, recentPosts }: Props) {
    return (
        <div className="blog-section">
            {/*-- Divider --*/}
            <div className="divider"></div>

            <div className="container">
                <div className="row g-4 g-xxl-5">
                    <div className="col-12 col-md-7 col-lg-8">
                        <div className="pe-lg-3">
                            {/*-- Single Blog Content --*/}
                            <div className="single-blog-content">
                                {/* Cover image */}
                                <div style={{ position: "relative", height: "380px", overflow: "hidden", borderRadius: "12px", marginBottom: "1.5rem" }}>
                                    <Image
                                        src={post.coverImage}
                                        alt={post.title}
                                        fill
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>

                                {/*-- Blog Meta --*/}
                                <div className="blog-meta flex-wrap d-flex align-items-center gap-3 gap-lg-4">
                                    {post.author && (
                                        <a href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M21.6484 19.875C20.2206 17.4065 18.0203 15.6365 15.4525 14.7975C16.7226 14.0414 17.7094 12.8892 18.2614 11.5179C18.8134 10.1467 18.8999 8.63211 18.5078 7.20688C18.1157 5.78165 17.2666 4.52454 16.0909 3.6286C14.9151 2.73266 13.4778 2.24744 11.9996 2.24744C10.5215 2.24744 9.08414 2.73266 7.90842 3.6286C6.73269 4.52454 5.88358 5.78165 5.49146 7.20688C5.09935 8.63211 5.18592 10.1467 5.73788 11.5179C6.28984 12.8892 7.27668 14.0414 8.54683 14.7975C5.97902 15.6356 3.77871 17.4056 2.35089 19.875C2.29853 19.9604 2.2638 20.0554 2.24875 20.1544C2.2337 20.2534 2.23863 20.3544 2.26326 20.4515C2.28789 20.5486 2.33171 20.6397 2.39214 20.7196C2.45257 20.7995 2.52838 20.8664 2.6151 20.9165C2.70183 20.9666 2.79771 20.9988 2.89709 21.0113C2.99647 21.0237 3.09733 21.0161 3.19373 20.989C3.29012 20.9618 3.3801 20.9156 3.45835 20.8531C3.5366 20.7906 3.60154 20.713 3.64933 20.625C5.41558 17.5725 8.53746 15.75 11.9996 15.75C15.4618 15.75 18.5837 17.5725 20.35 20.625C20.3977 20.713 20.4627 20.7906 20.5409 20.8531C20.6192 20.9156 20.7092 20.9618 20.8056 20.989C20.902 21.0161 21.0028 21.0237 21.1022 21.0113C21.2016 20.9988 21.2975 20.9666 21.3842 20.9165C21.4709 20.8664 21.5467 20.7995 21.6072 20.7196C21.6676 20.6397 21.7114 20.5486 21.736 20.4515C21.7607 20.3544 21.7656 20.2534 21.7505 20.1544C21.7355 20.0554 21.7008 19.9604 21.6484 19.875Z" fill="#BDE162"/>
                                            </svg>
                                            {post.author}
                                        </a>
                                    )}
                                    {post.publishedAt && (
                                        <a href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M19.5 3H17.25V2.25C17.25 2.05109 17.171 1.86032 17.0303 1.71967C16.8897 1.57902 16.6989 1.5 16.5 1.5C16.3011 1.5 16.1103 1.57902 15.9697 1.71967C15.829 1.86032 15.75 2.05109 15.75 2.25V3H8.25V2.25C8.25 2.05109 8.17098 1.86032 8.03033 1.71967C7.88968 1.57902 7.69891 1.5 7.5 1.5C7.30109 1.5 7.11032 1.57902 6.96967 1.71967C6.82902 1.86032 6.75 2.05109 6.75 2.25V3H4.5C4.10218 3 3.72064 3.15804 3.43934 3.43934C3.15804 3.72064 3 4.10218 3 4.5V19.5C3 19.8978 3.15804 20.2794 3.43934 20.5607C3.72064 20.842 4.10218 21 4.5 21H19.5C19.8978 21 20.2794 20.842 20.5607 20.5607C20.842 20.2794 21 19.8978 21 19.5V4.5C21 4.10218 20.842 3.72064 20.5607 3.43934C20.2794 3.15804 19.8978 3 19.5 3ZM19.5 19.5H4.5V9H19.5V19.5Z" fill="#BDE162"/>
                                            </svg>
                                            {formatDate(post.publishedAt)}
                                        </a>
                                    )}
                                    {post.category && (
                                        <span className="post-category">{post.category}</span>
                                    )}
                                </div>

                                {/*-- Post Title --*/}
                                <h2 className="post-title">{post.title}</h2>

                                {/*-- Excerpt --*/}
                                <p className="lead">{post.excerpt}</p>

                                {/*-- Body --*/}
                                <BodyContent body={post.body} />

                                {/*-- Tag & Share --*/}
                                <div className="divider-sm"></div>
                                <div className="tag-share-wrap">
                                    {post.category && (
                                        <ul className="list-unstyled tag-list">
                                            <li>Tags:</li>
                                            <li><a href="#">#{post.category}</a></li>
                                        </ul>
                                    )}
                                    <ul className="list-unstyled share-list">
                                        <li>Share:</li>
                                        <li><a href="#"><i className="ti ti-brand-facebook"></i></a></li>
                                        <li><a href="#"><i className="ti ti-brand-x"></i></a></li>
                                        <li><a href="#"><i className="ti ti-brand-linkedin"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-5 col-lg-4">
                        <div className="d-flex flex-column gap-5">
                            {/*-- Widget: Search --*/}
                            <div className="widget-card">
                                <h4 className="h4 widget-title">Search Here</h4>
                                <form action="/blog" method="get">
                                    <input type="search" name="q" placeholder="Search..." className="form-control"/>
                                    <button type="submit"><i className="ti ti-search"></i></button>
                                </form>
                            </div>

                            {/*-- Widget: Recent Posts --*/}
                            {recentPosts.length > 0 && (
                                <div className="widget-card">
                                    <h4 className="h4 widget-title">Recent Posts</h4>
                                    <div className="d-flex flex-column gap-4">
                                        {recentPosts.map((rp) => (
                                            <div key={rp._id} className="widget-blog">
                                                <div className="blog-thumbnail" style={{ position: "relative", width: "80px", height: "70px", overflow: "hidden", flexShrink: 0 }}>
                                                    <Image
                                                        src={rp.coverImage}
                                                        alt={rp.title}
                                                        fill
                                                        style={{ objectFit: "cover", borderRadius: "6px" }}
                                                    />
                                                </div>
                                                <div className="blog-content">
                                                    <Link href={`/blog/${rp.slug}`} className="post-title mb-2">
                                                        {rp.title}
                                                    </Link>
                                                    {rp.publishedAt && (
                                                        <span className="post-date">{formatDate(rp.publishedAt)}</span>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/*-- Widget: Back to Blog --*/}
                            <div className="widget-card text-center">
                                <Link href="/blog" className="btn btn-primary">
                                    <span>Back to Blog</span>
                                    <span>Back to Blog</span>
                                </Link>
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