import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-[#2f3676] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="[&_*]:text-white">
              <Logo asLink={false} />
            </div>
            <p className="mt-4">Your trusted partner for complete connectivity solutions across Ireland.</p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about-us" className="hover:text-gray-300">About Us</Link></li>
              <li><Link to="/connectivity-solutions" className="hover:text-gray-300">Solutions</Link></li>
              <li><Link to="/support" className="hover:text-gray-300">Support</Link></li>
              <li><Link to="/careers" className="hover:text-gray-300">Careers</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+35315133042" className="hover:text-gray-300">01 5133042</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:sales@regionalbroadband.ie" className="hover:text-gray-300">sales@regionalbroadband.ie</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1" />
                <span>
                  REGIONAL BROADBAND<br />
                  UNIT 4/5<br />
                  BURTON HALL PARK<br />
                  BURTON HALL ROAD<br />
                  SANDYFORD BUSINESS PARK<br />
                  DUBLIN 18<br />
                  D18 A094
                </span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy-policy" className="hover:text-gray-300">Privacy Policy</Link></li>
              <li><Link to="/cookie-policy" className="hover:text-gray-300">Cookie Policy</Link></li>
              <li><Link to="/terms-conditions" className="hover:text-gray-300">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Regional Broadband. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}