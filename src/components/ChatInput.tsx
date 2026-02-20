/**
 * ChatInput Component
 * Input field for user messages with personalization options
 */

'use client'

import { useState, useRef, useEffect } from 'react'
import { Send, Plus } from 'lucide-react'
import { motion } from 'framer-motion'

interface ChatInputProps {
  onSend: (
    message: string,
    profile?: {
      interests?: string
      educationLevel?: string
      skills?: string[]
      goals?: string
    }
  ) => void
  isLoading: boolean
}

export const ChatInput = ({ onSend, isLoading }: ChatInputProps) => {
  const [message, setMessage] = useState('')
  const [showPersonalization, setShowPersonalization] = useState(false)
  const [interests, setInterests] = useState('')
  const [educationLevel, setEducationLevel] = useState('')
  const [skills, setSkills] = useState<string[]>([])
  const [currentSkill, setCurrentSkill] = useState('')
  const [goals, setGoals] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  /**
   * Auto-resize textarea based on content
   */
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = Math.min(
        textareaRef.current.scrollHeight,
        200
      ) + 'px'
    }
  }, [message])

  /**
   * Handle sending message
   */
  const handleSend = () => {
    if (message.trim() && !isLoading) {
      onSend(message, {
        interests: interests || undefined,
        educationLevel: educationLevel || undefined,
        skills: skills.length > 0 ? skills : undefined,
        goals: goals || undefined,
      })

      setMessage('')
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto'
      }
    }
  }

  /**
   * Handle adding skill
   */
  const handleAddSkill = () => {
    if (currentSkill.trim() && !skills.includes(currentSkill.trim())) {
      setSkills([...skills, currentSkill.trim()])
      setCurrentSkill('')
    }
  }

  /**
   * Handle removing skill
   */
  const handleRemoveSkill = (skill: string) => {
    setSkills(skills.filter((s) => s !== skill))
  }

  /**
   * Handle keyboard shortcuts
   */
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="border-t border-white/10 bg-dark-secondary/50 backdrop-blur-sm p-4 sm:p-6">
      {/* Personalization panel */}
      {showPersonalization && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="mb-4 glass-morphism-dark p-4 rounded-lg border border-white/10 space-y-3"
        >
          {/* Interests input */}
          <div>
            <label className="block text-xs font-semibold text-gray-400 mb-1">
              Interests
            </label>
            <input
              type="text"
              value={interests}
              onChange={(e) => setInterests(e.target.value)}
              placeholder="E.g., Web Development, AI, Design..."
              className="w-full bg-dark-secondary border border-white/10 rounded px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Education level dropdown */}
          <div>
            <label className="block text-xs font-semibold text-gray-400 mb-1">
              Education Level
            </label>
            <select
              value={educationLevel}
              onChange={(e) => setEducationLevel(e.target.value)}
              className="w-full bg-dark-secondary border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
            >
              <option value="">Select level...</option>
              <option value="High School">High School</option>
              <option value="Associate">Associate Degree</option>
              <option value="Bachelor">Bachelor Degree</option>
              <option value="Master">Master Degree</option>
              <option value="PhD">PhD</option>
            </select>
          </div>

          {/* Skills input */}
          <div>
            <label className="block text-xs font-semibold text-gray-400 mb-1">
              Skills
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={currentSkill}
                onChange={(e) => setCurrentSkill(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault()
                    handleAddSkill()
                  }
                }}
                placeholder="E.g., Python, React..."
                className="flex-1 bg-dark-secondary border border-white/10 rounded px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
              />
              <button
                onClick={handleAddSkill}
                className="px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm text-white transition-colors"
              >
                Add
              </button>
            </div>

            {/* Skills tags */}
            {skills.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="inline-flex items-center gap-2 px-2 py-1 bg-blue-600/30 border border-blue-500/50 rounded-full text-xs text-blue-200"
                  >
                    {skill}
                    <button
                      onClick={() => handleRemoveSkill(skill)}
                      className="hover:text-blue-100 transition-colors"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Career goals input */}
          <div>
            <label className="block text-xs font-semibold text-gray-400 mb-1">
              Career Goals
            </label>
            <textarea
              value={goals}
              onChange={(e) => setGoals(e.target.value)}
              placeholder="What are your career aspirations?..."
              className="w-full bg-dark-secondary border border-white/10 rounded px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 resize-none"
              rows={2}
            />
          </div>

          <button
            onClick={() => setShowPersonalization(false)}
            className="w-full px-3 py-2 bg-white/5 hover:bg-white/10 rounded text-xs text-gray-300 transition-colors"
          >
            Done
          </button>
        </motion.div>
      )}

      {/* Main input area */}
      <div className="flex gap-3">
        {/* Personalization toggle */}
        <button
          onClick={() => setShowPersonalization(!showPersonalization)}
          className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors group"
          title="Personalize chat settings"
        >
          <Plus className="w-5 h-5 text-gray-400 group-hover:text-white" />
        </button>

        {/* Message input */}
        <div className="flex-1 flex items-end gap-2 bg-dark-secondary border border-white/10 rounded-lg px-4 py-3 focus-within:border-blue-500 transition-colors">
          <textarea
            ref={textareaRef}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about career paths, skills, or learning roadmaps..."
            className="flex-1 bg-transparent text-white placeholder-gray-500 focus:outline-none resize-none overflow-hidden"
            rows={1}
            disabled={isLoading}
          />

          {/* Send button */}
          <button
            onClick={handleSend}
            disabled={!message.trim() || isLoading}
            className="flex-shrink-0 w-8 h-8 rounded flex items-center justify-center bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white transition-colors"
            title="Send message (Shift + Enter for new line)"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Helper text */}
      <div className="text-xs text-gray-500 mt-2 ml-13">
        Tip: Click the + button to add your interests, skills, and goals for better recommendations
      </div>
    </div>
  )
}
