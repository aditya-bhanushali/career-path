This project is an AI Career Guidance Chatbot built with Next.js 14, TypeScript, Tailwind CSS, and OpenAI API. It provides personalized career recommendations, learning roadmaps, and skill analysis.

## Project Overview

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Framer Motion animations
- **AI:** OpenAI GPT-3.5-turbo API
- **Deployment:** Vercel (serverless)
- **State Management:** Zustand with localStorage persistence

## Key Features

1. **Landing Page** - Modern hero section with animations
2. **Chat Interface** - ChatGPT-style interface with dark mode
3. **Personalization** - User profile (interests, skills, goals, education)
4. **AI Responses** - Career paths, learning roadmaps, skill analysis
5. **Chat History** - Sidebar with all conversations (localStorage)

## Quick Start

1. Add `OPENAI_API_KEY` to `.env.local`
2. Run `npm run dev`
3. Open http://localhost:3000

## Deployment

- **Local:** `npm run dev`
- **Production Build:** `npm run build && npm run start`
- **Vercel:** Push to GitHub → Import to Vercel → Add env var → Deploy

## File Structure

```
src/
├── app/
│   ├── layout.tsx           - Root layout
│   ├── page.tsx            - Landing page
│   ├── globals.css         - Global styles
│   ├── chat/
│   │   └── page.tsx        - Chat interface
│   └── api/chat/
│       └── route.ts        - OpenAI API integration
├── components/
│   ├── ChatMessage.tsx     - Message display
│   ├── ChatInput.tsx       - User input field
│   ├── ChatContainer.tsx   - Messages list
│   ├── Sidebar.tsx         - Chat history
│   └── ThemeToggle.tsx     - Dark/light mode
├── hooks/
│   └── useChat.ts          - Chat logic
└── lib/
    ├── store.ts            - Zustand state management
    └── utils.ts            - Utility functions
```

## Important Notes

- All chats are saved in localStorage (client-side)
- API key must be in `.env.local` (never commit)
- Project is production-ready with proper error handling
- Fully responsive design (mobile to desktop)

## Environment Variables

`OPENAI_API_KEY=sk-your-key-here` (required for chat to work)

## Documentation

- `README.md` - Full feature documentation
- `SETUP.md` - Detailed setup and deployment guide
- `QUICKSTART.md` - Quick start guide
- Code comments throughout for learning

---

**Status:** ✅ Production ready - Build successful, dev server running, ready for deployment

