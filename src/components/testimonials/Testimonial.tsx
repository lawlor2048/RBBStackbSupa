import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialProps {
  company: string;
  logo: string;
  quote: string;
  author: string;
  position: string;
}

export default function Testimonial({ 
  company, 
  logo, 
  quote, 
  author, 
  position 
}: TestimonialProps) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <img 
          src={logo} 
          alt={company}
          className="h-12 w-24 object-contain"
        />
        <Star className="w-8 h-8 text-yellow-400" />
      </div>
      <blockquote className="text-gray-600 mb-6">
        "{quote}"
      </blockquote>
      <div>
        <p className="font-semibold">{author}</p>
        <p className="text-sm text-gray-600">{position}</p>
        <p className="text-sm text-gray-600">{company}</p>
      </div>
    </div>
  );
}