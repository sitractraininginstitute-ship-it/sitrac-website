import { unstable_noStore as noStore } from "next/cache";
import Image from "next/image";
import Link from "next/link";
import { connectToDatabase } from "@/lib/mongodb";
import BlogPostModel from "@/models/BlogPost";

interface BlogCard {
    _id:         string;
    title:       string;
    slug:        string;
    excerpt:     string;
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
    } catch {
        return dateStr;
    }
}

export default async function BlogSectionTwo() {
    noStore();

    let posts: BlogCard[] = [];
    try {
        await connectToDatabase();
        const docs = await BlogPostModel
            .find()
            .sort({ publishedAt: -1 })
            .limit(3)
            .lean();
        posts = docs.map((p) => ({
            _id:         (p._id as { toString(): string }).toString(),
            title:       p.title       as string,
            slug:        p.slug        as string,
            excerpt:     p.excerpt     as string,
            coverImage:  p.coverImage  as string,
            category:    p.category    as string | undefined,
            publishedAt: p.publishedAt ? String(p.publishedAt) : undefined,
        }));
    } catch (err) {
        console.error("BlogSectionTwo: failed to load blog posts", err);
    }

    // If no posts in DB yet, skip the section entirely or show placeholder
    const hasPosts = posts.length > 0;
    const DELAYS = ["0.5", "0.75", "1"];

    return (
        <section className="blog-section bg-secondary">
            {/*-- Divider --*/}
            <div className="divider"></div>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-10 col-md-9 col-lg-8 col-xl-7 col-xxl-6">
                        <div className="section-heading text-center">
                            <span className="subtitle fadeInUp" data-delay="0.3">Latest Blog</span>
                            <h2 className="mb-0 fadeInUp" data-delay="0.5">Insights, trends and expert perspectives from the SITRAC team</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="divider-sm"></div>

            {hasPosts && (
                <div className="container">
                    <div className="row g-4 justify-content-center">
                        {posts.map((post, index) => (
                            <div key={post._id} className="col-12 col-md-6 col-lg-4">
                                <div className="blog-card-two translateY8 fadeInUp" data-delay={DELAYS[index] ?? "0.5"}>
                                    <div
                                        style={{
                                            position:     "relative",
                                            height:       "220px",
                                            overflow:     "hidden",
                                            borderRadius: "12px 12px 0 0",
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
                                            {post.publishedAt && (
                                                <>
                                                    <span className="dot"></span>
                                                    <span className="post-date">{formatDate(post.publishedAt)}</span>
                                                </>
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
                </div>
            )}

            {!hasPosts && (
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 text-center">
                            <p className="mb-4">Blog posts coming soon. Check back for the latest insights and expert perspectives.</p>
                            <Link href="/contact" className="btn btn-primary">
                                <span>Contact Us</span>
                                <span>Contact Us</span>
                            </Link>
                        </div>
                    </div>
                </div>
            )}

            {/*-- Divider --*/}
            <div className="divider"></div>
        </section>
    );
}
