import AdminLayout from "@/components/admin/AdminLayout";
import GenericCRUD from "@/components/admin/GenericCRUD";
import { connectToDatabase } from "@/lib/mongodb";
import EventModel from "@/models/Event";

export const dynamic = "force-dynamic";

const FIELDS = [
    { key: "title",            label: "Title",             type: "text"     as const, required: true },
    { key: "slug",             label: "Slug",              type: "text"     as const, required: true, placeholder: "e.g. claims-masterclass-july-2026" },
    { key: "date",             label: "Date",              type: "date"     as const, required: true },
    { key: "time",             label: "Time",              type: "text"     as const, placeholder: "e.g. 9:00 AM – 5:00 PM EAT" },
    { key: "location",         label: "Location",          type: "text"     as const, placeholder: "e.g. Nairobi, Kenya" },
    { key: "description",      label: "Description",       type: "textarea" as const, required: true, rows: 4 },
    { key: "category",         label: "Category",          type: "select"   as const, required: true,
      options: ["Short Courses", "Workshops", "Seminars", "Conferences"] },
    { key: "price",            label: "Price",             type: "text"     as const, placeholder: "e.g. KES 35,000" },
    { key: "registrationLink", label: "Registration Link", type: "url"      as const, placeholder: "https://..." },
    { key: "coverImage",       label: "Cover Image",       type: "image"    as const, required: true, folder: "events" },
    { key: "featured",         label: "Featured Event",    type: "checkbox" as const, placeholder: "Show as featured on events page" },
];

export default async function AdminEventsPage() {
    await connectToDatabase();
    const docs = await EventModel.find().sort({ date: -1 }).lean();
    const items = docs.map((d) => ({
        ...d,
        _id:  (d._id as { toString(): string }).toString(),
        date: d.date ? new Date(d.date as Date).toISOString().split("T")[0] : "",
    })) as Record<string, unknown>[];

    return (
        <AdminLayout>
            <GenericCRUD
                title="Events"
                apiBase="/api/events"
                fields={FIELDS}
                items={items}
                displayKey="title"
                slugBased={true}
                slugKey="slug"
            />
        </AdminLayout>
    );
}
