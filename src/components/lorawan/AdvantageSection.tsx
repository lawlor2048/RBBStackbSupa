import React from 'react';
import AdvantageCard from './AdvantageCard';
import { 
  LineChart, 
  Settings, 
  Database, 
  HeartPulse, 
  BarChart 
} from 'lucide-react';

export default function AdvantageSection() {
  const advantages = [
    {
      icon: Settings,
      title: 'Strategic Planning & Consultation',
      features: [
        'In-depth requirements analysis, ROI/TCO evaluation, and compliance review',
        'Custom network architecture tailored to operational goals',
        'Pilot programs for risk mitigation and solution validation'
      ]
    },
    {
      icon: LineChart,
      title: 'Professional Project Management',
      features: [
        'End-to-end project oversight by dedicated PMs',
        'Optimized network design and large-scale hardware deployment',
        'Rigorous quality assurance, testing, and staff training'
      ]
    },
    {
      icon: Database,
      title: 'Enterprise System Integration',
      features: [
        'Seamless ERP, SCADA, and cloud platform integration',
        'Custom API development for advanced data connectivity',
        'Business intelligence and database optimization'
      ]
    },
    {
      icon: HeartPulse,
      title: 'Comprehensive Support',
      features: [
        '24/7/365 proactive monitoring and technical assistance',
        'Regular system optimization and performance reporting',
        'Predictive maintenance and security updates'
      ]
    },
    {
      icon: BarChart,
      title: 'Data Management & Analytics',
      features: [
        'Custom dashboards and real-time analytics',
        'Predictive modeling and machine learning solutions',
        'Automated reporting and data visualization'
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-light text-center mb-12">The Regional Broadband Advantage</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {advantages.map((advantage, index) => (
          <AdvantageCard key={index} {...advantage} />
        ))}
      </div>
    </div>
  );
}