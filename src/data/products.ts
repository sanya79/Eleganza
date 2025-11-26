import { Product } from "@/types/product";
import laptopImg from "@/assets/product-laptop.jpg";
import bagImg from "@/assets/product-bag.jpg";
import headphonesImg from "@/assets/product-headphones.jpg";
import watchImg from "@/assets/product-watch.jpg";
import sunglassesImg from "@/assets/product-sunglasses.jpg";
import perfumeImg from "@/assets/product-perfume.jpg";

export const products: Product[] = [
  {
    id: "1",
    name: "Dell XPS 13",
    price: 1299.99,
    image: laptopImg,
    description: "Ultra-portable laptop with stunning 4K display, Intel Core i7 processor, and premium build quality. Perfect for professionals on the go.",
    category: "Electronics",
    rating: 4.5,
    reviews: 25,
    inStock: true,
  },
  {
    id: "2",
    name: "Luxe Leather Handbag",
    price: 599.99,
    image: bagImg,
    description: "Handcrafted Italian leather handbag with gold-plated hardware. Timeless elegance meets modern functionality.",
    category: "Fashion",
    rating: 5,
    reviews: 42,
    inStock: true,
  },
  {
    id: "3",
    name: "Premium Wireless Headphones",
    price: 349.99,
    image: headphonesImg,
    description: "Studio-quality sound with active noise cancellation. Rose gold accents and 30-hour battery life.",
    category: "Electronics",
    rating: 4.8,
    reviews: 156,
    inStock: true,
  },
  {
    id: "4",
    name: "Swiss Luxury Watch",
    price: 2499.99,
    image: watchImg,
    description: "Automatic movement Swiss timepiece with 18k gold case and sapphire crystal. A statement of refined taste.",
    category: "Accessories",
    rating: 4.9,
    reviews: 89,
    inStock: true,
  },
  {
    id: "5",
    name: "Designer Sunglasses",
    price: 299.99,
    image: sunglassesImg,
    description: "UV400 protection with polarized lenses. Iconic design with gold-plated frames and acetate temples.",
    category: "Accessories",
    rating: 4.7,
    reviews: 67,
    inStock: true,
  },
  {
    id: "6",
    name: "Signature Perfume",
    price: 189.99,
    image: perfumeImg,
    description: "Exclusive fragrance with notes of bergamot, jasmine, and sandalwood. Elegance in a bottle.",
    category: "Beauty",
    rating: 4.6,
    reviews: 134,
    inStock: true,
  },
];
