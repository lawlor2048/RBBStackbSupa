import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function DataDrivenResults() {
  const results = [
    {
      metric: '25%',
      description: 'Average reduction in maintenance costs',
      source: 'Industry Analysis 2024'
    },
    {
      metric: '30%',
      description: 'Decrease in energy consumption',
      source: 'Customer Case Studies'
    },
    {
      metric: '40%',
      description: 'Reduction in operational waste',
      source: 'Implementation Data'
    },
    {
      metric: '8-12',
      description: 'Months average ROI timeframe',
      source: 'Customer Feedback'
    }
  ];

  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-light text-center mb-12">Data-Driven Results</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {results.map((result, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="text-4xl font-bold text-[#2f3676] mb-4">{result.metric}</div>
              <p className="text-gray-600 mb-4">{result.description}</p>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>{result.source}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}