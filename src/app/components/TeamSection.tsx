import { motion } from "framer-motion"
import Image from "next/image"



export default function TeamSection() {
  return (
    <section id="hero" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-800 relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <motion.h2 
          className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-purple-600 dark:text-purple-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Meet the Founder
        </motion.h2>
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-12">
          <motion.div 
            className="flex flex-col items-center mb-12 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-48 h-48 mb-8 relative">
              <Image
                src="/"

                alt="founder"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-300 mb-2">Kaitlyn Bruno</h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">Founder and Certified Veterinary Technician</p>
            <p className="text-center max-w-md text-gray-600 dark:text-gray-300 mb-6">
            Kaitlyn has been passionate about animals since childhood. With over 4 years of experience in veterinary care, she founded Borkin Industries to provide top-notch pet care services for your fur babies.
            </p>
          </motion.div>

        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 opacity-50"></div>
    </section>
  )
}

