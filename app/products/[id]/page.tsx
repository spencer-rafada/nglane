import Image from "next/image"
import { notFound } from "next/navigation"

import { AddToCartButton } from "@/components/add-to-cart-button"
import { products } from "@/lib/products"

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id)

  if (!product) {
    notFound()
  }

  return (
    <div className="container px-4 py-12 md:px-6 md:py-16">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
        <div className="flex flex-col space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-xl font-semibold mt-2">${product.price.toFixed(2)}</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Description</h2>
            <p className="text-muted-foreground">{product.description}</p>
          </div>
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  )
}

