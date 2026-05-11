import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

interface BreadcrumbItem {
    label: string
    href?: string
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
    return (
        <nav className="flex mb-8 overflow-x-auto whitespace-nowrap pb-2 md:pb-0" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
                <li>
                    <Link href="/" className="text-gray-500 hover:text-[#5C82A3] transition-colors flex items-center">
                        <Home className="w-4 h-4" />
                        <span className="sr-only">Home</span>
                    </Link>
                </li>
                {items.map((item, index) => (
                    <li key={index} className="flex items-center space-x-2">
                        <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
                        {item.href ? (
                            <Link href={item.href} className="text-sm font-bold text-gray-500 hover:text-[#5C82A3] transition-colors">
                                {item.label}
                            </Link>
                        ) : (
                            <span className="text-sm font-bold text-[#5C82A3]">{item.label}</span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    )
}
