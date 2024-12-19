import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

export default function Blog() {
  return (
    <div className="bg-gray-50">
      <div className="relative bg-[#2f3676] text-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <h1 className="text-5xl font-light mb-6">Latest News & Updates</h1>
          <p className="text-xl">Stay informed about broadband technology and company updates.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Expanding Our Network: New Coverage Areas",
              excerpt: "We are excited to announce the expansion of our high-speed broadband network to several new areas across Ireland.",
              author: "John Murphy",
              date: "March 15, 2024",
              image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
            },
            {
              title: "The Future of Rural Connectivity",
              excerpt: "Exploring how new technologies are helping to bridge the digital divide in rural communities.",
              author: "Sarah O'Brien",
              date: "March 10, 2024",
              image: "https://images.unsplash.com/photo-1498354178607-a79df2916198?auto=format&fit=crop&q=80&w=800"
            },
            {
              title: "Business Connectivity Guide 2024",
              excerpt: "Everything businesses need to know about choosing the right internet connection for their needs.",
              author: "Michael Collins",
              date: "March 5, 2024",
              image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800"
            },
            {
              title: "Understanding Fiber Optic Technology",
              excerpt: "A comprehensive guide to how fiber optic technology works and its benefits.",
              author: "Emma Walsh",
              date: "March 1, 2024",
              image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
            },
            {
              title: "Tips for Optimizing Your Home Network",
              excerpt: "Expert advice on getting the most out of your home internet connection.",
              author: "David Kelly",
              date: "February 25, 2024",
              image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=800"
            },
            {
              title: "The Impact of 5G on Broadband",
              excerpt: "Exploring how 5G technology is changing the landscape of internet connectivity.",
              author: "Lisa McCarthy",
              date: "February 20, 2024",
              image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
            }
          ].map((post, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <button className="text-[#2f3676] hover:text-[#1a1f4d] transition flex items-center gap-1">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}