import { Link } from "react-router-dom";
import { ShoppingCart, User, Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CartSheet } from "./CartSheet";

export const Header = () => {
  const { cartCount } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <nav className="mt-6 flex flex-col gap-4">
                  <Link to="/" className="text-lg hover:text-primary transition-colors">
                    Home
                  </Link>
                  <Link to="/" className="text-lg hover:text-primary transition-colors">
                    Collections
                  </Link>
                  <Link to="/" className="text-lg hover:text-primary transition-colors">
                    About
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
            
            <Link to="/" className="text-2xl font-serif font-bold">
              Eleganza
            </Link>

            <nav className="hidden md:flex gap-6">
              <Link to="/" className="text-sm hover:text-primary transition-colors">
                Collections
              </Link>
              <Link to="/" className="text-sm hover:text-primary transition-colors">
                New Arrivals
              </Link>
              <Link to="/" className="text-sm hover:text-primary transition-colors">
                About
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            
            <CartSheet>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <Badge 
                    variant="default" 
                    className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
                  >
                    {cartCount}
                  </Badge>
                )}
              </Button>
            </CartSheet>
            
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
