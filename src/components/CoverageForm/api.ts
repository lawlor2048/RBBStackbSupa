import { CoverageResponse } from '../../types/api';

export async function checkCoverage(eircode: string): Promise<{ data: CoverageResponse; debug?: any }> {
  try {
    const response = await fetch(
      `/.netlify/functions/coverage?eircode=${encodeURIComponent(eircode.trim())}`,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json'
        }
      }
    );

    const result = await response.json();

    if (!response.ok || result.error) {
      const error = new Error(result.error || 'Failed to check coverage');
      (error as any).debug = result.debug;
      throw error;
    }

    if (!result.data) {
      throw new Error('Invalid response format');
    }

    return result;
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
}