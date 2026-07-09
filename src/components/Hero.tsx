import { Button } from "@/components/ui/button";
import { ArrowRight, BadgeCheck } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <BadgeCheck size={16} />
              <span>Ramankur, Kaneri, Gadchiroli</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 text-balance">
              Quality Products. <br />
              <span className="text-primary italic">Trusted Service.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Your dependable printing solution for all everyday needs. From crisp school materials to professional ID cards, we deliver with care and precision.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto rounded-full text-base h-12 px-8">
                <a href="#services">Explore Services</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto rounded-full text-base h-12 px-8 bg-transparent border-border hover:bg-secondary">
                <a href="#contact" className="flex items-center gap-2">
                  Find Our Shop <ArrowRight size={18} />
                </a>
              </Button>
            </div>
            
            <div className="mt-12 flex items-center gap-8 border-t border-border pt-8">
              <div>
                <p className="text-3xl font-serif font-bold text-foreground">32+</p>
                <p className="text-sm text-muted-foreground font-medium">Years Of Experience in Education Field</p>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div>
                <p className="text-3xl font-serif font-bold text-foreground">30+</p>
                <p className="text-sm text-muted-foreground font-medium">Schools Served</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-primary/5 rounded-[2rem] transform translate-x-4 translate-y-4 -z-10"></div>
            <img 
              src="/hero-print.jpg" 
              alt="High-quality printed school materials on a wooden desk" 
              className="rounded-[2rem] shadow-xl w-full h-[500px] object-cover border border-border/50"
            />
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-2xl shadow-lg border border-border max-w-[240px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-serif font-bold text-xl">R</span>
                </div>
                <div>
                  <p className="text-sm font-semibold">Owned By</p>
                  <p className="text-xs text-muted-foreground">Samarth's</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
