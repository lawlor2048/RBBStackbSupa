import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Connectivity Solutions', path: '/connectivity-solutions' },
    { name: 'Why Us', path: '/why-us' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Support', path: '/support' },
    { name: 'Careers', path: '/careers' },
    { name: 'Blog', path: '/blog' },
    { name: 'FAQ', path: '/faq' }
  ];

  return (
    <nav className="bg-white py-4 px-6 shadow-sm relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-[#2f3676] hover:text-[#1a1f4d] transition"
              >
                {item.name}
              </Link>
            ))}
            
            <a href="tel:+35315133042" className="flex items-center bg-[#2f3676] text-white px-4 py-2 rounded-md hover:bg-[#1a1f4d] transition">
              <Phone className="w-4 h-4 mr-2" />
              01 5133042
            </a>
            
            <Link
              to="/get-connected"
              className="text-[#2f3676] border-2 border-[#2f3676] px-6 py-2 rounded-md hover:bg-[#2f3676] hover:text-white transition"
            >
              Get Connected
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#2f3676] p-2"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50">
            <div className="px-4 py-2 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block py-2 text-[#2f3676] hover:text-[#1a1f4d] transition"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="tel:+35315133042"
                className="block py-2 text-[#2f3676] hover:text-[#1a1f4d] transition"
              >
                <Phone className="w-4 h-4 inline mr-2" />
                01 5133042
              </a>
              <Link
                to="/get-connected"
                className="block py-2 text-[#2f3676] hover:text-[#1a1f4d] transition"
                onClick={() => setIsOpen(false)}
              >
                Get Connected
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}