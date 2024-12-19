import { fetchWithAuth } from '../utils/api';
import type { CoverageResponse } from '../types/api';

export async function checkCoverage(eircode: string): Promise<CoverageResponse> {
  return fetchWithAuth<CoverageResponse>('qualify', { eircode });
}