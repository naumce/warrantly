'use client'

import { Camera, Sparkles, Bell, Shield, Zap, FileText } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: Camera,
    title: 'Receipt OCR',
    description: 'Snap a photo of your receipt and let AI extract all warranty details instantly.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Sparkles,
    title: 'AI Claim Writer',
    description: 'Generate professional warranty claims in seconds with our AI assistant.',
    color: 'from-pink-500 to-rose-500'
  },
  {
    icon: Bell,
    title: 'Smart Reminders',
    description: 'Never miss an expiration date with intelligent notification system.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Shield,
    title: 'Secure Storage',
    description: 'Your warranties and receipts are encrypted and safely stored in the cloud.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Zap,
    title: 'Quick Search',
    description: 'Find any warranty in seconds with powerful search and filters.',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: FileText,
    title: 'Claim Tracking',
    description: 'Track the status of all your warranty claims in one place.',
    color: 'from-indigo-500 to-purple-500'
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
}

export default function Features() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold mb-4"
          >
            ✨ Powered by AI
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need in
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              One Beautiful App
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stop losing receipts and missing warranty deadlines. Let AI handle the heavy lifting.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                
                <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.color} mb-6`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Animated Corner Accent */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="absolute top-4 right-4 w-2 h-2 bg-purple-500 rounded-full"
                  />
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.p
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-lg text-gray-600"
          >
            🚀 And many more features coming soon!
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
