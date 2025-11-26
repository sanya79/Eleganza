import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300">
      <Link to={`/product/${product.id}`}>
        <div className="relative overflow-hidden aspect-square bg-muted">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {product.inStock && (
            <Badge 
              variant="default" 
              className="absolute top-3 right-3 bg-success text-success-foreground"
            >
              In Stock
            </Badge>
          )}
        </div>
      </Link>
      
      <CardContent className="p-4">
        <Link to={`/product/${product.id}`}>
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
            {product.category}
          </p>
          <h3 className="font-serif font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>
        
        <div className="flex items-center gap-1 mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < Math.floor(product.rating)
                  ? "fill-secondary text-secondary"
                  : "text-muted"
              }`}
            />
          ))}
          <span className="text-sm text-muted-foreground ml-2">
            ({product.reviews})
          </span>
        </div>
        
        <p className="text-2xl font-serif font-bold">
          ${product.price.toFixed(2)}
        </p>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button
          variant="default"
          className="w-full"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};
