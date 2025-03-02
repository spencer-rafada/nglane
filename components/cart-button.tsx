"use client"

import Link from "next/link"
import { ShoppingBag } from "lucide-react"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"

export function CartButton() {
  const { cart } = useCart()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const itemCount = cart.reduce((count, item) => count + item.quantity, 0)

  return (
    <Link href="/cart">
      <Button variant="outline" size="icon" className="relative">
        <ShoppingBag className="h-5 w-5" />
        {mounted && itemCount > 0 && (
          <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
            {itemCount}
          </span>
        )}
        <span className="sr-only">Cart</span>
      </Button>
    </Link>
  )
}

