/**
 * Utility functions for the chat application
 */

/**
 * Format timestamp to human-readable format
 * @param timestamp - Unix timestamp in milliseconds
 * @returns Formatted date string
 */
export const formatTime = (timestamp: number): string => {
  const date = new Date(timestamp)
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffMins = Math.floor(diffMs / 60000)
  const diffHours = Math.floor(diffMs / 3600000)
  const diffDays = Math.floor(diffMs / 86400000)

  if (diffMins < 1) return 'just now'
  if (diffMins < 60) return `${diffMins}m ago`
  if (diffHours < 24) return `${diffHours}h ago`
  if (diffDays < 7) return `${diffDays}d ago`

  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined,
  })
}

/**
 * Generate unique ID
 * @returns Unique identifier string
 */
export const generateId = (): string => {
  return `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
}

/**
 * Parse AI response and extract structured data
 * @param text - Raw AI response text
 * @returns Parsed response object
 */
export const parseAIResponse = (text: string) => {
  // Extract sections from the response
  const sections = {
    careerpaths: [] as string[],
    skills: [] as string[],
    roadmap: [] as string[],
    resources: [] as string[],
  }

  const lines = text.split('\n')
  let currentSection = ''

  for (const line of lines) {
    if (line.includes('Career Path')) currentSection = 'careerpaths'
    else if (line.includes('Skill')) currentSection = 'skills'
    else if (line.includes('Roadmap')) currentSection = 'roadmap'
    else if (line.includes('Resource')) currentSection = 'resources'
    else if (line.trim() && currentSection) {
      sections[currentSection as keyof typeof sections].push(line.trim())
    }
  }

  return sections
}

/**
 * Truncate text to specified length
 * @param text - Text to truncate
 * @param length - Maximum length
 * @returns Truncated text with ellipsis
 */
export const truncate = (text: string, length: number): string => {
  if (text.length <= length) return text
  return text.slice(0, length) + '...'
}

/**
 * Copy text to clipboard
 * @param text - Text to copy
 * @returns Promise that resolves when copy is complete
 */
export const copyToClipboard = async (text: string): Promise<void> => {
  if (navigator.clipboard) {
    await navigator.clipboard.writeText(text)
  } else {
    // Fallback for older browsers
    const textArea = document.createElement('textarea')
    textArea.value = text
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand('copy')
    document.body.removeChild(textArea)
  }
}

/**
 * Download text as file
 * @param filename - Name of file to download
 * @param text - Content to download
 */
export const downloadAsFile = (filename: string, text: string): void => {
  const element = document.createElement('a')
  element.setAttribute(
    'href',
    `data:text/plain;charset=utf-8,${encodeURIComponent(text)}`
  )
  element.setAttribute('download', filename)
  element.style.display = 'none'
  document.body.appendChild(element)
  element.click()
  document.body.removeChild(element)
}
