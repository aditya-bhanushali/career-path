/**
 * ChatContainer Component
 * Main chat interface with messages list
 */

'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ChatMessage, TypingIndicator } from './ChatMessage'
import { Message } from '@/lib/store'

interface ChatContainerProps {
  messages: Message[]
  isLoading: boolean
  error: string | null
}

/**
 * Container for displaying chat messages with auto-scroll
 */
export const ChatContainer = ({
  messages,
  isLoading,
  error,
}: ChatContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null)

  /**
   * Auto-scroll to bottom when new messages arrive
   */
  useEffect(() => {
    if (containerRef.current) {
      const scrollTimeout = setTimeout(() => {
        if (containerRef.current) {
          containerRef.current.scrollTop = containerRef.current.scrollHeight
        }
      }, 0)

      return () => clearTimeout(scrollTimeout)
    }
  }, [messages, isLoading])

  // Show welcome message if no messages
  const isEmpty = messages.length === 0

  return (
    <div
      ref={containerRef}
      className="flex-1 overflow-y-auto px-4 sm:px-6 py-6 space-y-2 scroll-smooth"
    >
      {isEmpty ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="h-full flex items-center justify-center"
        >
          <div className="text-center max-w-md">
            <div className="text-5xl mb-4">🚀</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Welcome to Career AI
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mb-6">
              Start by telling us about yourself, your interests, and career
              goals. Then ask any questions about career paths, required skills,
              or learning roadmaps.
            </p>

            {/* Example questions */}
            <div className="space-y-3 mt-8">
              <p className="text-xs text-gray-500 uppercase tracking-wide">
                Try asking:
              </p>
              {[
                'What career paths suit someone interested in AI?',
                'How do I transition to web development?',
                'What skills do I need for data science?',
              ].map((question, i) => (
                <button
                  key={i}
                  className="w-full text-left px-4 py-3 rounded-lg glass-morphism-dark border border-white/10 hover:border-blue-500/50 text-sm text-gray-300 hover:text-white transition-all hover:translate-x-1 cursor-pointer group"
                  onClick={() => {
                    // This would integrate with the parent component to send the question
                  }}
                >
                  <span className="text-gray-500 group-hover:text-blue-400">
                    →
                  </span>{' '}
                  {question}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      ) : (
        <>
          {/* Messages list */}
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}

          {/* Loading indicator */}
          {isLoading && <TypingIndicator />}

          {/* Error message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mx-auto max-w-md bg-red-500/10 border border-red-500/50 rounded-lg p-4 text-red-300 text-sm"
            >
              <p className="font-semibold mb-1">Error</p>
              <p>{error}</p>
            </motion.div>
          )}

          {/* Spacer for scrolling */}
          <div className="h-4" />
        </>
      )}
    </div>
  )
}
