export type ServiceItem = string

export type PortfolioItem = {
  title: string
  category: string
  summary: string
  placeholder: string
}

const API_BASE_URL = `${(import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000').replace(/\/$/, '')}/api/v1`

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(options?.headers || {}),
    },
    ...options,
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(errorText || 'Request failed')
  }

  return response.json() as Promise<T>
}

export const api = {
  getHealth: () => request<{ status: string }>('/health'),
  getServices: () => request<{ items: ServiceItem[] }>('/services'),
  getPortfolio: () => request<{ items: PortfolioItem[] }>('/portfolio'),
  getTestimonials: () => request<{ items: unknown[] }>('/testimonials'),
  submitInquiry: (payload: Record<string, unknown>) =>
    request<{ id: number; status: string; client_name: string }>('/inquiries', {
      method: 'POST',
      body: JSON.stringify(payload),
    }),
}
