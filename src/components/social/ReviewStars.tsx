import React from 'react';
import { Star, StarHalf } from 'lucide-react';

interface ReviewStarsProps {
  rating: number;
  className?: string;
}

export default function ReviewStars({ rating, className = '' }: ReviewStarsProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <div className={`flex items-center ${className}`}>
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
      ))}
      {hasHalfStar && <StarHalf className="w-5 h-5 text-yellow-400 fill-current" />}
      {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
        <Star key={`empty-${i}`} className="w-5 h-5 text-gray-300" />
      ))}
    </div>
  );
}