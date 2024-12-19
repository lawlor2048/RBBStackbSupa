import { API_CONFIG } from '../../config/api';
import type { ApiError } from './types';

export async function apiClient<T>(
  endpoint: string,
  params: Record<string, string> = {}
): Promise<T> {
  const searchParams = new URLSearchParams({
    ...params,
    api_key: API_CONFIG.VIMAR_API_KEY || ''
  });

  const url = `${API_CONFIG.VIMAR_BASE_URL}/${endpoint}?${searchParams}`;

  try {
    const response = await fetch(url, {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${API_CONFIG.VIMAR_API_KEY}`,
        'X-API-Key': API_CONFIG.VIMAR_API_KEY
      }
    });

    const data = await response.json();

    if (!response.ok) {
      const error = new Error(data.error || 'API request failed') as ApiError;
      error.status = response.status;
      error.debug = {
        timestamp: new Date().toISOString(),
        request: { url, params },
        response: {
          status: response.status,
          headers: Object.fromEntries(response.headers.entries()),
          data
        }
      };
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