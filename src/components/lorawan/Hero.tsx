import React from 'react';
import { BanknoteIcon, TrendingDown, LineChart } from 'lucide-react';
import Benefit from './Benefit';

export default function Hero() {
  const benefits = [
    {
      icon: BanknoteIcon,
      title: 'Cut Operational Costs',
      description: 'Reduce expenses by 15-30% through data-driven decision making'
    },
    {
      icon: TrendingDown,
      title: 'Eliminate Waste',
      description: 'Optimize resource usage with real-time monitoring and analytics'
    },
    {
      icon: LineChart,
      title: 'Drive Efficiency',
      description: 'Improve operational efficiency based on accurate, real-time data'
    }
  ];

  return (
    <div className="relative bg-[#2f3676] text-white">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h1 className="text-5xl font-light mb-6">
          Make Better Decisions with IoT Solutions
        </h1>
        <blockquote className="text-xl italic mb-12 border-l-4 pl-6 border-green-400">
          "IoT is technology-assisted decision-making based on accurate data to drive efficiency, 
          reduce costs, and improve the environment."
          <footer className="mt-2 text-gray-300">
            - Neil Lawlor, CEO
          </footer>
        </blockquote>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Benefit key={index} {...benefit} />
          ))}
        </div>
      </div>
    </div>
  );
}