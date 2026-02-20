/**
 * Custom hook for managing chat functionality
 */

'use client'

import { useState, useCallback } from 'react'
import { useChatStore, Message } from '@/lib/store'
import { generateId } from '@/lib/utils'

interface UseChatReturn {
  messages: Message[]
  isLoading: boolean
  error: string | null
  sendMessage: (
    content: string,
    userProfile?: {
      interests?: string
      educationLevel?: string
      skills?: string[]
      goals?: string
    }
  ) => Promise<void>
  clearChat: () => void
}

/**
 * Hook for managing chat interactions
 * Handles sending messages and managing loading/error states
 */
export const useChat = (): UseChatReturn => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const { addMessage, getCurrentSession } = useChatStore()

  /**
   * Send message to AI and get response
   * @param content - User message content
   * @param userProfile - Optional user profile data for AI context
   */
  const sendMessage = useCallback(
    async (
      content: string,
      userProfile?: {
        interests?: string
        educationLevel?: string
        skills?: string[]
        goals?: string
      }
    ) => {
      // Reset error state
      setError(null)

      // Validate message
      if (!content.trim()) {
        setError('Message cannot be empty')
        return
      }

      // Create user message
      const userMessage: Message = {
        id: generateId(),
        content,
        role: 'user',
        timestamp: Date.now(),
      }

      try {
        // Add user message to store
        addMessage(userMessage)
        setIsLoading(true)

        // Call API with user message and profile data
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message: content,
            ...userProfile,
          }),
        })

        // Handle API errors
        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(
            errorData.error || `API error: ${response.statusText}`
          )
        }

        // Parse response
        const data = await response.json()
        const aiResponse = data.response

        // Create AI message
        const assistantMessage: Message = {
          id: generateId(),
          content: aiResponse,
          role: 'assistant',
          timestamp: Date.now(),
        }

        // Add AI message to store
        addMessage(assistantMessage)
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : 'Failed to get response'
        setError(errorMessage)
        console.error('Chat error:', err)
      } finally {
        setIsLoading(false)
      }
    },
    [addMessage]
  )

  const currentSession = getCurrentSession()
  const messages = currentSession?.messages || []

  return {
    messages,
    isLoading,
    error,
    sendMessage,
    clearChat: () => useChatStore.getState().clearCurrentChat(),
  }
}
