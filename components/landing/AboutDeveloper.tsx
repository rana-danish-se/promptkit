import { Mail, CodeXml, Briefcase, Globe } from "lucide-react";
import Image from "next/image";

export default function AboutDeveloper() {
  return (
    <section className="py-24 bg-background" id="about-developer">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto p-10 md:p-14 bg-white/5 backdrop-blur-3xl rounded-4xl border border-white/10 flex flex-col md:flex-row items-center gap-10 md:gap-14 text-center md:text-left relative overflow-hidden group hover:border-brand-cyan/30 transition-all duration-700 shadow-2xl">
            {/* Decorative background element */}
            <div className="absolute -top-32 -right-32 w-80 h-80 bg-brand-cyan/5 blur-[100px] rounded-full group-hover:bg-brand-cyan/10 transition-colors duration-1000" />
            
            <div className="relative z-10 w-36 h-36 md:w-48 md:h-48 rounded-[2.5rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl shadow-brand-cyan/10 rotate-3 group-hover:rotate-0 border-2 border-white/5">
              <Image 
                 src="/developer.png" 
                 alt="Rana Danish - AI Product Developer" 
                 fill 
                 className="object-cover"
              />
            </div>
          
          <div className="relative z-10 flex-1">
            <h2 className="text-[10px] font-black tracking-[0.4em] text-brand-cyan uppercase mb-6">The Architect</h2>
            <h3 className="text-3xl md:text-5xl font-black text-white mb-6 font-heading tracking-tight leading-none uppercase">Built by an <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-cyan to-brand-purple">AI Product Developer</span>.</h3>
            <p className="text-lg md:text-xl text-slate-400 mb-10 font-sans leading-relaxed max-w-2xl">
              I built PromptKit because I was tired of messy spreadsheets and loose text files for my prompt experiments. I wanted a fast, focused, and local-first tool for professional prompt engineering.
            </p>
            
            <div className="flex items-center justify-center md:justify-start gap-5">
              {[
                { icon: Globe, url: "https://danish.digitallabservices.com" },
                { icon: Briefcase, url: "https://linkedin.com/in/rana-danish-dev" },
                { icon: CodeXml, url: "https://github.com/rana-danish-se" },
                { icon: Mail, url: "mailto:ranadanish.se@gmail.com" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.url} 
                  target="_blank" 
                  className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/5 rounded-2xl text-slate-400 hover:text-brand-cyan hover:border-brand-cyan/30 hover:bg-brand-cyan/5 hover:shadow-[0_0_20px_rgba(34,182,212,0.1)] transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
