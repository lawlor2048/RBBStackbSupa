import React from 'react';
import { Shield, Server, Cloud, Network, Lock, Clock } from 'lucide-react';
import CoverageForm from '../../components/CoverageForm';

export default function ManagedServices() {
  return (
    <div className="bg-gray-50">
      <div className="relative bg-[#2f3676] text-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <h1 className="text-5xl font-light mb-6">Managed IT Services</h1>
          <p className="text-xl">Comprehensive IT solutions to keep your business running smoothly.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Services Grid */}
        <div className="mb-24">
          <h2 className="text-3xl font-light text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Network,
                title: 'Network Management',
                description: 'Complete network monitoring and management to ensure optimal performance.',
                features: [
                  '24/7 Network Monitoring',
                  'Performance Optimization',
                  'Issue Resolution',
                  'Network Security'
                ]
              },
              {
                icon: Cloud,
                title: 'Cloud Services',
                description: 'Secure and scalable cloud solutions for your business needs.',
                features: [
                  'Cloud Migration',
                  'Backup Solutions',
                  'Disaster Recovery',
                  'Cloud Security'
                ]
              },
              {
                icon: Shield,
                title: 'Cybersecurity',
                description: 'Comprehensive security solutions to protect your business.',
                features: [
                  'Firewall Management',
                  'Threat Detection',
                  'Security Audits',
                  'Employee Training'
                ]
              },
              {
                icon: Server,
                title: 'Infrastructure Management',
                description: 'End-to-end management of your IT infrastructure.',
                features: [
                  'Server Management',
                  'Storage Solutions',
                  'Hardware Support',
                  'Infrastructure Planning'
                ]
              },
              {
                icon: Lock,
                title: 'Data Protection',
                description: 'Ensure your business data is secure and compliant.',
                features: [
                  'Data Backup',
                  'GDPR Compliance',
                  'Data Recovery',
                  'Access Control'
                ]
              },
              {
                icon: Clock,
                title: 'IT Support',
                description: '24/7 technical support for your business.',
                features: [
                  'Help Desk Support',
                  'Remote Assistance',
                  'On-site Support',
                  'System Updates'
                ]
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                <service.icon className="w-12 h-12 text-[#2f3676] mb-6" />
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#2f3676] rounded-full" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-xl shadow-sm p-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-light text-center mb-8">Get Started with Managed Services</h2>
            <CoverageForm />
          </div>
        </div>
      </div>
    </div>
  );
}