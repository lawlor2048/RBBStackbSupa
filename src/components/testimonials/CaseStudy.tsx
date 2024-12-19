import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface CaseStudyProps {
  logo: string;
  company: string;
  overview: string;
  challenges?: string[];
  solutions?: string[];
  results?: string[];
  quote: string;
  author: {
    name: string;
    position: string;
  };
}

export default function CaseStudy({ 
  logo, 
  company, 
  overview, 
  challenges, 
  solutions, 
  results, 
  quote, 
  author 
}: CaseStudyProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-16">
      <div className="p-8">
        <div className="flex items-center justify-between mb-6">
          <img 
            src={logo} 
            alt={company}
            className="h-16 w-32 object-contain"
          />
          <h3 className="text-xl font-semibold text-[#2f3676]">{company}</h3>
        </div>
        
        <div className="space-y-6 mb-6">
          <div>
            <h4 className="font-semibold text-lg mb-2">Overview</h4>
            <p className="text-gray-600">{overview}</p>
          </div>

          {challenges && challenges.length > 0 && (
            <div>
              <h4 className="font-semibold text-lg mb-2">Challenges</h4>
              <ul className="space-y-2">
                {challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {solutions && solutions.length > 0 && (
            <div>
              <h4 className="font-semibold text-lg mb-2">Solution</h4>
              <ul className="space-y-2">
                {solutions.map((solution, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#2f3676] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {results && results.length > 0 && (
            <div>
              <h4 className="font-semibold text-lg mb-2">Results</h4>
              <ul className="space-y-2">
                {results.map((result, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <blockquote className="italic text-gray-600 border-l-4 border-[#2f3676] pl-4 mb-4">
          "{quote}"
        </blockquote>
        <div className="text-right">
          <p className="font-semibold">{author.name}</p>
          <p className="text-sm text-gray-600">{author.position}</p>
        </div>
      </div>
    </div>
  );
}