import Link from "next/link"
import Image from "next/image"
import type { Category } from "@/lib/types"

interface CategoryCardProps {
  category: Category
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/categories/${category.id}`}
      className="group relative overflow-hidden rounded-lg border hover:border-primary transition-colors"
    >
      <div className="relative aspect-video overflow-hidden bg-muted">
        <Image
          src={category.image || "/placeholder.svg"}
          alt={category.name}
          fill
          className="object-cover transition-transform group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/30 flex items-end">
          <div className="w-full p-4 text-white">
            <h3 className="font-bold text-xl">{category.name}</h3>
            <p className="text-sm text-white/80 mt-1">{category.description}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

