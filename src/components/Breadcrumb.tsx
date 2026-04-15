import Link from "next/link";

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbProps {
    title?: string;
    items: BreadcrumbItem[];
}

export default function Breadcrumb({ title, items }: BreadcrumbProps) {

    return (
        <div className="breadcrumb-section bg-img jarallax breadcrumb-bg">
            <div className="container">
                {/*-- Breadcrumb Content --*/}
                <div className="breadcrumb-content">
                    <div className="divider"></div>
                    <h2>{title}</h2>
                    <ul className="list-unstyled">
                        <li><Link href="/">Home</Link></li>
                        {items.map((item, index) => (
                            <li key={index}>
                                {item.href ? (
                                    <Link href={item.href}>{item.label}</Link>
                                ) : (
                                    <span>{item.label}</span>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/*-- Divider --*/}
            <div className="divider"></div>
        </div>
    )
}