"use client";

import { useState, useEffect } from "react";
import Sidebar from "@/components/workbench/Sidebar";
import Editor from "@/components/workbench/Editor";
import Controls, { MODELS } from "@/components/workbench/Controls";
import ResponseCard from "@/components/workbench/ResponseCard";
import { fetchAIResponse, ApiResponse } from "@/lib/api";
import { storage, SavedPrompt } from "@/lib/storage";
import Image from "next/image";
import { Menu } from "lucide-react";

export default function WorkbenchPage() {
  // Workspace State
  const [systemPrompt, setSystemPrompt] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [model, setModel] = useState(MODELS[0].id);
  const [temperature, setTemperature] = useState(1.0);

  // App State
  const [isEngineering, setIsEngineering] = useState(false);
  const [response, setResponse] = useState<ApiResponse | null>(null);
  const [savedPrompts, setSavedPrompts] = useState<SavedPrompt[]>([]);
  const [currentPromptId, setCurrentPromptId] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Load prompts on mount
  useEffect(() => {
    setSavedPrompts(storage.getPrompts());
  }, []);

 const handleRun = async () => {
    if (!userMessage.trim()) return;
    
    setIsEngineering(true);
    setResponse(null);
    
    try {
      const selectedModel = MODELS.find(m => m.id === model);
      if (!selectedModel) throw new Error("Invalid model selected");

      const result = await fetchAIResponse(
        selectedModel.provider,
        selectedModel.id,
        systemPrompt,
        userMessage,
        temperature
      );
      setResponse(result);
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Failed to fetch response";
      alert(message);
    } finally {
      setIsEngineering(false);
    }
  };

  const handleSave = () => {
    const name = prompt("Enter a name for this prompt:", currentPromptId ? savedPrompts.find(p => p.id === currentPromptId)?.name : "Untitled Prompt");
    if (!name) return;

    if (currentPromptId) {
      storage.updatePrompt(currentPromptId, { name, systemPrompt, userMessage, model, temperature });
    } else {
      const newPrompt = storage.savePrompt({ name, systemPrompt, userMessage, model, temperature });
      setCurrentPromptId(newPrompt.id);
    }
    setSavedPrompts(storage.getPrompts());
  };

  const handleSelectPrompt = (id: string) => {
    const p = savedPrompts.find(p => p.id === id);
    if (p) {
      setSystemPrompt(p.systemPrompt);
      setUserMessage(p.userMessage);
      setModel(p.model);
      setTemperature(p.temperature);
      setCurrentPromptId(id);
      setResponse(null);
    }
  };

  const handleDeletePrompt = (id: string) => {
    if (confirm("Are you sure you want to delete this prompt?")) {
      storage.deletePrompt(id);
      setSavedPrompts(storage.getPrompts());
      if (currentPromptId === id) {
        handleNewPrompt();
      }
    }
  };

  const handleNewPrompt = () => {
    setSystemPrompt("");
    setUserMessage("");
    setModel(MODELS[0].id);
    setTemperature(1.0);
    setCurrentPromptId(null);
    setResponse(null);
  };

  return (
    <main className="flex h-screen bg-background font-sans overflow-hidden selection:bg-brand-cyan/20 selection:text-brand-cyan">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Left Sidebar */}
      <Sidebar 
        prompts={savedPrompts} 
        currentId={currentPromptId}
        onSelect={handleSelectPrompt}
        onDelete={handleDeletePrompt}
        onNew={handleNewPrompt}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main Workspace */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-14 bg-white/5 backdrop-blur-md border-b border-white/5 flex items-center px-4 md:px-6 justify-between shrink-0 relative z-10 shadow-2xl">
          <div className="flex items-center gap-3">
            {/* Mobile hamburger */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all"
              aria-label="Open sidebar"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="relative w-28 md:w-32 h-9 md:h-10">
              <Image src="/logo.png" alt="Logo" fill className="object-contain" />
            </div>
            <h1 className="text-lg md:text-2xl font-bold text-white tracking-normal uppercase"><span className="text-brand-cyan">Workbench</span></h1>
          </div>

        </header>

        <div className="flex-1 flex flex-col md:flex-row overflow-y-auto md:overflow-hidden min-h-0">
          {/* Editor & Response Split View */}
          <div className="flex-none md:flex-1 flex flex-col min-w-0 border-r border-white/5">
            <Editor 
              systemPrompt={systemPrompt}
              userMessage={userMessage}
              onChangeSystem={setSystemPrompt}
              onChangeUser={setUserMessage}
            />
            <Controls 
              model={model}
              temperature={temperature}
              isEngineering={isEngineering}
              onModelChange={setModel}
              onTempChange={setTemperature}
              onRun={handleRun}
              onSave={handleSave}
            />
          </div>

          {/* Response Panel (Right Sidebar) */}
          <aside className="w-full md:w-[450px] bg-white/2 flex flex-col shrink-0 relative overflow-hidden backdrop-blur-md">
             {/* Background decoration */}
             <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-purple/5 blur-[100px] pointer-events-none" />
             
             <div className="p-4 border-b border-white/5 bg-white/5 backdrop-blur-md relative z-10 flex items-center justify-between">
                <h3 className="text-[12px] font-bold uppercase tracking-widest text-slate-500">Engineering Output</h3>
                <div className="text-[12px] font-medium text-slate-400">
                  {response ? `${response.latency}s` : "0.0s"}
                </div>
             </div>
             
             <ResponseCard response={response} isLoading={isEngineering} />
          </aside>
        </div>
      </div>
    </main>
  );
}

