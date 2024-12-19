import fetch from 'node-fetch';
import { config } from '../config/environment.js';

export async function checkCoverage(eircode) {
  const url = `${config.vimarApiUrl}/qualify?api_key=${config.vimarApiKey}&eircode=${encodeURIComponent(eircode)}`;

  try {
    const response = await fetch(url, {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${config.vimarApiKey}`,
        'X-API-Key': config.vimarApiKey
      }
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Coverage check failed');
    }

    return {
      data,
      debug: {
        timestamp: new Date().toISOString(),
        request: {
          url: url.replace(config.vimarApiKey, '[REDACTED]'),
          method: 'GET'
        },
        response: {
          status: response.status,
          headers: Object.fromEntries(response.headers.entries())
        }
      }
    };
  } catch (error) {
    console.error('Coverage API error:', error);
    throw error;
  }
}