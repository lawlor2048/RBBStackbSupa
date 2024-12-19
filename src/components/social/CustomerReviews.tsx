import React from 'react';
import { Star } from 'lucide-react';
import ReviewStars from './ReviewStars';

const reviews = [
  {
    name: "Sarah O'Connor",
    location: "Dublin",
    rating: 5,
    text: "Fantastic service! The installation was quick and professional, and the internet speed is exactly as promised. Customer support has been excellent whenever I've needed them.",
    date: "March 2024"
  },
  {
    name: "John Murphy",
    location: "Cork",
    rating: 4,
    text: "Very happy with the broadband service. Great speeds and reliable connection. The only minor issue was a slight delay in installation, but the team kept me well informed.",
    date: "February 2024"
  },
  {
    name: "Mary Kelly",
    location: "Galway",
    rating: 5,
    text: "Best internet provider I've had! The customer service is outstanding, and the connection has been rock solid since day one. Highly recommend!",
    date: "March 2024"
  }
];

export default function CustomerReviews() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-light text-center mb-12">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold">{review.name}</h3>
                  <p className="text-sm text-gray-600">{review.location}</p>
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