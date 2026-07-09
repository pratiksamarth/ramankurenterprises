import { CheckCircle2 } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
             <div className="absolute inset-0 bg-secondary rounded-[2rem] transform -translate-x-4 translate-y-4 -z-10"></div>
             <img 
              src="/print-shop.jpg" 
              alt="Stacks of crisp paper and printing equipment" 
              className="rounded-[2rem] shadow-xl w-full h-[500px] object-cover border border-border/50 grayscale-[20%] sepia-[10%]"
            />
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6 text-balance">
              Rooted in Ramankur. <br/>Built on Trust.
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We aren't a massive, faceless corporation. We are your neighbors. For years, we've been the trusted partner for school principals, shopkeepers, and local businesses in Gadchiroli who need things done right, on time, and without fuss.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                "Personalized attention to every order, big or small.",
                "Reliable timelines you can set your watch to.",
                "High-quality materials that represent you well.",
                "Deep understanding of local educational needs."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-foreground font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
