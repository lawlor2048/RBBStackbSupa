import { useState } from 'react';
import type { ContactFormData } from '../services/hubspot';

export function useHubSpot() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createContact = async (data: ContactFormData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/.netlify/functions/create-hubspot-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to create contact');
      }

      return await response.json();
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to create contact';
      setError(message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    createContact,
    loading,
    error
  };
}