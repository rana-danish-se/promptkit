import { Layout, Sliders, Save, Zap, Search, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Layout,
    title: "Multi-Model Comparison",
    description: "Toggle between Llama 3.3, Mixtral, DeepSeek, and more to see how outputs differ instantly."
  },
  {
    icon: Sliders,
    title: "Dynamic Temperature",
    description: "Fine-tune reasoning with a live color-coded slider for precise creative control."
  },
  {
    icon: Save,
    title: "Prompt Library",
    description: "Store your best system prompts locally. Load and refine them without ever needing a database."
  },
  {
    icon: Zap,
    title: "Zero Latency Groq",
    description: "Experience lightning-fast inferences through the specialized LPU integration."
  },
  {
    icon: Search,
    title: "Response Metadata",
    description: "Track tokens used, latency, and model specific details for every single generation."
  },
  {
    icon: ShieldCheck,
    title: "Local & Private",
    description: "All your API keys and saved prompts stay in your browser. No middleman, no tracking."
  }
];

export default function Features() {
  return (
    <section id="features" className="pb-20 pt-10 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-[900px] mx-auto mb-10">
          <h2 className="text-sm font-black tracking-[0.3em] text-brand-cyan uppercase mb-4">The Arsenal</h2>
          <h3 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tight leading-tight">
            Built for prompt engineers, <br /><span className="text-brand-purple">perfected by code.</span>
          </h3>
          <p className="text-xl text-slate-400 font-sans max-w-2xl mx-auto">
            A minimalist tool that focuses on what matters: the absolute quality of your AI interactions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className="group p-8 bg-white/5 border border-white/10 rounded-[2.5rem] hover:border-brand-cyan/30 hover:bg-brand-cyan/5 transition-all duration-500"
            >
              <div className="w-14 h-14 bg-brand-cyan rounded-2xl flex items-center justify-center text-slate-900 mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-[0_0_20px_rgba(34,182,212,0.2)]">
                <feature.icon className="w-7 h-7" />
              </div>
              <h4 className="text-2xl font-black text-white mb-4 uppercase tracking-tight">{feature.title}</h4>
              <p className="text-slate-400 leading-relaxed font-sans text-lg">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
