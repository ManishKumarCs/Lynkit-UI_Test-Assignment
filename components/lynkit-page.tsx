'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Menu, X, Star, Play } from 'lucide-react'
import TrackingMap from './tracking-map'
import AnalyticsPage from './analytics-page'

export default function LynkitPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [newsCarouselIndex, setNewsCarouselIndex] = useState(0)
  const [currentPage, setCurrentPage] = useState<'home' | 'analytics'>('home')

  const products = [
    { id: 1, name: 'Lynktrac', icon: '📦' },
    { id: 2, name: 'LynkFlow', icon: '🔄' },
    { id: 3, name: 'LynkHub', icon: '🌐' },
    { id: 4, name: 'LynkShield', icon: '🛡️' },
    { id: 5, name: 'LynkAnalytics', icon: '📊' },
    { id: 6, name: 'LynkAI', icon: '🤖' },
  ]

  const newsItems = [
    {
      title: 'Lynkit Raises Series B Funding',
      description: 'Securing $25M to accelerate supply chain innovation',
      image: '📰',
    },
    {
      title: 'Partnership with Global Logistics Leader',
      description: 'Expanding capabilities across 50+ countries',
      image: '🤝',
    },
    {
      title: 'AI-Powered Forecasting Launched',
      description: 'Revolutionary predictive analytics for supply chains',
      image: '🚀',
    },
    {
      title: 'Industry Award Recognition',
      description: 'Best Supply Chain SaaS Platform 2025',
      image: '🏆',
    },
  ]

  const testimonials = [
    {
      name: 'Haier',
      quote: 'Lynkit has transformed our supply chain operations. The real-time visibility and automated workflows have reduced our delivery times by 40% and significantly improved customer satisfaction.',
    },
  ]

  const reviews = [
    {
      company: 'Effective Work with Great Support',
      rating: 5,
      text: 'The platform is intuitive and the support team is exceptionally responsive. Implementation was smooth and our team was productive within days.',
    },
    {
      company: 'Next-gen Logistics Platform',
      rating: 5,
      text: 'Finally, a supply chain solution that understands modern logistics challenges. The automation features alone have saved us thousands of hours annually.',
    },
    {
      company: 'LynkFlow Game Changer',
      rating: 5,
      text: 'Integration with our existing systems was seamless. LynkFlow has revolutionized how we manage our inventory and order fulfillment.',
    },
    {
      company: 'LynkHub exceeds Expectations',
      rating: 5,
      text: 'A comprehensive ecosystem that truly orchestrates efficiency. The platform is feature-rich yet easy to use across our entire organization.',
    },
  ]

  const customers = [
    'Samsung', 'Siemens', 'Nike', 'H&M', 'Decathlon', 'Sports',
    'Flipkart', 'KACL', 'LG', 'Hyundai', 'Samsung', 'H&M', 'JCB', 'Haribo', 'Ratan Tata'
  ]

  const nextNews = () => {
    setNewsCarouselIndex((prev) => (prev + 1) % newsItems.length)
  }

  const prevNews = () => {
    setNewsCarouselIndex((prev) => (prev - 1 + newsItems.length) % newsItems.length)
  }

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b border-orange-600/20">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold">
            <span className="text-orange-500">●</span>
            <span className="ml-2">Lynkit</span>
          </div>
          
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => setCurrentPage('home')} className={`transition ${currentPage === 'home' ? 'text-white' : 'text-gray-300 hover:text-white'}`}>Home</button>
            <button onClick={() => setCurrentPage('analytics')} className={`transition ${currentPage === 'analytics' ? 'text-orange-500' : 'text-gray-300 hover:text-white'}`}>Analytics</button>
            <a href="#" className="text-gray-300 hover:text-white transition">Company</a>
            <a href="#" className="text-gray-300 hover:text-white transition">Resources</a>
            <a href="#" className="text-gray-300 hover:text-white transition">Blog</a>
            <button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-6 py-2 rounded transition">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Conditional Page Rendering */}
      {currentPage === 'analytics' ? (
        <AnalyticsPage />
      ) : (
        <>
          {/* Hero Section */}
          <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-20 right-0 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl"></div>
            </div>
            
            <div className="max-w-6xl mx-auto relative z-10">
              <div className="mb-12 inline-block px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full">
                <span className="text-orange-400 text-sm font-medium">Supply Chain Excellence</span>
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="text-orange-500">Orchestrating</span>
                <br />
                <span className="text-orange-500">Efficiency</span>
              </h1>
              
              <p className="text-xl text-gray-400 mb-8 max-w-2xl">
                Transform your supply chain with AI-powered visibility, automation, and intelligence. Connect every stakeholder, optimize every process, and deliver exceptional results.
              </p>
              
              <div className="flex gap-4">
                <button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-3 rounded transition">
                  Start Free Trial
                </button>
                <button className="border border-gray-600 hover:border-gray-400 text-white font-semibold px-8 py-3 rounded transition flex items-center gap-2">
                  <Play size={20} /> Watch Demo
                </button>
              </div>
            </div>

            {/* Hero Image Area */}
            <div className="mt-20 max-w-5xl mx-auto">
              <div className="bg-gradient-to-b from-gray-800/30 to-black border border-gray-700/50 rounded-lg h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">📊</div>
                  <p className="text-gray-400">Supply Chain Visualization</p>
                </div>
              </div>
            </div>
          </section>

          {/* Products Section */}
          <section className="py-20 px-4 bg-black">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-center">Our Products</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
                {products.map((product, idx) => (
                  <button
                    key={product.id}
                    className={`p-4 rounded-lg border transition ${
                      idx === 0
                        ? 'bg-orange-500/20 border-orange-500 text-orange-400'
                        : 'bg-gray-900/50 border-gray-700 text-gray-300 hover:border-gray-600'
                    }`}
                  >
                    <div className="text-2xl mb-2">{product.icon}</div>
                    <p className="text-sm font-medium">{product.name}</p>
                  </button>
                ))}
              </div>

              {/* Product Detail */}
              <div className="grid md:grid-cols-2 gap-12 items-center bg-gray-900/30 p-8 rounded-lg border border-gray-800">
                <div>
                  <h3 className="text-3xl font-bold mb-6">Cargo Tracking and Security</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    Real-time tracking of your entire cargo operations with advanced security protocols. Monitor shipments across every stage, from warehouse to final delivery. Our intelligent system provides complete visibility, predictive alerts, and automated compliance reporting to ensure your goods arrive safely and on time.
                  </p>
                  <button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-6 py-2 rounded transition">
                    Explore Lynktrac
                  </button>
                </div>
                <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/20 rounded-lg h-80 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">📦</div>
                    <p className="text-gray-400">Cargo Tracking Interface</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 7 Products Stats */}
          <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">7 Products, Big Numbers</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { number: '90,000+', label: 'Shipments Tracked Daily' },
                  { number: '150+', label: 'Countries Connected' },
                  { number: '$500M+', label: 'Cargo Managed' },
                  { number: '99.9%', label: 'Uptime Guarantee' },
                  { number: '5,000+', label: 'Active Customers' },
                  { number: '24/7', label: 'Support Available' },
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className={`p-6 rounded-lg border ${
                      idx < 2
                        ? 'bg-orange-500/20 border-orange-500 col-span-2 md:col-span-1'
                        : 'bg-gray-800/50 border-gray-700'
                    }`}
                  >
                    <div className="text-2xl md:text-3xl font-bold text-orange-400 mb-2">
                      {stat.number}
                    </div>
                    <p className="text-sm text-gray-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-20 px-4 bg-black">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Testimonials</h2>
              
              {testimonials.map((testimonial, idx) => (
                <div key={idx} className="bg-gray-900/50 border border-gray-800 rounded-lg p-8 text-center">
                  <div className="text-6xl text-blue-500 mb-4">"</div>
                  <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                    {testimonial.quote}
                  </p>
                  <p className="text-orange-400 font-semibold">{testimonial.name}</p>
                  <div className="text-6xl text-blue-500 mt-4 text-right">"</div>
                </div>
              ))}
            </div>
          </section>

          {/* Reviews */}
          <section className="py-20 px-4 bg-gray-900/30">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">
                <span className="text-orange-500">Lynkit</span> Reviews
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {reviews.map((review, idx) => (
                  <div key={idx} className="bg-gray-900/50 border border-orange-500/20 rounded-lg p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="text-orange-500">★</div>
                      <div className="flex gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <span key={i} className="text-yellow-500">★</span>
                        ))}
                      </div>
                    </div>
                    <h3 className="font-bold mb-3">{review.company}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{review.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Vision Section */}
          <section className="py-20 px-4 bg-black">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">
                Our Vision: Transforming Supply Chains for a Sustainable Future
              </h2>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="bg-gray-800/30 border border-gray-700 rounded-lg h-80 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🌍</div>
                    <p className="text-gray-400">Global Impact</p>
                  </div>
                </div>
                
                <div>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    We believe supply chains are the backbone of global commerce, and they deserve better. By combining cutting-edge AI, real-time visibility, and sustainable practices, we're reimagining logistics for the modern world. Our platform empowers businesses to move goods smarter, faster, and greener while maintaining unprecedented control and transparency.
                  </p>
                  <button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-6 py-2 rounded transition">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Enterprise Section */}
          <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">For Enterprise</h2>
              
              <div className="grid md:grid-cols-5 gap-4">
                {[
                  'Custom Integrations',
                  'Dedicated Support',
                  'Advanced Analytics',
                  'Custom Workflows',
                  'Security & Compliance',
                ].map((feature, idx) => (
                  <div
                    key={idx}
                    className="border border-orange-500/30 bg-orange-500/5 rounded-lg p-6 text-center transform hover:scale-105 transition"
                  >
                    <div className="text-3xl mb-3 text-orange-500">◇</div>
                    <p className="font-semibold">{feature}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-3 rounded transition">
                  Contact Sales
                </button>
              </div>
            </div>
          </section>

          {/* Customers Section */}
          <section className="py-20 px-4 bg-black">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Our Customers</h2>
              
              <div className="grid grid-cols-3 md:grid-cols-5 gap-8 items-center justify-center mb-8">
                {customers.slice(0, 15).map((customer, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-4xl font-bold text-gray-600 mb-2">{customer.charAt(0)}</div>
                    <p className="text-sm text-gray-400">{customer}</p>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <p className="text-gray-400">+ 5,500 more</p>
              </div>
            </div>
          </section>

          {/* News Section */}
          <section className="py-20 px-4 bg-gray-900/30">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">
                <span className="text-orange-500">Lynkit</span> in the News
              </h2>
              
              <div className="flex items-center gap-4 mb-8">
                <button
                  onClick={prevNews}
                  className="p-2 bg-orange-500/20 border border-orange-500/50 rounded-lg hover:bg-orange-500/30 transition"
                >
                  <ChevronLeft className="text-orange-400" />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 flex-1">
                  {newsItems.map((news, idx) => (
                    <div
                      key={idx}
                      className={`bg-gray-900/50 border border-gray-700 rounded-lg p-6 transition ${
                        idx === newsCarouselIndex ? 'border-orange-500 scale-105' : 'opacity-50'
                      }`}
                    >
                      <div className="text-4xl mb-4">{news.image}</div>
                      <h3 className="font-bold mb-2">{news.title}</h3>
                      <p className="text-sm text-gray-400">{news.description}</p>
                    </div>
                  ))}
                </div>

                <button
                  onClick={nextNews}
                  className="p-2 bg-orange-500/20 border border-orange-500/50 rounded-lg hover:bg-orange-500/30 transition"
                >
                  <ChevronRight className="text-orange-400" />
                </button>
              </div>
            </div>
          </section>

          {/* Awards Section */}
          <section className="py-20 px-4 bg-black">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Our Awards</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                {[
                  '🏆 Best Innovation',
                  '🥇 Industry Leader',
                  '⭐ Top Rated',
                  '🎯 Excellence Award',
                  '🚀 Growth Champion',
                  '💡 Most Innovative',
                  '🏅 Customer Choice',
                  '📈 Market Leader',
                  '🌟 5-Star Rated',
                  '👑 Industry Excellence',
                ].map((award, idx) => (
                  <div
                    key={idx}
                    className="border-2 border-orange-500/30 rounded-full p-6 text-center hover:border-orange-500/60 transition"
                  >
                    <p className="text-sm font-semibold text-gray-300">{award}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4 bg-gradient-to-r from-orange-600 to-orange-500">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center text-black">Schedule a Demo</h2>
              
              <div className="flex gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded bg-white/10 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:border-white"
                />
                <button className="bg-black hover:bg-gray-900 text-white font-semibold px-6 py-3 rounded transition">
                  Schedule
                </button>
              </div>
            </div>
          </section>

          {/* Map & Monitoring Section */}
          <section className="py-20 px-4 bg-black">
            <div className="max-w-6xl mx-auto">
              {/* Monitoring Metrics */}
              <h3 className="text-2xl font-bold mb-8 text-white">Monitoring</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
                {[
                  { label: 'Total Ongoing Trips', value: '135' },
                  { label: 'Tampered trip', value: '13' },
                  { label: 'Inside Viewpoint', value: '7' },
                  { label: 'Over stoppage trips', value: '381' },
                  { label: 'Nearby destination', value: '5' },
                ].map((metric, idx) => (
                  <div
                    key={idx}
                    className="border-2 border-orange-500/50 rounded-lg p-4 hover:border-orange-500 transition"
                  >
                    <p className="text-gray-400 text-sm mb-2">{metric.label}</p>
                    <p className="text-3xl font-bold text-orange-500">{metric.value}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
                {[
                  { label: 'Total Devices', value: '1,433' },
                  { label: 'Unlocked Devices', value: '591' },
                  { label: 'Tampered devices', value: '190' },
                  { label: 'Locked Devices', value: '793' },
                  { label: 'Motor Unlocked devices', value: '198' },
                ].map((metric, idx) => (
                  <div
                    key={idx}
                    className="border-2 border-orange-500/50 rounded-lg p-4 hover:border-orange-500 transition"
                  >
                    <p className="text-gray-400 text-sm mb-2">{metric.label}</p>
                    <p className="text-3xl font-bold text-orange-500">{metric.value}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                {[
                  { label: 'Moving Devices', value: '582' },
                  { label: 'Moving Unlocked', value: '687' },
                ].map((metric, idx) => (
                  <div
                    key={idx}
                    className="border-2 border-orange-500/50 rounded-lg p-4 hover:border-orange-500 transition"
                  >
                    <p className="text-gray-400 text-sm mb-2">{metric.label}</p>
                    <p className="text-3xl font-bold text-orange-500">{metric.value}</p>
                  </div>
                ))}
              </div>

              {/* Interactive Tracking Map */}
              <TrackingMap />
            </div>
          </section>

        </>
      )}
      <footer className="bg-black border-t border-gray-800 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <p className="font-bold mb-4">
                <span className="text-orange-500">●</span> Lynkit
              </p>
              <p className="text-gray-400 text-sm">
                Orchestrating efficiency in global supply chains
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Lynktrac</a></li>
                <li><a href="#" className="hover:text-white transition">LynkFlow</a></li>
                <li><a href="#" className="hover:text-white transition">LynkHub</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>hello@lynkit.in</li>
                <li className="flex gap-4 pt-4">
                  <a href="#" className="hover:text-white transition">Twitter</a>
                  <a href="#" className="hover:text-white transition">LinkedIn</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; 2025 Lynkit. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
