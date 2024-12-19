import React from 'react';
import type { IndustryProps } from './types';

export default function IndustryCard({ icon: Icon, title, savings, benefits }: IndustryProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-8">
      <Icon className="w-12 h-12 text-[#2f3676] mb-6" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-green-600 font-semibold mb-4">{savings}</p>
      <ul className="space-y-2">
        {benefits.map((benefit, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <div className="w-2 h-2 bg-[#2f3676] rounded-full mt-2" />
            <span className="text-gray-600">{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}