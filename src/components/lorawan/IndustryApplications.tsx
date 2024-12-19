import React from 'react';
import { Building, Factory, Leaf, Lightbulb, Truck, Zap } from 'lucide-react';
import IndustryCard from './IndustryCard';

export default function IndustryApplications() {
  const industries = [
    {
      icon: Lightbulb,
      title: 'Smart Cities',
      description: 'Build connected, sustainable urban environments:',
      features: [
        'Intelligent lighting and energy management',
        'Waste management optimisation',
        'Air quality and environmental sensing',
        'Traffic flow and congestion management',
        'Public safety and security solutions'
      ]
    },
    {
      icon: Zap,
      title: 'Energy & Utilities',
      description: 'Improve resource management and operational resilience:',
      features: [
        'Smart metering and usage analytics',
        'Grid monitoring and fault detection',
        'Leak and emission detection',
        'Infrastructure health monitoring',
        'Consumption insights for better forecasting'
      ]
    },
    {
      icon: Factory,
      title: 'Industry 4.0',
      description: 'Enhance manufacturing efficiency and competitiveness:',
      features: [
        'Real-time equipment monitoring',
        'Predictive maintenance',
        'Production line optimisation',
        'Environmental and safety monitoring',
        'Asset tracking'
      ]
    },
    {
      icon: Truck,
      title: 'Logistics & Supply Chain',
      description: 'Streamline operations and reduce costs:',
      features: [
        'Real-time asset and fleet tracking',
        'Inventory and warehouse management',
        'Cold chain and temperature monitoring',
        'Predictive maintenance of transport assets',
        'Supply chain visibility and optimization'
      ]
    },
    {
      icon: Building,
      title: 'Smart Buildings & Facilities',
      description: 'Create intelligent, cost-effective environments:',
      features: [
        'Automated building systems (HVAC, lighting)',
        'Occupancy and space utilization monitoring',
        'Energy consumption analytics',
        'Predictive maintenance and repairs',
        'Integrated security and access control'
      ]
    },
    {
      icon: Leaf,
      title: 'Precision Agriculture',
      description: 'Leverage data-driven farming for higher yields:',
      features: [
        'Crop and soil condition monitoring',
        'Smart irrigation and water management',
        'Weather and climate data integration',
        'Livestock and equipment tracking',
        'Analytics for yield improvement and sustainability'
      ]
    }
  ];

  return (
    <div className="bg-gray-100 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-light text-center mb-12">Industry Applications</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <IndustryCard key={index} {...industry} />
          ))}
        </div>
      </div>
    </div>
  );
}