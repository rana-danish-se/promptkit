import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white py-20">
      {/* Background accents - more vibrant and visible */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[700px] h-[700px] bg-blue-400/20 rounded-full blur-[120px] animate-glow" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-400/20 rounded-full blur-[120px] animate-glow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-blue-400/20 blur-[150px] rounded-full animate-glow pointer-events-none" />

      <div className="container relative mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-sm font-medium text-blue-600 bg-blue-50 rounded-full border border-blue-100 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Next-Gen Prompt Engineering
        </div>
        
        <h1 className="max-w-4xl mx-auto mb-4 text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1] uppercase animate-fade-up">
          The workbench where <span className="text-blue-600">better prompts</span> are born.
        </h1>
        
        <p className="max-w-2xl mx-auto mb-6 text-xl text-slate-600 leading-relaxed font-sans animate-fade-up [animation-delay:200ms]">
          A professional engineering environment to test, compare, and refine your LLM prompts before they ever touch your codebase.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/workbench"
            className="group inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-xl shadow-premium hover:bg-blue-700 transition-all active:scale-95 shadow-[0_20px_50px_rgba(37,99,235,0.2)]"
          >
            Open Workbench
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a 
            href="#features"
            className="px-8 py-4 text-lg font-semibold text-slate-700 hover:text-blue-600 bg-slate-200 rounded-md transition-colors"
          >
            Explore Features
          </a>
        </div>


      </div>
    </section>
  );
}
