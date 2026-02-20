/**
 * Chat Page
 * Main chat interface combining all components
 */

'use client'

import { useEffect } from 'react'
import { useChatStore } from '@/lib/store'
import { useChat } from '@/hooks/useChat'
import { Sidebar } from '@/components/Sidebar'
import { ChatContainer } from '@/components/ChatContainer'
import { ChatInput } from '@/components/ChatInput'
import { ThemeToggle } from '@/components/ThemeToggle'
import { LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'

/**
 * Chat page component
 * Displays the main chat interface with sidebar, messages, and input
 */
export default function ChatPage() {
  const router = useRouter()
  const { currentSessionId, createSession } = useChatStore()
  const { messages, isLoading, error, sendMessage, clearChat } = useChat()

  /**
   * Initialize a new chat session on first load if none exists
   */
  useEffect(() => {
    if (!currentSessionId) {
      createSession('Career Chat')
    }
  }, [currentSessionId, createSession])

  /**
   * Handle message submission
   */
  const handleSendMessage = (
    content: string,
    profile?: {
      interests?: string
      educationLevel?: string
      skills?: string[]
      goals?: string
    }
  ) => {
    sendMessage(content, profile)
  }

  return (
    <div className="flex h-screen bg-dark text-dark-text overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main chat area */}
      <div className="flex flex-1 flex-col md:ml-0">
        {/* Header */}
        <div className="border-b border-white/10 bg-dark-secondary/50 backdrop-blur-sm px-4 sm:px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-white">
              AI Career Guidance
            </h1>
            <p className="text-xs sm:text-sm text-gray-500">
              Get personalized career recommendations
            </p>
          </div>

          {/* Header actions */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => router.push('/')}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
              title="Back to home"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Chat messages container */}
        <ChatContainer messages={messages} isLoading={isLoading} error={error} />

        {/* Chat input */}
        <ChatInput onSend={handleSendMessage} isLoading={isLoading} />
      </div>
    </div>
  )
}
