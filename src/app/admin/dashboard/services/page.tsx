import AdminLayout from "@/components/admin/AdminLayout";
import GenericCRUD from "@/components/admin/GenericCRUD";
import { connectToDatabase } from "@/lib/mongodb";
import ServiceModel from "@/models/Service";

export const dynamic = "force-dynamic";

const FIELDS = [
    { key: "title",            label: "Title",             type: "text"     as const, required: true,  placeholder: "e.g. Claims Management Masterclass" },
    { key: "slug",             label: "Slug",              type: "text"     as const, required: true,  placeholder: "e.g. claims-management-masterclass" },
    { key: "shortDescription", label: "Short Description", type: "textarea" as const, required: true,  rows: 2 },
    { key: "fullDescription",  label: "Full Description",  type: "textarea" as const, required: true,  rows: 6 },
    { key: "coverImage",       label: "Cover Image",      type: "image"    as const, required: true,  folder: "services" },
    { key: "category",         label: "Category",          type: "text"     as const, placeholder: "e.g. Insurance" },
    { key: "duration",         label: "Duration",          type: "text"     as const, placeholder: "e.g. 3 Days" },
    { key: "price",            label: "Price",             type: "text"     as const, placeholder: "e.g. KES 25,000" },
    { key: "order",            label: "Display Order",     type: "number"   as const, placeholder: "0" },
    { key: "featured",         label: "Featured",          type: "checkbox" as const, placeholder: "Show on homepage" },
];

export default async function AdminServicesPage() {
    await connectToDatabase();
    const docs = await ServiceModel.find().sort({ order: 1 }).lean();
    const items = docs.map((d) => ({
        ...d,
        _id: (d._id as { toString(): string }).toString(),
    })) as Record<string, unknown>[];

    return (
        <AdminLayout>
            <GenericCRUD
                title="Services"
                apiBase="/api/services"
                fields={FIELDS}
                items={items}
                displayKey="title"
                slugBased={true}
                slugKey="slug"
            />
        </AdminLayout>
    );
}
