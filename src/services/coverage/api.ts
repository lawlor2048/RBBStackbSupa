import { apiClient } from '../api/client';
import type { CoverageResponse } from './types';
import type { ApiResponse } from '../api/types';

export async function checkCoverage(eircode: string): Promise<ApiResponse<CoverageResponse>> {
  return apiClient<ApiResponse<CoverageResponse>>('qualify', { eircode });
}