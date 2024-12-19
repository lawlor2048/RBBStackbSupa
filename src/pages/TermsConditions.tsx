import React from 'react';

export default function TermsConditions() {
  return (
    <div className="bg-gray-50">
      <div className="relative bg-[#2f3676] text-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <h1 className="text-5xl font-light mb-6">Terms & Conditions</h1>
          <p className="text-xl">Please read these terms and conditions carefully before using our service.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className="bg-white rounded-xl shadow-sm p-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold mb-6">1. Introduction</h2>
            <p className="mb-6">These terms and conditions govern your use of Regional Broadband's services. By using our services, you accept these terms and conditions in full. If you disagree with these terms and conditions or any part of them, you must not use our services.</p>

            <h2 className="text-2xl font-semibold mt-12 mb-6">2. Service Description</h2>
            <p className="mb-6">Regional Broadband provides internet connectivity services to residential and business customers. The specific details of the service you receive will be outlined in your service agreement.</p>

            <h2 className="text-2xl font-semibold mt-12 mb-6">3. Contract Duration</h2>
            <p className="mb-6">Unless otherwise stated, our standard contract terms are:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Residential services: 12-month minimum term</li>
              <li>Business services: 24-month minimum term</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-12 mb-6">4. Installation and Equipment</h2>
            <p className="mb-6">We will provide and install the necessary equipment to deliver our service. All equipment remains the property of Regional Broadband unless explicitly stated otherwise.</p>
            <ul className="list-disc pl-6 mb-6">
              <li>You must provide suitable access for installation</li>
              <li>You are responsible for the safe keeping of equipment</li>
              <li>Equipment must be returned upon service termination</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-12 mb-6">5. Service Level Agreement</h2>
            <p className="mb-6">We aim to provide continuous, high-quality service. Our service level agreements specify:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Target service availability</li>
              <li>Response times for fault resolution</li>
              <li>Performance metrics</li>
              <li>Compensation for service failures</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-12 mb-6">6. Payment Terms</h2>
            <p className="mb-6">Payment terms include:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Monthly service charges are payable in advance</li>
              <li>Payment is due within 14 days of invoice date</li>
              <li>We accept various payment methods including direct debit</li>
              <li>Late payments may result in service suspension</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-12 mb-6">7. Acceptable Use Policy</h2>
            <p className="mb-6">Our service must be used responsibly and legally. Prohibited activities include:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Illegal content distribution</li>
              <li>Network security violations</li>
              <li>Excessive bandwidth usage beyond fair use</li>
              <li>Reselling service without authorization</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-12 mb-6">8. Service Termination</h2>
            <p className="mb-6">Service may be terminated:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>By customer with 30 days notice (after minimum term)</li>
              <li>By Regional Broadband for terms violation</li>
              <li>Early termination fees apply within minimum term</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-12 mb-6">9. Limitation of Liability</h2>
            <p className="mb-6">Regional Broadband's liability is limited to:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Direct losses up to 12 months service charges</li>
              <li>Excludes indirect or consequential losses</li>
              <li>Does not affect statutory rights</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-12 mb-6">10. Changes to Terms</h2>
            <p className="mb-6">We may update these terms from time to time. Significant changes will be notified to customers with 30 days notice.</p>

            <h2 className="text-2xl font-semibold mt-12 mb-6">11. Contact Information</h2>
            <p className="mb-6">For any questions about these terms, please contact us:</p>
            <p>
              Regional Broadband<br />
              Unit 4/5, Burton Hall Park<br />
              Burton Hall Road<br />
              Sandyford Business Park<br />
              Dublin 18, D18 A094<br />
              Phone: 01 5133042<br />
              Email: info@regionalbroadband.ie
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}