# 🚀 Deploy to GitHub & Vercel - Complete Guide

## ✅ Step 1: Create Public Repository on GitHub

### **1.1 Visit GitHub**
Go to: https://github.com/new

### **1.2 Create Repository**
Fill in the form:
- **Repository name:** `ai-career-chatbot` (or any name you like)
- **Description:** AI-powered career guidance chatbot (free, no API costs)
- **Public:** ✅ Select this (keep public)
- **Initialize:** Leave unchecked (we already have files)
- Click **"Create repository"**

### **1.3 You'll see commands like:**
```bash
git remote add origin https://github.com/aditya-bhanushali/ai-career-chatbot.git
git branch -M main
git push -u origin main
```

---

## ✅ Step 2: Push Code to GitHub

Copy and paste these commands in your terminal:

```bash
cd "c:\Users\Aditya bhanushali\OneDrive\Desktop\career wesbite"
```

Then run these commands one by one:

```bash
git remote add origin https://github.com/aditya-bhanushali/ai-career-chatbot.git
```

```bash
git branch -M main
```

```bash
git push -u origin main
```

**It will ask for GitHub credentials:**
- Use your GitHub username: `aditya-bhanushali`
- For password: Use a **Personal Access Token** (see below)

### **Get Personal Access Token:**
1. Go to: https://github.com/settings/tokens/new
2. Select scopes: `repo`
3. Copy the token
4. Paste when prompted in terminal

---

## ✅ Step 3: Deploy on Vercel

### **3.1 Visit Vercel**
Go to: https://vercel.com/new

### **3.2 Sign In**
- Click "Sign in with GitHub"
- Authorize Vercel to access your repositories

### **3.3 Import Your Repository**
- Click "Import Git Repository"
- Select: `aditya-bhanushali/ai-career-chatbot`
- Click **"Import"**

### **3.4 Configure Project**
- **Project Name:** `ai-career-chatbot` (auto-filled)
- **Framework:** Next.js (auto-detected)
- **Root Directory:** `./` (auto-filled)

### **3.5 Environment Variables (Important!)**
You don't need this since we're using FREE mock responses!
- **Skip environment variables** (no API key needed)
- If you want to add it anyway: `OPENAI_API_KEY` → (leave empty or add your key)

### **3.6 Deploy**
Click **"Deploy"**

**Wait for deployment** (takes 2-3 minutes)

---

## ✅ Final: Your Live URL

After deployment, Vercel gives you a URL like:
```
https://ai-career-chatbot-aditya-bhanushali.vercel.app
```

**Share this link with anyone!** ✨

---

## 📱 Your App is Now:

✅ **Public on GitHub**
- View code: https://github.com/aditya-bhanushali/ai-career-chatbot
- Anyone can fork, star, or contribute

✅ **Live on Vercel**
- Accessible from any device
- Auto-deploys on every Git push
- Free SSL/HTTPS
- Global CDN

✅ **100% Free**
- No OpenAI costs (using mock responses)
- Free Vercel tier sufficient
- No database costs

---

## 🔄 Future Updates

Whenever you want to update:

```bash
# Make changes locally
git add .
git commit -m "Your message"
git push

# Vercel auto-deploys your changes! 🚀
```

---

## 📊 Summary

| Step | Done? | Details |
|------|-------|---------|
| GitHub Repo Created | ☐ | Public repository |
| Code Pushed | ☐ | `git push -u origin main` |
| Vercel Connected | ☐ | Imported from GitHub |
| Deployed | ☐ | Live URL provided |
| Share Link | ☐ | Send `vercel.app` URL |

---

**Follow these steps and your app will be live in minutes!** 🎉
