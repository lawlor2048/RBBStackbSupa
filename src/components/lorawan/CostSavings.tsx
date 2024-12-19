import React from 'react';
import { DollarSign, TrendingDown, LineChart } from 'lucide-react';
import ValuePropCard from './ValuePropCard';

export default function CostSavings() {
  const savings = [
    {
      icon: DollarSign,
      title: 'Immediate Cost Reduction',
      description: 'Cut operational expenses by 15-30% through automated monitoring and predictive maintenance.'
    },
    {
      icon: TrendingDown,
      title: 'Waste Elimination',
      description: 'Reduce resource waste by 20-40% with real-time usage monitoring and optimization.'
    },
    {
      icon: LineChart,
      title: 'Efficiency Gains',
      description: 'Improve operational efficiency by 25-35% through data-driven decision making.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-light text-center mb-6">Proven Cost Savings</h2>
      <p className="text-xl text-gray-600 text-center mb-12">
        Transform your operations with measurable results and rapid ROI
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {savings.map((saving, index) => (
          <ValuePropCard key={index} {...saving} />
        ))}
      </div>
    </div>
  );
}