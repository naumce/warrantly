'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 }
}

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white py-16 px-6 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-10 right-10 w-64 h-64 bg-purple-500 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        className="absolute bottom-10 left-10 w-64 h-64 bg-pink-500 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block"
            >
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                📦 Warrantly
              </h3>
            </motion.div>
            <p className="text-gray-400 mb-6 max-w-md">
              Your AI-powered digital warranty assistant. Never lose a receipt or miss a warranty deadline again.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="https://twitter.com/warrantly"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors pointer-events-none opacity-50"
              >
                𝕏
              </motion.a>
              <motion.a
                href="https://facebook.com/warrantly"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors pointer-events-none opacity-50"
              >
                f
              </motion.a>
              <motion.a
                href="https://instagram.com/warrantly"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors pointer-events-none opacity-50"
              >
                📷
              </motion.a>
            </div>
          </motion.div>

          {/* Product Links */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-4">Product</h4>
            <motion.ul variants={container} className="space-y-3">
              <motion.li variants={item}>
                <Link href="#pricing" className="text-gray-400 hover:text-white transition-colors">
                  Pricing
                </Link>
              </motion.li>
              <motion.li variants={item}>
                <Link href="/#features" className="text-gray-400 hover:text-white transition-colors">
                  Features
                </Link>
              </motion.li>
              <motion.li variants={item}>
                <Link href="/#" className="text-gray-400 hover:text-white transition-colors">
                  Download
                </Link>
              </motion.li>
            </motion.ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-4">Legal</h4>
            <motion.ul variants={container} className="space-y-3">
              <motion.li variants={item}>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </motion.li>
              <motion.li variants={item}>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </motion.li>
              <motion.li variants={item}>
                <a href="mailto:support@warrantly.io" className="text-gray-400 hover:text-white transition-colors">
                  Contact Support
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Warrantly. All rights reserved.
          </p>
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-400 text-sm"
          >
            Made with ❤️
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
