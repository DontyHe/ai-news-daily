import { NewsArticle, ResearchPaper, DailyDigest, Category } from './types';

// Daily digest data - updated by cron jobs
let DAILY_DIGEST: DailyDigest = {
  date: new Date().toISOString().split('T')[0],
  news: [
    {
      id: '1',
      title: 'NVIDIA Announces New World Model Foundation for Robotics',
      source: 'NVIDIA Research',
      author: 'Jim Fan et al.',
      publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      summary: 'NVIDIA introduces a new world model architecture that enables real-time planning and control for embodied AI agents.',
      category: 'world-model',
      url: 'https://research.nvidia.com',
      tags: ['world model', 'robotics', 'foundation model'],
    },
    {
      id: '2',
      title: 'Meta Released Open-Source VLA Model with 50B Parameters',
      source: 'Meta AI',
      author: 'FAIR Team',
      publishedAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
      summary: 'Meta releases a new Vision-Language-Action model trained on diverse robotics datasets with state-of-the-art performance.',
      category: 'vla',
      url: 'https://meta.ai',
      tags: ['VLA', 'open source', 'robotics'],
    },
    {
      id: '3',
      title: 'Google DeepMind Achieves New SOTA in Embodied Reasoning',
      source: 'Google DeepMind',
      author: 'DeepMind Robotics Team',
      publishedAt: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
      summary: 'New breakthrough in embodied AI reasoning capabilities using hierarchical neural architectures.',
      category: 'embodied',
      url: 'https://deepmind.com',
      tags: ['embodied AI', 'reasoning', 'hierarchy'],
    },
    {
      id: '4',
      title: 'OpenAI GPT-5 Shows Strong Zero-Shot Robotic Manipulation',
      source: 'OpenAI',
      author: 'OpenAI Team',
      publishedAt: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
      summary: 'GPT-5 demonstrates remarkable zero-shot generalization to robotic manipulation tasks without fine-tuning.',
      category: 'llm',
      url: 'https://openai.com',
      tags: ['GPT-5', 'zero-shot', 'robotics'],
    },
    {
      id: '5',
      title: 'Tesla FSD V12 Learns World Model from Driving Data',
      source: 'Tesla',
      author: 'Tesla AI Team',
      publishedAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
      summary: 'Tesla reveals that FSD V12 uses a learned world model for planning, drawing insights from autonomous driving.',
      category: 'world-model',
      url: 'https://tesla.com',
      tags: ['world model', 'autonomous driving', 'planning'],
    },
  ],
  papers: [
    {
      id: 'p1',
      title: 'MoMa-SG: Semantic-Kinematic 3D Scene Graphs for Mobile Manipulation',
      authors: 'Martin Alexander Büchner et al.',
      date: '2026-02-18',
      summary: 'A novel framework for building semantic-kinematic 3D scene graphs of articulated scenes for open-world mobile manipulation.',
      keyInsights: [
        'Unified twist estimation for revolute and prismatic joints',
        'Occlusion-robust point tracking for object motion inference',
        'Real-world experiments on quadruped and mobile manipulator'
      ],
      url: 'https://arxiv.org/abs/2602.16356',
      category: 'embodied',
    },
  ],
};

// Get daily digest with both news and papers
export async function getDailyDigest(): Promise<DailyDigest> {
  await new Promise(resolve => setTimeout(resolve, 100));
  return DAILY_DIGEST;
}

// Get news only
export async function getNews(): Promise<NewsArticle[]> {
  const digest = await getDailyDigest();
  return digest.news.sort((a, b) =>
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

// Get papers only
export async function getPapers(): Promise<ResearchPaper[]> {
  const digest = await getDailyDigest();
  return digest.papers;
}

// Update daily digest (used by cron job)
export async function updateDailyDigest(news: NewsArticle[], papers: ResearchPaper[]): Promise<void> {
  DAILY_DIGEST = {
    date: new Date().toISOString().split('T')[0],
    news,
    papers,
  };
}

// Filter news by category
export function filterNewsByCategory(news: NewsArticle[], category: Category): NewsArticle[] {
  if (category === 'all') return news;
  return news.filter(article => article.category === category);
}

// Filter papers by category
export function filterPapersByCategory(papers: ResearchPaper[], category: Category): ResearchPaper[] {
  if (category === 'all') return papers;
  return papers.filter(paper => paper.category === category);
}

// Search news
export function searchNews(news: NewsArticle[], query: string): NewsArticle[] {
  const lowerQuery = query.toLowerCase();
  return news.filter(article =>
    article.title.toLowerCase().includes(lowerQuery) ||
    article.summary.toLowerCase().includes(lowerQuery) ||
    article.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}
