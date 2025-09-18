import { useState, useEffect } from 'react'

const ProductsSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    {
      title: "Safety & Protective Solutions",
      description: "We provide safety and protective solutions to keep your workforce and workplace secure. Our range includes Personal Protective Equipment (PPE), firefighting equipment, and security products built for reliability. We also supply corporate clothing and branding to strengthen your company's image.",
      features: ["Personal Protective Equipment (PPE)", "Firefighting Equipment", "Corporate Clothing & Branding"],
      color: "red"
    },
    {
      title: "Industrial & Engineering Supplies",
      description: "We keep your operations running with reliable industrial and engineering products. Our supplies include welding equipment, engineering spares, hardware, and conveyor accessories. We also provide filters, transmission vee belts, OEM spares, and mining equipment to support critical systems.",
      features: ["Welding Equipment & Engineering Spares", "Hardware & Conveyor Accessories", "Filters & Transmission Vee Belts"],
      color: "blue"
    },
    {
      title: "Electrical & Energy Solutions",
      description: "We deliver modern power and electronic components for various industrial and commercial applications. Our products include quality electronics, electrical parts, and efficient solar equipment. Every solution is chosen for reliability, compliance, and cost-effectiveness.",
      features: ["Quality Electronics & Electrical Parts", "Efficient Solar Equipment", "Industrial & Commercial Applications"],
      color: "yellow"
    },
    {
      title: "Chemical & Environmental Solutions",
      description: "We supply safe, effective chemicals to support sustainable operations. Our range covers industrial and cleaning chemicals backed by expert usage guidance. We also provide specialized training and consultancy, including Environmental Hazardous Material Management (Hazmat).",
      features: ["Industrial & Cleaning Chemicals", "Expert Usage Guidance", "Environmental Hazmat Management"],
      color: "green"
    },
    {
      title: "Measurement & Instrumentation",
      description: "We provide accurate measurement and monitoring tools to maintain operational standards. Our portfolio includes instrument calibration devices, weighing systems, and occupational hygiene equipment. Each product offers precision, durability, and regulatory compliance.",
      features: ["Instrument Calibration Devices", "Weighing Systems", "Occupational Hygiene Equipment"],
      color: "purple"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [slides.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const getColorClasses = (color) => {
    const colorMap = {
      red: {
        bg: 'bg-red-500/20',
        text: 'text-red-300',
        accent: 'text-red-200',
        dot: 'bg-red-400'
      },
      blue: {
        bg: 'bg-blue-500/20',
        text: 'text-blue-300',
        accent: 'text-blue-200',
        dot: 'bg-blue-400'
      },
      yellow: {
        bg: 'bg-yellow-500/20',
        text: 'text-yellow-300',
        accent: 'text-yellow-200',
        dot: 'bg-yellow-400'
      },
      green: {
        bg: 'bg-green-500/20',
        text: 'text-green-300',
        accent: 'text-green-200',
        dot: 'bg-green-400'
      },
      purple: {
        bg: 'bg-purple-500/20',
        text: 'text-purple-300',
        accent: 'text-purple-200',
        dot: 'bg-purple-400'
      }
    }
    return colorMap[color] || colorMap.red
  }

  const getIconPath = (color) => {
    const iconMap = {
      red: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      blue: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
      yellow: "M13 10V3L4 14h7v7l9-11h-7z",
      green: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
      purple: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    }
    return iconMap[color] || iconMap.red
  }

  return (
    <div className="relative overflow-hidden h-[600px]">
      <div className="slideshow-container h-full">
        {slides.map((slide, index) => {
          const colors = getColorClasses(slide.color)
          return (
            <div 
              key={index}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
              style={{ 
                display: index === currentSlide ? 'block' : 'none'
              }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl max-w-xl w-full">
                <div className="text-center">
                  <div className={`w-14 h-14 ${colors.bg} rounded-full flex items-center justify-center mx-auto mb-5`}>
                    <svg className={`w-7 h-7 ${colors.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={getIconPath(slide.color)}></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{slide.title}</h3>
                  <p className={`${colors.accent} text-lg mb-5 leading-relaxed`}>
                    {slide.description}
                  </p>
                  <div className="space-y-2 text-sm text-gray-200">
                    {slide.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center justify-center">
                        <div className={`w-2 h-2 ${colors.dot} rounded-full mr-2`}></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-8 space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`slide-dot w-3 h-3 rounded-full transition-all duration-300 hover:bg-white/80 ${
              index === currentSlide ? 'bg-white/80' : 'bg-white/50'
            }`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  )
}

export default ProductsSlideshow

