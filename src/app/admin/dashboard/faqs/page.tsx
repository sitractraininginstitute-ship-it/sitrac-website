import AdminLayout from "@/components/admin/AdminLayout";
import GenericCRUD from "@/components/admin/GenericCRUD";
import { connectToDatabase } from "@/lib/mongodb";
import FAQModel from "@/models/FAQ";

export const dynamic = "force-dynamic";

const FIELDS = [
    { key: "question", label: "Question", type: "textarea" as const, required: true, rows: 2 },
    { key: "answer",   label: "Answer",   type: "textarea" as const, required: true, rows: 4 },
    { key: "order",    label: "Order",    type: "number"   as const, placeholder: "0" },
];

export default async function AdminFAQsPage() {
    await connectToDatabase();
    const docs = await FAQModel.find().sort({ order: 1 }).lean();
    const items = docs.map((d) => ({
        ...d,
        _id: (d._id as { toString(): string }).toString(),
    })) as Record<string, unknown>[];

    return (
        <AdminLayout>
            <GenericCRUD
                title="FAQs"
                apiBase="/api/faqs"
                fields={FIELDS}
                items={items}
                displayKey="question"
            />
        </AdminLayout>
    );
}
