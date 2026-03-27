import { Search, Plus, Trash2, Settings, History, ChevronLeft, X } from "lucide-react";
import Link from "next/link";
import { SavedPrompt } from "@/lib/storage";

interface SidebarProps {
  prompts: SavedPrompt[];
  currentId: string | null;
  onSelect: (id: string) => void;
  onDelete: (id: string) => void;
  onNew: () => void;
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ prompts, currentId, onSelect, onDelete, onNew, isOpen, onClose }: SidebarProps) {
  return (
    <aside className={`
      fixed md:static inset-y-0 left-0 z-40
      w-64 border-r border-white/5 bg-background flex flex-col h-screen shrink-0 overflow-hidden
      transform transition-transform duration-300 ease-in-out
      ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
    `}>
      
      <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-brand-purple/10 to-transparent pointer-events-none" />
      
      <div className="p-4 border-b border-white/5 relative space-y-6">
        
        <button
          onClick={onClose}
          className="md:hidden absolute top-3 right-3 p-1.5 rounded-lg text-slate-500 hover:text-white hover:bg-white/5 transition-all"
          aria-label="Close sidebar"
        >
          <X className="w-4 h-4" />
        </button>

        <Link 
          href="/"
          className="flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.2em] text-slate-500 hover:text-brand-cyan transition-colors group mb-4"
        >
          <ChevronLeft className="w-3 h-3 group-hover:-translate-x-0.5 transition-transform" />
          Back to Home
        </Link>
        <button 
          onClick={() => { onNew(); onClose(); }}
          className="w-full flex items-center justify-center gap-2 py-2.5 bg-brand-cyan text-slate-900 rounded-xl font-medium text-sm cursor-pointer uppercase tracking-widest hover:bg-white hover:scale-[1.02] shadow-[0_10px_30px_rgba(34,182,212,0.2)] transition-all active:scale-[0.98]"
        >
          <Plus className="w-4 h-4" />
          New Prompt
        </button>
      </div>
      
      <div className="p-4 flex-1 overflow-y-auto relative custom-scrollbar">
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500" />
          <input 
            type="text" 
            placeholder="Search prompts..." 
            className="w-full pl-9 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-xs font-medium text-white focus:outline-none focus:ring-2 focus:ring-brand-cyan/20 focus:border-brand-cyan/30 transition-all placeholder:text-slate-600"
          />
        </div>
        
        <div className="space-y-1">
          <h3 className="px-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 mb-4 ml-1">Prompt Library</h3>
          
          <div className="space-y-1.5">
            {prompts.map((prompt) => (
              <button 
                key={prompt.id}
                onClick={() => { onSelect(prompt.id); onClose(); }}
                className={`w-full text-left px-3 py-3 rounded-xl transition-all font-medium text-sm cursor-pointer flex items-center justify-between group border ${
                  currentId === prompt.id 
                    ? "bg-brand-cyan/10 text-brand-cyan border-brand-cyan/20 shadow-[0_0_20px_rgba(34,182,212,0.05)]" 
                    : "text-slate-300 hover:bg-white/5 border-transparent"
                }`}
              >
                <span className="truncate">{prompt.name}</span>
                <Trash2 
                  className={`w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all ${
                    currentId === prompt.id ? "text-brand-cyan/50" : "text-slate-600"
                  } hover:text-red-500`}
                  onClick={(e) => {
                    e.stopPropagation();
                    onDelete(prompt.id);
                  }}
                />
              </button>
            ))}

            {prompts.length === 0 && (
              <div className="text-center py-12 text-slate-700">
                <p className="text-[10px] font-black uppercase tracking-widest">No stored prompts</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="p-4 border-t border-white/5 flex items-center justify-between text-slate-500 bg-white/2">
        <button className="p-2 hover:bg-white/5 hover:text-brand-cyan rounded-lg transition-all">
          <Settings className="w-4 h-4" />
        </button>
        <button className="p-2 hover:bg-white/5 hover:text-brand-cyan rounded-lg transition-all">
          <History className="w-4 h-4" />
        </button>
      </div>
    </aside>
  );
}
