'use client'

import { useRouter } from 'next/navigation'
import { ArrowRight, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

/**
 * Landing Page Component
 * Displays hero section with title, description, and call-to-action
 */
export default function Home() {
  const router = useRouter()

  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-secondary to-dark flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Main content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="mb-6 inline-block"
        >
          <div className="glass-morphism-dark px-4 py-2 rounded-full flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-gray-300">
              AI-Powered Career Guidance
            </span>
          </div>
        </motion.div>

        {/* Main title */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="block mb-2">Discover Your</span>
          <span className="text-gradient">Perfect Career Path</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Get personalized career recommendations, required skills, and step-by-step
          learning roadmaps powered by advanced AI. Start your journey to a fulfilling career today.
        </motion.p>

        {/* Features */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
        >
          {[
            { icon: '🎯', label: 'Career Paths' },
            { icon: '📚', label: 'Learning Plans' },
            { icon: '🚀', label: 'Growth Track' },
          ].map((feature, index) => (
            <div
              key={index}
              className="glass-morphism-dark px-6 py-4 rounded-lg border border-white/10 hover:border-blue-500/30 transition-colors"
            >
              <div className="text-2xl mb-2">{feature.icon}</div>
              <p className="text-gray-300 font-medium">{feature.label}</p>
            </div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={() => router.push('/chat')}
            className="btn-gradient text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 hover:shadow-lg hover:shadow-blue-500/50 transition-all transform hover:scale-105"
          >
            Start Chat
            <ArrowRight className="w-5 h-5" />
          </button>
          <button
            onClick={() => document.getElementById('info')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 rounded-lg font-semibold text-lg border-2 border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white transition-all"
          >
            Learn More
          </button>
        </motion.div>
      </motion.div>

      {/* Info section */}
      <div id="info" className="absolute bottom-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
    </div>
  )
}
