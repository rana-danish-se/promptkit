import Hero from "@/components/landing/Hero";
import About from "@/components/landing/About";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import AboutDeveloper from "@/components/landing/AboutDeveloper";
import Navbar from "@/components/landing/Navbar";
import NextImage from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <HowItWorks />
      <AboutDeveloper />
      
      {/* Footer */}
      <footer className="py-20 bg-background border-t border-white/5">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center">
            <div className="relative w-40 h-12">
              <NextImage src="/logo.png" alt="Logo" fill className="object-contain" />
            </div>
          </div>
          
          <div className="text-slate-500 text-sm font-sans text-center max-w-sm">
            © 2026. A premium engineering workbench for the next generation of AI developers.
          </div>
          
          <div className="flex gap-10 text-[10px] font-black uppercase tracking-widest text-slate-500">
            <a href="#" className="hover:text-brand-cyan transition-colors">Privacy</a>
            <a href="#" className="hover:text-brand-cyan transition-colors">GitHub</a>
            <a href="#" className="hover:text-brand-cyan transition-colors">Docs</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
