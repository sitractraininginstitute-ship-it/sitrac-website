import AdminLayout from "@/components/admin/AdminLayout";
import { connectToDatabase } from "@/lib/mongodb";
import ContactMessageModel from "@/models/ContactMessage";
import ContactMessages from "./ContactMessages";

export const dynamic = "force-dynamic";

export default async function AdminContactPage() {
    await connectToDatabase();
    const docs = await ContactMessageModel.find().sort({ createdAt: -1 }).lean();
    const messages = docs.map((d) => ({
        _id:       (d._id as { toString(): string }).toString(),
        name:      d.name      as string,
        email:     d.email     as string,
        service:   d.service   as string | undefined,
        message:   d.message   as string,
        read:      d.read      as boolean,
        createdAt: d.createdAt ? new Date(d.createdAt as Date).toISOString() : "",
    }));

    return (
        <AdminLayout>
            <ContactMessages messages={messages} />
        </AdminLayout>
    );
}
