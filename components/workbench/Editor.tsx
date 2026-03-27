interface EditorProps {
  systemPrompt: string;
  userMessage: string;
  onChangeSystem: (val: string) => void;
  onChangeUser: (val: string) => void;
}

export default function Editor({ systemPrompt, userMessage, onChangeSystem, onChangeUser }: EditorProps) {
  return (
    <div className="flex flex-col min-w-0 md:flex-1 bg-background relative overflow-hidden">
      
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/5 blur-[100px] pointer-events-none animate-glow" />
      
      <div className="p-4 md:flex-1 md:p-8 space-y-10 md:overflow-y-auto relative custom-scrollbar">
        
        <div className="space-y-4 group">
          <div className="flex items-center gap-3 mb-1">
            <span className="px-2.5 py-1 bg-brand-cyan/10 text-brand-cyan text-[10px] font-black uppercase tracking-[0.2em] rounded-md border border-brand-cyan/20">System</span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">Context & Instructions</span>
          </div>
          <textarea 
            value={systemPrompt}
            onChange={(e) => onChangeSystem(e.target.value)}
            className="w-full min-h-[220px] p-6 bg-white/5 border border-white/10 rounded-4xl text-white focus:outline-none focus:ring-4 focus:ring-brand-cyan/5 focus:border-brand-cyan/30 transition-all font-mono text-sm leading-relaxed resize-none shadow-2xl placeholder:text-slate-700"
            placeholder="You are a professional assistant..."
          />
        </div>

        
        <div className="space-y-4 group">
          <div className="flex items-center gap-3 mb-1">
            <span className="px-2.5 py-1 bg-white/5 text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] rounded-md border border-white/10">User</span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">Input Query</span>
          </div>
          <textarea 
            value={userMessage}
            onChange={(e) => onChangeUser(e.target.value)}
            className="w-full min-h-[160px] p-6 bg-white/5 border border-white/10 rounded-4xl text-white focus:outline-none focus:ring-4 focus:ring-brand-cyan/5 focus:border-brand-cyan/30 transition-all font-sans text-sm leading-relaxed resize-none shadow-2xl placeholder:text-slate-700"
            placeholder="Type your message here..."
          />
        </div>
      </div>
    </div>
  );
}
