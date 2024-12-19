import React from 'react';
import { Calculator, ArrowRight } from 'lucide-react';

export default function ROICalculator() {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#2f3676] rounded-xl text-white p-12">
          <div className="flex items-center gap-6 mb-8">
            <Calculator className="w-12 h-12" />
            <h2 className="text-3xl font-light">Calculate Your Savings</h2>
          </div>
          <p className="text-xl mb-8">
            Discover how much you could save with our IoT solutions. Our ROI calculator helps you estimate potential cost reductions across your operations.
          </p>
          <button className="flex items-center gap-2 bg-white text-[#2f3676] px-6 py-3 rounded-md hover:bg-gray-100 transition">
            Calculate ROI Now
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}