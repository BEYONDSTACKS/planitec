import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbProps {
    items: { label: string; href?: string }[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
    return (
        <nav className="flex items-center gap-2 text-sm text-[#7C7C7B]">
            {items.map((item, index) => (
                <span key={index} className="flex items-center gap-2">
                    {index > 0 && <ChevronRight className="w-4 h-4" />}
                    {item.href ? (
                        <Link to={item.href} className="hover:text-[#5DAECD] transition-colors">
                            {item.label}
                        </Link>
                    ) : (
                        <span className="text-[#1a1a1a] font-medium">{item.label}</span>
                    )}
                </span>
            ))}
        </nav>
    );
}
