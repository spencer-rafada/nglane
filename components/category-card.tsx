import Link from "next/link";
import Image from "next/image";
import type { Category } from "@/lib/types";

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/categories/${category.id}`}
      className="group relative overflow-hidden rounded-lg border hover:border-primary transition-colors"
    >
      <div className="relative h-64 w-full overflow-hidden bg-muted">
        <Image
          src={category.image || "/placeholder.svg"}
          alt={category.name}
          fill
          className="object-contain transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="absolute inset-0 bg-black/30 flex items-end">
        <div className="w-full p-6 text-white">
          <h3 className="font-bold text-2xl">{category.name}</h3>
          <p className="text-base text-white/80 mt-2">{category.description}</p>
        </div>
      </div>
    </Link>
  );
}
