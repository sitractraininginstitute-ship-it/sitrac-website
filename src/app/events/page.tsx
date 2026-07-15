import { unstable_noStore as noStore } from "next/cache";
import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import CtaSectionOne from "@/components/sections/CtaSectionOne";
import EventsSection from "@/components/sections/EventsSection";
import { connectToDatabase } from "@/lib/mongodb";
import EventModel from "@/models/Event";

export const metadata: Metadata = {
    title: "Events & Training Calendar",
    description:
        "Explore upcoming training events, short courses, workshops, seminars, and conferences offered by SITRAC — the Pan-African capacity building institute. Register online.",
    openGraph: {
        title: "Events & Training Calendar | SITRAC",
        description:
            "Upcoming training events, short courses, workshops, seminars, and conferences from SITRAC.",
        url: "https://www.sitractraininginstitute.co.ke/events",
    },
};

export interface EventData {
    _id:              string;
    title:            string;
    slug:             string;
    date:             string;   // ISO string
    time?:            string;
    location?:        string;
    description:      string;
    category:         "Short Courses" | "Workshops" | "Seminars" | "Conferences";
    price?:           string;
    registrationLink?: string;
    coverImage:       string;
    featured:         boolean;
    attachmentUrl?:   string;
    attachmentName?:  string;
}

export default async function EventsPage() {
    noStore();

    let events: EventData[] = [];

    try {
        await connectToDatabase();

        // Fetch ALL events (past + upcoming) — the client component handles the
        // Upcoming / Past toggle. Calendar navigation also needs past events.
        const docs = await EventModel
            .find()
            .sort({ date: 1 })   // ascending; client reverses past events on its own
            .lean();

        events = docs.map((e) => ({
            _id:              (e._id as { toString(): string }).toString(),
            title:            e.title            as string,
            slug:             e.slug             as string,
            date:             (e.date as Date).toISOString(),
            time:             e.time             as string | undefined,
            location:         e.location         as string | undefined,
            description:      e.description      as string,
            category:         e.category         as EventData["category"],
            price:            e.price            as string | undefined,
            registrationLink: e.registrationLink as string | undefined,
            coverImage:       e.coverImage       as string,
            featured:         Boolean(e.featured),
            attachmentUrl:    e.attachmentUrl    as string | undefined,
            attachmentName:   e.attachmentName   as string | undefined,
        }));
    } catch (err) {
        console.error("EventsPage: failed to load events", err);
    }


    const breadcrumbItems = [{ label: "Events" }];

    return (
        <>
            <Breadcrumb title="Events & Training Calendar" items={breadcrumbItems} />
            <EventsSection events={events} />
            <CtaSectionOne />
        </>
    );
}
