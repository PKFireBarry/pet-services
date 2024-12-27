import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

function About() {
  return (
    <section className="w-full py-16 my-auto md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container px-6 md:px-8 mx-auto">
        
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-purple-700 dark:text-purple-300 mb-8"
          >
            What We Stand For
          </motion.h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex justify-center md:justify-start"
          >
            <motion.div variants={fadeInUp}>
              <Image src="/" width={50} height={50} alt="Caitlyn's Pet Services" className="rounded-lg shadow-lg" />
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-gray-700 dark:text-gray-300 leading-relaxed"
          >
            <motion.p variants={fadeInUp} className="mt-4 text-lg md:text-xl">
              Caitlyn&apos;s Pet Services was born from a deep-rooted passion for animals and a desire to share the love and care that Caitlyn learned from her pop at a young age. Our mission is to provide the community&apos;s animals with exceptional care, leveraging our knowledge and passion for pet well-being. We&apos;re committed to offering grooming services and opportunities that may not be available elsewhere, ensuring your pets receive the best possible care.
            </motion.p>

            <motion.blockquote variants={fadeInUp} className="relative mt-8 text-2xl md:text-3xl italic font-semibold text-purple-700 dark:text-purple-300">
              <svg
                aria-hidden="true"
                className="absolute left-0 top-0 transform -translate-x-6 -translate-y-2 w-10 h-10 text-purple-200 dark:text-purple-800"
                fill="currentColor"
                viewBox="0 0 24 27"
              >
                <path d="M..." /> {/* SVG path for a stylized quotation mark */}
              </svg>
              &quot;Caitlyn&apos;s Pet Services is about providing our community&apos;s beloved pets with the knowledge and attention they deserve, just as my pop taught me.&quot;
            </motion.blockquote>

            <motion.p variants={fadeInUp} className="mt-6 text-lg font-medium text-purple-700 dark:text-purple-300">
              - Caitlyn, Founder
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;