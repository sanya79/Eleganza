import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductGrid } from "@/components/ProductGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ProductGrid />
      
      <footer className="border-t border-border bg-muted/50 py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-2xl font-serif font-bold mb-2">Eleganza</p>
          <p className="text-muted-foreground text-sm">
            © 2024 Eleganza. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
