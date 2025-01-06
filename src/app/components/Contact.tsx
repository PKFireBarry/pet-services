'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'
import cat from "../../photos/cat.jpg"
import Image from 'next/image'



export default function ContactComponent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Here you would typically send the form data to your backend
    // For now, we'll just simulate a submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setSubmitMessage('Thank you for your message. We\'ll get back to you soon!')
    setFormData({
      name: '',
      email: '',
      phone: '',
      serviceType: '',
      message: '',
    })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 min-h-screen flex items-center justify-center relative overflow-hidden">

      <motion.div 
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h2 
          className="text-4xl font-bold text-center mb-8 text-purple-600 dark:text-purple-400"
          variants={itemVariants}
        >
          Paw-some Contact
        </motion.h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={containerVariants}>
              <form onSubmit={handleSubmit} className="space-y-4">
                <motion.div variants={itemVariants}>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-all duration-300 ease-in-out"
                    placeholder="Fur parent's name"
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-all duration-300 ease-in-out"
                    placeholder="your@email.com"
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-all duration-300 ease-in-out"
                    placeholder="(123) 456-7890"
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Pet Service</label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-all duration-300 ease-in-out"
                  >
                    <option value="">Choose a service</option>
                    <option value="dog-walking">Drop-in</option>
                    <option value="pet-sitting">Overnight Pet Sitting</option>
                    <option value="other">Other Service</option>
                  </select>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-all duration-300 ease-in-out"
                    placeholder="Tell us about your furry friend!"
                  ></textarea>
                </motion.div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-purple-600 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50 transition-all duration-300 ease-in-out transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isSubmitting ? "Sending Paw Mail..." : "Send Paw Mail"}
                </motion.button>
              </form>
              <AnimatePresence>
                {submitMessage && (
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="mt-4 text-green-600 dark:text-green-400 text-center font-semibold"
                  >
                    {submitMessage}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
            <motion.div 
              className="space-y-6"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-semibold mb-4 text-purple-600 dark:text-purple-400">Fur-tastic Support</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  We're excited to hear from you and your furry friends! Reach out with any questions, and we'll respond as soon as possible.
                </p>
              </motion.div>
              <motion.div 
                className="space-y-4"
                variants={containerVariants}
              >
                <motion.div 
                  className="flex items-center space-x-3 text-gray-600 dark:text-gray-400"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, originX: 0 }}
                >
                  <Mail className="h-6 w-6 text-purple-500" />
                  <span>woof@pawsomecare.com</span>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-3 text-gray-600 dark:text-gray-400"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, originX: 0 }}
                >
                  <Phone className="h-6 w-6 text-purple-500" />
                  <span>(813) 537-7897</span>
                </motion.div>
              </motion.div>
              <motion.div
                className="mt-8"
                variants={itemVariants}
              >
                <Image
                  src={cat}
                  alt="Happy pets"
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}