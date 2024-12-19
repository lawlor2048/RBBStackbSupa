import React from 'react';
import { Shield, Wifi, Phone, Network, Lock, BarChart, Users, CheckCircle2 } from 'lucide-react';

export default function BusinessPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-[#2f3676] text-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-light mb-6">Business Broadband without limits...</h1>
            <p className="text-xl mb-8">Regional Broadband is your trusted partner with complete solutions for your connectivity, phone and security. Wherever you are in Ireland, we can get you connected.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Bandwidth available from 100Mb up to 10Gb',
                'Symmetrical service – no longer constrained by poor upload speeds',
                'Primary and failover connectivity solutions',
                'Premium Service Level Agreement (SLA)',
                'Scalable, cost-effective connections',
                'Nationwide coverage to urban and rural locations'
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Three Pillars Section */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              title: 'Trusted Partner',
              icon: Users,
              description: 'Our reliable and robust solutions are fully supported and managed locally by our experienced team of dedicated account managers, expert installation engineers & responsive support advisors.'
            },
            {
              title: 'Multiple Networks & Technologies',
              icon: Network,
              description: 'A choice of technologies to suit your location, data requirements & budget. Comprehensive coverage throughout Ireland with multiple fibre and wireless networks.'
            },
            {
              title: 'Tailored & Fully Managed Solutions',
              icon: Shield,
              description: 'With our experienced and consultative approach, we can advise on the most suitable, dependable & intelligent solutions to help your business unify communications, improve security & reliability.'
            }
          ].map((pillar, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
              <pillar.icon className="w-12 h-12 text-[#2f3676] mb-6" />
              <h3 className="text-xl font-semibold mb-4">{pillar.title}</h3>
              <p className="text-gray-600">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Managed Services Section */}
      <div className="bg-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-light text-center mb-16">Our Suite of Managed Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Managed Wi-Fi',
                icon: Wifi,
                features: [
                  'Professional Wi-Fi coverage design and installation',
                  'Support and Maintenance Premium SLA',
                  'Get the fastest wireless speeds in your building!'
                ]
              },
              {
                title: 'Phone Systems',
                icon: Phone,
                features: [
                  'Unified Communications',
                  'VoIP Calls and Phones',
                  'Affordable call bundles',
                  'Flexible contracts'
                ]
              },
              {
                title: 'SD-WAN',
                icon: Network,
                features: [
                  'Resolve application performance issues',
                  'Add intelligence to your network',
                  'Simple dashboard control system'
                ]
              },
              {
                title: 'Managed Security',
                icon: Lock,
                features: [
                  'Next-Generation Firewall',
                  'Secure your data, GDPR Compliance',
                  'Malware protection',
                  'Secure WFH bundles'
                ]
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                <service.icon className="w-10 h-10 text-[#2f3676] mb-6" />
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="bg-white p-12 rounded-xl shadow-sm">
          <blockquote className="text-xl text-gray-600 italic mb-6">
            "Pricing very competitive…installation top class and superb pre-sale and post-sale customer support… Our business requirements were somewhat complex, working with the team we were guided on tactical issues, and were offered innovative solutions to elements we hadn't even thought of! After a flawless installation phase, I can highly recommend Regional Broadband."
          </blockquote>
          <cite className="text-[#2f3676] font-semibold">- Norbert Grey, D Hotel Drogheda</cite>
        </div>
      </div>
    </div>
  );
}