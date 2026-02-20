/**
 * Sidebar Component
 * Displays chat history and navigation
 */

'use client'

import { useState, useEffect } from 'react'
import { useChatStore, ChatSession } from '@/lib/store'
import { Plus, Trash2, Menu, X, Edit2, Check } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { formatTime } from '@/lib/utils'

/**
 * Sidebar component for chat navigation and history
 */
export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editTitle, setEditTitle] = useState('')
  const [hydrated, setHydrated] = useState(false)

  const {
    sessions,
    currentSessionId,
    createSession,
    deleteSession,
    setCurrentSession,
    renameSession,
  } = useChatStore()

  // Prevent hydration mismatch
  useEffect(() => {
    setHydrated(true)
  }, [])

  /**
   * Handle creating new chat session
   */
  const handleNewChat = () => {
    const newSessionId = createSession('New Chat')
    setCurrentSession(newSessionId)
    setIsOpen(false)
  }

  /**
   * Handle deleting a session
   */
  const handleDelete = (id: string, e: React.MouseEvent) => {
    e.stopPropagation()
    if (window.confirm('Delete this chat session?')) {
      deleteSession(id)
    }
  }

  /**
   * Handle renaming a session
   */
  const handleRename = (session: ChatSession, e: React.MouseEvent) => {
    e.stopPropagation()
    setEditingId(session.id)
    setEditTitle(session.title)
  }

  /**
   * Save renamed session
   */
  const handleSaveRename = (id: string) => {
    if (editTitle.trim()) {
      renameSession(id, editTitle.trim())
    }
    setEditingId(null)
  }

  if (!hydrated) return null

  return (
    <>
      {/* Mobile menu toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 md:hidden p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
      >
        {isOpen ? (
          <X className="w-5 h-5 text-white" />
        ) : (
          <Menu className="w-5 h-5 text-white" />
        )}
      </button>

      {/* Sidebar backdrop on mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/50 z-30 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar panel */}
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: isOpen ? 0 : -300 }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
        className="fixed left-0 top-0 h-screen w-64 bg-dark-secondary border-r border-white/10 flex flex-col z-40 md:sticky md:x-0 md:translate-x-0 md:animate-none"
      >
        {/* Header */}
        <div className="p-4 border-b border-white/10">
          <h2 className="text-lg font-bold text-white mb-4">Chat History</h2>
          <button
            onClick={handleNewChat}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors"
          >
            <Plus className="w-4 h-4" />
            New Chat
          </button>
        </div>

        {/* Chat sessions list */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {sessions.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500 text-sm">No chats yet</p>
              <p className="text-gray-600 text-xs mt-2">
                Start a new chat to begin
              </p>
            </div>
          ) : (
            sessions.map((session) => (
              <motion.div
                key={session.id}
                whileHover={{ x: 4 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <div
                  onClick={() => {
                    setCurrentSession(session.id)
                    setIsOpen(false)
                  }}
                  className={`group p-3 rounded-lg cursor-pointer transition-colors ${
                    currentSessionId === session.id
                      ? 'bg-blue-600/20 border border-blue-500/50'
                      : 'bg-white/5 hover:bg-white/10 border border-transparent'
                  }`}
                >
                  {/* Session title editing */}
                  {editingId === session.id ? (
                    <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
                      <input
                        autoFocus
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            handleSaveRename(session.id)
                          }
                        }}
                        className="flex-1 bg-dark-secondary border border-white/20 rounded px-2 py-1 text-xs text-white focus:outline-none focus:border-blue-500"
                      />
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          handleSaveRename(session.id)
                        }}
                        className="p-1 hover:bg-white/10 rounded transition-colors"
                      >
                        <Check className="w-4 h-4 text-green-400" />
                      </button>
                    </div>
                  ) : (
                    <>
                      {/* Session title and message count */}
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-medium text-white truncate">
                            {session.title}
                          </h3>
                          <p className="text-xs text-gray-500 mt-1">
                            {session.messages.length} messages
                          </p>
                          <p className="text-xs text-gray-600 mt-0.5">
                            {formatTime(session.updatedAt)}
                          </p>
                        </div>

                        {/* Action buttons */}
                        <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button
                            onClick={(e) => handleRename(session, e)}
                            className="p-1 rounded hover:bg-white/10 transition-colors"
                            title="Rename"
                          >
                            <Edit2 className="w-3 h-3 text-gray-400" />
                          </button>
                          <button
                            onClick={(e) => handleDelete(session.id, e)}
                            className="p-1 rounded hover:bg-red-500/20 transition-colors"
                            title="Delete"
                          >
                            <Trash2 className="w-3 h-3 text-red-400" />
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-white/10 p-4">
          <p className="text-xs text-gray-500 text-center">
            Chat history saved locally
          </p>
        </div>
      </motion.div>
    </>
  )
}
