'use client'


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

export default function PetServicesLanding() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 dark:from-gray-900 dark:to-purple-900">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16 py-12">
          <HeroSection />
          <WhyChooseUs/>
          <About />
          <ServicesSection />
          <TeamSection/>
          <Contact/>
          <TermsOfServiceSection />
        </div>
      </main>
      <Footer />
      <BookNowButton  />
    </div>
  )
}

