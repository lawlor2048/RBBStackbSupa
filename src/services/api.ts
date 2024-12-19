import { config } from '../config/environment';

export async function makeApiRequest(endpoint: string, params: Record<string, string>) {
  const searchParams = new URLSearchParams({
    ...params,
    api_key: config.apiKey || ''
  });

  const url = `${config.apiUrl}/${endpoint}?${searchParams.toString()}`;

  const response = await fetch(url, {
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${config.apiKey}`,
      'User-Agent': 'Regional Broadband Web'
    }
  });

  if (!response.ok) {
    throw new Error(`API request failed: ${response.statusText}`);
  }

  return response.json();
}