import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen py-12 flex flex-col items-center justify-center bg-gradient-to-r from-purple-600 to-pink-500 relative overflow-hidden">
      {/* Navigation Bar */}
      <motion.div
        className="px-4 md:px-8 z-10 text-center"
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white">
            Paw Perfect Pet Services
          </h1>
          <p className="mx-auto max-w-[700px] text-lg md:text-xl lg:text-2xl text-purple-100">
            Where tails wag and pets shine! Professional at-home pet care.
          </p>
          <div className="space-x-4 mt-6">
            <button className="bg-yellow-400 text-purple-900 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:bg-yellow-300">
              Book Now
            </button>
            <button className="text-white border border-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:bg-white hover:text-purple-600">
              Learn More
            </button>
          </div>
        </div>
      </motion.div>

      {/* Interactive Bouncing Ball */}
      <motion.div
        className="absolute w-10 h-10 bg-yellow-400 rounded-full"
        initial={{ y: -50 }}
        animate={{
          y: [0, -30, 0], // Bouncing effect
          x: ["0%", "70%", "0%"], // Move across the screen
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.2, rotate: 360 }}
      />

      {/* Decorative SVG */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-auto"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
}