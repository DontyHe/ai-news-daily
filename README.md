# AI Daily News

Daily AI research news aggregator for VLA, World Models, and Embodied AI.

## Features

- 📰 Aggregated AI news from multiple sources
- 🏷️ Category filtering (VLA, World Model, Embodied AI, LLM)
- 🔍 Search functionality
- 🌙 Dark mode support
- 📱 Responsive design

## Data Sources

- arXiv papers
- Twitter/X AI researchers
- AI newsletters (Interconnects, Bertie)
- Feishu VLA Research Tracker

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Vercel (Deployment)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view.

## Deployment to Vercel

1. Create a Vercel account and connect your GitHub
2. Import this repository
3. Add environment variables (if any)
4. Deploy!

## Manual Vercel Deployment

```bash
npm i -g vercel
vercel
```

## GitHub + Vercel Auto-Deploy

1. Push to GitHub:
   ```bash
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/DontyHe/ai-news-daily.git
   git push -u origin main
   ```

2. Get Vercel Token:
   - Go to [Vercel Account Settings](https://vercel.com/account/tokens)
   - Create a new token

3. Add Secrets to GitHub:
   - Go to your repo Settings → Secrets and variables → Actions
   - Add `VERCEL_TOKEN`
   - Add `VERCEL_ORG_ID` (from Vercel dashboard)
   - Add `VERCEL_PROJECT_ID` (from Vercel dashboard)

4. Push changes to trigger auto-deploy!
