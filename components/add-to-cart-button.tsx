"use client"

import { ShoppingCart } from "lucide-react"
import { useState } from "react"

import { Button, type ButtonProps } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"
import type { Product } from "@/lib/types"

interface AddToCartButtonProps extends Omit<ButtonProps, "onClick"> {
  product: Product
}

export function AddToCartButton({ product, ...props }: AddToCartButtonProps) {
  const { addToCart } = useCart()
  const [isAdding, setIsAdding] = useState(false)

  const handleAddToCart = () => {
    setIsAdding(true)
    addToCart(product)

    setTimeout(() => {
      setIsAdding(false)
    }, 1000)
  }

  return (
    <Button onClick={handleAddToCart} className="w-full" disabled={isAdding} {...props}>
      <ShoppingCart className="mr-2 h-4 w-4" />
      {isAdding ? "Added!" : "Add to Cart"}
    </Button>
  )
}

