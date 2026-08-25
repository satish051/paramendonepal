import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  imagePlaceholder: string;
  href: string;
}

export default function ProductCard({ title, description, imagePlaceholder, href }: ProductCardProps) {
  return (
    <div className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all hover:shadow-md">
      <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden flex items-center justify-center text-gray-400">
        {/* Placeholder for actual image - Using text for now since we don't have assets */}
        <span className="text-sm font-medium">{imagePlaceholder}</span>
        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-[var(--color-forest)] mb-2 group-hover:text-[var(--color-leaf)] transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-6 line-clamp-2">
          {description}
        </p>
        
        <Link 
          href={href}
          className="inline-flex items-center text-sm font-medium text-[var(--color-forest)] hover:text-[var(--color-earth)] transition-colors"
        >
          View Details
          <ArrowRight className="ml-1 w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
