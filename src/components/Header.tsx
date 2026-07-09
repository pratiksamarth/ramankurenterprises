import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Phone, Printer } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-primary-foreground">
            <Printer size={24} />
          </div>
          <div>
            <h1 className="font-serif font-bold text-xl leading-tight">Ramankur</h1>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Enterprises</p>
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Services</a>
          <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">About Us</a>
          <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 text-sm text-muted-foreground">
            <Phone size={16} />
            <span className="font-medium text-foreground">+91 7666115925</span>
          </div>
          <Button asChild className="hidden sm:inline-flex rounded-full px-6">
            <a href="#contact">Visit Shop</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
