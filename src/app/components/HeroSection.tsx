import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[url('/placeholder.svg')] bg-cover bg-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/70 to-pink-500/70"></div>
      <motion.div 
        className="w-full px-4 md:px-6 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
              Paw Perfect Pet Services
            </h1>
            <p className="mx-auto max-w-[700px] text-xl text-purple-100 md:text-2xl">
              Where tails wag and pets shine! Grooming, walking, and boarding with love.
            </p>
          </div>
          <div className="space-x-4">
            <button className="bg-yellow-400 text-purple-900 hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105">Book Now</button>
            <button className="text-white border-white hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105">Learn More</button>
          </div>
        </div>
      </motion.div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  )
}

