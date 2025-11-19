import React from 'react';
import Image from 'next/image';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Mitchell",
      role: "Small Business Owner",
      avatar: "https://i.pravatar.cc/150?img=47",
      content: "After my business partner suddenly left, I was drowning in legal complexities I didn't understand. Prestige Legal Partners didn't just handle my case—they held my hand through the darkest period of my professional life. Their compassion matched their expertise, and today my business is thriving again.",
      case: "Business Dissolution & Recovery",
      rating: 5,
      highlight: "They saved my livelihood"
    },
    {
      id: 2,
      name: "Marcus Chen",
      role: "Father & Advocate",
      avatar: "https://i.pravatar.cc/150?img=33",
      content: "Winning custody of my daughter felt impossible. Every other lawyer treated me like just another case number. But the team at Prestige Legal Partners fought for us like we were family. They saw my tears, heard my fears, and turned my desperation into hope. Now I tuck my daughter in every night.",
      case: "Family Law & Custody",
      rating: 5,
      highlight: "They reunited our family"
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      role: "Accident Survivor",
      avatar: "https://i.pravatar.cc/150?img=45",
      content: "The accident left me with injuries, medical bills, and zero income. The insurance company offered pennies. Prestige Legal Partners saw my struggle and took my case with such fierce determination. They didn't just win—they secured my future. I'm walking again, debt-free, and finally have peace of mind.",
      case: "Personal Injury Settlement",
      rating: 5,
      highlight: "They gave me my life back"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-2 rounded-full">
              Client Stories
            </span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Lives Changed, Justice Served
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Behind every case is a real person, a real struggle, and a real victory. 
            These are the stories that remind us why we fight for justice every single day.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 flex flex-col"
            >
              {/* Rating Stars */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Highlight Badge */}
              <div className="mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold px-4 py-2 rounded-full inline-block">
                  {testimonial.highlight}
                </span>
              </div>

              {/* Testimonial Content */}
              <blockquote className="flex-grow mb-6">
                <p className="text-gray-700 leading-relaxed italic text-base">
                  "{testimonial.content}"
                </p>
              </blockquote>

              {/* Case Type */}
              <div className="mb-6 pb-6 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="text-sm font-semibold text-blue-600">
                    {testimonial.case}
                  </span>
                </div>
              </div>

              {/* Client Info */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-blue-100"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-green-500 w-5 h-5 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Verified Badge */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">Verified Client</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-2xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Your Story Deserves a Happy Ending
            </h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Every victory starts with a conversation. Let us hear your story and show you 
              how we can help write the next chapter together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-blue-600 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Schedule Free Consultation
              </button>
              <button className="bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300">
                Call (555) 123-4567
              </button>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600 text-sm font-medium">Cases Won</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-gray-600 text-sm font-medium">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">$50M+</div>
            <div className="text-gray-600 text-sm font-medium">Recovered</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">25+</div>
            <div className="text-gray-600 text-sm font-medium">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}