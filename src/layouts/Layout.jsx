import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ScrollToTopButton from '../components/ScrollToTopButton'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  )
}

export default Layout

