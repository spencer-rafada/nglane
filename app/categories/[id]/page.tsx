import { notFound } from "next/navigation"
import { ProductCard } from "@/components/product-card"
import { categories } from "@/lib/categories"
import { products } from "@/lib/products"

export default function CategoryPage({ params }: { params: { id: string } }) {
  const category = categories.find((c) => c.id === params.id)

  if (!category) {
    notFound()
  }

  const categoryProducts = products.filter((product) => product.category.toLowerCase() === category.name.toLowerCase())

  return (
    <div className="container px-4 py-12 md:px-6 md:py-16">
      <h1 className="text-3xl font-bold mb-2">{category.name}</h1>
      <p className="text-muted-foreground mb-8">{category.description}</p>

      {categoryProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h2 className="text-xl font-medium mb-4">No products found</h2>
          <p className="text-muted-foreground">There are no products in this category yet.</p>
        </div>
      )}
    </div>
  )
}

