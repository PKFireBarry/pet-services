import { motion } from "framer-motion"

export default function NewsletterSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-purple-50 to-yellow-50 dark:from-gray-900 dark:to-yellow-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.div 
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-purple-600 dark:text-purple-300">Stay Pawpdated!</h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-300">
              Subscribe for tail-wagging tips and purr-fect offers!
            </p>
          </motion.div>
          <motion.div 
            className="w-full max-w-sm space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form className="flex space-x-2">
              <input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
              <button type="submit" className="bg-purple-600 text-white hover:bg-purple-700 transition-colors duration-300">Subscribe</button>
            </form>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              By subscribing, you agree to our Terms of Service and Privacy Policy.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

