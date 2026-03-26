export interface SavedPrompt {
  id: string;
  name: string;
  systemPrompt: string;
  userMessage: string;
  model: string;
  temperature: number;
  createdAt: number;
}

const STORAGE_KEY = "promptkit_saved_prompts";

export const storage = {
  getPrompts: (): SavedPrompt[] => {
    if (typeof window === "undefined") return [];
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  },

  savePrompt: (prompt: Omit<SavedPrompt, "id" | "createdAt">): SavedPrompt => {
    const prompts = storage.getPrompts();
    const newPrompt: SavedPrompt = {
      ...prompt,
      id: Math.random().toString(36).substring(2, 11),
      createdAt: Date.now(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify([newPrompt, ...prompts]));
    return newPrompt;
  },

  updatePrompt: (id: string, updates: Partial<SavedPrompt>) => {
    const prompts = storage.getPrompts();
    const updated = prompts.map(p => p.id === id ? { ...p, ...updates } : p);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  },

  deletePrompt: (id: string) => {
    const prompts = storage.getPrompts();
    const filtered = prompts.filter(p => p.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  }
};
