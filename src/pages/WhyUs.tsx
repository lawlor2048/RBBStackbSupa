import React from 'react';
import { Shield, Award, Heart, Users } from 'lucide-react';
import CaseStudy from '../components/testimonials/CaseStudy';
import Testimonial from '../components/testimonials/Testimonial';

export default function WhyUs() {
  const caseStudies = [
    {
      logo: "https://images.unsplash.com/photo-1595427148749-8f7563d9f47c?w=200&h=100&fit=crop&auto=format",
      company: "National Ploughing Association (NPA)",
      overview: "The National Ploughing Association annually hosts one of Ireland's largest outdoor events, attracting thousands of visitors and exhibitors. Facing significant connectivity challenges, NPA partnered with Regional Broadband to establish reliable and efficient broadband services across their event site.",
      challenges: [
        "Complex coordination with multiple contractors",
        "High expectations for reliable connectivity at entry points and exhibitor booths"
      ],
      solutions: [
        "Fibre Broadband and WIFI Backup at entrance gates",
        "VoIP Phone Connectivity across critical locations"
      ],
      results: [
        "Enhanced pre-event and on-site support",
        "Improved team collaboration and deadline adherence",
        "Reliable VoIP services across the event site"
      ],
      quote: "Partnering with Regional Broadband has simplified our connectivity setup, improved on-site VoIP services, and offered better connectivity for our exhibitors, which has been instrumental in enhancing the overall efficiency of our event.",
      author: {
        name: "NPA Management Team",
        position: "Event Operations"
      }
    },
    {
      logo: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=200&h=100&fit=crop&auto=format",
      company: "The D Hotel",
      overview: "The D Hotel required a comprehensive connectivity upgrade to enhance their guest services and operational efficiency. Regional Broadband conducted a thorough infrastructure audit and implemented a complete telecommunications overhaul.",
      solutions: [
        "Installation of 41 Wi-Fi access points throughout the property",
        "Upgrade from 100Mb to 500Mb download speeds",
        "Implementation of cloud-based PBX VoIP system",
        "Extended coverage to offices, hospitality areas, and conference center"
      ],
      results: [
        "Seamless communication across all key areas",
        "Enhanced connectivity for guests and staff",
        "Reduced overall telecommunications costs",
        "On-time and within-budget project completion"
      ],
      quote: "Regional Broadband successfully delivered a comprehensive connectivity solution for our hotel. Their team consistently met or exceeded all deliverables, and their support and maintenance services have been outstanding. We highly recommend Regional Broadband for any organization looking to upgrade their connectivity solutions.",
      author: {
        name: "Kevin Wall",
        position: "Revenue Manager"
      }
    }
  ];

  const testimonials = [
    {
      company: "Healthcare Solutions",
      logo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=200&h=100&fit=crop&auto=format",
      quote: "Secure, reliable connectivity is crucial for our operations, and Regional Broadband delivers consistently.",
      author: "Dr. Claire Ryan",
      position: "Technical Director"
    },
    {
      company: "Local Government Office",
      logo: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=200&h=100&fit=crop&auto=format",
      quote: "The dedicated support team has been exceptional in maintaining our critical connectivity needs.",
      author: "John Murphy",
      position: "IT Manager"
    },
    {
      company: "Tech Innovation Hub",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=100&fit=crop&auto=format",
      quote: "Their enterprise solution has transformed how we operate, providing reliable connectivity for our entire startup community.",
      author: "Sarah O'Connor",
      position: "Operations Director"
    }
  ];

  return (
    <div className="bg-gray-50">
      <div className="relative bg-[#2f3676] text-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <h1 className="text-5xl font-light mb-6">Why Choose Regional Broadband?</h1>
          <p className="text-xl">Experience the difference with Ireland's trusted broadband provider.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Case Studies & Testimonials Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-light text-center mb-16">Success Stories & Testimonials</h2>
          
          {/* Featured Case Studies */}
          {caseStudies.map((study, index) => (
            <CaseStudy key={index} {...study} />
          ))}

          {/* Additional Testimonials */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index} {...testimonial} />
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {[
            {
              icon: Shield,
              title: 'Reliable Service',
              description: 'Our network is built for reliability with 99.9% uptime guarantee and redundant infrastructure.',
              points: [
                'Redundant network infrastructure',
                '24/7 network monitoring',
                'Proactive maintenance',
                'Rapid response times'
              ]
            },
            {
              icon: Award,
              title: 'Expert Support',
              description: 'Our dedicated team of experts is always ready to help you with any technical issues.',
              points: [
                'Irish-based support team',
                'Technical expertise',
                'Quick resolution times',
                'Personalized service'
              ]
            },
            {
              icon: Heart,
              title: 'Customer First',
              description: 'We put our customers first with transparent pricing and excellent service.',
              points: [
                'No hidden fees',
                'Flexible contracts',
                'Regular service reviews',
                'Customer feedback program'
              ]
            },
            {
              icon: Users,
              title: 'Community Focus',
              description: "We're committed to connecting Irish communities with high-speed internet.",
              points: [
                'Local presence',
                'Community engagement',
                'Rural coverage',
                'Social responsibility'
              ]
            }
          ].map((reason, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
              <reason.icon className="w-12 h-12 text-[#2f3676] mb-6" />
              <h3 className="text-xl font-semibold mb-4">{reason.title}</h3>
              <p className="text-gray-600 mb-6">{reason.description}</p>
              <ul className="space-y-3">
                {reason.points.map((point, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#2f3676] rounded-full" />
                    <span>{point}</span>
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