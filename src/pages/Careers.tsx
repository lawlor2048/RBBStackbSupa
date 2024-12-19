import React from 'react';
import { Briefcase, GraduationCap, Heart, Coffee } from 'lucide-react';

export default function Careers() {
  return (
    <div className="bg-gray-50">
      <div className="relative bg-[#2f3676] text-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <h1 className="text-5xl font-light mb-6">Join Our Team</h1>
          <p className="text-xl">Build your career with Ireland's growing broadband provider.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {[
            {
              icon: Briefcase,
              title: 'Growth Opportunities',
              description: 'Develop your skills and advance your career with our comprehensive training programs.'
            },
            {
              icon: GraduationCap,
              title: 'Learning & Development',
              description: 'Access to continuous learning opportunities and professional certifications.'
            },
            {
              icon: Heart,
              title: 'Great Benefits',
              description: 'Competitive salary, health insurance, pension scheme, and work-life balance.'
            },
            {
              icon: Coffee,
              title: 'Work Culture',
              description: 'Join a friendly, innovative team that values collaboration and creativity.'
            }
          ].map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
              <benefit.icon className="w-12 h-12 text-[#2f3676] mb-6" />
              <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-sm p-8 mb-24">
          <h2 className="text-3xl font-light mb-8">Current Openings</h2>
          <div className="space-y-6">
            {[
              {
                title: 'Network Engineer',
                location: 'Dublin',
                type: 'Full-time',
                description: "We're looking for an experienced Network Engineer to join our technical team."
              },
              {
                title: 'Customer Support Specialist',
                location: 'Cork',
                type: 'Full-time',
                description: 'Join our customer support team to help provide excellent service to our clients.'
              },
              {
                title: 'Field Technician',
                location: 'Multiple Locations',
                type: 'Full-time',
                description: 'Seeking skilled technicians for installation and maintenance of broadband services.'
              }
            ].map((job, index) => (
              <div key={index} className="border-b border-gray-200 last:border-0 pb-6 last:pb-0">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-[#2f3676]">{job.title}</h3>
                    <p className="text-gray-600">{job.location} · {job.type}</p>
                  </div>
                  <button className="bg-[#2f3676] text-white px-6 py-2 rounded-md hover:bg-[#1a1f4d] transition">
                    Apply Now
                  </button>
                </div>
                <p className="text-gray-600">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}