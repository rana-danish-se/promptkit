import { Send, Save, Loader2 } from "lucide-react";

export const MODELS = [
  { id: "llama-3.3-70b-versatile", name: "Llama 3.3 70B", provider: "groq" as const },
  { id: "llama-3.1-8b-instant", name: "Llama 3.1 8B", provider: "groq" as const },
  { id: "openai/gpt-oss-120b", name: "GPT-OSS 120B", provider: "groq" as const },
  { id: "qwen/qwen3-32b", name: "Qwen 3 32B", provider: "groq" as const },
  { id: "deepseek/deepseek-r1", name: "DeepSeek R1", provider: "openrouter" as const },
];

interface ControlsProps {
  model: string;
  temperature: number;
  isEngineering: boolean;
  onModelChange: (val: string) => void;
  onTempChange: (val: number) => void;
  onRun: () => void;
  onSave: () => void;
}

export default function Controls({ 
  model, 
  temperature, 
  isEngineering, 
  onModelChange, 
  onTempChange, 
  onRun, 
  onSave 
}: ControlsProps) {
  return (
    <div className="border-t border-white/5 p-3 md:p-5 bg-white/5 backdrop-blur-3xl shrink-0 flex flex-wrap items-center justify-between gap-4 relative z-20">
      <div className="flex  items-center gap-4 md:gap-10 flex-wrap">
        {/* Model Selector */}
        <div className="flex items-center gap-2">
          <span className="hidden sm:inline text-[10px] font-medium uppercase tracking-[0.2em] text-slate-300">Model</span>
          <select 
            value={model}
            onChange={(e) => onModelChange(e.target.value)}
            className="bg-white/5 border border-white/10 rounded-xl p-2 text-xs font-medium uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-brand-cyan/20 text-white cursor-pointer hover:bg-white/10 transition-all"
          >
            {MODELS.map(m => (
              <option key={m.id} value={m.id} className="bg-slate-900 border-none">{m.name}</option>
            ))}
          </select>
        </div>

        {/* Temperature */}
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-300 whitespace-nowrap">Temp: {temperature.toFixed(1)}</span>
          <input 
            type="range" 
            min="0" max="2" step="0.1" 
            value={temperature}
            onChange={(e) => onTempChange(parseFloat(e.target.value))}
            className="w-24  h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-cyan"
          />
        </div>
      </div>

      <div className="flex  items-center gap-2">
        <button 
          onClick={onSave}
          className="flex items-center  px-3 gap-2 py-2 text-slate-400 font-medium bg-black cursor-pointer text-[10px] uppercase tracking-widest hover:text-white hover:bg-white/5 rounded-xl transition-all active:scale-[0.95]"
        >
          <Save className="w-4 h-4" />
          <span className="hidden sm:inline">Save</span>
        </button>
        <button 
          onClick={onRun}
          disabled={isEngineering}
          className="flex items-center gap-3 px-4 py-2 bg-brand-cyan text-slate-900 font-medium text-xs uppercase tracking-[0.2em] rounded-xl hover:bg-white hover:scale-105 transition-all active:scale-[0.98] shadow-2xl shadow-brand-cyan/20 disabled:opacity-50 disabled:cursor-not-allowed group"
        >
          {isEngineering ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          )}
          {isEngineering ? "Engineering..." : "Run Output"}
        </button>
      </div>
    </div>
  );
}

