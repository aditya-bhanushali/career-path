/**
 * ChatMessage Component
 * Displays individual chat messages with animations
 */

'use client'

import { Message } from '@/lib/store'
import { motion } from 'framer-motion'
import { Copy, Check } from 'lucide-react'
import { useState } from 'react'
import { copyToClipboard } from '@/lib/utils'

interface ChatMessageProps {
  message: Message
}

export const ChatMessage = ({ message }: ChatMessageProps) => {
  const [copied, setCopied] = useState(false)
  const isUser = message.role === 'user'

  /**
   * Handle copy message to clipboard
   */
  const handleCopy = async () => {
    await copyToClipboard(message.content)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}
    >
      <div
        className={`flex gap-3 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl ${
          isUser ? 'flex-row-reverse' : 'flex-row'
        }`}
      >
        {/* Avatar */}
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
            isUser
              ? 'bg-blue-600 text-white'
              : 'glass-morphism-dark border border-white/20'
          }`}
        >
          {isUser ? (
            <span className="text-sm font-bold">U</span>
          ) : (
            <span className="text-sm">🤖</span>
          )}
        </div>

        {/* Message bubble */}
        <div
          className={`group relative px-4 py-3 rounded-lg ${
            isUser
              ? 'bg-blue-600 text-white rounded-br-none'
              : 'glass-morphism-dark border border-white/20 text-gray-200 rounded-bl-none'
          }`}
        >
          {/* Message text with markdown-like formatting */}
          <div className="text-sm sm:text-base leading-relaxed whitespace-pre-wrap break-words">
            {message.content.split('\n').map((line, i) => (
              <div key={i}>
                {line.startsWith('•') ? (
                  <li className="ml-4">{line.slice(1)}</li>
                ) : line.startsWith('- ') ? (
                  <li className="ml-4">{line.slice(2)}</li>
                ) : line.startsWith('**') ? (
                  <strong>{line.slice(2, -2)}</strong>
                ) : (
                  line
                )}
              </div>
            ))}
          </div>

          {/* Copy button (only visible on hover for AI messages) */}
          {!isUser && (
            <button
              onClick={handleCopy}
              className="absolute top-2 right-2 p-2 opacity-0 group-hover:opacity-100 transition-opacity rounded hover:bg-white/10"
              title="Copy message"
            >
              {copied ? (
                <Check className="w-4 h-4 text-green-400" />
              ) : (
                <Copy className="w-4 h-4 text-gray-400" />
              )}
            </button>
          )}
        </div>
      </div>
    </motion.div>
  )
}

/**
 * Typing indicator component
 * Shows animated dots while AI is thinking
 */
export const TypingIndicator = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex gap-3 mb-4"
    >
      <div className="w-8 h-8 rounded-full glass-morphism-dark border border-white/20 flex items-center justify-center flex-shrink-0">
        <span className="text-sm">🤖</span>
      </div>
      <div className="glass-morphism-dark border border-white/20 px-4 py-3 rounded-lg flex gap-1">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-2 rounded-full bg-blue-400"
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 0.6,
              delay: i * 0.2,
              repeat: Infinity,
            }}
          />
        ))}
      </div>
    </motion.div>
  )
}
