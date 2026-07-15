import AdminLayout from "@/components/admin/AdminLayout";
import GenericCRUD from "@/components/admin/GenericCRUD";
import { connectToDatabase } from "@/lib/mongodb";
import ProcessStepModel from "@/models/ProcessStep";

export const dynamic = "force-dynamic";

const FIELDS = [
    { key: "stepNumber",  label: "Step Number",  type: "text"     as const, required: true, placeholder: "e.g. 01" },
    { key: "title",       label: "Title",        type: "text"     as const, required: true },
    { key: "description", label: "Description",  type: "textarea" as const, required: true, rows: 3 },
    { key: "order",       label: "Display Order", type: "number"  as const, placeholder: "0" },
];

export default async function AdminProcessStepsPage() {
    await connectToDatabase();
    const docs = await ProcessStepModel.find().sort({ order: 1 }).lean();
    const items = docs.map((d) => ({
        ...d,
        _id: (d._id as { toString(): string }).toString(),
    })) as Record<string, unknown>[];

    return (
        <AdminLayout>
            <GenericCRUD
                title="Process Steps"
                apiBase="/api/process-steps"
                fields={FIELDS}
                items={items}
                displayKey="title"
            />
        </AdminLayout>
    );
}
