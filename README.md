# AI News Daily

Daily AI Research News aggregator for World Models & VLA research.

## Features

- 📰 Daily updated AI research news
- 🏷️ Category filtering (World Model, VLA, Multi-Modal, etc.)
- 🔍 Search functionality
- 📱 Responsive design
- 🔄 Auto-syncs from Feishu document

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Deployment to Vercel

This project is configured for automatic deployment to Vercel.

### Option 1: Vercel CLI (Recommended)

```bash
npm i -g vercel
vercel
```

### Option 2: GitHub Integration

1. Push this repo to GitHub
2. Import project in Vercel
3. Auto-deployment configured via `.github/workflows/deploy.yml`

## Data Source

News is automatically aggregated daily from:
- arxiv.org (World Models, VLA, Embodied AI)
- Source document: [VLA研究追踪](https://my.feishu.cn/wiki/JSBmwzcjTicu1Hk5ib0ci99bnXF)

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Lucide Icons
- Vercel (Deployment)

## License

MIT
