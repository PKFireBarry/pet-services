'use client'

import { AnimatePresence } from 'framer-motion'
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
  return (
    <AnimatePresence>
      <div className="min-h-screen  bg-black">
        <Header />
        <main className="flex-1">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16 py-12">
            <AnimatedSection>
              <HeroSection />
            </AnimatedSection>

            <AnimatedSection>
              <TeamSection />
            </AnimatedSection>


              <WhyChooseUs />



              <About />


            <AnimatedSection>
              <ServicesSection />
            </AnimatedSection>



            <AnimatedSection>
              <Contact />
            </AnimatedSection>

            <AnimatedSection>
              <TermsOfServiceSection />
            </AnimatedSection>

          </div>
        </main>
        <Footer />
        <BookNowButton />
      </div>
    </AnimatePresence>
  )
}