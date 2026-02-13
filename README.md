<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/19vgWzYxB53NQnwL_qTDQ7hM2s9leSFkF

## Quick Start

**Prerequisites:**  Node.js

1. Install dependencies:
   ```bash
   npm install
   ```
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   ```bash
   npm run dev
   ```

## Contact Form Setup

The contact form submits to `/api/contact`:
- ✅ Opens WhatsApp with filled message (+91 9726704870)
- ✅ Saves locally to `data/contacts.json` (backup)
- ⏳ Saves to Google Sheets (optional setup)

**Setup Guide:** See [SETUP_CONTACT_API.md](SETUP_CONTACT_API.md) for complete instructions.

## Deploy to GitHub + Vercel

1. Create a new repository on GitHub and push this project:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo>.git
   git push -u origin main
   ```

2. Deploy on Vercel:
   - Go to https://vercel.com and sign in with GitHub.
   - Import the GitHub repository you just pushed.
   - For **Build Command** leave as `npm run build` (or `vite build`).
   - For **Output Directory** set `dist` (Vite default).
   - Add any Environment Variables (e.g. `GEMINI_API_KEY`, `GOOGLE_SHEETS_ID`) in the Vercel project settings.
