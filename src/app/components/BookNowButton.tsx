import { motion } from "framer-motion"


export default function BookNowButton() {
  return (
    <motion.div 
      className="fixed bottom-4 right-4 z-50"
      initial={{ opacity: .4, y: 75 }}
      animate={{ opacity: 1, y: -125 }}
      transition={{ duration: 3, delay: 0.5 }}
    >
      <a 
      href="#contact"
      className="rounded-full bg-yellow-400 w-24 h-6 text-purple-900 text-center hover:bg-yellow-300 shadow-lg transition-all duration-2000 animate-bounce transform hover:scale-105 mx-4 lg:block md:block hidden">
        
        Book Now!
      </a>
    </motion.div>
  )
}

