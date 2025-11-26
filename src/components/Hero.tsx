import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-background/70" />
      
      <div className="relative z-10 text-center px-4 animate-in fade-in duration-1000">
        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
          Welcome to Eleganza
        </p>
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-balance">
          Discover Your Style
          <br />
          <span className="text-secondary">Shop the Latest Trends</span>
        </h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Curated collection of premium products for the discerning shopper
        </p>
        <Button 
          variant="hero" 
          size="lg"
          onClick={scrollToProducts}
          className="group"
        >
          Explore Collection
          <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
        </Button>
      </div>

      <button 
        onClick={scrollToProducts}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors animate-bounce"
        aria-label="Scroll to products"
      >
        <span className="text-sm tracking-wider">Scroll</span>
        <ChevronDown className="h-5 w-5 mx-auto mt-1" />
      </button>
    </section>
  );
};
