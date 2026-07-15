import AdminLayout from "@/components/admin/AdminLayout";
import GenericCRUD from "@/components/admin/GenericCRUD";
import { connectToDatabase } from "@/lib/mongodb";
import BlogPostModel from "@/models/BlogPost";

export const dynamic = "force-dynamic";

const FIELDS = [
    { key: "title",          label: "Title",           type: "text"     as const, required: true },
    { key: "slug",           label: "Slug",            type: "text"     as const, required: true, placeholder: "e.g. my-blog-post" },
    { key: "excerpt",        label: "Excerpt",         type: "textarea" as const, required: true, rows: 2 },
    { key: "body",           label: "Body",            type: "textarea" as const, required: true, rows: 10 },
    { key: "coverImage",     label: "Cover Image",     type: "image"    as const, required: true, folder: "blog" },
    { key: "category",       label: "Category",        type: "text"     as const, placeholder: "e.g. Claims Management" },
    { key: "author",         label: "Author",          type: "text"     as const, placeholder: "e.g. SITRAC Team" },
    { key: "publishedAt",    label: "Published At",    type: "text"     as const, placeholder: "2025-07-01" },
    { key: "seoTitle",       label: "SEO Title",       type: "text"     as const },
    { key: "seoDescription", label: "SEO Description", type: "textarea" as const, rows: 2 },
];

export default async function AdminBlogPage() {
    await connectToDatabase();
    const docs = await BlogPostModel.find().sort({ publishedAt: -1 }).lean();
    const items = docs.map((d) => ({
        ...d,
        _id:         (d._id as { toString(): string }).toString(),
        publishedAt: d.publishedAt ? new Date(d.publishedAt as Date).toISOString().split("T")[0] : "",
    })) as Record<string, unknown>[];

    return (
        <AdminLayout>
            <GenericCRUD
                title="Blog Posts"
                apiBase="/api/blog"
                fields={FIELDS}
                items={items}
                displayKey="title"
                slugBased={true}
                slugKey="slug"
            />
        </AdminLayout>
    );
}
