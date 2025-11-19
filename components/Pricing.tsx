'use client'
import { useState } from 'react'

export default function Pricing() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Transparent Legal Services Pricing</h2>
          <p className="text-xl text-gray-600">Choose the plan that fits your legal needs</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Essential Plan */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-200 hover:border-blue-500 transition-all duration-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Essential</h3>
            <div className="text-5xl font-bold text-gray-900 mb-2">$299</div>
            <div className="text-gray-600 mb-8">per month</div>
            
            <ul className="text-left space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3 text-xl">✓</span>
                <span className="text-gray-700">5 Hours of Legal Consultation</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3 text-xl">✓</span>
                <span className="text-gray-700">Document Review (up to 10 pages)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3 text-xl">✓</span>
                <span className="text-gray-700">Basic Contract Drafting</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3 text-xl">✓</span>
                <span className="text-gray-700">Email Support (48hr response)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3 text-xl">✓</span>
                <span className="text-gray-700">Monthly Legal Updates</span>
              </li>
            </ul>
            
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors duration-200">
              Get Started
            </button>
          </div>

          {/* Professional Plan - Featured */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 border-4 border-blue-600 transform md:scale-105 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-6 py-1 rounded-full text-sm font-semibold">
              Most Popular
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional</h3>
            <div className="text-5xl font-bold text-blue-600 mb-2">$599</div>
            <div className="text-gray-600 mb-8">per month</div>
            
            <ul className="text-left space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3 text-xl">✓</span>
                <span className="text-gray-700">15 Hours of Legal Consultation</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3 text-xl">✓</span>
                <span className="text-gray-700">Document Review (up to 50 pages)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3 text-xl">✓</span>
                <span className="text-gray-700">Advanced Contract Drafting</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3 text-xl">✓</span>
                <span className="text-gray-700">Priority Email & Phone Support</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3 text-xl">✓</span>
                <span className="text-gray-700">Court Representation (1 case)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3 text-xl">✓</span>
                <span className="text-gray-700">Compliance & Risk Assessment</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3 text-xl">✓</span>
                <span className="text-gray-700">Dedicated Account Manager</span>
              </li>
            </ul>
            
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors duration-200 shadow-lg">
              Get Started
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-200 hover:border-blue-500 transition-all duration-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
            <div className="text-5xl font-bold text-gray-900 mb-2">$1,299</div>
            <div className="text-gray-600 mb-8">per month</div>
            
            <ul className="text-left space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3 text-xl">✓</span>
                <span className="text-gray-700">Unlimited Legal Consultation</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3 text-xl">✓</span>
                <span className="text-gray-700">Unlimited Document Review</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3 text-xl">✓</span>
                <span className="text-gray-700">Complex Legal Drafting</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3 text-xl">✓</span>
                <span className="text-gray-700">24/7 Priority Support</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3 text-xl">✓</span>
                <span className="text-gray-700">Court Representation (3 cases)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3 text-xl">✓</span>
                <span className="text-gray-700">Full Compliance Management</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3 text-xl">✓</span>
                <span className="text-gray-700">Dedicated Legal Team</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3 text-xl">✓</span>
                <span className="text-gray-700">Quarterly Strategy Sessions</span>
              </li>
            </ul>
            
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors duration-200">
              Contact Sales
            </button>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 text-sm">All plans include secure client portal access and confidential communication channels.</p>
          <p className="text-gray-600 text-sm mt-2">Need a custom solution? <span className="text-blue-600 font-semibold cursor-pointer hover:underline">Contact us</span> for tailored pricing.</p>
        </div>
      </div>
    </section>
  );
}