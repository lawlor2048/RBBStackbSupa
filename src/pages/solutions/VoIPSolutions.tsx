import React from 'react';
import { Phone, Video, Headphones, BarChart, Settings, Users } from 'lucide-react';
import CoverageForm from '../../components/CoverageForm';

export default function VoIPSolutions() {
  return (
    <div className="bg-gray-50">
      <div className="relative bg-[#2f3676] text-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <h1 className="text-5xl font-light mb-6">VoIP Solutions</h1>
          <p className="text-xl">Modern business communication systems for enhanced collaboration and productivity.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Plans Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-light text-center mb-12">VoIP Plans</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Basic',
                users: 'Up to 5 users',
                price: '€19.99',
                features: [
                  'HD Voice Calls',
                  'Voicemail to Email',
                  'Web Portal Access',
                  'Mobile App'
                ]
              },
              {
                name: 'Professional',
                users: 'Up to 20 users',
                price: '€29.99',
                popular: true,
                features: [
                  'All Basic features',
                  'Video Conferencing',
                  'Call Recording',
                  'Advanced Analytics',
                  'CRM Integration'
                ]
              },
              {
                name: 'Enterprise',
                users: 'Unlimited users',
                price: 'Custom',
                features: [
                  'All Professional features',
                  'Custom Integration',
                  'Dedicated Support',
                  'Advanced Security',
                  'Custom Call Flows',
                  'API Access'
                ]
              }
            ].map((plan, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-sm p-8 ${plan.popular ? 'ring-2 ring-[#2f3676] relative' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#2f3676] text-white px-4 py-1 rounded-full text-sm">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-[#2f3676] mb-2">{plan.price}</div>
                <div className="text-gray-600 mb-6">per user/month</div>
                <div className="text-lg font-semibold mb-6">{plan.users}</div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#2f3676] rounded-full" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-[#2f3676] text-white py-3 rounded-md hover:bg-[#1a1f4d] transition">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-24">
          <h2 className="text-3xl font-light text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Phone,
                title: 'HD Voice Quality',
                description: 'Crystal clear audio quality for professional business communications.'
              },
              {
                icon: Video,
                title: 'Video Conferencing',
                description: 'Integrated video meetings with screen sharing and collaboration tools.'
              },
              {
                icon: Headphones,
                title: 'Multi-Device Support',
                description: 'Use your business phone system on desk phones, computers, or mobile devices.'
              },
              {
                icon: BarChart,
                title: 'Analytics & Reporting',
                description: 'Comprehensive call analytics and reporting for business insights.'
              },
              {
                icon: Settings,
                title: 'Easy Management',
                description: 'User-friendly web portal for system administration and configuration.'
              },
              {
                icon: Users,
                title: 'Scalable Solution',
                description: 'Easily add or remove users as your business grows.'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                <feature.icon className="w-12 h-12 text-[#2f3676] mb-6" />
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-xl shadow-sm p-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-light text-center mb-8">Get Started with VoIP</h2>
            <CoverageForm />
          </div>
        </div>
      </div>
    </div>
  );
}