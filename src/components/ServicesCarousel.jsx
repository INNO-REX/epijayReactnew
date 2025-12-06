import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import safetyImage from '../assets/Safety & Protective Solutions.jpg'
import industrialImage from '../assets/Industrial & Engineering Supplies.jpg'
import electricalImage from '../assets/Electrical & Energy Solutions.jpg'
import chemicalImage from '../assets/Chemical & Environmental Solutions.jpg'
import corporateImage from '../assets/corporate branding.png'

const ServicesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const services = [
    {
      id: 1,
      title: "Safety & Protective Solutions",
      description: "Comprehensive firefighting equipment, firefighter protective gear, workplace PPE, and safety accessories designed to protect lives and property. Our extensive range ensures maximum safety for professionals working in high-risk environments.",
      image: safetyImage,
      tags: ["Fire Safety", "PPE"],
      gradient: "from-sky-600/90 to-sky-800/90",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      accentColor: "sky"
    },
    {
      id: 2,
      title: "Fire Detection & Suppression",
      description: "Advanced fire alarms, smoke detectors, suppression systems, fire extinguishers, hose reels, hydrants, and sprinkler systems for complete fire protection. State-of-the-art technology ensures early detection and rapid response to fire emergencies.",
      image: industrialImage,
      tags: ["Detection", "Suppression"],
      gradient: "from-orange-600/90 to-red-700/90",
      icon: "M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z",
      accentColor: "orange"
    },
    {
      id: 3,
      title: "Firefighting Equipment",
      description: "Complete range of fire extinguishers (all types), fire blankets, fire hoses, nozzles, and portable firefighting equipment for immediate response. Reliable, certified equipment ready for deployment when every second counts.",
      image: electricalImage,
      tags: ["Extinguishers", "Equipment"],
      gradient: "from-sky-600/90 to-blue-800/90",
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      accentColor: "sky"
    },
    {
      id: 4,
      title: "Maintenance & Services",
      description: "Fire fighting maintenance, installations, occupational hygiene surveys, specialized training, consultancy, and first aid equipment with training support. Expert services to keep your safety systems operating at peak performance.",
      image: chemicalImage,
      tags: ["Maintenance", "Training"],
      gradient: "from-orange-600/90 to-amber-700/90",
      icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
      accentColor: "orange"
    },
    {
      id: 5,
      title: "Corporate Clothing & Branding",
      description: "Professional corporate wear and innovative branding solutions to enhance your company's identity and create a lasting impression. High-quality uniforms and branded merchandise that reflect your organization's values and professionalism.",
      image: corporateImage,
      tags: ["Corporate", "Branding"],
      gradient: "from-purple-600/90 to-indigo-800/90",
      icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
      accentColor: "purple"
    }
  ]

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length)
    }, 6000) // Change slide every 6 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying, services.length])

  const goToSlide = (index) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000) // Resume auto-play after 10 seconds
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const getAccentClasses = (accentColor) => {
    const colors = {
      sky: {
        text: 'text-sky-400',
        bg: 'bg-sky-500',
        border: 'border-sky-500',
        hover: 'hover:bg-sky-600',
        dot: 'bg-sky-500',
        tag: 'bg-sky-100 text-sky-700',
        shadowHover: 'hover:shadow-sky-500/50'
      },
      orange: {
        text: 'text-orange-400',
        bg: 'bg-orange-500',
        border: 'border-orange-500',
        hover: 'hover:bg-orange-600',
        dot: 'bg-orange-500',
        tag: 'bg-orange-100 text-orange-700',
        shadowHover: 'hover:shadow-orange-500/50'
      },
      purple: {
        text: 'text-purple-400',
        bg: 'bg-purple-500',
        border: 'border-purple-500',
        hover: 'hover:bg-purple-600',
        dot: 'bg-purple-500',
        tag: 'bg-purple-100 text-purple-700',
        shadowHover: 'hover:shadow-purple-500/50'
      }
    }
    return colors[accentColor] || colors.sky
  }

  const currentService = services[currentIndex]
  const accent = getAccentClasses(currentService.accentColor)

  return (
    <div className="relative w-full">
      {/* Main Carousel Container */}
      <div className="relative h-[600px] md:h-[700px] lg:h-[800px] rounded-3xl overflow-hidden shadow-2xl">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={currentService.image}
            alt={currentService.title}
            className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          {/* Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-r ${currentService.gradient}`}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-12 lg:p-16">
          <div className="max-w-4xl">
            {/* Icon */}
            <div className="mb-6 animate-fade-in-up">
              <div className={`w-16 h-16 ${accent.bg} rounded-2xl flex items-center justify-center shadow-xl backdrop-blur-sm`}>
                <svg className={`w-8 h-8 ${accent.text} text-white`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={currentService.icon}></path>
                </svg>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              {currentService.title}
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl lg:text-2xl text-gray-100 mb-8 leading-relaxed max-w-3xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {currentService.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              {currentService.tags.map((tag, index) => (
                <span
                  key={index}
                  className={`${accent.tag} px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm border ${accent.border} border-opacity-30`}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA Button */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Link
                to="/services"
                className={`inline-flex items-center ${accent.bg} text-white px-8 py-4 rounded-xl font-semibold text-lg ${accent.hover} transition-all duration-300 shadow-2xl ${accent.shadowHover} transform hover:-translate-y-1`}
              >
                Learn More
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110 border border-white/30"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110 border border-white/30"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>

        {/* Progress Bar */}
        {isAutoPlaying && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20">
            <div
              className={`h-full ${accent.bg} transition-all duration-300`}
              style={{
                animation: 'progress 6s linear'
              }}
            ></div>
          </div>
        )}
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center items-center gap-3 mt-8">
        {services.map((service, index) => {
          const serviceAccent = getAccentClasses(service.accentColor)
          return (
            <button
              key={service.id}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? `${serviceAccent.bg} w-12 h-3 shadow-lg`
                  : 'bg-gray-300 w-3 h-3 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          )
        })}
      </div>

      {/* Slide Indicators */}
      <div className="text-center mt-4">
        <span className="text-gray-600 font-medium text-sm md:text-base">
          {currentIndex + 1} / {services.length}
        </span>
      </div>

      <style>{`
        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  )
}

export default ServicesCarousel
