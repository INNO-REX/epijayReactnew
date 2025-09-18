const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <div className="bg-gradient-to-r from-primary-600 to-indigo-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact EPIJAY Limited
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us to discuss your procurement and supply chain needs. 
            We're here to help you find the right solutions for your business.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Office Locations */}
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Our Offices</h2>
              </div>
              <div className="space-y-6">
                {/* Head Office */}
                <div className="group bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-200 rounded-xl p-6 shadow-md hover:shadow-lg hover:border-blue-400 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start">
                    <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-blue-900 mb-2 group-hover:text-indigo-700 transition-colors duration-300">Head Office - Lusaka</h3>
                      <p className="text-blue-700 mb-2">
                        Plot No. 7128 House No. 6<br />
                        Zambezi Road, Roma<br />
                        Lusaka, Zambia
                      </p>
                    </div>
                  </div>
                </div>

                {/* Chingola Branch */}
                <div className="group bg-gradient-to-br from-emerald-50 to-green-100 border border-emerald-200 rounded-xl p-6 shadow-md hover:shadow-lg hover:border-emerald-400 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start">
                    <div className="bg-gradient-to-br from-emerald-500 to-green-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-emerald-900 mb-2 group-hover:text-green-700 transition-colors duration-300">Chingola Branch</h3>
                      <p className="text-emerald-700 mb-2">
                        Plot No. 769<br />
                        Nile Road<br />
                        Chingola, Zambia
                      </p>
                    </div>
                  </div>
                </div>

                {/* Solwezi Branch */}
                <div className="group bg-gradient-to-br from-purple-50 to-violet-100 border border-purple-200 rounded-xl p-6 shadow-md hover:shadow-lg hover:border-purple-400 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start">
                    <div className="bg-gradient-to-br from-purple-500 to-violet-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-purple-900 mb-2 group-hover:text-violet-700 transition-colors duration-300">Solwezi Branch</h3>
                      <p className="text-purple-700 mb-2">
                        Plot No. 17041<br />
                        Mushtala<br />
                        Solwezi, Zambia
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Methods */}
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-orange-500 to-red-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Get in Touch</h2>
              </div>
              <div className="space-y-6">
                <div className="group bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-200 rounded-xl p-6 shadow-md hover:shadow-lg hover:border-blue-400 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center">
                    <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-blue-900 group-hover:text-indigo-700 transition-colors duration-300">Email</p>
                      <p className="text-blue-700">sales@epijay.com</p>
                      <p className="text-blue-700">admin@epijay.com</p>
                      <p className="text-blue-700">support@epijay.com</p>
                    </div>
                  </div>
                </div>

                <div className="group bg-gradient-to-br from-green-50 to-emerald-100 border border-green-200 rounded-xl p-6 shadow-md hover:shadow-lg hover:border-green-400 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center">
                    <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-green-900 group-hover:text-emerald-700 transition-colors duration-300">Phone</p>
                      <p className="text-green-700">Airtel: 057 1795 471</p>
                      <p className="text-green-700">MTN: 0964 380 945</p>
                      <p className="text-green-700">Zamtel: 0957 483 353</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-gradient-to-br from-yellow-50 to-amber-100 border border-yellow-200 rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-yellow-500 to-amber-600 w-10 h-10 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-yellow-900">Business Hours</h3>
              </div>
              <div className="space-y-3 text-yellow-800">
                <div className="flex justify-between items-center bg-white bg-opacity-50 rounded-lg p-3">
                  <span className="font-medium">Monday - Friday:</span>
                  <span className="font-semibold">8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between items-center bg-white bg-opacity-50 rounded-lg p-3">
                  <span className="font-medium">Saturday:</span>
                  <span className="font-semibold">9:00 AM - 1:00 PM</span>
                </div>
                <div className="flex justify-between items-center bg-white bg-opacity-50 rounded-lg p-3">
                  <span className="font-medium">Sunday:</span>
                  <span className="font-semibold text-red-600">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage