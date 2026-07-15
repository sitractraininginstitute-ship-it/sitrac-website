import { unstable_noStore as noStore } from "next/cache";
import Image from "next/image";
import Link from "next/link";
import { connectToDatabase } from "@/lib/mongodb";
import BlogPostModel from "@/models/BlogPost";

interface BlogPost {
    _id:         string;
    title:       string;
    slug:        string;
    excerpt:     string;
    coverImage:  string;
    category?:   string;
    author?:     string;
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

export default async function BlogSectionFour() {
    noStore();

    let posts: BlogPost[] = [];
    let recentPosts: BlogPost[] = [];
    let categories: string[] = [];

    try {
        await connectToDatabase();
        const [allDocs, recentDocs] = await Promise.all([
            BlogPostModel.find().sort({ publishedAt: -1 }).lean(),
            BlogPostModel.find().sort({ publishedAt: -1 }).limit(4).lean(),
        ]);

        const mapPost = (p: Record<string, unknown>): BlogPost => ({
            _id:         (p._id as { toString(): string }).toString(),
            title:       p.title       as string,
            slug:        p.slug        as string,
            excerpt:     p.excerpt     as string,
            coverImage:  p.coverImage  as string,
            category:    p.category    as string | undefined,
            author:      p.author      as string | undefined,
            publishedAt: p.publishedAt ? String(p.publishedAt) : undefined,
        });

        posts       = allDocs.map(mapPost);
        recentPosts = recentDocs.map(mapPost);

        // Unique categories
        const catSet = new Set<string>();
        allDocs.forEach((p) => { if (p.category) catSet.add(p.category as string); });
        categories = Array.from(catSet);
    } catch (err) {
        console.error("BlogSectionFour: failed to load blog posts", err);
    }

    return (
        <div className="blog-section">
            {/*-- Divider --*/}
            <div className="divider"></div>

            <div className="container">
                <div className="row g-5 g-md-4 g-xl-5">
                    <div className="col-12 col-md-7 col-lg-8">
                        {/*-- Blog Standard --*/}
                        <div className="d-flex flex-column gap-5 pe-lg-3">
                            {posts.length > 0 ? posts.map((post, index) => (
                                <div key={post._id} className="blog-card style-two fadeInUp" data-delay={`${0.3 + index * 0.2}`}>
                                    <div className="blog-img" style={{ position: "relative", height: "280px", overflow: "hidden" }}>
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
                                        <Link href={`/blog/${post.slug}`} className="post-title">{post.title}</Link>
                                        <div className="mt-5">
                                            <Link href={`/blog/${post.slug}`} className="btn btn-primary">
                                                <span>View Details</span>
                                                <span>View Details</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )) : (
                                <div className="text-center py-5">
                                    <h4>No blog posts yet</h4>
                                    <p className="text-muted">Check back soon for insights and expert perspectives from the SITRAC team.</p>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="col-12 col-md-5 col-lg-4">
                        <div className="d-flex flex-column gap-5">
                            {/*-- Widget --*/}
                            <div className="widget-card">
                                <h4 className="h4 widget-title">Search Here</h4>
                                <form action="/blog" method="get">
                                    <input type="search" name="q" placeholder="Search..." className="form-control"/>
                                    <button type="submit">
                                        <i className="ti ti-search"></i>
                                    </button>
                                </form>
                            </div>

                            {/*-- Categories --*/}
                            {categories.length > 0 && (
                                <div className="widget-card">
                                    <h4 className="h4 widget-title">Categories</h4>
                                    <ul className="blog-list">
                                        {categories.map((cat) => (
                                            <li key={cat}>
                                                <Link href="/blog">{cat}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/*-- Recent Posts --*/}
                            {recentPosts.length > 0 && (
                                <div className="widget-card">
                                    <h4 className="h4 widget-title">Recent Posts</h4>
                                    <div className="d-flex flex-column gap-4">
                                        {recentPosts.map((post) => (
                                            <div key={post._id} className="widget-blog">
                                                <div className="blog-thumbnail" style={{ position: "relative", width: "80px", height: "70px", overflow: "hidden", flexShrink: 0 }}>
                                                    <Image
                                                        src={post.coverImage}
                                                        alt={post.title}
                                                        fill
                                                        style={{ objectFit: "cover", borderRadius: "6px" }}
                                                    />
                                                </div>
                                                <div className="blog-content">
                                                    <Link href={`/blog/${post.slug}`} className="post-title mb-2">
                                                        {post.title}
                                                    </Link>
                                                    {post.publishedAt && (
                                                        <span className="post-date">{formatDate(post.publishedAt)}</span>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/*-- Divider --*/}
            <div className="divider"></div>
        </div>
    );
}