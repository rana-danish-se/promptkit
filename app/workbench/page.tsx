import Sidebar from "@/components/workbench/Sidebar";
import Editor from "@/components/workbench/Editor";
import Controls from "@/components/workbench/Controls";

export default function WorkbenchPage() {
  return (
    <main className="flex h-screen bg-slate-50 font-sans overflow-hidden">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Workspace */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-14 bg-white border-b border-slate-100 flex items-center px-6 justify-between shrink-0 relative z-10">
          <h1 className="font-heading font-black text-slate-900 tracking-tight text-lg uppercase">PromptKit <span className="text-blue-600">Workbench</span></h1>
          <div className="flex items-center gap-3">
             <div className="flex items-center gap-2 px-3 py-1 bg-green-50 rounded-full border border-green-100/50">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-[9px] font-black text-green-600 uppercase tracking-widest">Local-Only Mode</span>
             </div>
          </div>
        </header>

        <div className="flex-1 flex flex-col md:flex-row min-h-0">
          {/* Editor & Response Split View */}
          <div className="flex-1 flex flex-col min-w-0 border-r border-slate-100">
            <Editor />
            <Controls />
          </div>

          {/* Response Panel (Right Sidebar) */}
          <aside className="w-full md:w-[450px] bg-white flex flex-col shrink-0 relative overflow-hidden">
             {/* Background decoration */}
             <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-50/50 blur-[100px] pointer-events-none" />
             
             <div className="p-4 border-b border-slate-100 bg-white/80 backdrop-blur-md relative z-10 flex items-center justify-between">
                <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Engineering Output</h3>
                <div className="text-[10px] font-bold text-slate-400">0.0s</div>
             </div>
             
             <div className="flex-1 p-8 flex flex-col items-center justify-center text-center relative z-10">
                <div className="w-16 h-16 rounded-3xl border-2 border-dashed border-slate-100 flex items-center justify-center mb-6 bg-slate-50/50">
                   <div className="w-6 h-6 rounded-full bg-slate-200 animate-pulse" />
                </div>
                <h4 className="text-slate-900 font-bold text-sm mb-2">Ready for Engineering</h4>
                <p className="max-w-[240px] text-slate-400 text-xs leading-relaxed">
                   Configure your system prompt and user message, then click <b>Run Engineering</b> to see the results.
                </p>
             </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
