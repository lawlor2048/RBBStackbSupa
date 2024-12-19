import React from 'react';
import { Network, Shield, Clock, Users, Zap, Server } from 'lucide-react';
import CoverageForm from '../../components/CoverageForm';
import ReviewPlatforms from '../../components/social/ReviewPlatforms';
import BusinessReviews from '../../components/social/BusinessReviews';

export default function BusinessBroadband() {
  return (
    <div className="bg-gray-50">
      <div className="relative bg-[#2f3676] text-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <h1 className="text-5xl font-light mb-6">Business Broadband</h1>
          <p className="text-xl">Enterprise-grade connectivity solutions designed for business success.</p>
        </div>
      </div>

      {/* Review Platforms */}
      <ReviewPlatforms />

      {/* Solutions Grid */}
      {/* ... existing solutions grid code ... */}

      {/* Features */}
      {/* ... existing features code ... */}

      {/* Business Reviews */}
      <BusinessReviews />

      {/* Coverage Check */}
      <div className="bg-white rounded-xl shadow-sm p-12">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-light text-center mb-8">Check Business Coverage</h2>
          <CoverageForm />
        </div>
      </div>
    </div>
  );
}