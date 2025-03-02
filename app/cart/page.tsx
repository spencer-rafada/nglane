"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"
import { formatPrice } from "@/lib/utils"

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="container px-4 py-12 md:px-6 md:py-16">Loading...</div>
  }

  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)

  return (
    <div className="container px-4 py-12 md:px-6 md:py-16">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-xl font-medium mb-4">Your cart is empty</h2>
          <p className="text-muted-foreground mb-8">Looks like you haven't added anything to your cart yet.</p>
          <Link href="/products">
            <Button>Continue Shopping</Button>
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center space-x-4 border rounded-lg p-4">
                <div className="relative h-20 w-20 overflow-hidden rounded-md bg-muted">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <select
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, Number.parseInt(e.target.value))}
                    className="h-9 w-16 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                  <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.id)} aria-label="Remove item">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="border rounded-lg p-6 h-fit space-y-6">
            <h2 className="text-xl font-semibold">Order Summary</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="border-t pt-2 mt-2">
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
              </div>
            </div>
            <Button className="w-full" size="lg">
              Proceed to Checkout
            </Button>
            <div className="text-center">
              <Link href="/products" className="text-sm text-muted-foreground hover:underline">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

