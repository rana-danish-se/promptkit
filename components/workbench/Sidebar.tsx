import { Search, Plus, Trash2, Settings, History } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 border-r border-slate-200 bg-white flex flex-col h-screen shrink-0 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-blue-50/50 to-transparent pointer-events-none" />
      
      <div className="p-4 border-b border-slate-100 relative">
        <button className="w-full flex items-center justify-center gap-2 py-2.5 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:shadow-lg hover:shadow-blue-500/25 transition-all active:scale-[0.98]">
          <Plus className="w-4 h-4" />
          New Prompt
        </button>
      </div>
      
      <div className="p-4 flex-1 overflow-y-auto relative">
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search prompts..." 
            className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-100 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500/20 transition-all placeholder:text-slate-400"
          />
        </div>
        
        <div className="space-y-1">
          <h3 className="px-3 text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3 ml-1">Prompt Library</h3>
          
          <div className="space-y-1">
            <button className="w-full text-left px-3 py-2.5 rounded-xl bg-blue-50/80 text-blue-700 font-bold text-xs flex items-center justify-between group border border-blue-100/50">
              <span className="truncate">Product Marketing Copy</span>
              <Trash2 className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-blue-400 hover:text-red-500 transition-all" />
            </button>
            <button className="w-full text-left px-3 py-2.5 rounded-xl text-slate-600 hover:bg-slate-50 transition-all font-semibold text-xs truncate">
              Code Explainer Bot
            </button>
            <button className="w-full text-left px-3 py-2.5 rounded-xl text-slate-600 hover:bg-slate-50 transition-all font-semibold text-xs truncate">
              Unit Test Generator
            </button>
          </div>
        </div>
      </div>

      <div className="p-4 border-t border-slate-100 flex items-center justify-between text-slate-400 bg-slate-50/30">
        <button className="p-2 hover:bg-white hover:text-blue-600 hover:shadow-sm rounded-lg transition-all">
          <Settings className="w-4 h-4" />
        </button>
        <button className="p-2 hover:bg-white hover:text-blue-600 hover:shadow-sm rounded-lg transition-all">
          <History className="w-4 h-4" />
        </button>
      </div>
    </aside>
  );
}
