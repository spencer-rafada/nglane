import { CategoryCard } from "@/components/category-card"
import { categories } from "@/lib/categories"

export default function CategoriesPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-16">
      <h1 className="text-3xl font-bold mb-8">Shop by Category</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  )
}

