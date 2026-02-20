# AI Career Guidance Chatbot

A production-ready, AI-powered career guidance chatbot built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Free Mock Responses** (no API costs). Get personalized career recommendations, required skills, and step-by-step learning roadmaps.

## 🌐 Live Demo

**Try it now:** [https://career-path-silk.vercel.app/chat](https://career-path-silk.vercel.app/chat)

✅ Fully functional and free to use!

## 🚀 Features

### Core Features
- **🤖 AI-Powered Recommendations** - Get personalized career paths based on your interests and goals
- **📚 Learning Roadmaps** - Step-by-step learning plans with timeline estimates
- **💼 Skill Gap Analysis** - Identify missing skills and how to bridge them
- **💡 Growth Opportunities** - Discover future trends and advancement paths

### Technical Features
- ✨ **Modern Chat Interface** - ChatGPT-style interface with smooth animations
- 🎨 **Dark/Light Mode** - Toggle between themes
- 💾 **Local Chat History** - All chats saved in localStorage
- 📱 **Fully Responsive** - Works perfectly on mobile, tablet, and desktop
- ⚡ **Serverless Architecture** - Deploy instantly on Vercel with no backend server
- 🔒 **Secure API Keys** - Environment variables keep your API key safe

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Career Data:** Free Mock Responses (no API costs)
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **State Management:** Zustand
- **Deployment:** Vercel (serverless)

## 📋 Prerequisites

Before you begin, make sure you have:

- **Node.js** 18.0 or higher
- **npm** or **yarn** package manager
- **VS Code** (recommended)

**No API keys required!** The app uses free mock responses.

## 🚀 Quick Start

### 1. Local Development Setup

Clone or download this project, then open it in VS Code:

```bash
# Navigate to project directory
cd career-chatbot

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run in Development Mode

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Test the App

- Click "Start Chat" on the landing page
- Try asking: "What career paths suit someone interested in AI?"
- Add your profile info using the "+" button for better recommendations
- Chat history is saved automatically

## 🏗️ Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Landing page
│   ├── globals.css             # Global styles
│   ├── chat/
│   │   └── page.tsx            # Chat interface
│   └── api/
│       └── chat/
│           └── route.ts        # Career guidance API (free mock)
├── components/
│   ├── ChatMessage.tsx         # Message display component
│   ├── ChatInput.tsx           # User input component
│   ├── ChatContainer.tsx       # Messages container
│   ├── Sidebar.tsx             # Chat history sidebar
│   └── ThemeToggle.tsx         # Dark/light mode toggle
├── hooks/
│   └── useChat.ts              # Chat logic hook
├── lib/
│   ├── store.ts                # Zustand state management
│   └── utils.ts                # Utility functions
└── public/                      # Static files

```

## 🔧 API Integration

The chatbot uses Next.js API Routes with smart career guidance detection:

### Endpoint: `POST /api/chat`

**Request:**
```json
{
  "message": "What careers suit AI enthusiasts?",
  "interests": "Machine Learning, Data Science",
  "educationLevel": "Bachelor",
  "skills": ["Python", "Statistics"],
  "goals": "Become ML Engineer"
}
```

**Response (Free Mock):**
```json
{
  "success": true,
  "response": "## Career Path Recommendations\n### 1. **Machine Learning Engineer**\n- Salary Range: $120,000 - $180,000/year..."
}
```

✨ **Instant responses, completely free - no external API calls!**

## 📦 Build & Production

### Build the project:
```bash
npm run build
```

### Start production server:
```bash
npm run start
```

## 🚢 Deploy to Vercel (One-Click)

### Option 1: Deploy with GitHub (Recommended)

1. Push this project to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" → Import your GitHub repo
4. Click Deploy (no environment variables needed!)
5. Your app is live!

### Option 2: Deploy with Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy from project directory
vercel
```

✅ **No API keys required** - The app uses free mock responses, so there's nothing to configure!

**Live Demo:** [https://career-path-silk.vercel.app/chat](https://career-path-silk.vercel.app/chat)

## 🎯 Usage Guide

### Starting a New Chat
- Click "New Chat" in the sidebar to start a fresh conversation
- Each chat is automatically saved with a timestamp

### Personalizing Recommendations
1. Click the **"+"** button in the chat input
2. Add your interests (e.g., "Web Development, AI")
3. Select education level (high school to PhD)
4. Add your current skills (press Enter to add each)
5. Share your career goals
6. Click "Done" and start chatting

### Getting Better Recommendations
- Be specific about your interests
- List your actual skills
- Mention your career timeline
- Ask follow-up questions for deeper insights

## 🛡️ Security & Best Practices

- ✅ API key stored securely in `.env.local` (never committed)
- ✅ No sensitive data in frontend code
- ✅ API calls go through Next.js backend
- ✅ Rate limiting via OpenAI account
- ✅ Error handling for API failures

## 🐛 Troubleshooting

### Issue: "OpenAI API key is not configured"
**Solution:** Make sure you've added `OPENAI_API_KEY` to `.env.local`

### Issue: Port 3000 already in use
**Solution:** Use a different port:
```bash
npm run dev -- -p 3001
```

### Issue: Chat history not saving
**Solution:** Clear browser cache and restart. LocalStorage should be enabled.

### Issue: Messages slow to respond
**Solution:** Check your OpenAI API rate limits at [platform.openai.com](https://platform.openai.com)

## 📚 Example Prompts

Try these conversation starters:

```
1. "I'm interested in web development. What skills do I need?"
2. "I want to transition to data science. What's my learning path?"
3. "What are the highest-paying tech careers right now?"
4. "How do I become a product manager?"
5. "What skills make someone valuable in AI?"
6. "I have Python and JavaScript skills. What roles fit me?"
7. "How long does it take to become a full-stack developer?"
8. "What's the difference between ML Engineer and Data Scientist?"
```

## 🔑 Environment Variables

Create a `.env.local` file:

```env
# Required: Your OpenAI API Key
OPENAI_API_KEY=sk-your-api-key-here

# Optional: Control model behavior
# NEXT_PUBLIC_MODEL=gpt-3.5-turbo
# NEXT_PUBLIC_TEMPERATURE=0.7
```

## 📄 File Documentation

### Key Files

| File | Purpose |
|------|---------|
| `src/app/api/chat/route.ts` | OpenAI API integration & backend logic |
| `src/app/chat/page.tsx` | Main chat interface page |
| `src/lib/store.ts` | Zustand state management & localStorage |
| `src/hooks/useChat.ts` | Chat logic & message handling |
| `src/components/ChatMessage.tsx` | Message display components |

## 🚀 Performance Tips

- Chat history is stored locally - no server requests needed
- API responses are cached in browser
- Infinite scroll with virtual scrolling for large chat histories
- Images and assets are optimized for production

## 📱 Responsive Breakpoints

- **Mobile:** 320px and above
- **Tablet:** 640px (sm) and above
- **Desktop:** 768px (md) and above
- **Large Desktop:** 1024px (lg) and above

## 🎨 Customization

### Change Color Scheme
Edit `tailwind.config.ts` to modify colors:

```typescript
extend: {
  backgroundColor: {
    dark: '#0a0e27',
    'dark-secondary': '#1a1f3a',
  },
}
```

### Modify AI Behavior
Edit `src/app/api/chat/route.ts` and adjust the system prompt

### Update Landing Page
Edit `src/app/page.tsx` to customize the hero section

## 📞 Support & Resources

- **OpenAI API Docs:** [platform.openai.com/docs](https://platform.openai.com/docs)
- **Next.js Guide:** [nextjs.org/docs](https://nextjs.org/docs)
- **Tailwind CSS:** [tailwindcss.com](https://tailwindcss.com)
- **Vercel Deployment:** [vercel.com/docs](https://vercel.com/docs)

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Feel free to fork this project and submit pull requests for improvements!

## ✨ Future Enhancements

- [ ] Download roadmap as PDF
- [ ] Export chat as markdown
- [ ] Share roadmap links
- [ ] Multiple AI models support
- [ ] Voice input/output
- [ ] Real-time collaboration
- [ ] Custom career databases
- [ ] Integration with LinkedIn profiles

## 📊 Usage Statistics

This app tracks:
- Total messages sent
- API response times
- Popular career paths discussed
- User engagement metrics

All tracking is done securely and respects user privacy.

---

**Happy Career Guidance! 🚀**

For questions or issues, please open an issue on GitHub or contact support.
