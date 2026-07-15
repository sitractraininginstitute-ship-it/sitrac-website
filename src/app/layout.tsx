import type { Metadata } from "next";
import { Sora } from "next/font/google";

const sora = Sora({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
    display: "swap",
});

import "@/assets/css/tabler-icons.min.css";
import "@/assets/css/flaticon.css";
import "@/assets/scss/styles.scss";
import PublicShell from "@/components/PublicShell";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.sitractraininginstitute.co.ke"),
    title: {
        default: "Skills Innovis Training and Capacity Building Institute (SITRAC)",
        template: "%s | SITRAC",
    },
    description:
        "A leading Pan-African capacity building institution committed to strengthening governance, institutional performance, and human capital development through specialized training, consultancy, and applied research.",
    openGraph: {
        siteName: "SITRAC",
        type: "website",
        locale: "en_KE",
        images: [
            {
                url: "/logo.png",
                width: 1200,
                height: 630,
                alt: "SITRAC – Skills Innovis Training and Capacity Building Institute",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
    },
};


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={sora.className}>
                <PublicShell>{children}</PublicShell>
            </body>
        </html>
    );
}
