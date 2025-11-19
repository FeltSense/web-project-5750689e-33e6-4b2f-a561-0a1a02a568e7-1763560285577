import React from 'react';
import { Scale, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Scale className="h-8 w-8 text-blue-400" />
            <h3 className="text-xl font-bold text-white">Prestige Legal</h3>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Providing exceptional legal services with integrity, expertise, and dedication to our clients since 1995.
          </p>
        </div>

        {/* Practice Areas */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Practice Areas</h3>
          <a href="#corporate" className="block text-gray-400 hover:text-white mb-2 transition-colors duration-200">Corporate Law</a>
          <a href="#litigation" className="block text-gray-400 hover:text-white mb-2 transition-colors duration-200">Litigation</a>
          <a href="#real-estate" className="block text-gray-400 hover:text-white mb-2 transition-colors duration-200">Real Estate</a>
          <a href="#family" className="block text-gray-400 hover:text-white mb-2 transition-colors duration-200">Family Law</a>
          <a href="#employment" className="block text-gray-400 hover:text-white mb-2 transition-colors duration-200">Employment Law</a>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
          <a href="#about" className="block text-gray-400 hover:text-white mb-2 transition-colors duration-200">About Us</a>
          <a href="#attorneys" className="block text-gray-400 hover:text-white mb-2 transition-colors duration-200">Our Attorneys</a>
          <a href="#testimonials" className="block text-gray-400 hover:text-white mb-2 transition-colors duration-200">Testimonials</a>
          <a href="#careers" className="block text-gray-400 hover:text-white mb-2 transition-colors duration-200">Careers</a>
          <a href="#contact" className="block text-gray-400 hover:text-white mb-2 transition-colors duration-200">Contact</a>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
          <div className="flex items-start gap-3 mb-3">
            <MapPin className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
            <p className="text-gray-400 text-sm">
              123 Legal Boulevard<br />
              Suite 500<br />
              New York, NY 10001
            </p>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
            <a href="tel:+15551234567" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              (555) 123-4567
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
            <a href="mailto:info@prestigelegal.com" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              info@prestigelegal.com
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-center text-gray-500 text-sm">
            © 2024 Prestige Legal Partners. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#disclaimer" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Legal Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
