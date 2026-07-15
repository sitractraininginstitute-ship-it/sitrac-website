import AdminLayout from "@/components/admin/AdminLayout";
import GenericCRUD from "@/components/admin/GenericCRUD";
import { connectToDatabase } from "@/lib/mongodb";
import TestimonialModel from "@/models/Testimonial";

export const dynamic = "force-dynamic";

const FIELDS = [
    { key: "name",         label: "Name",         type: "text"     as const, required: true },
    { key: "role",         label: "Role",          type: "text"     as const },
    { key: "organization", label: "Organization",  type: "text"     as const },
    { key: "quote",        label: "Testimonial",   type: "textarea" as const, required: true, rows: 4 },
    { key: "photo",        label: "Photo",        type: "image"    as const, folder: "misc" },
    { key: "order",        label: "Display Order", type: "number"   as const, placeholder: "0" },
];

export default async function AdminTestimonialsPage() {
    await connectToDatabase();
    const docs = await TestimonialModel.find().sort({ order: 1 }).lean();
    const items = docs.map((d) => ({
        ...d,
        _id: (d._id as { toString(): string }).toString(),
    })) as Record<string, unknown>[];

    return (
        <AdminLayout>
            <GenericCRUD
                title="Testimonials"
                apiBase="/api/testimonials"
                fields={FIELDS}
                items={items}
                displayKey="name"
            />
        </AdminLayout>
    );
}
