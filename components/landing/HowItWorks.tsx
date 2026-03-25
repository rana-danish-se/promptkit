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
    <section className="py-24 bg-slate-50/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
           <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-4">Workflow</h2>
           <h3 className="text-4xl font-bold font-heading">How to master your prompts.</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
           {/* Visual connecting line for desktop */}
           <div className="hidden lg:block absolute top-1/4 left-0 w-full h-px bg-slate-200 -z-10" />
           
           {steps.map((step, idx) => (
             <div key={idx} className="flex flex-col items-center text-center group">
               <div className="w-16 h-16 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-blue-600 shadow-sm mb-6 group-hover:border-blue-200 transition-colors">
                 <step.icon className="w-8 h-8" />
               </div>
               <h4 className="text-xl font-bold text-slate-800 mb-2 font-heading">{step.title}</h4>
               <p className="text-sm text-slate-500 leading-relaxed font-sans">{step.description}</p>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
