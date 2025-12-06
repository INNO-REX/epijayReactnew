import { Link } from 'react-router-dom'
import homepageImage from '../assets/homepage.jpg'
import ProductsSlideshow from '../components/ProductsSlideshow'
import ServicesCarousel from '../components/ServicesCarousel'
import { contactInfo, businessHours } from '../utils/data'

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src={homepageImage}
            alt="Professional team working together"
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.7) contrast(1.1)' }}
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sky-900/80 via-orange-900/70 to-sky-800/80"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-br from-sky-400/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-tr from-orange-400/20 to-sky-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-r from-sky-300/10 to-orange-400/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center min-h-screen">
            {/* Left Content */}
            <div className="text-white text-center lg:text-left">
              <div className="mb-6 sm:mb-8 animate-fade-in-up">
                <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-sky-500/20 to-orange-500/20 rounded-full border border-sky-300/30 backdrop-blur-sm">
                  <span className="text-xs sm:text-sm font-medium text-sky-200">
                    ✨ Zambian-Owned Enterprise
                  </span>
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 animate-fade-in-up leading-tight" style={{ animationDelay: '0.2s' }}>
                <span className="bg-gradient-to-r from-sky-300 via-orange-300 to-sky-200 bg-clip-text text-transparent">
                  EPIJAY LIMITED
                </span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 sm:mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                At Epijay Limited, <span className="text-sky-300 font-semibold">fire safety</span> is at the heart of what we do.
                As a proudly Zambian-owned company, we specialize in the supply of high-quality <span className="text-orange-300 font-semibold">firefighting equipment</span> and safety solutions across Zambia.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 animate-fade-in-up justify-center lg:justify-start" style={{ animationDelay: '0.6s' }}>
                <a href="#services" className="group bg-sky-500 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-sky-600 transition-all duration-300 shadow-2xl hover:shadow-sky-500/25 transform hover:-translate-y-1 backdrop-blur-sm">
                  Explore Our Products
                  <svg className="inline-block w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                </a>
                <a href="#contact" className="group border-2 border-white/30 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-white hover:text-sky-900 transition-all duration-300 backdrop-blur-sm hover:shadow-2xl">
                  Get In Touch
                </a>
              </div>
            </div>

            {/* Right Side - Our Solutions Slideshow */}
            <div className="flex justify-center lg:justify-end">
              <ProductsSlideshow />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-sky-50/30 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 -right-20 w-96 h-96 bg-gradient-to-br from-sky-200/20 to-orange-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 -left-20 w-96 h-96 bg-gradient-to-tr from-orange-200/20 to-sky-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              Our <span className="bg-gradient-to-r from-sky-600 to-orange-500 bg-clip-text text-transparent">Products & Services</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              Epijay Limited is a trusted provider specializing in the supply of high-quality firefighting equipment and related safety solutions. Committed to protecting lives and property, we deliver reliable products tailored to meet the demanding needs of fire safety professionals, industrial operations, and public institutions.
            </p>
          </div>

          {/* Services Carousel */}
          <div className="mb-12">
            <ServicesCarousel />
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 sm:mt-16">
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Whether you operate in mining, industrial, commercial, or public sectors, we are committed to delivering the critical fire protection tools you need reliably, efficiently, and in full compliance with safety standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services" className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Browse Categories
                <svg className="inline-block w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </Link>
              <Link to="/contact" className="group bg-gradient-to-r from-sky-500 to-sky-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-sky-600 hover:to-sky-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Request a Quote
                <svg className="inline-block w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-t from-orange-50/30 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Get In <span className="bg-gradient-to-r from-sky-600 to-orange-500 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              Ready to let us run around for you? Contact us for any products or services you need assistance with.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-50 to-sky-50/50 p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl border border-gray-200/50 shadow-xl">
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">Contact Information</h3>
                  <div className="space-y-4 sm:space-y-6">
                    {contactInfo.map((contact, index) => (
                      <div key={index} className="flex items-center group">
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 ${contact.icon_bg} rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300`}>
                          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={contact.icon_path}></path>
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs sm:text-sm text-gray-500 font-medium">{contact.label}</p>
                          <span className="text-sm sm:text-base text-gray-900 font-semibold">{contact.value}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">Business Hours</h3>
                  <div className="space-y-3 sm:space-y-4">
                    {businessHours.map((hours, index) => (
                      <div key={index} className="flex justify-between items-center py-2 sm:py-3 border-b border-gray-200">
                        <span className="text-sm sm:text-base text-gray-600 font-medium">{hours.days}</span>
                        <span className="text-sm sm:text-base text-gray-900 font-semibold">{hours.time}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 sm:mt-8">
                    <Link to="/contact" className="block w-full bg-orange-500 text-white py-3 px-6 rounded-xl font-semibold hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base text-center">
                      Schedule a Meeting
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage