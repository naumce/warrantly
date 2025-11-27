'use client'

import { Check, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

const tiers = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for getting started',
    features: [
      '2 warranties',
      '1 claim',
      '2 AI credits',
      'Basic features',
      'Email support',
    ],
    cta: 'Download Free',
    popular: false,
    gradient: 'from-gray-500 to-gray-600',
    link: null // Free tier - download app
  },
  {
    name: 'Starter',
    price: '$4.99',
    period: 'one-time',
    description: 'For essential tracking',
    features: [
      '5 warranties',
      '3 claims',
      '5 AI credits',
      'All AI features',
      'Priority support',
      'Buy more credits',
    ],
    cta: 'Buy Lifetime Access',
    popular: false,
    gradient: 'from-blue-500 to-cyan-500',
    link: 'https://warrantly.lemonsqueezy.com/buy/cc07666e-c27c-4173-9c97-22c2b4ab8a9a'
  },
  {
    name: 'Pro',
    price: '$9.99',
    period: 'one-time',
    description: 'Most popular choice',
    features: [
      '15 warranties',
      '10 claims',
      '20 AI credits',
      'All AI features',
      'Unlimited receipts',
      'Service locator',
      'Priority support',
      'Buy more credits',
    ],
    cta: 'Buy Lifetime Access',
    popular: true,
    gradient: 'from-purple-600 to-pink-600',
    badge: 'MOST POPULAR',
    link: 'https://warrantly.lemonsqueezy.com/buy/b4afe4ae-d4e0-453b-8c09-dd16ae648620'
  },
  {
    name: 'Ultimate',
    price: '$19.99',
    period: 'one-time',
    description: 'For power users',
    features: [
      '50 warranties',
      '30 claims',
      '50 AI credits',
      'All premium features',
      'Bulk import',
      'Service locator',
      'Priority support',
      'Buy more credits',
    ],
    cta: 'Buy Lifetime Access',
    popular: false,
    gradient: 'from-indigo-600 to-purple-600',
    badge: 'BEST VALUE',
    link: 'https://warrantly.lemonsqueezy.com/buy/df8e06a8-c643-4cff-b05a-558d88fe6054'
  },
]

const creditPackages = [
  { 
    credits: 10, 
    price: '$4.99',
    link: 'https://warrantly.lemonsqueezy.com/buy/e1b4632c-6ce1-44a0-82ec-139f06589c95'
  },
  { 
    credits: 50, 
    price: '$19.99',
    link: 'https://warrantly.lemonsqueezy.com/buy/353e919b-8141-4ef7-8858-f1da6a4f0b81',
    badge: 'POPULAR'
  },
  { 
    credits: 150, 
    price: '$39.99',
    link: 'https://warrantly.lemonsqueezy.com/buy/f29cf6f6-4229-4200-be60-3b09589c4c09',
    badge: 'BEST VALUE'
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
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 }
}

export default function Pricing() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-purple-50 via-white to-pink-50" id="pricing">
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
            className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm font-semibold mb-4"
          >
            💎 Lifetime Access - Pay Once, Use Forever
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              One-Time Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            No subscriptions. No hidden fees. Just lifetime access to Warrantly.
          </p>
        </motion.div>

        {/* Pricing Tiers */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -12, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`relative ${tier.popular ? 'lg:scale-105 z-10' : ''}`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <motion.div
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -top-5 left-1/2 -translate-x-1/2 z-20"
                >
                  <motion.span
                    animate={{
                      scale: [1, 1.05, 1],
                      rotate: [-1, 1, -1]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg"
                  >
                    ⭐ {tier.badge}
                  </motion.span>
                </motion.div>
              )}

              {/* Card Background Glow */}
              {tier.popular && (
                <motion.div
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className={`absolute inset-0 bg-gradient-to-r ${tier.gradient} rounded-3xl blur-2xl`}
                />
              )}

              {/* Card */}
              <div
                className={`relative bg-white rounded-3xl p-8 shadow-xl border-2 ${
                  tier.popular ? 'border-purple-300' : 'border-gray-100'
                } hover:shadow-2xl transition-all duration-300`}
              >
                {/* Badge for Business Pro */}
                {tier.badge && !tier.popular && (
                  <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-600 text-xs font-bold rounded-full mb-4">
                    {tier.badge}
                  </span>
                )}

                {/* Tier Name */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                <p className="text-gray-600 text-sm mb-6">{tier.description}</p>

                {/* Price */}
                <div className="mb-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-baseline"
                  >
                    <span className={`text-5xl font-bold bg-gradient-to-r ${tier.gradient} bg-clip-text text-transparent`}>
                      {tier.price}
                    </span>
                    <span className="ml-2 text-gray-500">/{tier.period}</span>
                  </motion.div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * i }}
                      className="flex items-start gap-3"
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Check className={`w-5 h-5 flex-shrink-0 ${tier.popular ? 'text-purple-600' : 'text-green-600'}`} />
                      </motion.div>
                      <span className="text-gray-700">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.a
                  href={tier.link || '#'}
                  target={tier.link ? '_blank' : undefined}
                  rel={tier.link ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`block w-full py-4 rounded-2xl font-bold text-lg transition-all text-center ${
                    tier.popular
                      ? `bg-gradient-to-r ${tier.gradient} text-white shadow-lg hover:shadow-xl`
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {tier.cta}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Credit Packages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 max-w-3xl mx-auto"
        >
          <div className="text-center mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="inline-block mb-2"
            >
              <Sparkles className="w-8 h-8 text-purple-600" />
            </motion.div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Need more AI credits?</h3>
            <p className="text-gray-600">Buy additional credits anytime.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {creditPackages.map((pkg, index) => (
              <motion.a
                key={index}
                href={pkg.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-200 hover:border-purple-400 transition-colors cursor-pointer relative"
              >
                {pkg.badge && (
                  <span className="absolute -top-3 -right-2 px-2 py-1 bg-gradient-to-r from-orange-400 to-pink-500 text-white text-xs font-bold rounded-full shadow-lg">
                    {pkg.badge}
                  </span>
                )}
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-1">{pkg.credits}</div>
                  <div className="text-sm text-gray-600 mb-2">credits</div>
                  <div className="text-xl font-bold text-gray-900">{pkg.price}</div>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-6"
          >
            <p className="text-sm text-gray-500">✨ Credits never expire</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
