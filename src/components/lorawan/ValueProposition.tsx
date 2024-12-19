import React from 'react';
import { BanknoteIcon, TrendingDown, LineChart, BarChart3 } from 'lucide-react';

export default function ValueProposition() {
  const benefits = [
    {
      icon: BanknoteIcon,
      title: 'Reduce Operational Costs',
      description: 'Cut operational expenses by up to 30% through automated monitoring, predictive maintenance, and resource optimization.'
    },
    {
      icon: TrendingDown,
      title: 'Minimize Waste',
      description: 'Eliminate inefficiencies and reduce waste across operations with real-time monitoring and data-driven decision making.'
    },
    {
      icon: LineChart,
      title: 'Prevent Losses',
      description: 'Protect assets and prevent revenue loss through early detection of issues and predictive analytics.'
    },
    {
      icon: BarChart3,
      title: 'Maximize ROI',
      description: 'Achieve rapid return on investment through immediate cost savings and operational improvements.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-light text-center mb-12">Drive Bottom-Line Impact</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
            <benefit.icon className="w-12 h-12 text-[#2f3676] mb-6" />
            <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
            <p className="text-gray-600">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}