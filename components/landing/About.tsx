export default function About() {
  return (
    <section className="py-20 bg-background border-y border-white/5 overflow-hidden relative" id="about">
     
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-brand-purple/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-sm font-semibold tracking-normal text-brand-cyan uppercase mb-2">The Philosophy</h2>
            <h3 className="text-4xl md:text-5xl font-medium text-white mb-4 leading-[1.1] uppercase">
              Bridging the gap between your brain and <span className="text-brand-purple">your codebase.</span>
            </h3>
            <p className="text-lg text-slate-400 mb-2 leading-relaxed font-sans">
              In the world of AI-driven development, the prompt is your primary interface. Great software isn&apos;t built on first-shotted queries; it&apos;s built on iteration.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed font-sans">
              PromptKit was built for the developer who knows that prompt engineering is a discipline. It&apos;s where all the technical thinking, edge-case testing, and refining happens before a single line of code gets written.
            </p>
          </div>
          
          <div className="relative">
            <div className="h-fit  bg-white/5 backdrop-blur-xl rounded-md border border-white/10 p-6 flex flex-col justify-center shadow-2xl">
              <div className="space-y-10">
                {[
                  { n: "1", t: "Conceptualize", d: "Draft your system instructions in a dedicated environment." },
                  { n: "2", t: "Iterate", d: "Compare models and temperatures with instant visual feedback." },
                  { n: "3", t: "Implement", d: "Port your high-performance prompts directly into your application." }
                ].map((step, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-brand-cyan flex items-center justify-center text-slate-900 font-semibold text-xl shadow-[0_0_20px_rgba(34,182,212,0.3)] shrink-0">
                      {step.n}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-xl mb-2 uppercase tracking-normal">{step.t}</h4>
                      <p className="text-slate-400 text-base leading-relaxed">{step.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
        
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-cyan/10 rounded-full blur-3xl opacity-50" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-brand-purple/10 rounded-full blur-3xl opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
}
