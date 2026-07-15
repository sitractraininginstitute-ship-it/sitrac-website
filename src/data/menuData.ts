export interface MenuItemType {
    title: string;
    href?: string;
    subMenu?: MenuItemType[];
}

export const menuData: MenuItemType[] = [
    { title: "Home",     href: "/" },
    { title: "Programs", href: "/services" },
    { title: "Projects", href: "/projects" },
    { title: "Events",   href: "/events" },
    { title: "Blog",     href: "/blog" },
    {
        title: "Pages",
        subMenu: [
            { title: "About Us", href: "/about-us" },
            { title: "Team",     href: "/team" },
            { title: "FAQs",     href: "/faqs" },
        ],
    },
    { title: "Contact", href: "/contact" },
];
