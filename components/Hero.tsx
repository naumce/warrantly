'use client'

import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20">
      {/* Animated Background Gradient */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-purple-700"
      >
        {/* Animated Blobs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-20 w-96 h-96 bg-purple-400 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-pink-400 rounded-full blur-3xl"
        />
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6">
            ✨ AI-Powered Warranty Management
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Never Lose a
          <br />
          <motion.span
            initial={{ backgroundPosition: "0% 50%" }}
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent bg-[length:200%_auto]"
          >
            Warranty Again
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto"
        >
          Track warranties, file claims, and get smart reminders—all powered by AI.
          <br />
          Your digital warranty assistant.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <motion.a
            href="https://apps.apple.com/app/warrantly"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center px-8 py-4 bg-white text-purple-600 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
          >
            📲 Download on App Store
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>

          <motion.a
            href="https://play.google.com/store/apps/details?id=com.warrantly"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-2xl font-bold text-lg border-2 border-white/30 hover:bg-white/20 transition-all"
          >
            🤖 Get it on Google Play
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col items-center gap-2"
        >
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              {[0, 1, 2, 3, 4].map((index) => (
                <motion.span
                  key={index}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.7, 1, 0.7],
                    filter: [
                      'drop-shadow(0 0 0px rgba(255, 215, 0, 0))',
                      'drop-shadow(0 0 8px rgba(255, 215, 0, 0.8))',
                      'drop-shadow(0 0 0px rgba(255, 215, 0, 0))',
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                    ease: "easeInOut"
                  }}
                  className="text-2xl"
                >
                  ⭐
                </motion.span>
              ))}
            </div>
            <span className="text-white font-semibold">4.9/5 Rating</span>
          </div>
          <p className="text-white/80">✅ Trusted by 1,000+ users</p>
        </motion.div>

        {/* App Screenshot Preview */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.02, y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative mx-auto max-w-4xl"
          >
            {/* Phone Frame */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-4 shadow-2xl border-8 border-gray-700">
              {/* Screen Content - App Screenshot */}
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-[2.5rem] aspect-[9/19] overflow-hidden relative">
                <Image
                  src="/screenshot.png"
                  alt="Warrantly App Dashboard Screenshot"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-8 top-20 bg-white/20 backdrop-blur-md rounded-2xl p-4 border border-white/30"
            >
              <div className="text-3xl">✨</div>
            </motion.div>

            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -right-8 top-40 bg-white/20 backdrop-blur-md rounded-2xl p-4 border border-white/30"
            >
              <div className="text-3xl">🔔</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
