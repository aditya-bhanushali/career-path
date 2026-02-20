# 🚀 AI Career Guidance Chatbot - Quick Start

## ✅ Project is Ready! 

Your AI Career Guidance Chatbot is now built and configured. Here's everything you need to get started.

---

## 📋 INSTANT SETUP (Follow Steps 1-3)

### **Step 1: Get OpenAI API Key** (2 minutes)
1. Go to: https://platform.openai.com/api-keys
2. Sign in or create free account
3. Click "Create new secret key"
4. Copy the key (shows only once!)
5. Store safely

**💰 Cost:** Free tier includes $5 credit for testing

---

### **Step 2: Add API Key to Project** (1 minute)

1. Open file: `.env.local` in project root
2. Paste your key:
```env
OPENAI_API_KEY=sk-your-actual-key-here
```
3. Save file

**⚠️ Important:** Never commit `.env.local` to Git (already in .gitignore)

---

### **Step 3: Run Development Server** (30 seconds)

```bash
npm run dev
```

Open: **http://localhost:3000**

---

## 🎯 Test the App

1. **Landing Page** ✓
   - Modern hero section with animations
   - "Start Chat" button
   
2. **Chat Interface** ✓
   - Click "Start Chat"
   - Type a message
   - Watch AI respond
   
3. **Try These Questions:**
   ```
   "What careers suit AI enthusiasts?"
   "What skills do I need for web development?"
   "How do I transition to data science?"
   ```

4. **Use Personalization** ✓
   - Click "+" button in chat input
   - Add your interests, skills, education level
   - Ask follow-up questions

---

## 📦 Project Structure

```
career-chatbot/
├── src/
│   ├── app/
│   │   ├── page.tsx          ← Landing page
│   │   ├── chat/page.tsx     ← Chat interface
│   │   ├── api/chat/route.ts ← AI backend
│   │   └── globals.css       ← Global styles
│   ├── components/           ← React components
│   ├── hooks/                ← Custom hooks
│   └── lib/                  ← Utilities
├── public/                   ← Static files
├── .env.example              ← Template
├── .env.local                ← Your API key (local only)
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── README.md
└── SETUP.md                  ← Full documentation
```

---

## 🔑 Features Included

### User Interface
✅ Modern landing page with hero section
✅ ChatGPT-style chat interface
✅ Dark/Light mode toggle
✅ Sidebar with chat history (localStorage)
✅ Typing animations
✅ Fully responsive (mobile to desktop)

### Personalization
✅ Input for interests
✅ Education level selector
✅ Multi-skill input  
✅ Career goals textarea
✅ AI uses this data for better recommendations

### AI Responses Include
✅ 3-5 career path recommendations
✅ Required skills per career
✅ Step-by-step learning roadmap
✅ Recommended courses & tools
✅ Salary ranges
✅ Growth opportunities

### Technical
✅ Next.js 14 with App Router
✅ TypeScript for type safety
✅ Tailwind CSS for styling
✅ Framer Motion for animations
✅ Zustand for state management
✅ OpenAI API integration
✅ Vercel ready (serverless)
✅ Production-ready code

---

## 🚀 Deploy to Vercel (One-Click)

### **Option A: With GitHub (Recommended)**

1. Push to GitHub:
```bash
git init
git add .
git commit -m "AI Career Chatbot"
git remote add origin https://github.com/yourusername/career-chatbot
git branch -M main
git push -u origin main
```

2. Go to: https://vercel.com/new
3. Click "Import Git Repository"
4. Select your repo
5. Add `OPENAI_API_KEY` in Environment Variables
6. Click Deploy

**Live in seconds!** 🎉

---

### **Option B: With Vercel CLI**

```bash
npm install -g vercel
vercel
```

---

## 📝 Environment Variables

| Variable | Required | Where |
|----------|----------|-------|
| `OPENAI_API_KEY` | ✅ Yes | .env.local (local), Vercel dashboard (production) |

---

## 🧪 Available Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Lint code
npm run lint
```

---

## 🐛 Troubleshooting

### "OpenAI API key is not configured"
→ Check `.env.local` has correct key

### Port 3000 in use
→ `npm run dev -- -p 3001`

### Chat not saving
→ Clear cache, restart. Check localStorage enabled

### Slow responses
→ Check OpenAI API quota at platform.openai.com

### Build errors
→ Run `npm install` again

---

## 💡 Pro Tips

1. **Save development time:** Use the personalization form to add your profile once
2. **Better responses:** Be specific in questions ("I want ML roles paying $200k+")
3. **History:** All chats auto-save locally - switch devices for cloud sync
4. **API cost:** Monitor usage at platform.openai.com/account/usage
5. **Rate limits:** Free tier has some limits; upgrade if needed

---

## 📚 Learning Resources

- [Next.js Docs](https://nextjs.org/docs)
- [OpenAI API Guide](https://platform.openai.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript](https://www.typescriptlang.org/docs)

---

## 🔐 Security Notes

✅ API key stored locally in `.env.local` (development)
✅ API key stored in Vercel secrets (production)
✅ No sensitive data in Git
✅ Requests routed through Next.js backend
✅ Never hardcode keys in components

---

## 📊 Next Steps

1. ✅ Run `npm run dev`
2. ✅ Open http://localhost:3000
3. ✅ Test the chatbot
4. ✅ Customize colors/text in components
5. ✅ Deploy to Vercel
6. ✅ Share with friends!

---

## 🎓 Customization Quick Guide

### Change Brand Name
File: `src/app/page.tsx`
```tsx
<h1>Your Custom Title</h1>
```

### Change Colors
File: `tailwind.config.ts`
```ts
backgroundColor: {
  dark: '#your-color',
}
```

### Change AI Behavior
File: `src/app/api/chat/route.ts`
Update the `systemPrompt`

---

## 📞 Support

All files are fully commented. Read the code comments for detailed explanations!

**Good luck! 🚀**

Questions? Check README.md or SETUP.md for detailed documentation.
