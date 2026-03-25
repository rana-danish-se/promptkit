import { Mail, Link, Globe } from "lucide-react";

export default function AboutDeveloper() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto p-12 bg-slate-50 rounded-3xl border border-slate-100 flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
          <div className="w-32 h-32 bg-blue-100 rounded-full shrink-0 animate-pulse" />
          
          <div>
            <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-4">The Creator</h2>
            <h3 className="text-3xl font-bold text-slate-900 mb-4 font-heading">Built by an AI Product Developer.</h3>
            <p className="text-lg text-slate-600 mb-8 font-sans">
              I built PromptKit because I was tired of messy spreadsheets and loose text files for my prompt experiments. I wanted a fast, focused, and local-first tool for professional engineering.
            </p>
            
            <div className="flex items-center justify-center md:justify-start gap-6">
              <a href="#" className="p-2 text-slate-400 hover:text-blue-600 transition-colors">
                <Globe className="w-6 h-6" />
              </a>
              <a href="#" className="p-2 text-slate-400 hover:text-blue-600 transition-colors">
                <Link className="w-6 h-6" />
              </a>
              <a href="#" className="p-2 text-slate-400 hover:text-blue-600 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
              <a href="#" className="p-2 text-slate-400 hover:text-blue-600 transition-colors">
                <Globe className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
