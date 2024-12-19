import React from 'react';
import { MapPin, Users, Target, Zap } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="bg-gray-50">
      <div className="relative bg-[#2f3676] text-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <h1 className="text-5xl font-light mb-6">About Regional Broadband</h1>
          <p className="text-xl">Connecting Ireland with high-speed internet solutions since 2016.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <div>
            <h2 className="text-3xl font-light mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Regional Broadband was founded with a clear mission: to bridge the digital divide in Ireland by providing high-speed internet access to both urban and rural communities. We understand the critical role that reliable internet connectivity plays in modern life, whether it's for business, education, or entertainment.
            </p>
            <p className="text-gray-600">
              Today, we're proud to be one of Ireland's leading broadband providers, serving thousands of homes and businesses across the country with state-of-the-art connectivity solutions.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { label: 'Customers Served', value: '10,000+' },
              { label: 'Counties Covered', value: '26' },
              { label: 'Team Members', value: '50+' },
              { label: 'Years of Service', value: '7+' }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="text-3xl font-bold text-[#2f3676] mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {[
            {
              icon: Target,
              title: 'Our Mission',
              description: 'To provide reliable, high-speed internet access to every corner of Ireland, ensuring no community is left behind in the digital age.'
            },
            {
              icon: Zap,
              title: 'Our Vision',
              description: "To be Ireland's most trusted broadband provider, known for excellence in service, innovation, and customer satisfaction."
            },
            {
              icon: Users,
              title: 'Our Team',
              description: 'A dedicated group of professionals committed to delivering the best possible service and support to our customers.'
            },
            {
              icon: MapPin,
              title: 'Our Coverage',
              description: 'Nationwide presence with a focus on both urban and rural areas, ensuring comprehensive coverage across Ireland.'
            }
          ].map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
              <item.icon className="w-12 h-12 text-[#2f3676] mb-6" />
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}