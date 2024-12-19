import React from 'react';
import { Wifi, Download, Upload, Shield, Router, Clock } from 'lucide-react';
import CoverageForm from '../../components/CoverageForm';
import ReviewPlatforms from '../../components/social/ReviewPlatforms';
import CustomerReviews from '../../components/social/CustomerReviews';

export default function ResidentialBroadband() {
  return (
    <div className="bg-gray-50">
      <div className="relative bg-[#2f3676] text-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <h1 className="text-5xl font-light mb-6">Residential Broadband</h1>
          <p className="text-xl">Experience lightning-fast internet for your home with our fiber broadband solutions.</p>
        </div>
      </div>

      {/* Review Platforms */}
      <ReviewPlatforms />

      {/* Plans Section */}
      {/* ... existing plans section code ... */}

      {/* Features Section */}
      {/* ... existing features section code ... */}

      {/* Customer Reviews */}
      <CustomerReviews />

      {/* Coverage Check */}
      <div className="bg-white rounded-xl shadow-sm p-12">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-light text-center mb-8">Check Coverage in Your Area</h2>
          <CoverageForm />
        </div>
      </div>
    </div>
  );
}