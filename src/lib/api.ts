const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";

export interface SolveResult {
  equation: string;
  steps: string[];
  solution: string;
}

export interface ApiResponse {
  success: boolean;
  data: SolveResult | null;
  error: string | null;
}

export async function solveEquation(file: File): Promise<SolveResult> {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch(`${API_BASE}/api/solve`, {
    method: "POST",
    body: formData,
  });

  const json: ApiResponse = await res.json();

  if (!json.success || !json.data) {
    throw new Error(json.error || "Failed to solve equation");
  }

  return json.data;
}
