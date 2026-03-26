"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
      isScrolled ? "bg-background/80 backdrop-blur-md border-border py-2 shadow-xl shadow-purple-900/10" : "bg-transparent py-4 border-transparent"
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo only */}
        <Link href="/" className="flex items-center group">
          <div className="relative w-40 h-12 md:w-52 md:h-14 group-hover:scale-105 transition-transform duration-300 filter drop-shadow-[0_0_10px_rgba(34,182,212,0.3)]">
            <Image 
              src="/logo.png" 
              alt="PromptKit Logo" 
              fill 
              className="object-contain" 
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          <Link href="#about" className="text-[16px] font-medium tracking-wide text-slate-300 hover:text-brand-cyan transition-colors">About</Link>
          <Link href="#features" className="text-[16px] font-medium tracking-wide text-slate-300 hover:text-brand-cyan transition-colors">Features</Link>
          <Link href="#how-it-works" className="text-[16px] font-medium tracking-wide text-slate-300 hover:text-brand-cyan transition-colors">Workflow</Link>
          <Link href="#about-developer" className="text-[16px] font-medium tracking-wide text-slate-300 hover:text-brand-cyan transition-colors">Creator</Link>
        </div>

        {/* CTA */}
        <Link 
          href="/workbench" 
          className="px-6 py-3 bg-brand-cyan text-slate-900 rounded-xl font-medium text-[16px] uppercase tracking-widest hover:bg-white hover:shadow-[0_0_20px_rgba(34,182,212,0.4)] transition-all active:scale-[0.98] flex items-center gap-2"
        >
          Workbench
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </nav>
  );
}
