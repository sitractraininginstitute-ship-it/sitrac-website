"use client";

import { useState, useMemo } from "react";
import GenericCRUD from "@/components/admin/GenericCRUD";
import type { FieldDef } from "@/components/admin/GenericCRUD";

type TimeFilter = "all" | "upcoming" | "past";

interface Props {
    items:  Record<string, unknown>[];
    fields: FieldDef[];
}

const BTN = (active: boolean): React.CSSProperties => ({
    background: active ? "#052E26" : "#f3f4f6",
    color:      active ? "#BDE162"  : "#374151",
    border: "none", borderRadius: "8px",
    padding: "0.45rem 1rem",
    fontWeight: active ? 700 : 500, fontSize: "0.84rem",
    cursor: "pointer", transition: "all 0.15s",
});

export default function AdminEventsClient({ items, fields }: Props) {
    const [timeFilter, setTimeFilter] = useState<TimeFilter>("all");

    const today = useMemo(() => {
        const d = new Date(); d.setHours(0, 0, 0, 0); return d;
    }, []);

    const filtered = useMemo(() => {
        if (timeFilter === "all") return items;
        return items.filter(item => {
            const d = new Date(item.date as string);
            return timeFilter === "past" ? d < today : d >= today;
        });
    }, [items, timeFilter, today]);

    // Inject a "_statusTitle" key into each item — a string combining title + status label.
    // GenericCRUD renders displayKey as the card heading, so this gives us the badge inline.
    // The underlying CRUD still operates on slug/id correctly since we don't touch those.
    const itemsWithStatus = useMemo(() =>
        filtered.map(item => {
            const isPast = new Date(item.date as string) < today;
            return {
                ...item,
                _statusTitle: `${item.title as string} [${isPast ? "PAST" : "UPCOMING"}]`,
            };
        }),
        [filtered, today]
    );

    const upcomingCount = useMemo(() =>
        items.filter(i => new Date(i.date as string) >= today).length, [items, today]);
    const pastCount     = useMemo(() =>
        items.filter(i => new Date(i.date as string) <  today).length, [items, today]);

    return (
        <div>
            {/* Time filter controls */}
            <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem", flexWrap: "wrap", alignItems: "center" }}>
                <button style={BTN(timeFilter === "all")}      onClick={() => setTimeFilter("all")}>
                    All Events <span style={{ fontSize: "0.75rem", opacity: 0.7 }}>({items.length})</span>
                </button>
                <button style={BTN(timeFilter === "upcoming")} onClick={() => setTimeFilter("upcoming")}>
                    ⬆ Upcoming <span style={{ fontSize: "0.75rem", opacity: 0.7 }}>({upcomingCount})</span>
                </button>
                <button style={BTN(timeFilter === "past")}     onClick={() => setTimeFilter("past")}>
                    ⬇ Past <span style={{ fontSize: "0.75rem", opacity: 0.7 }}>({pastCount})</span>
                </button>
            </div>

            <GenericCRUD
                title="Events"
                apiBase="/api/events"
                fields={fields}
                items={itemsWithStatus}
                displayKey="_statusTitle"
                slugBased={true}
                slugKey="slug"
            />
        </div>
    );
}
