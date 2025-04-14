import type { Product } from "./types";

export const products: Product[] = [
  { id: "1", name: "Linen Shirt", description: "Lightweight and breathable linen shirt.", price: 45.99, category: "shirt", image: "/assets/linen_shirt.jpg" },
  { id: "2", name: "Corduroy Shirt", description: "Stylish and warm corduroy shirt.", price: 50.99, category: "shirt", image: "/assets/corduroy_shirt.jpg" },
  { id: "3", name: "Ribbed Shirt", description: "Comfortable and flexible ribbed shirt.", price: 39.99, category: "shirt", image: "/assets/rib_shirt.jpg" },
  { id: "4", name: "Crepe Shirt", description: "Elegant crepe fabric shirt for a smooth look.", price: 55.99, category: "shirt", image: "/assets/crepe_shirt.jpg"},
  { id: "5", name: "Linen Set", description: "A complete linen outfit for a relaxed vibe.", price: 79.99, category: "sets", image: "/assets/linen_set.jpeg" },
  { id: "6", name: "Crepe Set", description: "A stylish crepe fabric set for formal occasions.", price: 89.99, category: "sets", image: "/assets/crepe_set.jpeg" },
  { id: "7", name: "Vintage Set", description: "Classic vintage outfit with a modern touch.", price: 99.99, category: "sets", image: "/assets/vintage_set.jpg" },
  { id: "8", name: "Linen Pants", description: "Breathable and stylish linen pants.", price: 49.99, category: "pant", image:"/assets/linen_pants.jpeg" },
  { id: "9", name: "Crepe Pants", description: "Smooth and elegant crepe pants.", price: 59.99, category: "pant", image: "/assets/crepe_pants.jpeg" },
  { id: "10", name: "Cargo Pants", description: "Durable cargo pants with multiple pockets.", price: 69.99, category: "pant", image: "/assets/cargo_pants.jpg" },
  { id: "11", name: "Duchess Dress", description: "Elegant and luxurious duchess dress.", price: 120.99, category: "dress", image: "/assets/duchess_dress.jpeg"},
  { id: "12", name: "Crepe Dress", description: "A smooth and stylish crepe fabric dress.", price: 110.99, category: "dress", image: "/assets/crepe_dress.jpeg" },
  { id: "13", name: "Ankara Dress", description: "Beautifully designed Ankara dress.", price: 99.99, category: "dress", image: "/assets/ankara_dress.jpeg"},
  { id: "14", name: "Danshiki", description: "Traditional African Danshiki with vibrant prints.", price: 65.99, category: "kaftan", image: "/assets/danshiki_kaftan.jpeg" },
  { id: "15", name: "Senator", description: "Elegant senator wear for a classy look.", price: 89.99, category: "kaftan", image: "/assets/senator_kaftan.jpg"},
];

export const featuredProducts = products.slice(0, 4);
