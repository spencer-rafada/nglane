import Link from "next/link";
import Image from "next/image";
import type { Category } from "@/lib/types";

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg border">
      <Link
        href={`/categories/${category.id}`}
        className="block"
      >
        <div className="relative aspect-square overflow-hidden bg-muted ">
          <Image
            src={category.image || "/placeholder.svg"}
            alt={category.name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </div>
        
      </Link>
    </div>
  );
}
