import React from 'react';
import { LucideIcon } from 'lucide-react';

interface AdvantageCardProps {
  icon: LucideIcon;
  title: string;
  features: string[];
}

export default function AdvantageCard({ icon: Icon, title, features }: AdvantageCardProps) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm">
      <Icon className="w-12 h-12 text-[#2f3676] mb-6" />
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <div className="w-2 h-2 bg-[#2f3676] rounded-full mt-2" />
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}