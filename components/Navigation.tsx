'use client';

import { useState, useEffect } from 'react';
import { Scale, Menu, X, ChevronDown } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const practiceAreas = [
    'Corporate Law',
    'Real Estate',
    'Litigation',
    'Estate Planning',
    'Intellectual Property'
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-slate-900/95 backdrop-blur-md shadow-2xl py-3'
            : 'bg-gradient-to-b from-slate-900/80 to-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-amber-400/20 blur-xl rounded-full group-hover:bg-amber-400/40 transition-all duration-300"></div>
                <Scale className="w-10 h-10 text-amber-400 relative z-10 group-hover:rotate-12 transition-transform duration-300" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white tracking-tight leading-none">
                  PRESTIGE
                </span>
                <span className="text-xs text-amber-400 tracking-[0.3em] font-light uppercase">
                  Legal Partners
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              <a
                href="#home"
                className="px-5 py-2.5 text-white font-medium hover:text-amber-400 transition-colors duration-300 relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-rose-400 group-hover:w-full transition-all duration-300"></span>
              </a>

              {/* Practice Areas Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('practice')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="px-5 py-2.5 text-white font-medium hover:text-amber-400 transition-colors duration-300 flex items-center space-x-1 group">
                  <span>Practice Areas</span>
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                </button>
                {activeDropdown === 'practice' && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-lg rounded-xl shadow-2xl border border-amber-400/20 overflow-hidden">
                    {practiceAreas.map((area, index) => (
                      <a
                        key={index}
                        href={`#${area.toLowerCase().replace(' ', '-')}`}
                        className="block px-6 py-3.5 text-gray-300 hover:bg-gradient-to-r hover:from-amber-400/10 hover:to-rose-400/10 hover:text-amber-400 transition-all duration-300 border-b border-slate-700/50 last:border-b-0"
                      >
                        {area}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a
                href="#about"
                className="px-5 py-2.5 text-white font-medium hover:text-amber-400 transition-colors duration-300 relative group"
              >
                About Us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-rose-400 group-hover:w-full transition-all duration-300"></span>
              </a>

              <a
                href="#attorneys"
                className="px-5 py-2.5 text-white font-medium hover:text-amber-400 transition-colors duration-300 relative group"
              >
                Our Attorneys
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-rose-400 group-hover:w-full transition-all duration-300"></span>
              </a>

              <a
                href="#insights"
                className="px-5 py-2.5 text-white font-medium hover:text-amber-400 transition-colors duration-300 relative group"
              >
                Legal Insights
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-rose-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="tel:+1234567890"
                className="text-amber-400 font-semibold hover:text-amber-300 transition-colors duration-300"
              >
                (123) 456-7890
              </a>
              <button className="relative px-8 py-3 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 font-bold rounded-lg overflow-hidden group shadow-lg shadow-amber-400/25 hover:shadow-xl hover:shadow-amber-400/40 transition-all duration-300">
                <span className="relative z-10">Schedule Consultation</span>
                <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-slate-900/98 backdrop-blur-lg"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
        <div className="relative h-full flex flex-col justify-center items-center space-y-6 px-8 pt-24 pb-12">
          <a
            href="#home"
            className="text-3xl font-bold text-white hover:text-amber-400 transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </a>
          <div className="text-center">
            <div className="text-2xl font-semibold text-amber-400 mb-3">Practice Areas</div>
            <div className="space-y-2">
              {practiceAreas.map((area, index) => (
                <a
                  key={index}
                  href={`#${area.toLowerCase().replace(' ', '-')}`}
                  className="block text-lg text-gray-300 hover:text-amber-400 transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {area}
                </a>
              ))}
            </div>
          </div>
          <a
            href="#about"
            className="text-3xl font-bold text-white hover:text-amber-400 transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About Us
          </a>
          <a
            href="#attorneys"
            className="text-3xl font-bold text-white hover:text-amber-400 transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Our Attorneys
          </a>
          <a
            href="#insights"
            className="text-3xl font-bold text-white hover:text-amber-400 transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Legal Insights
          </a>
          <div className="pt-6 space-y-4">
            <a
              href="tel:+1234567890"
              className="block text-xl text-amber-400 font-semibold hover:text-amber-300 transition-colors duration-300"
            >
              (123) 456-7890
            </a>
            <button className="w-full px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 font-bold rounded-lg shadow-lg shadow-amber-400/25 hover:shadow-xl hover:shadow-amber-400/40 transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </>
  );
}