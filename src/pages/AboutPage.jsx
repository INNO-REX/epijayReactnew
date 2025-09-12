const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About EPIJAY Limited
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A proudly Zambian-owned enterprise, with the majority of its shares held by a female stakeholder. 
            Established to provide unique logistical and supply chain support across Zambia, Africa, and the global market.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-6">
              EPIJAY Limited is a proudly Zambian-owned enterprise, with the majority of its shares held 
              by a female stakeholder. Established to provide unique logistical and supply chain support, 
              the company has grown into a trusted partner for both local and international clients.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Headquartered in Lusaka, with additional offices in Chingola and Solwezi, EPIJAY Limited 
              is strategically positioned to deliver reliable procurement and supply solutions across 
              Zambia, Africa, and the global market.
            </p>
            <p className="text-lg text-gray-600">
              Our growing network of partners is proof of the trust we continue to build in the market, 
              serving diverse clientele across industries such as mining, construction, manufacturing, 
              logistics, energy, and government institutions.
            </p>
          </div>
          <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg p-8">
            <div className="text-center">
              <div className="bg-primary-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">E</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 mb-6">
                To become a leading regional procurement and supply chain company, recognized for 
                reliability, innovation, and customer-focused service.
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To bridge the gap between businesses and the products or services they need, by sourcing 
                quality, hard-to-find items with speed, efficiency, and cost-effectiveness.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Integrity</h3>
              <p className="text-gray-600">
                We deliver what we promise.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600">
                We provide the highest standard of service.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Reliability</h3>
              <p className="text-gray-600">
                Clients can depend on us anytime, anywhere.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Partnership</h3>
              <p className="text-gray-600">
                We believe in building lasting relationships.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose EPIJAY Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose EPIJAY Limited?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Extensive Supplier Network</h3>
              <p className="text-gray-600">
                Strong partnerships with local and international manufacturers ensure access to quality products.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Tailored Solutions</h3>
              <p className="text-gray-600">
                Customized procurement services to suit clients' specific needs and requirements.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Time-Saving Efficiency</h3>
              <p className="text-gray-600">
                We source and deliver so your team can focus on core operations and business growth.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Competitive Pricing</h3>
              <p className="text-gray-600">
                Ensuring value without compromising on quality, delivering cost-effective solutions.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Regional Presence</h3>
              <p className="text-gray-600">
                Offices and networks across Zambia and beyond, providing local support and expertise.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Industry Expertise</h3>
              <p className="text-gray-600">
                Serving diverse industries including mining, construction, manufacturing, and government institutions.
              </p>
            </div>
          </div>
        </div>

        {/* Our Clients Section */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Clients and Partners</h2>
          <p className="text-lg text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            We serve a diverse clientele across industries such as mining, construction, manufacturing, 
            logistics, energy, and government institutions. Our growing network of partners is proof of 
            the trust we continue to build in the market.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900">Mining Companies</h3>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900">Manufacturing</h3>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900">Retail & Commerce</h3>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900">Banks</h3>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900">Health Industry</h3>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900">Government</h3>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900">Energy Sector</h3>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900">Construction</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
