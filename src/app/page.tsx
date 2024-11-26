'use client'

import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import TeamSection from './components/TeamSection'
import NewsletterSection from './components/NewsletterSection'
import TermsOfServiceSection from './components/TermsOfServiceSection'
import Footer from './components/Footer'
import BookNowButton from './components/BookNowButton'
import About from './components/About'
import ReviewsSection from './components/ReviewsSection'

export default function PetServicesLanding() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className=''>
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 dark:from-gray-900 dark:to-purple-900 items-center">
      <Header />
      <main className="flex-1">
        <div className="w-full max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
          <HeroSection />
          <About/>
          <ServicesSection/>
          <TermsOfServiceSection />
          <NewsletterSection />
        </div>
      </main>
      <Footer />
      <BookNowButton />
    </div>
    </div>
  )
}

