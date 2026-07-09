import { BookOpen, IdCard, PencilRuler, Printer } from "lucide-react";

const services = [
  {
    icon: IdCard,
    title: "ID Cards",
    description: "Durable, high-quality professional and student ID cards with lanyards. Crisp printing that lasts."
  },
  {
    icon: BookOpen,
    title: "School Materials",
    description: "Test Papers, Workbooks, etc. for schools and colleges. We provide a wide range of educational materials."
  },
  {
    icon: PencilRuler,
    title: "Educational Supplies",
    description: "A wide range of essential stationery and supplies for classrooms, offices, and students."
  },
  {
    icon: Printer,
    title: "Printing Solutions",
    description: "Everyday document printing and copying services. Clear, Neat and Professional."
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4 text-balance">Everything you need, printed right here.</h2>
          <p className="text-lg text-muted-foreground">
            We specialize in the essentials that keep our local schools, shops, and businesses running smoothly every single day.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                <service.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold font-serif mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
