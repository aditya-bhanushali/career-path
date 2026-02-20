# 🚀 QUICK START: GitHub & Vercel Deployment

## Copy-Paste These Commands

### Step 1: Create GitHub Repository
1. Go to: https://github.com/new
2. Fill in:
   - Name: `ai-career-chatbot`
   - Description: `AI Career Guidance Chatbot - Free, no API costs`
   - **Visibility: PUBLIC** ✅
3. Click "Create repository"

---

### Step 2: Push to GitHub (Copy-Paste Exact Commands)

Open PowerShell and run **ONE BY ONE**:

```powershell
cd "c:\Users\Aditya bhanushali\OneDrive\Desktop\career wesbite"
```

```powershell
git remote add origin https://github.com/aditya-bhanushali/ai-career-chatbot.git
```

```powershell
git branch -M main
```

```powershell
git push -u origin main
```

**When prompted:**
- Username: `aditya-bhanushali`
- Password: Use GitHub Personal Access Token from https://github.com/settings/tokens/new

---

### Step 3: Deploy on Vercel

1. Go to: https://vercel.com/new
2. Click "Sign in with GitHub"
3. Click "Import Git Repository"
4. Select: `aditya-bhanushali/ai-career-chatbot`
5. Click "Import"
6. Leave settings as default
7. Click "Deploy"

**Wait 2-3 minutes** → Your app goes live! 🎉

---

## ✅ You'll Get:

- **GitHub:** https://github.com/aditya-bhanushali/ai-career-chatbot (Public)
- **Live URL:** https://ai-career-chatbot-aditya-bhanushali.vercel.app (Share this!)

---

## 🔄 Update Your App Later

After making changes:
```powershell
cd "c:\Users\Aditya bhanushali\OneDrive\Desktop\career wesbite"
git add .
git commit -m "Your change message"
git push
```

**Vercel auto-deploys!** ✨

---

**That's it!** Your app is public and live! 🚀
