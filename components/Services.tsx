import React from 'react';
import { Sparkles, Star, Zap, Award, Crown, Heart } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Crown,
      title: "Practice Area Showcase",
      description: "Comprehensive legal expertise across multiple disciplines",
      gradient: "from-amber-500 via-yellow-500 to-amber-600",
      bgPattern: "bg-gradient-to-br from-amber-50 to-yellow-50",
      iconBg: "bg-gradient-to-br from-amber-500 to-yellow-600",
      practices: [
        { name: "Corporate Law", specialty: "M&A, Compliance, Governance" },
        { name: "Litigation", specialty: "Trial & Appellate Advocacy" },
        { name: "Real Estate", specialty: "Commercial & Residential" },
        { name: "Family Law", specialty: "Divorce, Custody, Mediation" },
        { name: "Immigration", specialty: "Visas, Citizenship, Asylum" },
        { name: "Intellectual Property", specialty: "Patents, Trademarks, Copyright" }
      ]
    },
    {
      icon: Award,
      title: "Attorney Profiles",
      description: "Distinguished legal professionals with proven track records",
      gradient: "from-purple-500 via-indigo-500 to-purple-600",
      bgPattern: "bg-gradient-to-br from-purple-50 to-indigo-50",
      iconBg: "bg-gradient-to-br from-purple-500 to-indigo-600",
      highlights: [
        { label: "Licensed Attorneys", value: "45+", detail: "Multi-State Bar Admissions" },
        { label: "Years Combined Experience", value: "500+", detail: "Across All Practice Areas" },
        { label: "Notable Cases Won", value: "1,200+", detail: "Landmark Verdicts & Settlements" },
        { label: "Client Satisfaction", value: "98%", detail: "Exceptional Service Rating" }
      ]
    },
    {
      icon: Star,
      title: "Case Results & Testimonials",
      description: "Proven success stories with client confidentiality protected",
      gradient: "from-emerald-500 via-teal-500 to-emerald-600",
      bgPattern: "bg-gradient-to-br from-emerald-50 to-teal-50",
      iconBg: "bg-gradient-to-br from-emerald-500 to-teal-600",
      results: [
        { outcome: "$12.5M Settlement", case: "Complex Commercial Litigation", status: "Confidential" },
        { outcome: "Full Custody Granted", case: "High-Profile Family Matter", status: "Protected" },
        { outcome: "Patent Portfolio Secured", case: "Tech Startup IP Protection", status: "Sealed" },
        { outcome: "Successful Acquisition", case: "$50M Corporate Transaction", status: "NDA" }
      ]
    },
    {
      icon: Sparkles,
      title: "Legal Resources Blog",
      description: "Expert insights, analysis, and updates on evolving legal landscape",
      gradient: "from-rose-500 via-pink-500 to-rose-600",
      bgPattern: "bg-gradient-to-br from-rose-50 to-pink-50",
      iconBg: "bg-gradient-to-br from-rose-500 to-pink-600",
      articles: [
        { title: "2024 Corporate Compliance Updates", category: "Business Law", readTime: "8 min" },
        { title: "Navigating Family Law Mediation", category: "Family Law", readTime: "6 min" },
        { title: "IP Protection for Startups", category: "Intellectual Property", readTime: "10 min" },
        { title: "Real Estate Market Legal Trends", category: "Property Law", readTime: "7 min" }
      ]
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-100 to-purple-100 rounded-full mb-6 border border-amber-200 shadow-sm">
            <Zap className="w-5 h-5 text-amber-600" />
            <span className="text-sm font-semibold text-slate-800 tracking-wide uppercase">Premier Legal Services</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Excellence in Every
            <span className="bg-gradient-to-r from-amber-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent"> Legal Matter</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Prestige Legal Partners delivers sophisticated legal solutions with unwavering commitment to client success
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Service Card 1: Practice Areas */}
          <div className={`${services[0].bgPattern} rounded-3xl shadow-2xl overflow-hidden border border-amber-200 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 group`}>
            <div className="p-8">
              <div className={`${services[0].iconBg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <Crown className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-3">{services[0].title}</h3>
              <p className="text-slate-600 mb-8 text-lg">{services[0].description}</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services[0].practices.map((practice, idx) => (
                  <div key={idx} className="bg-white bg-opacity-70 backdrop-blur-sm rounded-xl p-5 border border-amber-200 hover:border-amber-400 transition-all duration-300 hover:shadow-lg">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">{practice.name}</h4>
                        <p className="text-sm text-slate-600">{practice.specialty}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Service Card 2: Attorney Profiles */}
          <div className={`${services[1].bgPattern} rounded-3xl shadow-2xl overflow-hidden border border-purple-200 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 group`}>
            <div className="p-8">
              <div className={`${services[1].iconBg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-3">{services[1].title}</h3>
              <p className="text-slate-600 mb-8 text-lg">{services[1].description}</p>
              
              <div className="grid grid-cols-2 gap-4">
                {services[1].highlights.map((highlight, idx) => (
                  <div key={idx} className="bg-white bg-opacity-70 backdrop-blur-sm rounded-xl p-6 border border-purple-200 hover:border-purple-400 transition-all duration-300 hover:shadow-lg text-center">
                    <div className={`text-4xl font-bold bg-gradient-to-r ${services[1].gradient} bg-clip-text text-transparent mb-2`}>
                      {highlight.value}
                    </div>
                    <div className="font-semibold text-slate-900 text-sm mb-1">{highlight.label}</div>
                    <div className="text-xs text-slate-600">{highlight.detail}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-white bg-opacity-70 backdrop-blur-sm rounded-xl p-5 border border-purple-200">
                <div className="flex items-center gap-3 mb-3">
                  <Heart className="w-5 h-5 text-purple-600" />
                  <span className="font-bold text-slate-900">Bar Admissions & Credentials</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Our attorneys hold admissions to state and federal bars nationwide, with specialized certifications in complex litigation, tax law, and international transactions.
                </p>
              </div>
            </div>
          </div>

          {/* Service Card 3: Case Results */}
          <div className={`${services[2].bgPattern} rounded-3xl shadow-2xl overflow-hidden border border-emerald-200 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 group`}>
            <div className="p-8">
              <div className={`${services[2].iconBg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-3">{services[2].title}</h3>
              <p className="text-slate-600 mb-8 text-lg">{services[2].description}</p>
              
              <div className="space-y-4">
                {services[2].results.map((result, idx) => (
                  <div key={idx} className="bg-white bg-opacity-70 backdrop-blur-sm rounded-xl p-6 border border-emerald-200 hover:border-emerald-400 transition-all duration-300 hover:shadow-lg">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className={`text-2xl font-bold bg-gradient-to-r ${services[2].gradient} bg-clip-text text-transparent`}>
                        {result.outcome}
                      </div>
                      <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-300">
                        {result.status}
                      </span>
                    </div>
                    <p className="text-slate-700 font-medium">{result.case}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl p-5 text-white shadow-lg">
                <p className="text-sm leading-relaxed flex items-start gap-2">
                  <span className="text-2xl">🔒</span>
                  <span><strong>Confidentiality Guarantee:</strong> All case details are protected under attorney-client privilege. Results shown are representative and details have been anonymized to protect client privacy.</span>
                </p>
              </div>
            </div>
          </div>

          {/* Service Card 4: Legal Resources Blog */}
          <div className={`${services[3].bgPattern} rounded-3xl shadow-2xl overflow-hidden border border-rose-200 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 group`}>
            <div className="p-8">
              <div className={`${services[3].iconBg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-3">{services[3].title}</h3>
              <p className="text-slate-600 mb-8 text-lg">{services[3].description}</p>
              
              <div className="space-y-4">
                {services[3].articles.map((article, idx) => (
                  <div key={idx} className="bg-white bg-opacity-70 backdrop-blur-sm rounded-xl p-6 border border-rose-200 hover:border-rose-400 transition-all duration-300 hover:shadow-lg group/article cursor-pointer">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h4 className="font-bold text-slate-900 text-lg group-hover/article:text-rose-600 transition-colors">
                        {article.title}
                      </h4>
                      <svg className="w-5 h-5 text-rose-600 flex-shrink-0 group-hover/article:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="px-3 py-1 bg-rose-100 text-rose-700 font-medium rounded-full border border-rose-300">
                        {article.category}
                      </span>
                      <span className="text-slate-600 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {article.readTime} read
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-white bg-opacity-70 backdrop-blur-sm rounded-xl p-5 border border-rose-200">
                <button className="w-full bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2">
                  <span>Explore All Resources</span>
                  <Zap className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl shadow-2xl overflow-hidden border border-slate-700">
          <div className="p-12 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-purple-500 rounded-full mb-6 shadow-lg">
              <Crown className="w-5 h-5 text-white" />
              <span className="text-sm font-bold text-white tracking-wide uppercase">Schedule Your Consultation</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Experience Legal Excellence?
            </h3>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Connect with our distinguished legal team for a confidential consultation tailored to your unique needs
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-slate-900 font-bold py-4 px-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center gap-2">
                <span>Book Consultation</span>
                <Award className="w-5 h-5" />
              </button>
              <button className="bg-white bg-opacity-10 backdrop-blur-sm hover:bg-opacity-20 text-white font-bold py-4 px-8 rounded-xl border-2 border-white border-opacity-30 transition-all duration-300 hover:border-opacity-50 flex items-center gap-2">
                <span>Call (555) 123-4567</span>
                <Heart className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Services;