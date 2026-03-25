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
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-4">Features</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-heading">
            Built for prompt engineers, by enthusiasts.
          </h3>
          <p className="text-lg text-slate-600">
            A minimalist tool that focuses on what matters: the quality of your AI interactions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className="group p-8 bg-white border border-slate-100 rounded-2xl hover:border-blue-100 hover:shadow-premium transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3 font-heading">{feature.title}</h4>
              <p className="text-slate-600 leading-relaxed font-sans">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
