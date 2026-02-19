import { NewsArticle, Category } from './types';

// 模拟数据 - 实际使用时从 Feishu API 和其他来源获取
const MOCK_NEWS: NewsArticle[] = [
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
  {
    id: '6',
    title: 'Stanford Releases New Benchmark for VLA Evaluation',
    source: 'Stanford HAI',
    author: 'Stanford University',
    publishedAt: new Date(Date.now() - 36 * 60 * 60 * 1000).toISOString(),
    summary: 'New comprehensive benchmark to evaluate VLA models on real-world robotic tasks.',
    category: 'vla',
    url: 'https://hai.stanford.edu',
    tags: ['benchmark', 'evaluation', 'VLA'],
  },
];

export async function getNews(): Promise<NewsArticle[]> {
  // TODO: 集成真实数据源
  // 1. 从 Feishu Bitable 获取 VLA 研究追踪数据
  // 2. 从 Twitter/X API 获取 AI 新闻
  // 3. 从 arXiv API 获取最新论文
  // 4. 从 newsletters (Bertie, Interconnects) 获取动态

  // 模拟延迟
  await new Promise(resolve => setTimeout(resolve, 100));

  return MOCK_NEWS.sort((a, b) =>
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function filterByCategory(news: NewsArticle[], category: Category): NewsArticle[] {
  if (category === 'all') return news;
  return news.filter(article => article.category === category);
}

export function searchNews(news: NewsArticle[], query: string): NewsArticle[] {
  const lowerQuery = query.toLowerCase();
  return news.filter(article =>
    article.title.toLowerCase().includes(lowerQuery) ||
    article.summary.toLowerCase().includes(lowerQuery) ||
    article.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}
