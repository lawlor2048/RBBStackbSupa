import { useState } from 'react';
import { checkCoverage } from '../services/coverage/api';
import type { CoverageResponse } from '../services/coverage/types';
import type { ApiError } from '../services/api/types';

export function useCoverage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [debugInfo, setDebugInfo] = useState<any>(null);
  const [data, setData] = useState<CoverageResponse | null>(null);

  const checkAddress = async (eircode: string) => {
    setLoading(true);
    setError(null);
    setDebugInfo(null);

    try {
      const result = await checkCoverage(eircode);
      
      if (result.debug) {
        setDebugInfo(result.debug);
      }

      setData(result.data);
      return result.data;
    } catch (err) {
      const apiError = err as ApiError;
      console.error('Coverage check failed:', apiError);
      
      if (apiError.debug) {
        setDebugInfo(apiError.debug);
      }

      setError(apiError.message || 'Failed to check coverage');
      throw apiError;
    } finally {
      setLoading(false);
    }
  };

  return {
    checkAddress,
    loading,
    error,
    debugInfo,
    data
  };
}