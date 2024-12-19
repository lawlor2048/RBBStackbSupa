import { API_CONFIG } from '../config/constants';

interface ApiError extends Error {
  status?: number;
  data?: any;
}

export async function fetchWithAuth<T>(
  endpoint: string,
  params: Record<string, string>
): Promise<T> {
  const apiKey = import.meta.env.VITE_VIMAR_API_KEY;
  
  if (!apiKey) {
    throw new Error('API key is not configured');
  }

  const searchParams = new URLSearchParams({
    ...params,
    api_key: apiKey
  });

  const url = `${API_CONFIG.BASE_URL}/${endpoint}?${searchParams.toString()}`;

  try {
    const response = await fetch(url, {
      headers: {
        ...API_CONFIG.DEFAULT_HEADERS,
        'Authorization': `Bearer ${apiKey}`
      }
    });

    const data = await response.json();

    if (!response.ok) {
      const error = new Error(data.error || 'API request failed') as ApiError;
      error.status = response.status;
      error.data = data;
      throw error;
    }

    return data as T;
  } catch (error) {
    if (error instanceof Error) {
      console.error('API request failed:', {
        message: error.message,
        endpoint,
        params: { ...params, api_key: '[REDACTED]' }
      });
    }
    throw error;
  }
}