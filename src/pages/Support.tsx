import React from 'react';
import { Phone, Mail, MessageSquare, Clock } from 'lucide-react';

export default function Support() {
  return (
    <div className="bg-gray-50">
      <div className="relative bg-[#2f3676] text-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <h1 className="text-5xl font-light mb-6">Customer Support</h1>
          <p className="text-xl">We're here to help you with any questions or concerns.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Phone,
              title: 'Call Us',
              description: 'Speak directly with our support team',
              contact: '01 5133042',
              action: 'tel:+35315133042'
            },
            {
              icon: Mail,
              title: 'Email Us',
              description: 'Send us your query anytime',
              contact: 'sales@regionalbroadband.ie',
              action: 'mailto:sales@regionalbroadband.ie'
            },
            {
              icon: MessageSquare,
              title: 'Live Chat',
              description: 'Chat with our support team',
              contact: 'Available during business hours'
            },
            {
              icon: Clock,
              title: 'Opening Hours',
              description: 'Mon-Fri: 9am - 6pm\nSat: 10am - 2pm\nSun: Closed'
            }
          ].map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
              <item.icon className="w-12 h-12 text-[#2f3676] mb-6" />
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              {item.action ? (
                <a href={item.action} className="text-[#2f3676] font-semibold hover:underline">
                  {item.contact}
                </a>
              ) : (
                <p className="text-gray-800 whitespace-pre-line">{item.contact}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}