import React from 'react';
import { Link } from 'react-router-dom';
import { useServiceTypeStore } from '../store/serviceTypeStore';
import { solutions } from '../data/solutions';

export default function ConnectivitySolutions() {
  const { type } = useServiceTypeStore();
  const currentSolutions = solutions[type];

  return (
    <div className="bg-gray-50">
      <div className="relative bg-[#2f3676] text-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <h1 className="text-5xl font-light mb-6">
            {type === 'residential' ? 'Home Connectivity' : 'Business Solutions'}
          </h1>
          <p className="text-xl">
            {type === 'residential'
              ? 'Discover our range of high-speed internet solutions for your home.'
              : 'Enterprise-grade connectivity solutions designed for your business needs.'}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {currentSolutions.map((solution, index) => (
            <Link 
              key={index} 
              to={solution.path}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition group"
            >
              <solution.icon className="w-12 h-12 text-[#2f3676] mb-6 group-hover:scale-110 transition" />
              <h3 className="text-xl font-semibold mb-4">{solution.title}</h3>
              <p className="text-gray-600 mb-6">{solution.description}</p>
              <ul className="space-y-3">
                {solution.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#2f3676] rounded-full" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}