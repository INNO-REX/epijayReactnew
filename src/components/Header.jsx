import { Link, useLocation } from 'react-router-dom'
import logoImage from '../assets/logoepijay.png'

const Header = () => {
  const location = useLocation()
  
  const isActive = (path) => {
    return location.pathname === path ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'
  }

  return (
    <header 
      className="bg-white shadow-lg sticky top-0 z-50"
      x-data="{ mobileMenuOpen: false }"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img 
                src={logoImage} 
                alt="EPIJAY Limited" 
                className="h-10 w-auto"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/')}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/about')}`}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/services')}`}
            >
              Services
            </Link>
            <Link 
              to="/contact" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/contact')}`}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Link 
              to="/contact" 
              className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              className="text-gray-700 hover:text-primary-600 focus:outline-none focus:text-primary-600"
              x-on:click="mobileMenuOpen = !mobileMenuOpen"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path 
                  x-show="!mobileMenuOpen"
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
                <path 
                  x-show="mobileMenuOpen"
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className="md:hidden"
          x-show="mobileMenuOpen"
          x-transition:enter="transition ease-out duration-100"
          x-transition:enter-start="transform opacity-0 scale-95"
          x-transition:enter-end="transform opacity-100 scale-100"
          x-transition:leave="transition ease-in duration-75"
          x-transition:leave-start="transform opacity-100 scale-100"
          x-transition:leave-end="transform opacity-0 scale-95"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <Link 
              to="/" 
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive('/')}`}
              x-on:click="mobileMenuOpen = false"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive('/about')}`}
              x-on:click="mobileMenuOpen = false"
            >
              About
            </Link>
            <Link 
              to="/services" 
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive('/services')}`}
              x-on:click="mobileMenuOpen = false"
            >
              Services
            </Link>
            <Link 
              to="/contact" 
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive('/contact')}`}
              x-on:click="mobileMenuOpen = false"
            >
              Contact
            </Link>
            <div className="px-3 py-2">
              <Link 
                to="/contact" 
                className="block w-full bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors text-center"
                x-on:click="mobileMenuOpen = false"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
