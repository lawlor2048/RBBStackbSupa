import React from 'react';
import ReviewStars from './ReviewStars';
import GoogleLogo from './logos/GoogleLogo';
import TrustpilotLogo from './logos/TrustpilotLogo';

export default function ReviewPlatforms() {
  return (
    <div className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          <div className="text-center">
            <div className="flex items-center gap-2 mb-2">
              <GoogleLogo />
              <ReviewStars rating={4.2} />
            </div>
            <p className="text-sm text-gray-600">2,500+ Reviews on Google</p>
          </div>

          <div className="text-center">
            <div className="flex items-center gap-2 mb-2">
              <TrustpilotLogo />
              <ReviewStars rating={4.3} />
            </div>
            <p className="text-sm text-gray-600">1,800+ Reviews on Trustpilot</p>
          </div>
        </div>
      </div>
    </div>
  );
}