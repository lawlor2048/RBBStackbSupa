import React, { useState } from 'react';
import { Loader2, AlertCircle } from 'lucide-react';
import { CoverageResponse } from '../types/api';
import ProductDisplay from './ProductDisplay';
import Cart from './Cart';

export default function CoverageForm() {
  const [type, setType] = useState<'residential' | 'business'>('residential');
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [coverageData, setCoverageData] = useState<CoverageResponse | null>(null);
  const [debugResponse, setDebugResponse] = useState<any>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    eircode: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError(null);
    setDebugResponse(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) return;

    setLoading(true);
    setError(null);
    setDebugResponse(null);

    try {
      const response = await fetch(`/.netlify/functions/coverage?eircode=${encodeURIComponent(formData.eircode.trim())}`);
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to check coverage');
      }

      if (result.debug) {
        setDebugResponse(result.debug);
      }

      if (result.data) {
        setCoverageData(result.data);
      }
    } catch (error) {
      console.error('Coverage check failed:', error);
      setError(error instanceof Error ? error.message : 'An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  if (coverageData) {
    return (
      <div className="w-full max-w-6xl mx-auto">
        <ProductDisplay 
          productGroups={coverageData.products} 
          address={coverageData.address} 
        />
        <Cart />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg max-w-xl w-full">
        <h2 className="text-2xl font-semibold text-center text-[#2f3676] mb-6">
          Check Coverage and
          <br />
          Available offers
        </h2>

        <div className="flex gap-4 mb-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              checked={type === 'residential'}
              onChange={() => setType('residential')}
              className="w-4 h-4 text-[#2f3676]"
            />
            <span className="text-gray-700">Residential</span>
          </label>
          
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              checked={type === 'business'}
              onChange={() => setType('business')}
              className="w-4 h-4 text-[#2f3676]"
            />
            <span className="text-gray-700">Business</span>
          </label>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder="First Name"
            required
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#2f3676]"
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder="Last Name"
            required
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#2f3676]"
          />
        </div>

        <div className="space-y-4 mb-4">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email Address"
            required
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#2f3676]"
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Phone Number"
            required
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#2f3676]"
          />
          <div className="relative">
            <input
              type="text"
              name="eircode"
              value={formData.eircode}
              onChange={handleInputChange}
              placeholder="Eircode"
              required
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#2f3676]"
            />
            <div className="text-sm text-gray-500 mt-1">
              Need finding your Eircode? <a href="https://finder.eircode.ie" target="_blank" rel="noopener noreferrer" className="text-[#2f3676] underline">Find Here</a>
            </div>
          </div>
        </div>

        {error && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 text-red-600 rounded-md flex items-start gap-2">
            <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold">Error</p>
              <p>{error}</p>
            </div>
          </div>
        )}

        <label className="flex items-start gap-2 mb-6 cursor-pointer">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="mt-1 w-4 h-4 text-[#2f3676]"
          />
          <span className="text-sm text-gray-600">
            By submitting this form you agree to our <a href="/privacy-policy" className="text-[#2f3676] underline">Privacy Policy</a>
          </span>
        </label>

        <button
          type="submit"
          disabled={!agreed || loading}
          className={`w-full py-3 rounded-md transition flex items-center justify-center ${
            agreed && !loading
              ? 'bg-[#2f3676] text-white hover:bg-[#1a1f4d]' 
              : 'bg-gray-400 text-white cursor-not-allowed'
          }`}
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin mr-2" />
              Checking Coverage...
            </>
          ) : (
            'CHECK COVERAGE'
          )}
        </button>
      </form>

      {debugResponse && (
        <div className="bg-white p-6 rounded-xl shadow-lg max-w-xl w-full">
          <h3 className="text-lg font-semibold mb-4 text-[#2f3676]">API Debug Information</h3>
          <div className="space-y-4">
            <div>
              <p className="font-medium text-gray-700">Request URL:</p>
              <pre className="mt-1 p-2 bg-gray-50 rounded text-sm overflow-x-auto">
                {debugResponse.requestUrl}
              </pre>
            </div>
            <div>
              <p className="font-medium text-gray-700">Timestamp:</p>
              <pre className="mt-1 p-2 bg-gray-50 rounded text-sm">
                {debugResponse.timestamp}
              </pre>
            </div>
            <div>
              <p className="font-medium text-gray-700">Status:</p>
              <pre className="mt-1 p-2 bg-gray-50 rounded text-sm">
                {debugResponse.status} ({debugResponse.statusText})
              </pre>
            </div>
            <div>
              <p className="font-medium text-gray-700">Response Headers:</p>
              <pre className="mt-1 p-2 bg-gray-50 rounded text-sm overflow-x-auto">
                {JSON.stringify(debugResponse.headers, null, 2)}
              </pre>
            </div>
            <div>
              <p className="font-medium text-gray-700">Response Body:</p>
              <pre className="mt-1 p-2 bg-gray-50 rounded text-sm overflow-x-auto whitespace-pre-wrap">
                {JSON.stringify(debugResponse.body, null, 2)}
              </pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}