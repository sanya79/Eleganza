import { products } from "@/data/products";
import { ProductCard } from "./ProductCard";

export const ProductGrid = () => {
  return (
    <section id="products" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Featured Collection
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Handpicked selection of premium products that define luxury and style
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
