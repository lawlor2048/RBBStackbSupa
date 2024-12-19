import React from 'react';
import { useServiceTypeStore } from '../store/serviceTypeStore';
import { Building2, Home } from 'lucide-react';

export default function ServiceTypeSwitch() {
  const { type, setType } = useServiceTypeStore();

  return (
    <div className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex justify-end">
          <div className="relative inline-flex items-center p-1 bg-gray-100 rounded-full">
            {/* Background Slider */}
            <div
              className={`absolute h-8 w-[50%] bg-[#2f3676] rounded-full transition-transform duration-200 ease-in-out ${
                type === 'business' ? 'translate-x-full' : 'translate-x-0'
              }`}
            />

            {/* Residential Button */}
            <button
              onClick={() => setType('residential')}
              className={`relative z-10 flex items-center gap-2 px-4 py-1.5 rounded-full transition-colors duration-200 ${
                type === 'residential' ? 'text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Home className="w-4 h-4" />
              <span className="text-sm font-medium">Residential</span>
            </button>

            {/* Business Button */}
            <button
              onClick={() => setType('business')}
              className={`relative z-10 flex items-center gap-2 px-4 py-1.5 rounded-full transition-colors duration-200 ${
                type === 'business' ? 'text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span className="text-sm font-medium">Business</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}