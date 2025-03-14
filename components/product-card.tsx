import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/types";
import { AddToCartButton } from "./add-to-cart-button";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg border">
      {/* Ensure Link directly wraps content without <a> */}
      <Link href={`/products/${product.id}`} className="block">
        <div className="relative aspect-square overflow-hidden bg-muted">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </div>
        <div className="p-4">
          <h3 className="font-medium">{product.name}</h3>
        </div>
      </Link>

      {/* Separate Link for category */}
      <div className="p-4 pt-0">
        <Link href={`/categories/${product.category.toLowerCase()}`} className="mt-1 text-sm text-muted-foreground hover:text-primary transition-colors">
          {product.category}
        </Link>
        <p className="mt-2 font-semibold">${product.price.toFixed(2)}</p>
        <AddToCartButton product={product} variant="outline" />
      </div>
    </div>
  );
}
