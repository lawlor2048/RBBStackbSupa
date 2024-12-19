import React from 'react';
import ReviewStars from './ReviewStars';

const reviews = [
  {
    name: "Kevin Wall",
    company: "The D Hotel",
    position: "Revenue Manager",
    rating: 5,
    text: "Regional Broadband successfully delivered a comprehensive connectivity solution for our hotel. Their team consistently met or exceeded all deliverables, and their support has been outstanding.",
    date: "March 2024"
  },
  {
    name: "Michael O'Brien",
    company: "Tech Innovation Hub",
    position: "Operations Director",
    rating: 4,
    text: "Their enterprise solution has transformed how we operate, providing reliable connectivity for our entire startup community. The dedicated support team has been exceptional.",
    date: "February 2024"
  },
  {
    name: "Claire Ryan",
    company: "Healthcare Solutions",
    position: "Technical Director",
    rating: 5,
    text: "Secure, reliable connectivity is crucial for our operations, and Regional Broadband delivers consistently. Their technical expertise and support are unmatched.",
    date: "March 2024"
  }
];

export default function BusinessReviews() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-light text-center mb-12">Trusted by Leading Businesses</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold">{review.name}</h3>
                  <p className="text-sm font-medium text-[#2f3676]">{review.company}</p>
                  <p className="text-sm text-gray-600">{review.position}</p>
                </div>
                <ReviewStars rating={review.rating} />
              </div>
              <p className="text-gray-600 mb-4">{review.text}</p>
              <p className="text-sm text-gray-500">{review.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}