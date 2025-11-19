'use client';

import { ArrowRight, Award, Shield, Users, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { icon: Award, value: '40+', label: 'Years Combined Experience' },
    { icon: Users, value: '2,500+', label: 'Cases Won' },
    { icon: Shield, value: '98%', label: 'Success Rate' }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-screen Unsplash Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop"
          alt="Legal office"
          className="w-full h-full object-cover"
        />
        {/* Multi-layered Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-rose-900/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        
        {/* Animated Decorative Elements */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-rose-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-400/20 to-rose-400/20 backdrop-blur-sm border border-amber-400/30 rounded-full px-6 py-3 mb-8">
            <Shield className="w-5 h-5 text-amber-400" />
            <span className="text-amber-400 font-semibold tracking-wide">Elite Legal Representation Since 1983</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-none">
            Protecting Your
            <span className="block mt-2 bg-gradient-to-r from-amber-400 via-amber-300 to-rose-400 bg-clip-text text-transparent">
              Rights & Legacy
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed font-light">
            Sophisticated legal solutions delivered with precision, integrity, and an unwavering commitment to excellence.
          </p>

          {/* Decorative Line */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
            <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
            <button className="group relative px-10 py-5 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 font-bold text-lg rounded-xl overflow-hidden shadow-2xl shadow-amber-400/30 hover:shadow-amber-400/50 transition-all duration-300 hover:scale-105">
              <span className="relative z-10 flex items-center space-x-2">
                <span>Free Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button className="group px-10 py-5 bg-white/5 backdrop-blur-sm text-white font-bold text-lg rounded-xl border-2 border-white/20 hover:border-amber-400/50 hover:bg-white/10 transition-all duration-300 flex items-center space-x-2">
              <span>Explore Services</span>
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 delay-${(index + 3) * 200} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="relative group">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-rose-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                  
                  {/* Card */}
                  <div className="relative bg-slate-800/40 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-amber-400/30 transition-all duration-300">
                    <div className="flex justify-center mb-4">
                      <div className="p-4 bg-gradient-to-br from-amber-400/20 to-rose-400/20 rounded-xl">
                        <stat.icon className="w-8 h-8 text-amber-400" strokeWidth={1.5} />
                      </div>
                    </div>
                    <div className="text-5xl font-bold text-white mb-2 bg-gradient-to-r from-white to-amber-400 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 font-medium">{stat.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-amber-400 text-sm font-semibold tracking-wider uppercase">Scroll to Explore</span>
            <ChevronDown className="w-6 h-6 text-amber-400" />
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent z-10"></div>
    </section>
  );
}