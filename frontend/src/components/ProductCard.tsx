import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  imagePlaceholder: string;
  imageUrl?: string;
  href: string;
}

export default function ProductCard({ title, description, imagePlaceholder, imageUrl, href }: ProductCardProps) {
  return (
    <div className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all hover:shadow-md">
      <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden flex items-center justify-center text-gray-400">
        {imageUrl ? (
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        ) : (
          <span className="text-sm font-medium">{imagePlaceholder}</span>
        )}
        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-2 group-hover:text-[var(--color-secondary)] transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-6 line-clamp-2">
          {description}
        </p>
        
        <Link 
          href={href}
          className="inline-flex items-center text-sm font-medium text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors"
        >
          View Details
          <ArrowRight className="ml-1 w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
