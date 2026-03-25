import Hero from "@/components/landing/Hero";
import About from "@/components/landing/About";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import AboutDeveloper from "@/components/landing/AboutDeveloper";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Features />
      <HowItWorks />
      <AboutDeveloper />
      
      {/* Footer */}
      <footer className="py-12 border-t border-slate-100 bg-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white">
              <span className="font-bold text-xl">P</span>
            </div>
            <span className="text-xl font-bold font-heading text-slate-900">PromptKit</span>
          </div>
          
          <div className="text-slate-500 text-sm font-sans text-center">
            © 2026 PromptKit. A local-first tool for professional AI developers.
          </div>
          
          <div className="flex gap-8 text-sm text-slate-600">
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Github</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Docs</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
