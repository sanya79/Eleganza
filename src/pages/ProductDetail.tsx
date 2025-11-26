import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, Minus, Plus, ArrowLeft } from "lucide-react";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/contexts/CartContext";
import { Header } from "@/components/Header";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold mb-4">Product Not Found</h1>
          <Link to="/">
            <Button variant="link">Return to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="h-4 w-4" />
          Back to Shop
        </Link>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="sticky top-24">
            <div className="aspect-square bg-muted rounded-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
              {product.category}
            </p>
            
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              {product.name}
            </h1>
            
            <p className="text-xs text-muted-foreground mb-4">
              Product #{product.id}692731d5eaa135e8ff83236c
            </p>

            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? "fill-secondary text-secondary"
                        : "text-muted"
                    }`}
                  />
                ))}
              </div>
              <span className="text-muted-foreground">
                ({product.reviews} Reviews)
              </span>
            </div>

            <Separator className="my-6" />

            <div className="flex items-center gap-4 mb-8">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="h-12 w-12"
              >
                <Minus className="h-5 w-5" />
              </Button>
              <span className="text-xl font-semibold w-12 text-center">
                {quantity}
              </span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity(quantity + 1)}
                className="h-12 w-12"
              >
                <Plus className="h-5 w-5" />
              </Button>
              <Button
                variant="hero"
                size="lg"
                onClick={handleAddToCart}
                className="flex-1"
              >
                Add To Cart
              </Button>
            </div>

            <Separator className="my-6" />

            <div className="space-y-4">
              <div>
                <span className="font-semibold">Status: </span>
                {product.inStock ? (
                  <Badge variant="default" className="bg-success text-success-foreground">
                    InStock
                  </Badge>
                ) : (
                  <Badge variant="destructive">Out of Stock</Badge>
                )}
              </div>

              <Separator />

              <div>
                <h3 className="font-semibold text-lg mb-2">Description:</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>

              <Separator />

              <Button variant="outline" size="lg" className="w-full">
                Submit Review
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
