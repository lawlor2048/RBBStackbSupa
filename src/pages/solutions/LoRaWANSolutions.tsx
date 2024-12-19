import React from 'react';
import { Shield, LineChart, Users } from 'lucide-react';
import ValueProposition from '../../components/lorawan/ValueProposition';
import IndustrySavings from '../../components/lorawan/IndustrySavings';
import ROICalculator from '../../components/lorawan/ROICalculator';
import CoverageForm from '../../components/CoverageForm';

export default function LoRaWANSolutions() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-[#2f3676] text-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <h1 className="text-5xl font-light mb-6">
            Cut Costs and Eliminate Waste with IoT Solutions
          </h1>
          <p className="text-xl mb-8">
            Transform your operations with Regional Broadband's end-to-end LoRaWAN solutions. 
            Our enterprise-grade IoT network helps you reduce costs, minimize waste, and prevent losses 
            across your entire organization.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Proven Results',
                description: 'Achieve 15-30% cost reduction across operations with our IoT solutions.'
              },
              {
                icon: LineChart,
                title: 'Rapid ROI',
                description: 'See measurable returns within months through immediate cost savings.'
              },
              {
                icon: Users,
                title: 'Expert Support',
                description: 'End-to-end guidance to maximize your cost-saving potential.'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white bg-opacity-10 p-6 rounded-lg">
                <feature.icon className="w-8 h-8 mb-4" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-200">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Value Proposition */}
      <ValueProposition />

      {/* Industry Savings */}
      <IndustrySavings />

      {/* ROI Calculator */}
      <ROICalculator />

      {/* Contact Form */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="bg-white rounded-xl shadow-sm p-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-light text-center mb-8">
              Start Saving with IoT Solutions
            </h2>
            <CoverageForm />
          </div>
        </div>
      </div>
    </div>
  );
}