import Link from "next/link";
import Image from "next/image";
import type { Category } from "@/lib/types";

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <div className="w-full max-w-xs items-center"> {/* Ensures proper width */}
      <div className="group relative overflow-hidden rounded-lg border">
        <Link href={`/categories/${category.id}`} className="block">
          <div className="relative w-full aspect-square overflow-hidden bg-muted">
            <Image
              src={category.image || "/placeholder.svg"}
              alt={category.name}
              fill
              className="object-fill transition-transform group-hover:scale-105"
            />
          </div>
        </Link>
      </div>
      <span className="mt-1 text-center text-lg font-medium">{category.name}</span>
    </div>
  );
}
