import React from 'react';
import CoverageForm from '../components/CoverageForm';
import ReviewPlatforms from '../components/social/ReviewPlatforms';
import CustomerReviews from '../components/social/CustomerReviews';

export default function GetConnected() {
  return (
    <div className="bg-gray-50">
      <div className="relative bg-[#2f3676] text-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-light mb-6">Get Connected Today</h1>
              <p className="text-xl mb-8">Join thousands of satisfied customers across Ireland.</p>
              <div className="space-y-4">
                {[
                  'Quick and easy installation',
                  'Professional setup by our technicians',
                  'Flexible contract terms',
                  'Expert local support'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <CoverageForm />
            </div>
          </div>
        </div>
      </div>

      {/* Review Platforms */}
      <ReviewPlatforms />

      {/* Customer Reviews */}
      <CustomerReviews />
    </div>
  );
}