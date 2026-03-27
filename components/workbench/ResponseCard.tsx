import { Clock, Cpu, Zap, Copy, Check } from "lucide-react";
import { ApiResponse } from "@/lib/api";
import { useState } from "react";

interface ResponseCardProps {
  response: ApiResponse | null;
  isLoading: boolean;
}

export default function ResponseCard({ response, isLoading }: ResponseCardProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    if (!response) return;
    navigator.clipboard.writeText(response.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (isLoading) {
    return (
      <div className="flex-1 p-8 flex flex-col items-center justify-center text-center space-y-4 animate-pulse">
        <div className="w-12 h-12 rounded-full border-4 border-blue-500 border-t-transparent animate-spin" />
        <p className="text-slate-400 font-medium">Engineering Response...</p>
      </div>
    );
  }

  if (!response) {
    return (
      <div className="flex-1 p-8 flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 rounded-3xl border-2 border-dashed border-slate-100 flex items-center justify-center mb-6 bg-slate-800">
          <Zap className="w-6 h-6 text-slate-200" />
        </div>
        <h4 className="text-slate-500 font-medium text-sm mb-2">Ready for Engineering</h4>
        <p className="max-w-[240px] text-slate-500 text-sm leading-relaxed">
          Configure your system prompt and user message, then click <b>Run Engineering</b> to see the results.
        </p>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col min-h-0 bg-background relative">
      
      <div className="p-5 border-b border-white/5 bg-white/5 grid grid-cols-2 gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-brand-cyan/10 rounded-xl border border-brand-cyan/20">
            <Cpu className="w-4 h-4 text-brand-cyan" />
          </div>
          <div>
            <div className="text-[9px] font-black text-slate-500 uppercase tracking-[0.2em]">Compute</div>
            <div className="text-[14px] font-medium text-white truncate uppercase tracking-tight">{response.model}</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="p-2 bg-brand-purple/10 rounded-xl border border-brand-purple/20">
            <Clock className="w-4 h-4 text-brand-purple" />
          </div>
          <div>
            <div className="text-[9px] font-black text-slate-500 uppercase tracking-[0.2em]">Latency</div>
            <div className="text-[14px] font-semibold text-white uppercase tracking-tight">{response.latency}s</div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-8 relative">
         <button 
           onClick={copyToClipboard}
           className="absolute top-6 right-6 p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all text-slate-400 hover:text-white z-10"
         >
           {copied ? <Check className="w-4 h-4 text-brand-cyan" /> : <Copy className="w-4 h-4" />}
         </button>
         
         <div className="font-mono text-sm text-slate-300 leading-relaxed whitespace-pre-wrap max-w-none">
           {response.content}
         </div>
      </div>

      
      {response.usage && (
        <div className="p-4 border-t border-white/5 bg-white/5 flex items-center justify-between px-8">
          <div className="flex items-center gap-5 text-[12px] font-black uppercase tracking-[0.2em] text-slate-500">
             <span>Tokens: <span className="text-white font-semibold">{response.usage.total_tokens}</span></span>
             <span className="opacity-20">|</span>
             <span>In: <span className="text-slate-400">{response.usage.prompt_tokens}</span></span>
             <span className="opacity-20">|</span>
             <span>Out: <span className="text-slate-400">{response.usage.completion_tokens}</span></span>
          </div>
      
        </div>
      )}
    </div>
  );
}
