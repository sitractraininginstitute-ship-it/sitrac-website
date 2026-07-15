import AdminLayout from "@/components/admin/AdminLayout";
import GenericCRUD from "@/components/admin/GenericCRUD";
import { connectToDatabase } from "@/lib/mongodb";
import TeamMemberModel from "@/models/TeamMember";

export const dynamic = "force-dynamic";

const FIELDS = [
    { key: "name",  label: "Full Name",      type: "text"     as const, required: true },
    { key: "role",  label: "Role / Position", type: "text"    as const, required: true },
    { key: "bio",   label: "Bio",            type: "textarea" as const, rows: 4 },
    { key: "photo", label: "Photo",          type: "image"   as const, required: true, folder: "team" },
    { key: "order", label: "Display Order",  type: "number"   as const, placeholder: "0" },
];

export default async function AdminTeamPage() {
    await connectToDatabase();
    const docs = await TeamMemberModel.find().sort({ order: 1 }).lean();
    const items = docs.map((d) => ({
        ...d,
        _id: (d._id as { toString(): string }).toString(),
        socialLinks: undefined, // exclude complex nested field from table
    })) as Record<string, unknown>[];

    return (
        <AdminLayout>
            <GenericCRUD
                title="Team Members"
                apiBase="/api/team-members"
                fields={FIELDS}
                items={items}
                displayKey="name"
            />
        </AdminLayout>
    );
}
