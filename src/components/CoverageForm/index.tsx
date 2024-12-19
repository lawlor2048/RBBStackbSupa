import React, { useState } from 'react';
import { Loader2, AlertCircle } from 'lucide-react';
import { useServiceTypeStore } from '../../store/serviceTypeStore';
import { useHubSpot } from '../../hooks/useHubSpot';
import { checkCoverage } from './api';
import type { FormData } from './types';

// ... rest of the imports

export default function CoverageForm() {
  const { type } = useServiceTypeStore();
  const { createContact, loading: hubspotLoading, error: hubspotError } = useHubSpot();
  
  // ... existing state declarations

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) return;

    setLoading(true);
    setError(null);
    setDebugResponse(null);

    try {
      // Create HubSpot contact
      await createContact({
        ...formData,
        type
      });

      // Check coverage
      const result = await checkCoverage(formData.eircode);
      
      if (result.debug) {
        setDebugResponse(result.debug);
      }

      if (result.data) {
        setCoverageData(result.data);
      }
    } catch (error: any) {
      console.error('Form submission error:', error);
      
      setError(
        error instanceof Error 
          ? `Submission failed: ${error.message}`
          : 'An unexpected error occurred'
      );
    } finally {
      setLoading(false);
    }
  };

  // ... rest of the component code
}