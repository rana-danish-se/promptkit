import { Send, Save } from "lucide-react";

export default function Controls() {
  return (
    <div className="border-t border-slate-200 p-3 md:p-4 bg-white shrink-0 flex flex-wrap items-center justify-between gap-3 md:gap-6">
      <div className="flex items-center gap-3 md:gap-6 flex-wrap">
        {/* Model Selector */}
        <div className="flex items-center gap-2">
          <span className="hidden sm:inline text-[10px] font-bold uppercase tracking-widest text-slate-400">Model</span>
          <select className="bg-slate-50 border border-slate-200 rounded-lg px-2 py-1.5 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-slate-700">
            <option>Llama 3.3 70B</option>
            <option>DeepSeek R1</option>
            <option>Mixtral 8x7B</option>
            <option>Gemma 2 9B</option>
          </select>
        </div>

        {/* Temperature */}
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 whitespace-nowrap">Temp: 1.0</span>
          <input 
            type="range" 
            min="0" max="2" step="0.1" 
            className="w-20 md:w-24 h-1 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button className="flex items-center gap-1.5 px-3 py-1.5 text-slate-600 font-bold text-[10px] uppercase tracking-widest hover:bg-slate-100 rounded-lg transition-colors">
          <Save className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Save</span>
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-bold text-xs uppercase tracking-widest rounded-lg hover:bg-blue-700 transition-all active:scale-[0.98] shadow-md shadow-blue-500/10">
          <Send className="w-3.5 h-3.5" />
          Run
        </button>
      </div>
    </div>
  );
}
