'use client'

import { AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import TermsOfServiceSection from './components/TermsOfServiceSection'
import Footer from './components/Footer'
import BookNowButton from './components/BookNowButton'
import About from './components/About'
import WhyChooseUs from './components/WhyChooseUs'
import TeamSection from './components/TeamSection'
import Contact from './components/Contact'
import AnimatedSection from './components/AnimatedSection'

export default function PetServicesLanding() {
  // Function to handle smooth scrolling
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Handle direct URL navigation with hash
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '')
      setTimeout(() => {
        scrollToSection(id)
      }, 100)
    }
  }, [])

  return (
    <AnimatePresence>
    <div className="min-h-screen bg-black">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16 py-12">
          <AnimatedSection>
            <div id="hero">
              <HeroSection />
            </div>
          </AnimatedSection>

            <AnimatedSection>
              <div id="team">
                <TeamSection/>
              </div>
            </AnimatedSection>

            <div id="why">
              <WhyChooseUs />
            </div>

            <div id="about">
              <About />
            </div>

            <AnimatedSection>
              <div id="services">
                <ServicesSection />
              </div>
            </AnimatedSection>

            <div id="contact">
              <Contact />
            </div>

            <AnimatedSection>
              <div id="terms">
                <TermsOfServiceSection />
              </div>
            </AnimatedSection>
          </div>
        </main>
        <Footer />
        <BookNowButton />
      </div>
    </AnimatePresence>
  )
}