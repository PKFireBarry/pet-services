import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function TeamSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-800 relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <motion.h2 
          className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-purple-600 dark:text-purple-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Meet the Team
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
                src="/placeholder.svg"
                alt="Sarah Johnson"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-300 mb-2">Sarah Johnson</h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">Founder & Head Groomer</p>
            <p className="text-center max-w-md text-gray-600 dark:text-gray-300 mb-6">
              Sarah has been passionate about animals since childhood. With over 15 years of experience in pet care,
              she founded Paw Perfect to provide top-notch services to furry friends in the community.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-purple-600 hover:text-purple-500 dark:text-purple-300 dark:hover:text-purple-200 transition-colors">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Sarah&apos;s Facebook</span>
              </Link>
              <Link href="#" className="text-purple-600 hover:text-purple-500 dark:text-purple-300 dark:hover:text-purple-200 transition-colors">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Sarah&apos;s Instagram</span>
              </Link>
              <Link href="#" className="text-purple-600 hover:text-purple-500 dark:text-purple-300 dark:hover:text-purple-200 transition-colors">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Sarah&apos;s Twitter</span>
              </Link>
            </div>
          </motion.div>
          <motion.div 
            className="flex flex-col items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-48 h-48 mb-8 relative">
              <Image
                src="/placeholder.svg"
                alt="Alex Chen"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-300 mb-2">Alex Chen</h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">Head of Technology</p>
            <p className="text-center max-w-md text-gray-600 dark:text-gray-300 mb-6">
              Alex is our tech wizard, bringing over a decade of software development experience to Paw Perfect. 
              Their innovative approach keeps Paw Perfect at the forefront of pet care technology.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-purple-600 hover:text-purple-500 dark:text-purple-300 dark:hover:text-purple-200 transition-colors">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Alex&apos;s Facebook</span>
              </Link>
              <Link href="#" className="text-purple-600 hover:text-purple-500 dark:text-purple-300 dark:hover:text-purple-200 transition-colors">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Alex&apos;s Instagram</span>
              </Link>
              <Link href="#" className="text-purple-600 hover:text-purple-500 dark:text-purple-300 dark:hover:text-purple-200 transition-colors">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Alex&apos;s Twitter</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 opacity-50"></div>
    </section>
  )
}

