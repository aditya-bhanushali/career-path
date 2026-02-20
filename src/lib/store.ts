/**
 * Chat store using Zustand
 * Manages chat history and application state
 */

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface Message {
  id: string
  content: string
  role: 'user' | 'assistant'
  timestamp: number
}

export interface ChatSession {
  id: string
  title: string
  messages: Message[]
  createdAt: number
  updatedAt: number
}

interface ChatStore {
  // Chat sessions
  sessions: ChatSession[]
  currentSessionId: string | null

  // Session management
  createSession: (title: string) => string
  deleteSession: (id: string) => void
  setCurrentSession: (id: string) => void
  renameSession: (id: string, title: string) => void

  // Message management
  addMessage: (message: Message) => void
  clearCurrentChat: () => void
  getCurrentSession: () => ChatSession | null

  // User preferences  
  theme: 'dark' | 'light'
  setTheme: (theme: 'dark' | 'light') => void
}

/**
 * Create Zustand store with localStorage persistence
 * Automatically saves state to localStorage and rehydrates on page load
 */
export const useChatStore = create<ChatStore>()(
  persist(
    (set, get) => ({
      sessions: [],
      currentSessionId: null,
      theme: 'dark',

      /**
       * Create new chat session
       * @param title - Name of the chat session
       * @returns Session ID
       */
      createSession: (title: string) => {
        const sessionId = `session_${Date.now()}`
        const newSession: ChatSession = {
          id: sessionId,
          title,
          messages: [],
          createdAt: Date.now(),
          updatedAt: Date.now(),
        }

        set((state) => ({
          sessions: [newSession, ...state.sessions],
          currentSessionId: sessionId,
        }))

        return sessionId
      },

      /**
       * Delete a chat session
       * @param id - Session ID to delete
       */
      deleteSession: (id: string) => {
        set((state) => {
          const newSessions = state.sessions.filter((s) => s.id !== id)
          const newCurrentId =
            state.currentSessionId === id
              ? newSessions[0]?.id ?? null
              : state.currentSessionId

          return {
            sessions: newSessions,
            currentSessionId: newCurrentId,
          }
        })
      },

      /**
       * Set the current active session
       * @param id - Session ID to activate
       */
      setCurrentSession: (id: string) => {
        set({ currentSessionId: id })
      },

      /**
       * Rename an existing session
       * @param id - Session ID
       * @param title - New title
       */
      renameSession: (id: string, title: string) => {
        set((state) => ({
          sessions: state.sessions.map((s) =>
            s.id === id ? { ...s, title } : s
          ),
        }))
      },

      /**
       * Add message to current session
       * @param message - Message object to add
       */
      addMessage: (message: Message) => {
        set((state) => {
          const sessionId = state.currentSessionId
          if (!sessionId) return state

          return {
            sessions: state.sessions.map((s) =>
              s.id === sessionId
                ? {
                    ...s,
                    messages: [...s.messages, message],
                    updatedAt: Date.now(),
                  }
                : s
            ),
          }
        })
      },

      /**
       * Clear all messages from current session
       */
      clearCurrentChat: () => {
        set((state) => {
          const sessionId = state.currentSessionId
          if (!sessionId) return state

          return {
            sessions: state.sessions.map((s) =>
              s.id === sessionId
                ? { ...s, messages: [], updatedAt: Date.now() }
                : s
            ),
          }
        })
      },

      /**
       * Get current active session
       * @returns Current ChatSession or null
       */
      getCurrentSession: () => {
        const state = get()
        return (
          state.sessions.find((s) => s.id === state.currentSessionId) || null
        )
      },

      /**
       * Set application theme
       * @param theme - 'dark' or 'light'
       */
      setTheme: (theme: 'dark' | 'light') => {
        set({ theme })
      },
    }),
    {
      name: 'career-chatbot-store', // LocalStorage key
      partialize: (state) => ({
        sessions: state.sessions,
        currentSessionId: state.currentSessionId,
        theme: state.theme,
      }),
    }
  )
)
