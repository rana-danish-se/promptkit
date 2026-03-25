export default function About() {
  return (
    <section className="py-24 bg-slate-50/50 border-y border-slate-100">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-4">The Philosophy</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              Bridging the gap between your brain and your codebase.
            </h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              In the world of AI-driven development, the prompt is your primary interface. Great software isn't built on first-shotted queries; it's built on iteration.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              PromptKit was built for the developer who knows that prompt engineering is a discipline. It’s where all the technical thinking, edge-case testing, and refining happens before a single line of code gets written.
            </p>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-white rounded-3xl shadow-premium border border-slate-200 p-8 flex flex-col justify-center">
              <div className="space-y-6">
                <div className="flex gap-4 items-start pb-6 border-b border-slate-50">
                  <div className="w-10 h-10 rounded-full bg-blue-100 shrink-0 flex items-center justify-center text-blue-600 font-bold">1</div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Conceptualize</h4>
                    <p className="text-slate-500 text-sm">Draft your system instructions in a dedicated environment.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start pb-6 border-b border-slate-50">
                  <div className="w-10 h-10 rounded-full bg-blue-100 shrink-0 flex items-center justify-center text-blue-600 font-bold">2</div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Iterate</h4>
                    <p className="text-slate-500 text-sm">Compare models and temperatures with instant visual feedback.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-blue-100 shrink-0 flex items-center justify-center text-blue-600 font-bold">3</div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Implement</h4>
                    <p className="text-slate-500 text-sm">Port your high-performance prompts directly into your application.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Design accents */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-600/5 rounded-full blur-xl" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-indigo-600/5 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
