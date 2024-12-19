import React from 'react';
import { Building2, Factory, Leaf, Lightbulb, Truck, Zap } from 'lucide-react';

export default function IndustrySavings() {
  const industries = [
    {
      icon: Building2,
      title: 'Smart Buildings',
      savings: 'Reduce energy costs by 20-30%',
      benefits: [
        'Lower utility bills through smart HVAC and lighting control',
        'Reduce maintenance costs with predictive servicing',
        'Optimize space utilization and occupancy management',
        'Cut security and monitoring expenses'
      ]
    },
    {
      icon: Factory,
      title: 'Manufacturing',
      savings: 'Cut operational costs by 15-25%',
      benefits: [
        'Minimize equipment downtime and maintenance costs',
        'Reduce energy consumption in production processes',
        'Optimize inventory and reduce storage costs',
        'Prevent quality-related losses'
      ]
    },
    {
      icon: Truck,
      title: 'Logistics',
      savings: 'Lower fleet costs by 10-20%',
      benefits: [
        'Reduce fuel consumption and vehicle maintenance',
        'Minimize cargo losses and damage',
        'Optimize routes and delivery schedules',
        'Cut cold chain monitoring costs'
      ]
    },
    {
      icon: Lightbulb,
      title: 'Smart Cities',
      savings: 'Decrease municipal costs by 20-35%',
      benefits: [
        'Reduce street lighting energy consumption',
        'Lower waste collection and management costs',
        'Cut water distribution losses',
        'Minimize infrastructure maintenance expenses'
      ]
    },
    {
      icon: Zap,
      title: 'Utilities',
      savings: 'Reduce operational costs by 15-30%',
      benefits: [
        'Cut meter reading and billing costs',
        'Minimize distribution losses and theft',
        'Lower maintenance and inspection expenses',
        'Reduce emergency response costs'
      ]
    },
    {
      icon: Leaf,
      title: 'Agriculture',
      savings: 'Decrease input costs by 15-25%',
      benefits: [
        'Reduce water and irrigation costs',
        'Lower fertilizer and pesticide expenses',
        'Minimize crop losses and waste',
        'Cut equipment maintenance costs'
      ]
    }
  ];

  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-light text-center mb-12">Industry Cost Savings</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-8">
              <industry.icon className="w-12 h-12 text-[#2f3676] mb-6" />
              <h3 className="text-xl font-semibold mb-2">{industry.title}</h3>
              <p className="text-green-600 font-semibold mb-4">{industry.savings}</p>
              <ul className="space-y-2">
                {industry.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-[#2f3676] rounded-full mt-2" />
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}