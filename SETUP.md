# AI Career Guidance Chatbot - VS Code Setup & Deployment Guide

## 📖 Quick Setup (5 minutes)

### 1. **Open Project in VS Code**
```bash
# Open the project folder in VS Code
code .
```

### 2. **Install Dependencies**
```bash
# In VS Code terminal (Ctrl + `)
npm install
```

### 3. **Configure OpenAI API Key**

**Step 1:** Create `.env.local` file
- Copy contents from `.env.example`
- Paste it into a new file named `.env.local`

**Step 2:** Get your API key
1. Go to: https://platform.openai.com/api-keys
2. Sign in or create account
3. Click "Create new secret key"
4. Copy the key (only shown once!)

**Step 3:** Add key to `.env.local`
```env
OPENAI_API_KEY=sk-your-actual-api-key-here
```

⚠️ **Important:** Never commit `.env.local` to Git!

---

## 🚀 Running Locally

### Start Development Server
```bash
npm run dev
```

Open: http://localhost:3000

### Build for Production
```bash
npm run build
npm run start
```

---

## 🌍 Deploy to Vercel (One-Click)

### **Fastest Way: GitHub Integration**

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/career-chatbot
   git branch -M main
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to: https://vercel.com/new
   - Click "Import Git Repository"
   - Select your repository
   - Click "Import"

3. **Add Environment Variable**
   - In Vercel dashboard, go to "Settings" → "Environment Variables"
   - Add: `OPENAI_API_KEY=sk-your-key`
   - Click "Add"
   - Redeploy

4. **Done!** 🎉
   - Your app is live at: `https://your-project.vercel.app`

---

### **Alternative: Deploy with Vercel CLI**

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Add OpenAI API key when prompted
# Say "yes" to production deployment
```

---

## 📝 Project Structure

```
career-chatbot/
├── src/
│   ├── app/
│   │   ├── layout.tsx          ← Root layout
│   │   ├── page.tsx            ← Landing page
│   │   ├── chat/page.tsx       ← Chat interface
│   │   ├── api/chat/route.ts   ← AI backend
│   │   └── globals.css         ← Styles
│   ├── components/
│   │   ├── ChatMessage.tsx     ← Message display
│   │   ├── ChatInput.tsx       ← Input field
│   │   ├── ChatContainer.tsx   ← Message list
│   │   ├── Sidebar.tsx         ← Chat history
│   │   └── ThemeToggle.tsx     ← Dark mode
│   ├── hooks/
│   │   └── useChat.ts          ← Chat logic
│   └── lib/
│       ├── store.ts            ← State management
│       └── utils.ts            ← Utilities
├── public/                      ← Static files
├── .env.example                ← Template
├── .env.local                  ← NEVER commit!
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── README.md
```

---

## 🔑 Environment Variables Explained

| Variable | Purpose | Required |
|----------|---------|----------|
| `OPENAI_API_KEY` | Your OpenAI API key | ✅ Yes |

### How to Get OpenAI API Key

1. Visit: https://platform.openai.com/account/api-keys
2. Sign in with your OpenAI account
3. Click "Create new secret key"
4. Copy immediately (won't show again)
5. Add to `.env.local`

**Cost:** OpenAI offers $5 free credit for new accounts

---

## ✅ Verification Checklist

### Local Development
- [ ] Node.js installed (check: `node --version`)
- [ ] npm installed (check: `npm --version`)
- [ ] Dependencies installed (`npm install` completed)
- [ ] `.env.local` created with API key
- [ ] `npm run dev` starts without errors
- [ ] http://localhost:3000 loads
- [ ] Chatbot responds to messages

### Before Deploying
- [ ] `.env.local` is in `.gitignore`
- [ ] `npm run build` completes successfully
- [ ] No TypeScript errors
- [ ] All components render correctly
- [ ] API key works in development

### After Deployment
- [ ] Project imported to Vercel
- [ ] Environment variables added to Vercel
- [ ] Deployment completed (check build logs)
- [ ] Visit deployment URL
- [ ] Test chatbot on live site
- [ ] Chat history saves in browser

---

## 🐛 Common Issues & Fixes

### **Issue: "Cannot find module" errors**
```bash
# Solution: Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### **Issue: API key not working**
1. Check `.env.local` exists in root directory
2. Verify key starts with `sk-`
3. Confirm key is active at https://platform.openai.com/api-keys
4. Restart dev server: Stop and run `npm run dev` again

### **Issue: "Port 3000 already in use"**
```bash
# Use different port
npm run dev -- -p 3001
```

### **Issue: Deployment fails**
1. Check Vercel deployment logs
2. Verify environment variables are set
3. Run `npm run build` locally to test
4. Check for TypeScript errors: `npx tsc --noEmit`

### **Issue: Chat history not saving**
- Check if localStorage is enabled in browser
- Try clearing browser cache
- Check developer console (F12) for errors

---

## 🎯 Features Overview

### Landing Page
- Modern hero section
- Feature highlights
- Call-to-action buttons
- Responsive design

### Chat Interface
- **Clean chat UI** - ChatGPT-style bubbles
- **Dark mode** - Eye-friendly interface
- **Chat history** - Sidebar with all conversations
- **Typing animation** - Shows when AI is responding
- **Message copying** - Click to copy AI responses

### Personalization
- **Interests** - What fields interest you
- **Education level** - Your current education
- **Skills** - What you already know
- **Goals** - Your career aspirations

### AI Responses Include
- 3-5 recommended career paths
- Required skills for each path
- Step-by-step learning roadmap
- Recommended courses & tools
- Salary ranges & job outlook
- Growth opportunities

---

## 🚀 Performance Tips

1. **Optimize images** - Use Next.js Image component
2. **Code splitting** - Dynamic imports for heavy components
3. **Caching** - Vercel handles CDN caching automatically
4. **Environment setup** - Use `.env.local` for secrets

---

## 📚 Documentation Links

| Resource | Link |
|----------|------|
| Next.js Docs | https://nextjs.org/docs |
| OpenAI API | https://platform.openai.com/docs |
| Vercel Deploy | https://vercel.com/docs |
| Tailwind CSS | https://tailwindcss.com |
| TypeScript | https://www.typescriptlang.org |

---

## 🆘 Need Help?

### Check These First
1. **Vercel Deployment Guide:** https://vercel.com/docs/frameworks/nextjs
2. **OpenAI Troubleshooting:** https://help.openai.com
3. **Next.js Issues:** https://github.com/vercel/next.js/discussions

### Error Messages to Search
Copy the exact error message and search:
- GitHub Issues
- Stack Overflow
- ChatGPT or Claude

---

## 📊 Monitor Your Costs

### OpenAI API Pricing
- **Free trial:** $5 credit
- **Pay as you go:** $0.0005 per 1K tokens average
- **Monitor usage:** https://platform.openai.com/account/usage

### Vercel Costs
- **Free tier:** Includes deployments
- **Pro plan:** $20/month if needed
- **Monitor:** https://vercel.com/dashboard/usage

---

## 🔒 Security Best Practices

✅ **Do This:**
- Keep API keys in `.env.local`
- Add `.env.local` to `.gitignore`
- Use environment variables in production
- Rotate API keys regularly
- Monitor API usage

❌ **Don't Do This:**
- Hardcode API keys in code
- Commit `.env.local` to Git
- Share API keys in chat/email
- Push keys to public repositories
- Leave unused keys active

---

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Android)

---

## 🎓 Learning Resources

### For Beginners
- [Next.js Tutorial](https://nextjs.org/learn)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Guide](https://tailwindcss.com/docs)

### For Advanced Users
- [Next.js Architecture](https://nextjs.org/docs/architecture)
- [OpenAI Fine-tuning](https://platform.openai.com/docs/guides/fine-tuning)
- [Vercel Analytics](https://vercel.com/docs/concepts/analytics)

---

## 🎉 Next Steps

1. **Get your API key** → https://platform.openai.com
2. **Run locally** → `npm run dev`
3. **Deploy to Vercel** → https://vercel.com
4. **Customize** → Edit components as needed
5. **Share** → Show it to friends!

---

**Happy coding! 🚀**

For questions, open an issue on GitHub or contact support.
