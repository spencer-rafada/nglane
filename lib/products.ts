import type { Product } from "./types"

export const products: Product[] = [
  {
    id: "1",
    name: "Wireless Headphones",
    description:
      "Premium wireless headphones with noise cancellation technology for an immersive audio experience. Enjoy up to 30 hours of battery life and comfortable ear cushions for extended listening sessions.",
    price: 149.99,
    category: "Electronics",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "2",
    name: "Smart Watch",
    description:
      "Track your fitness goals, receive notifications, and more with this feature-packed smartwatch. Water-resistant design with a vibrant touchscreen display.",
    price: 199.99,
    category: "Electronics",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "3",
    name: "Leather Backpack",
    description:
      "Stylish and durable leather backpack with multiple compartments for all your essentials. Perfect for work, school, or travel.",
    price: 89.99,
    category: "Accessories",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "4",
    name: "Ceramic Coffee Mug",
    description:
      "Handcrafted ceramic coffee mug with a comfortable handle and elegant design. Microwave and dishwasher safe.",
    price: 24.99,
    category: "Home",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "5",
    name: "Fitness Tracker",
    description:
      "Monitor your heart rate, steps, sleep, and more with this sleek fitness tracker. Syncs wirelessly with your smartphone for detailed health insights.",
    price: 79.99,
    category: "Electronics",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "6",
    name: "Portable Bluetooth Speaker",
    description:
      "Compact Bluetooth speaker with powerful sound and 12-hour battery life. Water-resistant design makes it perfect for outdoor use.",
    price: 59.99,
    category: "Electronics",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "7",
    name: "Stainless Steel Water Bottle",
    description:
      "Keep your drinks cold for 24 hours or hot for 12 hours with this vacuum-insulated water bottle. Durable and leak-proof design.",
    price: 34.99,
    category: "Accessories",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "8",
    name: "Wireless Charging Pad",
    description:
      "Charge your compatible devices without the hassle of cables. Sleek, minimalist design with fast charging capabilities.",
    price: 29.99,
    category: "Electronics",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "9",
    name: "Running Shoes",
    description:
      "Lightweight and comfortable running shoes with excellent support and cushioning. Perfect for daily runs or marathon training.",
    price: 119.99,
    category: "Sports",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "10",
    name: "Yoga Mat",
    description:
      "Premium non-slip yoga mat with excellent cushioning and support. Eco-friendly materials and easy to clean surface.",
    price: 49.99,
    category: "Sports",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "11",
    name: "Cotton T-Shirt",
    description: "Soft and comfortable 100% cotton t-shirt. Classic fit with reinforced stitching for durability.",
    price: 24.99,
    category: "Clothing",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "12",
    name: "Denim Jacket",
    description: "Classic denim jacket with a modern fit. Versatile style that goes with almost any outfit.",
    price: 79.99,
    category: "Clothing",
    image: "/placeholder.svg?height=400&width=400",
  },
]

export const featuredProducts = products.slice(0, 4)

