import { Share2, Settings, Zap, History } from "lucide-react";

const steps = [
  {
    icon: Settings,
    title: "1. Key Configuration",
    description: "Connect your Groq or OpenRouter API keys in the settings modal. This stays purely local in your browser's storage."
  },
  {
    icon: Zap,
    title: "2. Experiment",
    description: "Select your model and adjust the temperature. Draft your system and user prompt with live feedback."
  },
  {
    icon: History,
    title: "3. Compare & Store",
    description: "Compare your outputs across different models. Save the winning system prompts into your local library."
  },
  {
    icon: Share2,
    title: "4. Port to Code",
    description: "Copy your refined prompts directly into your backend or agentic framework with confidence."
  }
];

export default function HowItWorks() {
  return (
    <section className="py-10 bg-background border-t border-white/5 relative overflow-hidden" id="how-it-works">
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-purple/5 blur-[120px] rounded-full pointer-events-none" />
       
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-10">
           <h2 className="text-sm font-bold tracking-normal text-brand-cyan uppercase mb-6">The Workflow</h2>
           <h3 className="text-5xl md:text-6xl font-bold text-white uppercase tracking-normal">Master the <span className="text-brand-purple">prompt loop.</span></h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
           {/* Visual connecting line for desktop */}
           <div className="hidden lg:block absolute top-[60px] left-0 w-full h-[2px] bg-white/5 -z-10" />
           
           {steps.map((step, idx) => (
             <div key={idx} className="flex flex-col items-center text-center group">
               <div className="w-20  h-20 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl flex items-center justify-center text-brand-cyan shadow-xl mb-8 group-hover:border-brand-cyan/50 group-hover:bg-brand-cyan/5 transition-all duration-300">
                 <step.icon className="w-10 h-10" />
               </div>
               <h4 className="text-2xl font-black text-white mb-4 uppercase tracking-tight leading-tight">{step.title.split(". ")[1]}</h4>
               <p className="text-base text-slate-400 leading-relaxed font-sans">{step.description}</p>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
