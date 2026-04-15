export interface MenuItemType {
    title: string;
    href?: string;
    subMenu?: MenuItemType[];
}

export const menuData: MenuItemType[] = [
    {
        title: "Home", href: "/"
    },
    {
        title: "Pages",
        subMenu: [
            {
                title: "Programs",
                subMenu: [
                    { title: "Programs", href: "/services" },
                    { title: "Program Details", href: "/services/details" },
                ],
            },
            {
                title: "Team",href: "/team"
            },
            { title: "About Us", href: "/about-us" },
            { title: "FAQs", href: "/faqs" },
          //  { title: "Pricing", href: "/pricing" },
            { title: "404", href: "/404" },
        ],
    },
    {
        title: "Projects",
        subMenu: [
            { title: "Projects", href: "/projects" },
            { title: "Project Details", href: "/projects/details" },
        ],
    },
    {
        title: "Blog",
        subMenu: [
            { title: "Blog Standard", href: "/blog" },
            { title: "Blog Grid", href: "/blog-grid" },
            { title: "Blog Details", href: "/blog/details" },
        ],
    },
    { title: "Contact", href: "/contact" },
];
