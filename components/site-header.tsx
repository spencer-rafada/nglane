import Link from "next/link"
import { User, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { CartButton } from "@/components/cart-button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { categories } from "@/lib/categories"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          ShopNow
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/" className="transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/products" className="transition-colors hover:text-primary">
            Products
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center text-sm font-medium transition-colors hover:text-primary">
                Categories <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem asChild>
                <Link href="/categories">All Categories</Link>
              </DropdownMenuItem>
              {categories.map((category) => (
                <DropdownMenuItem key={category.id} asChild>
                  <Link href={`/categories/${category.id}`}>{category.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="#" className="transition-colors hover:text-primary">
            About
          </Link>
          <Link href="#" className="transition-colors hover:text-primary">
            Contact
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <User className="h-5 w-5" />
            <span className="sr-only">Account</span>
          </Button>
          <CartButton />
          <Button variant="outline" size="sm" className="md:hidden">
            Menu
          </Button>
        </div>
      </div>
    </header>
  )
}

