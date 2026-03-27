export interface ApiResponse {
  content: string;
  usage?: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
  model: string;
  latency: number;
}

export async function fetchAIResponse(
  provider: 'groq' | 'openrouter',
  model: string,
  systemPrompt: string,
  userMessage: string,
  temperature: number = 1.0
): Promise<ApiResponse> {
  const startTime = performance.now();
  const apiKey = provider === 'groq' 
    ? process.env.NEXT_PUBLIC_GROQ_API_KEY 
    : process.env.NEXT_PUBLIC_OPENROUTER_API_KEY;

  if (!apiKey) {
    throw new Error(`API key for ${provider} is missing. Please check your .env file.`);
  }

  const url = provider === 'groq' 
    ? "https://api.groq.com/openai/v1/chat/completions" 
    : "https://openrouter.ai/api/v1/chat/completions";

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${apiKey}`,
  };

  if (provider === 'openrouter') {
    headers["HTTP-Referer"] = "https://promptkit.local"; 
    headers["X-Title"] = "PromptKit Workbench";
  }

  const body = JSON.stringify({
    model: model,
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: userMessage },
    ],
    temperature: temperature,
  });

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: body,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error?.message || `Request failed with status ${response.status}`);
    }

    const data = await response.json();
    const endTime = performance.now();
    const latency = (endTime - startTime) / 1000;

    return {
      content: data.choices[0]?.message?.content || "",
      usage: data.usage,
      model: model,
      latency: parseFloat(latency.toFixed(2)),
    };
  } catch (error) {
    console.error(`Error fetching from ${provider}:`, error);
    throw error;
  }
}
