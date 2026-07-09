import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-background selection:bg-primary/20 selection:text-primary">
      <Header />
      <main className="flex-1 flex flex-col">
        <Hero />
        <Services />
        <About />
      </main>
      <Footer />
    </div>
  );
}
