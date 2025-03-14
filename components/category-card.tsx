import Link from "next/link";
import Image from "next/image";
import type { Category } from "@/lib/types";

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-10 gap-2 flex flex-col items-center">
    <Link
      href={`/categories/${category.id}`}
      className="group relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg overflow-hidden rounded-lg border hover:border-primary transition-colors"
    >
      <div className="relative h-64 w-full overflow-hidden bg-muted">
        <Image
          src={category.image || "/placeholder.svg"}
          alt={category.name}
          fill
          className="object-cover w-full h-full rounded-md group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (min-width: 768px) 16vw"
        />
      </div>
      <div className="absolute inset-0 bg-black/30 flex items-end">
        <div className="w-full p-6 text-white"></div>
      </div>
    </Link>
    <span className="mt-2 font-medium text-center text-black sm:text-lg md:text-xl">
      {category.name}
    </span>
  </div>
  
    
    
  );
}
