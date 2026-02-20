import type { Metadata, Viewport } from 'next'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
}

export const metadata: Metadata = {
  title: 'AI Career Path Recommender',
  description: 'Get personalized career guidance and learning roadmaps powered by AI',
  keywords: ['career', 'guidance', 'AI', 'learning', 'roadmap'],
  authors: [{ name: 'Your Name' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#000000" />
      </head>
      <body className="dark">
        {children}
      </body>
    </html>
  )
}
