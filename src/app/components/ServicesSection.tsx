import React, { useState } from 'react'
import { motion } from "framer-motion"
import { Checkbox } from "@/components/ui/checkbox"
import { Card } from "@/components/ui/card"
import { Scissors, Bath, Heart } from 'lucide-react'

const services = [
  { id: 1, name: "Basic Grooming", price: 30, description: "Essential grooming for your pet", icon: Scissors },
  { id: 2, name: "Spa Bath", price: 45, description: "Luxurious bath and massage", icon: Bath },
  { id: 3, name: "Pet Sitting (per hour)", price: 25, description: "Caring attention while you're away", icon: Heart },
  { id: 4, name: "Nail Trim", price: 15, description: "Keep those claws in check", icon: Scissors },
  { id: 5, name: "Teeth Cleaning", price: 40, description: "Maintain your pet's oral health", icon: Heart },
  { id: 6, name: "Flea Treatment", price: 35, description: "Protect your pet from pesky fleas", icon: Bath },
]

export default function ServicesSection() {
  const [selectedServices, setSelectedServices] = useState<number[]>([])

  const toggleService = (serviceId: number) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    )
  }

  const calculateTotal = () => {
    return selectedServices.reduce((total, id) => {
      const service = services.find(s => s.id === id)
      return total + (service ? service.price : 0)
    }, 0)
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <motion.h2 
          className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-purple-600 dark:text-purple-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Services & Pricing
        </motion.h2>
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="p-6 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-gray-700 dark:to-gray-600 shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-purple-700 dark:text-purple-300">Select Your Services</h3>
            <div className="space-y-4">
              {services.map((service) => (
                <motion.div 
                  key={service.id} 
                  className="flex items-center space-x-3 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-md"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Checkbox 
                    id={`service-${service.id}`} 
                    checked={selectedServices.includes(service.id)}
                    onCheckedChange={() => toggleService(service.id)}
                  />
                  <label
                    htmlFor={`service-${service.id}`}
                    className="flex items-center justify-between w-full text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    <span className="flex items-center">
                      <service.icon className="w-5 h-5 mr-2 text-purple-500" />
                      {service.name}
                    </span>
                    <span className="font-bold text-purple-600 dark:text-purple-300">${service.price}</span>
                  </label>
                </motion.div>
              ))}
            </div>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-900 dark:to-orange-900 shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-purple-700 dark:text-purple-300">Your Estimate</h3>
            <div className="space-y-4">
              {selectedServices.map(id => {
                const service = services.find(s => s.id === id)
                return service ? (
                  <motion.div 
                    key={service.id} 
                    className="flex justify-between bg-white dark:bg-gray-800 p-3 rounded-lg shadow-md"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span>{service.name}</span>
                    <span className="font-bold">${service.price}</span>
                  </motion.div>
                ) : null
              })}
              <div className="border-t pt-4 mt-4">
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total Estimate</span>
                  <span className="text-2xl text-purple-600 dark:text-purple-300">${calculateTotal()} / Per Day</span>
                </div>
              </div>
            </div>
            <button className="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white transition-all duration-300 transform hover:scale-105">Book Now</button>
          </Card>
        </div>
      </div>
    </section>
  )
}

