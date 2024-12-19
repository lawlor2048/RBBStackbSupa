import React from 'react';
import type { BenefitProps } from './types';

export default function Benefit({ icon: Icon, title, description }: BenefitProps) {
  return (
    <div className="bg-white bg-opacity-10 p-6 rounded-lg">
      <Icon className="w-8 h-8 mb-4" />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-200">{description}</p>
    </div>
  );
}