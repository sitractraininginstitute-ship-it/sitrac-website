"use client";

import { useState, FC } from "react";
import Link from "next/link";
import {menuData, MenuItemType} from "@/data/menuData";
import {usePathname} from "next/navigation";

interface MenuItemProps {
    item: MenuItemType;
}

const MenuItem: FC<MenuItemProps> = ({ item }) => {
    const [open, setOpen] = useState(false);
    const hasSubMenu = !!item.subMenu && item.subMenu.length > 0;

    const pathname = usePathname();


    const isActive =
        item.href === pathname ||
        item.subMenu?.some((sub) => sub.href === pathname);

    return (
        <li className={`bizora-dd ${open ? "open" : ""} ${isActive ? "active" : ""}`}>
            {hasSubMenu ? (
                <>
                    <a
                        role="button"
                        className="menu-toggle"
                        onClick={() => setOpen((prev) => !prev)}
                        aria-expanded={open}
                    >
                        {item.title} <i className="ti ti-caret-down-filled"></i>
                    </a>
                    <ul
                        className={`bizora-dd-menu ${open ? 'd-block' : 'd-none d-sm-block'}`}
                    >
                        {item.subMenu?.map((sub, i) => (
                            <MenuItem key={i} item={sub} />
                        ))}
                    </ul>
                </>
            ) : (
                <Link href={item.href ?? "#"}>{item.title}</Link>
            )}
        </li>
    );
};

const NavbarMenu: FC = () => {
    return (
        <ul className="navbar-nav align-items-xl-center navbar-nav-scroll mt-4 mt-xl-0">
            {menuData.map((item, index) => (
                <MenuItem key={index} item={item} />
            ))}
        </ul>
    );
};

export default NavbarMenu;
