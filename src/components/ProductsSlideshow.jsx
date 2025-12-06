import { useState, useEffect } from 'react'

const ProductsSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    {
      title: "Fire Detection & Suppression Systems",
      description: "We supply advanced fire alarms, smoke detectors, and suppression systems designed to provide early warnings and rapid response in case of fire outbreaks. Our systems ensure maximum protection for your facility and personnel.",
      features: ["Fire Alarms & Smoke Detectors", "Suppression Systems", "Early Warning Technology"],
      color: "red"
    },
    {
      title: "Portable & Fixed Firefighting Equipment",
      description: "Our comprehensive product line includes fire extinguishers (all types), hose reels, hydrants, and sprinkler systems, offering reliable protection for homes, offices, and industrial facilities.",
      features: ["Fire Extinguishers (All Types)", "Hose Reels & Hydrants", "Sprinkler Systems"],
      color: "orange"
    },
    {
      title: "Firefighter Protective Gear",
      description: "Epijay Limited provides high-quality firefighting suits, helmets, boots, and breathing apparatus that ensure maximum safety and comfort for frontline firefighting professionals.",
      features: ["Firefighting Suits", "Helmets & Boots", "Breathing Apparatus"],
      color: "red"
    },
    {
      title: "Workplace Personal Protective Equipment",
      description: "We supply a full range of PPE, including safety helmets, reflective clothing, safety harnesses, gloves, and protective eyewear to keep workers safe in high-risk environments.",
      features: ["Safety Helmets & Reflective Clothing", "Safety Harnesses", "Protective Eyewear & Gloves"],
      color: "blue"
    },
    {
      title: "Safety Accessories & Training Support",
      description: "Beyond equipment, we provide safety signage, fire blankets, first aid kits, and training support to ensure proper usage of firefighting and PPE solutions.",
      features: ["Safety Signage & Fire Blankets", "First Aid Kits", "Training & Support Services"],
      color: "green"
    },
    {
      title: "Corporate Clothing & Branding",
      description: "Professional corporate wear and innovative branding solutions to enhance your company's identity. We help create a cohesive brand presence that reflects your company's values and professionalism.",
      features: ["Custom Work Uniforms", "Branded Apparel", "Corporate Branding Solutions"],
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
      orange: {
        bg: 'bg-orange-500/20',
        text: 'text-orange-300',
        accent: 'text-orange-200',
        dot: 'bg-orange-400'
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
      red: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
      orange: "M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z",
      blue: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      yellow: "M13 10V3L4 14h7v7l9-11h-7z",
      green: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
      purple: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
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

