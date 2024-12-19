import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Wifi, Network, CheckCircle2, Building2, LineChart, Users, Cloud } from 'lucide-react';
import { useServiceTypeStore } from '../store/serviceTypeStore';
import CoverageForm from '../components/CoverageForm';
import ReviewPlatforms from '../components/social/ReviewPlatforms';
import CustomerReviews from '../components/social/CustomerReviews';
import BusinessReviews from '../components/social/BusinessReviews';

export default function Home() {
  const { type } = useServiceTypeStore();

  const content = {
    residential: {
      title: 'High-Speed Internet Without Limits',
      subtitle: 'Experience lightning-fast connectivity with complete home broadband solutions.',
      features: [
        'Speeds from 100Mb up to 1Gb',
        'Unlimited data usage',
        'Free professional installation',
        'Nationwide coverage'
      ],
      benefits: [
        {
          icon: Shield,
          title: 'Trusted Provider',
          description: 'Join thousands of satisfied customers who trust us for their home internet.'
        },
        {
          icon: Network,
          title: 'Reliable Coverage',
          description: 'Strong, stable connections throughout your home with advanced Wi-Fi technology.'
        },
        {
          icon: Wifi,
          title: 'Fast Speeds',
          description: 'Stream, game, and work from home with our high-speed fiber broadband.'
        }
      ]
    },
    business: {
      title: 'Enterprise-Grade Connectivity Solutions',
      subtitle: 'Powering Irish businesses with reliable, scalable network infrastructure.',
      features: [
        'Speeds from 100Mb up to 10Gb',
        'Dedicated bandwidth & symmetrical speeds',
        'Premium SLA with 24/7 support',
        'Complete business solutions'
      ],
      benefits: [
        {
          icon: Building2,
          title: 'Business Solutions',
          description: 'Tailored connectivity packages designed for your business needs.'
        },
        {
          icon: LineChart,
          title: 'Scalable Performance',
          description: 'Grow your network capacity as your business expands.'
        },
        {
          icon: Users,
          title: 'Dedicated Support',
          description: 'Expert technical team and account management.'
        },
        {
          icon: Cloud,
          title: 'Managed Services',
          description: 'Complete IT solutions to keep your business running smoothly.'
        }
      ]
    }
  };

  const currentContent = content[type];

  return (
    <div className="bg-gray-50">
      {/* Hero Section with Gradient */}
      <div className={`relative ${
        type === 'residential'
          ? 'bg-gradient-to-br from-[#2f3676] via-[#3f4795] to-[#2f3676]'
          : 'bg-gradient-to-br from-[#2f3676] via-[#1a1f4d] to-[#2f3676]'
      } text-white`}>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-10" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-light mb-6">{currentContent.title}</h1>
            <p className="text-xl mb-8">{currentContent.subtitle}</p>
            <div className="grid gap-4">
              {currentContent.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <CoverageForm />
          </div>
        </div>
      </div>

      {/* Review Platforms */}
      <ReviewPlatforms />

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {currentContent.benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
              <benefit.icon className="w-12 h-12 text-[#2f3676] mb-6" />
              <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews Section */}
      {type === 'residential' ? <CustomerReviews /> : <BusinessReviews />}

      {/* CTA Section */}
      <div className="bg-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-light mb-6">Ready to Get Connected?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of satisfied {type === 'residential' ? 'homes' : 'businesses'} across Ireland.
          </p>
          <Link
            to="/get-connected"
            className="inline-block bg-[#2f3676] text-white px-8 py-3 rounded-md hover:bg-[#1a1f4d] transition"
          >
            Check Coverage
          </Link>
        </div>
      </div>
    </div>
  );
}