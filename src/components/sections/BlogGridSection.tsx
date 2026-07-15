import { unstable_noStore as noStore } from "next/cache";
import Image from "next/image";
import Link from "next/link";
import { connectToDatabase } from "@/lib/mongodb";
import BlogPostModel from "@/models/BlogPost";

interface BlogPost {
    _id:         string;
    title:       string;
    slug:        string;
    coverImage:  string;
    category?:   string;
    publishedAt?: string;
}

function formatDate(dateStr?: string): string {
    if (!dateStr) return "";
    try {
        return new Date(dateStr).toLocaleDateString("en-GB", {
            day: "numeric", month: "long", year: "numeric",
        });
    } catch { return dateStr; }
}

export default async function BlogGridSection() {
    noStore();

    let posts: BlogPost[] = [];
    try {
        await connectToDatabase();
        const docs = await BlogPostModel.find().sort({ publishedAt: -1 }).lean();
        posts = docs.map((p) => ({
            _id:         (p._id as { toString(): string }).toString(),
            title:       p.title      as string,
            slug:        p.slug       as string,
            coverImage:  p.coverImage as string,
            category:    p.category   as string | undefined,
            publishedAt: p.publishedAt ? String(p.publishedAt) : undefined,
        }));
    } catch (err) {
        console.error("BlogGridSection: failed to load blog posts", err);
    }

    const DELAYS = ["0.5", "0.75", "1", "0.5", "0.75", "1", "0.5", "0.75", "1"];

    return (
        <div className="blog-section bg-white">
            {/*-- Divider --*/}
            <div className="divider"></div>

            <div className="container">
                {posts.length > 0 ? (
                    <div className="row g-4 justify-content-center">
                        {posts.map((post, index) => (
                            <div key={post._id} className="col-12 col-md-6 col-lg-4 translateY8">
                                <div className="blog-card fadeInUp" data-delay={DELAYS[index % DELAYS.length]}>
                                    {/*-- Blog image with fixed-height container --*/}
                                    <div
                                        className="blog-img"
                                        style={{
                                            position: "relative",
                                            height:   "220px",
                                            overflow: "hidden",
                                        }}
                                    >
                                        <Image
                                            src={post.coverImage}
                                            alt={post.title}
                                            fill
                                            style={{ objectFit: "cover" }}
                                        />
                                    </div>

                                    <div className="blog-body">
                                        <div className="blog-meta mb-2">
                                            {post.category && (
                                                <span className="post-category">{post.category}</span>
                                            )}
                                            {post.category && post.publishedAt && (
                                                <span className="dot"></span>
                                            )}
                                            {post.publishedAt && (
                                                <span className="post-date">{formatDate(post.publishedAt)}</span>
                                            )}
                                        </div>

                                        <Link href={`/blog/${post.slug}`} className="post-title">
                                            {post.title}
                                        </Link>

                                        {/*-- Button --*/}
                                        <div className="d-block mt-4">
                                            <Link href={`/blog/${post.slug}`} className="btn-view-more">
                                                <span><i className="ti ti-plus"></i></span>
                                                <span><i className="ti ti-plus"></i> View Details</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-5">
                        <h4>No blog posts yet</h4>
                        <p className="text-muted mb-4">
                            Check back soon for insights and expert perspectives from the SITRAC team.
                        </p>
                        <Link href="/contact" className="btn btn-primary">
                            <span>Contact Us</span>
                            <span>Contact Us</span>
                        </Link>
                    </div>
                )}
            </div>

            {/*-- Divider --*/}
            <div className="divider"></div>
        </div>
    );
}