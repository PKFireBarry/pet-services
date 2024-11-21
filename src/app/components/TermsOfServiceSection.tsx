import React, { useState } from 'react'
import { motion } from "framer-motion"
import { ChevronUp, ChevronDown } from 'lucide-react'

export default function TermsOfServiceSection() {
  const [showTerms, setShowTerms] = useState(false)

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <motion.h2 
          className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-6 text-purple-600 dark:text-purple-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Terms of Service
        </motion.h2>
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setShowTerms(!showTerms)}
            className="flex items-center space-x-2 bg-purple-600 text-white hover:bg-purple-700 transition-colors duration-300"
          >
            <span>{showTerms ? 'Hide' : 'Show'} Terms of Service</span>
            {showTerms ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>
        </div>
        {showTerms && (
          <motion.div 
            className="space-y-8 text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-purple-600 dark:text-purple-300">1. Service Agreement</h3>
              <p>By using Paw Perfect Pet Services, you agree to abide by these terms and conditions. We reserve the right to refuse service to anyone for any reason at any time.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-purple-600 dark:text-purple-300">2. Pet Health and Vaccinations</h3>
              <p>All pets must be up-to-date on vaccinations. Proof of vaccinations must be provided before services can be rendered.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-purple-600 dark:text-purple-300">3. Aggressive Animals</h3>
              <p>For the safety of our staff and other animals, we have specific policies regarding aggressive pets:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Paw Perfect reserves the right to refuse service to any pet that displays aggressive behavior.</li>
                <li>Owners must inform us of any history of aggression before scheduling services.</li>
                <li>If a pet becomes aggressive during service, we may terminate the service immediately.</li>
                <li>Owners are responsible for any injuries or damages caused by their aggressive pet.</li>
                <li>We may require muzzles for certain breeds or pets with a history of aggression.</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-purple-600 dark:text-purple-300">4. Liability</h3>
              <p>While we take every precaution to ensure the safety and well-being of your pet, Paw Perfect is not liable for any injury, illness, or mishap that may occur during our services.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-purple-600 dark:text-purple-300">5. Cancellation Policy</h3>
              <p>We require at least 24 hours notice for cancellations. Late cancellations or no-shows may be subject to a fee.</p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

