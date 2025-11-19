'use client'
import { useState, FormEvent } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState('');
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    try {
      await fetch('https://deep-api-server-2moiw.kinsta.app/api/form-submissions', {
        method: 'POST',
        body: formData
      });
      setStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      setStatus('error');
    }
  };
  
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Prestige Legal Partners</h2>
          <p className="text-lg text-gray-600">Get expert legal advice. We're here to help you navigate your legal matters.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8 md:p-10">
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name *
            </label>
            <input 
              id="name"
              name="name" 
              type="text"
              required 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition duration-200 text-gray-900" 
              placeholder="John Doe" 
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address *
            </label>
            <input 
              id="email"
              name="email" 
              type="email" 
              required 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition duration-200 text-gray-900" 
              placeholder="john.doe@example.com" 
            />
          </div>

          <div className="mb-6">
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
              Phone Number *
            </label>
            <input 
              id="phone"
              name="phone" 
              type="tel" 
              required 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition duration-200 text-gray-900" 
              placeholder="(555) 123-4567" 
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
              Message *
            </label>
            <textarea 
              id="message"
              name="message" 
              required 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition duration-200 text-gray-900 resize-none" 
              rows={6} 
              placeholder="Please describe your legal matter and how we can assist you..."
            ></textarea>
          </div>

          <button 
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-0.5"
          >
            Send Message
          </button>

          {status === 'success' && (
            <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-green-800 font-medium text-center">Thank you! Your message has been sent successfully. We'll be in touch soon.</p>
            </div>
          )}

          {status === 'error' && (
            <div className="mt-6 bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-red-800 font-medium text-center">Oops! Something went wrong. Please try again or call us directly.</p>
            </div>
          )}
        </form>

        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">Or reach us directly:</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
            <a href="tel:+15551234567" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (555) 123-4567
            </a>
            <a href="mailto:info@prestigelegal.com" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info@prestigelegal.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}