import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Prestige Legal Partners | Expert Legal Counsel',
  description: 'Distinguished legal representation with decades of experience in corporate law, litigation, and legal advisory services.',
  keywords: 'legal services, law firm, corporate law, litigation, legal counsel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className={`${inter.className} bg-slate-50 text-gray-900 antialiased`}>
        <header className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-amber-600/20 shadow-xl sticky top-0 z-50 backdrop-blur-sm">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <div>
                  <h1 className={`${playfair.className} text-2xl font-bold text-white tracking-tight`}>
                    Prestige Legal Partners
                  </h1>
                  <p className="text-amber-400 text-xs tracking-widest uppercase">Attorneys at Law</p>
                </div>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <a href="#services" className="text-gray-200 hover:text-amber-400 transition-colors duration-300 font-medium text-sm tracking-wide">
                  Services
                </a>
                <a href="#expertise" className="text-gray-200 hover:text-amber-400 transition-colors duration-300 font-medium text-sm tracking-wide">
                  Expertise
                </a>
                <a href="#team" className="text-gray-200 hover:text-amber-400 transition-colors duration-300 font-medium text-sm tracking-wide">
                  Our Team
                </a>
                <a href="#testimonials" className="text-gray-200 hover:text-amber-400 transition-colors duration-300 font-medium text-sm tracking-wide">
                  Testimonials
                </a>
                <a href="#contact" className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  Schedule Consultation
                </a>
              </div>
              <button className="md:hidden text-white p-2 hover:bg-slate-700 rounded-lg transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </nav>
        </header>
        
        <main className="min-h-screen">
          {children}
        </main>
        
        <footer className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-gray-300 py-16 border-t border-amber-600/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div className="col-span-1 md:col-span-2">
                <h3 className={`${playfair.className} text-3xl font-bold text-white mb-4`}>
                  Prestige Legal Partners
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Providing distinguished legal representation with integrity, expertise, and unwavering commitment to our clients' success.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-slate-700 hover:bg-amber-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-slate-700 hover:bg-amber-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-slate-700 hover:bg-amber-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
              
              <div>
                <h4 className={`${playfair.className} text-xl font-bold text-white mb-4`}>Practice Areas</h4>
                <ul className="space-y-3">
                  <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">Corporate Law</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">Civil Litigation</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">Real Estate</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">Estate Planning</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">Intellectual Property</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className={`${playfair.className} text-xl font-bold text-white mb-4`}>Contact</h4>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>500 Madison Avenue<br />New York, NY 10022</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-amber-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>(212) 555-0100</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-amber-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>contact@prestigelegal.com</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-slate-700 mt-12 pt-8 text-center">
              <p className="text-gray-500 text-sm">
                © 2024 Prestige Legal Partners. All rights reserved. | 
                <a href="#" className="text-amber-400 hover:text-amber-300 ml-2">Privacy Policy</a> | 
                <a href="#" className="text-amber-400 hover:text-amber-300 ml-2">Terms of Service</a>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
