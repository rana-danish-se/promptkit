import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen  flex items-center justify-center overflow-hidden bg-background pt-20">
    
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[700px] h-[700px] bg-brand-purple/20 rounded-full blur-[120px] animate-glow" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-cyan/20 rounded-full blur-[120px] animate-glow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-brand-purple/10 blur-[150px] rounded-full animate-glow pointer-events-none" />

      <div className="container relative mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-black uppercase tracking-[0.2em] text-brand-cyan bg-brand-cyan/10 rounded-full border border-brand-cyan/20 animate-fade-in shadow-[0_0_15px_rgba(34,182,212,0.1)]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
          </span>
          Next-Gen Prompt Engineering
        </div>
        
        <h1 className="max-w-[950px] mx-auto mb-6 text-5xl md:text-6xl lg:text-7xl  font-bold tracking-normal text-white leading-none uppercase animate-fade-up">
          The workbench where <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-cyan to-brand-purple">better prompts</span> are born.
        </h1>
        
        <p className="max-w-2xl mx-auto mb-10 text-xl text-slate-400 leading-relaxed font-sans animate-fade-up [animation-delay:200ms]">
          A professional engineering environment to test, compare, and refine your LLM prompts before they ever touch your codebase.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link 
            href="/workbench"
            className="group inline-flex items-center gap-2 px-6 py-4 text-lg font-semibold uppercase tracking-widest text-slate-900 bg-brand-cyan rounded-2xl shadow-[0_20px_50px_rgba(34,182,212,0.3)] hover:bg-white hover:scale-105 transition-all active:scale-95"
          >
            Open Workbench
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a 
            href="#features"
            className="px-6 py-4 text-lg font-semibold uppercase tracking-widest text-white hover:text-brand-cyan border border-white/10 hover:border-brand-cyan/30 bg-white/5 backdrop-blur-sm rounded-2xl transition-all"
          >
            Explore Features
          </a>
        </div>
      </div>
    </section>
  );
}
