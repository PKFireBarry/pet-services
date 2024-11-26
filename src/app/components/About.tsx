import { motion } from 'framer-motion'
import React from 'react'

function About() {
  return (
<section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
  <div className="container px-6 md:px-8 mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-3xl mx-auto text-center"
    >
      <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-purple-700 dark:text-purple-300 mb-8">
        About Caitlyn&apos;s Pet Services
      </h2>
      <p className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
        Caitlyn&apos;s Pet Services was born from a deep-rooted passion for animals and a desire to share the love and care that Caitlyn learned from her pop at a young age.
      

        Our mission is to provide the community&apos;s animals with exceptional care, leveraging our knowledge and passion for pet well-being. We&apos;re committed to offering grooming services and opportunities that may not be available elsewhere, ensuring your pets receive the best possible care.
      </p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="mt-16 max-w-4xl mx-auto text-center"
    >

      <blockquote className="relative text-2xl md:text-3xl italic font-semibold text-purple-700 dark:text-purple-300">
        <svg
          aria-hidden="true"
          className="absolute left-0 top-0 transform -translate-x-6 -translate-y-2 w-10 h-10 text-purple-200 dark:text-purple-800"
          fill="currentColor"
          viewBox="0 0 24 27"
        >
          <path d="M..." /> {/* SVG path for a stylized quotation mark */}
        </svg>
        &quot;Caitlyn&apos;s Pet Services is about providing our community&apos;s beloved pets with the knowledge and attention they deserve, just as my pop taught me.&quot;
      </blockquote>
      <p className="mt-6 text-lg font-medium text-purple-700 dark:text-purple-300">- Caitlyn, Founder</p>
    </motion.div>
  </div>
</section>
  )
}

export default About