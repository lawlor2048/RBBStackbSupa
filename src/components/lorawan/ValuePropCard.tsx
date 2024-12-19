import React from 'react';
import type { ValuePropProps } from './types';

export default function ValuePropCard({ icon: Icon, title, description }: ValuePropProps) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm">
      <Icon className="w-12 h-12 text-[#2f3676] mb-6" />
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}