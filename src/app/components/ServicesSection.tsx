import React, { useState, useEffect } from 'react'
import { Dog, Fish, Droplet, Scissors, Heart, RefreshCw, Phone } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  // Overnight Pet Sitting for Dogs
  {
    id: 1,
    category: "Overnight Pet Sitting",
    name: "Dog Sitting",
    description: "Includes dinner, sleepover, breakfast, and light cleaning. Starting at:",
    options: [
      { id: 1.1, label: "1 Dog", price: 100, maxAnimals: 1 },
      { id: 1.2, label: "2 Dogs", price: 120, maxAnimals: 2 },
      { id: 1.3, label: "Up to 5 Dogs", price: 150, maxAnimals: 5 },
      { id: 1.4, label: "More than 5 Dogs", price: 175, maxAnimals: Infinity },
    ],
    icon: Dog,
    animalType: "Dog",
  },
  // Overnight Pet Sitting for Small Animals
  {
    id: 3,
    category: "Overnight Pet Sitting",
    name: "Small Animal Sitting",
    description: "Care for rabbits, fish, reptiles, etc. Includes feeding and habitat maintenance. Starting at:",
    options: [
      { id: 3.1, label: "1 Animals", price: 75, maxAnimals: 1 },
      { id: 3.2, label: "2 Animals", price: 100, maxAnimals: 2 },
      { id: 3.3, label: "Up to 5 Animals", price: 150, maxAnimals: 5 },
      { id: 3.4, label: "More than 5 Animals", price: 200, maxAnimals: Infinity },
    ],
    icon: Fish,
    animalType: "Small",
  },
  // Additional Services
  {
    id: 4,
    category: "Additional Services",
    name: "Medication Administration",
    price: 35,
    description: "Per animal per night",
    icon: Heart,
    animalType: "All",
  },
  {
    id: 5,
    category: "Additional Services",
    name: "Baths",
    price: 20,
    description: "Base price",
    icon: Droplet,
    animalType: "All",
  },
  {
    id: 6,
    category: "Additional Services",
    name: "Nail Trimming",
    price: 15,
    description: "Base price",
    icon: Scissors,
    animalType: "All",
  },
  // Drop-in Visits
  {
    id: 7,
    category: "Other Services",
    name: "Drop-in Visits",
    options: [
      { id: 7.1, label: "Dog", price: 55, animalType: ["Dog"] },
      { id: 7.2, label: "Small Animal", price: 50, animalType: ["Small"] },
    ],
    description: "Just stop by to feed and check on the animals. Starting at:",
    icon: Dog,
    animalType: "All",
  },
]

export default function ServicesSection() {
  const [step, setStep] = useState(1)
  const [animalType, setAnimalType] = useState('')
  const [animalCount, setAnimalCount] = useState(1)
  const [duration, setDuration] = useState(1)
  const [selectedServices, setSelectedServices] = useState<number[]>([])


  useEffect(() => {
    // Reset selected services when animal type or count changes
    setSelectedServices([])

  }, [animalType, animalCount])

  const isLargeAnimal = animalType === "Large"

  const toggleService = (serviceId: number) => {
    setSelectedServices(prev =>
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    )
  }



  const calculateTotal = () => {
    let total = 0
    if (isLargeAnimal) {
      return total
    }
    selectedServices.forEach(serviceId => {
      const service = services.find(s => s.id === Math.floor(serviceId))
      if (service) {
        if (service.options) {
          const option = service.options.find(o => o.id === serviceId)
          if (option) {
            total += option.price * duration
          }
        } else {
          let count = 1
          if (service.id === 4) {
            // Medication Administration is per animal per night
            count = animalCount * duration
          }
          total += service.price * count
        }
      }
    })
    return total
  }

  const filteredServices = isLargeAnimal
    ? []
    : services.filter(service =>
        service.animalType === animalType || service.animalType === "All"
      )

  const getRelevantOption = (service: typeof services[0]) => {
    if (!service.options) return null
    return service.options.find(option => {
      if ('maxAnimals' in option) {
        return option.maxAnimals >= animalCount
      } else if ('animalType' in option) {
        if (Array.isArray(option.animalType)) {
          return option.animalType.includes(animalType)
        } else {
          return option.animalType === animalType
        }
      } else {
        return false
      }
    })
  }

  const renderServiceItem = (service: typeof services[0]) => {
    const IconComponent = service.icon
    const relevantOption = getRelevantOption(service)

    if (service.options && !relevantOption) return null

    return (
      <motion.div
        key={service.id}
        id='services'
        className="mb-6 p-6 bg-white bg-opacity-80 backdrop-filter backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: service.id * 0.1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-200 to-pink-200 opacity-10 z-0"></div>
        <div className="relative z-10">
          <div className="flex items-center mb-2">
            {IconComponent && <IconComponent className="w-8 h-8 mr-3 text-purple-600 animate-pulse" />}
            <h3 className="text-lg font-semibold">{service.name}</h3>
          </div>
          <p className="text-sm text-gray-600 mb-2">{service.description}</p>
          {relevantOption ? (
            <div className="flex items-center justify-between mb-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={selectedServices.includes(relevantOption.id)}
                  onChange={() => toggleService(relevantOption.id)}
                  className="mr-3 w-5 h-5 text-purple-600 rounded focus:ring-purple-500 transition-all duration-300"
                />
                {relevantOption.label}
              </label>
              <span className="font-semibold">${relevantOption.price}</span>
            </div>
          ) : (
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={selectedServices.includes(service.id)}
                  onChange={() => toggleService(service.id)}
                  className="mr-3 w-5 h-5 text-purple-600 rounded focus:ring-purple-500 transition-all duration-300"
                />
                {service.name}
              </label>
              <span className="font-semibold">${service.price}</span>
            </div>
          )}
        </div>
      </motion.div>
    )
  }

  const resetForm = () => {
    setStep(1)
    setAnimalType('')
    setAnimalCount(1)
    setDuration(1)
    setSelectedServices([])

  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-purple-800">What type of animal do you have?</h3>
            <select
              value={animalType}
              onChange={(e) => setAnimalType(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
            >
              <option value="">Select animal type</option>
              <option value="Dog">Dog</option>
              <option value="Large">Large Animal</option>
              <option value="Small">Small Animal</option>
            </select>
            <button
              onClick={() => setStep(2)}
              disabled={!animalType}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-md hover:from-purple-700 hover:to-pink-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </motion.div>
        )
      case 2:
        return (
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-purple-800">How many animals?</h3>
            <input
              type="number"
              min="1"
              value={animalCount}
              onChange={(e) => setAnimalCount(Math.max(1, parseInt(e.target.value)))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
            />
            <button
              onClick={() => setStep(3)}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-md hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
            >
              Next
            </button>
          </motion.div>
        )
      case 3:
        if (isLargeAnimal) {
          return (
            <motion.div
              className="space-y-4 text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-purple-800">Contact Us for an Estimate</h3>
              <p className="text-gray-700 mb-6">
                For large animals, please contact us directly to get a personalized estimate.
              </p>
              <a
                href="tel:1234567890"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-md hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Us
              </a>
              <button
                onClick={resetForm}
                className="mt-6 px-4 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors duration-300 flex items-center justify-center mx-auto"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Start Over
              </button>
            </motion.div>
          )
        } else {
          return (
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-purple-800">How many days do you need service?</h3>
              <input
                type="number"
                min="1"
                value={duration}
                onChange={(e) => setDuration(Math.max(1, parseInt(e.target.value)))}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
              />
              <button
                onClick={() => setStep(4)}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-md hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                Next
              </button>
            </motion.div>
          )
        }
      case 4:
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-purple-800">Select Your Services</h3>
            {Object.entries(filteredServices.reduce((acc, service) => {
              acc[service.category] = [...(acc[service.category] || []), service]
              return acc
            }, {} as Record<string, typeof services>)).map(([category, categoryServices]) => (
              <div key={category} className="mb-6">
                <h4 className="text-lg font-semibold mb-2">{category}</h4>
                {categoryServices.map(renderServiceItem)}
              </div>
            ))}
          </motion.div>
        )
      default:
        return null
    }
  }

  return (
    <section className="w-full py-16 bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Pricing Estimate Calculator
        </motion.h2>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            {renderStep()}
            {!isLargeAnimal && step > 1 && (
              <motion.button
                onClick={resetForm}
                className="mt-6 px-4 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Start Over
              </motion.button>
            )}
          </div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-4">Your Estimate</h3>
            <div className="bg-white p-6 rounded-xl shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 opacity-20"></div>
              <div className="relative z-10">
                {isLargeAnimal ? (
                  <div className="text-center">
                    <h4 className="text-lg font-semibold mb-2 text-purple-800">Contact Us for an Estimate</h4>
                    <p className="text-gray-700">
                      Please contact us directly to get a personalized estimate for large animals.
                    </p>
                    <a
                      href="tel:1234567890"
                      className="inline-flex items-center justify-center mt-6 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-md hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Call Us
                    </a>
                  </div>
                ) : (
                  <>
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-2 text-purple-800">Service Details</h4>
                      <p>
                        <strong className="text-gray-700">Animal Type:</strong>{' '}
                        <span className="text-purple-600">{animalType || 'Not selected'}</span>
                      </p>
                      <p>
                        <strong className="text-gray-700">Number of Animals:</strong>{' '}
                        <span className="text-purple-600">{animalCount}</span>
                      </p>
                      <p>
                        <strong className="text-gray-700">Duration:</strong>{' '}
                        <span className="text-purple-600">{duration} day(s)</span>
                      </p>
                    </div>
                    {selectedServices.map(serviceId => {
                      const service = services.find(s => s.id === Math.floor(serviceId))
                      if (service) {
                        if (service.options) {
                          const option = service.options.find(o => o.id === serviceId)
                          if (option) {
                            return (
                              <div key={serviceId} className="flex justify-between mb-2">
                                <span>{service.name} - {option.label}</span>
                                <span>${(option.price * duration).toFixed(2)}</span>
                              </div>
                            )
                          }
                        } else {
                          let count = 1
                          if (service.id === 4) {
                            // Medication Administration is per animal per night
                            count = animalCount * duration
                          }
                          return (
                            <div key={serviceId} className="flex justify-between mb-2">
                              <span>{service.name}</span>
                              <span>${(service.price * count).toFixed(2)}</span>
                            </div>
                          )
                        }
                      }
                      return null
                    })}
                    <div className="border-t-2 border-purple-200 pt-4 mt-4">
                      <div className="flex justify-between font-bold text-lg">
                        <span className="text-purple-800">Total Estimate</span>
                        <span className="text-purple-600">${calculateTotal().toFixed(2)}</span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
            {!isLargeAnimal && (
              <motion.button
                className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-md hover:from-purple-700 hover:to-pink-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={selectedServices.length === 0 || step < 4}
                whileHover={{ scale: 1.02 }}
              >
                Book Now
              </motion.button>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}