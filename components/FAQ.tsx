'use client'

import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    question: 'How does the lifetime purchase work?',
    answer: 'Pay once, use forever! No subscriptions, no recurring fees. You get lifetime access to all features included in your tier.',
  },
  {
    question: 'What are AI credits and how do they work?',
    answer: 'AI credits are used for AI-powered features like Receipt OCR and AI Claim Writer. Each tier includes credits, and you can buy more anytime. Credits never expire!',
  },
  {
    question: 'Can I upgrade my tier later?',
    answer: 'Yes! You can upgrade to a higher tier at any time. Just pay the difference between your current tier and the new one.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Absolutely. We use end-to-end encryption, secure cloud storage, and follow industry best practices. Your warranties and receipts are safe with us.',
  },
  {
    question: 'What if I run out of warranty/claim slots?',
    answer: 'Free users can upgrade to a paid tier for more slots. Paid users can contact support for custom limits if needed.',
  },
  {
    question: 'Do warranties sync across devices?',
    answer: 'Yes! Your warranties are stored in the cloud and automatically sync across all your devices.',
  },
  {
    question: 'Can I export my data?',
    answer: 'Yes! You can export all your warranties and claims data at any time from your profile settings.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-white via-purple-50 to-pink-50">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block mb-4"
          >
            <HelpCircle className="w-12 h-12 text-purple-600" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Got questions? We've got answers!
          </p>
        </motion.div>

        {/* FAQ List */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
              whileHover={{ scale: 1.01 }}
              className="group"
            >
              <motion.div
                initial={false}
                className={`bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 ${
                  openIndex === index
                    ? 'border-purple-300 shadow-xl'
                    : 'border-gray-100 hover:border-purple-200'
                }`}
              >
                {/* Question */}
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-lg font-semibold text-gray-900 pr-8 group-hover:text-purple-600 transition-colors">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown
                      className={`w-6 h-6 transition-colors ${
                        openIndex === index ? 'text-purple-600' : 'text-gray-400'
                      }`}
                    />
                  </motion.div>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block"
          >
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <motion.a
              href="mailto:support@warrantly.io"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all"
            >
              📧 Contact Support
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
