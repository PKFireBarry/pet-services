import { motion } from "framer-motion"
import { Bone } from 'lucide-react'

export default function BookNowButton() {
  return (
    <motion.div 
      className="fixed bottom-4 right-4 z-50"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <button className="rounded-full bg-yellow-400 text-purple-900 hover:bg-yellow-300 shadow-lg transition-all duration-300 transform hover:scale-105">
        <Bone className="h-6 w-6 mr-2" />
        Book Now
      </button>
    </motion.div>
  )
}

