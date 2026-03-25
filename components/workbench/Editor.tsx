export default function Editor() {
  return (
    <div className="flex-1 flex flex-col min-w-0 bg-slate-50/50 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/30 blur-[100px] pointer-events-none animate-glow" />
      
      <div className="flex-1 p-4 md:p-8 space-y-8 overflow-y-auto relative">
        {/* System Prompt */}
        <div className="space-y-3 group">
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-[10px] font-bold uppercase tracking-widest rounded-md">System</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Context & Instructions</span>
          </div>
          <textarea 
            className="w-full min-h-[200px] p-5 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/5 focus:border-blue-500/40 transition-all font-mono text-sm leading-relaxed resize-none shadow-sm placeholder:text-slate-300"
            placeholder="You are a professional assistant..."
          />
        </div>

        {/* User Message */}
        <div className="space-y-3 group">
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2 py-0.5 bg-slate-200 text-slate-700 text-[10px] font-bold uppercase tracking-widest rounded-md">User</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Input Query</span>
          </div>
          <textarea 
            className="w-full min-h-[140px] p-5 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/5 focus:border-blue-500/40 transition-all font-sans text-sm leading-relaxed resize-none shadow-sm placeholder:text-slate-300"
            placeholder="Type your message here..."
          />
        </div>
      </div>
    </div>
  );
}
