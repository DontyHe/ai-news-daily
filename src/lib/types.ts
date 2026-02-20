export interface NewsArticle {
  id: string;
  title: string;
  source: string;
  author?: string;
  publishedAt: string;
  summary: string;
  category: Category;
  url: string;
  tags: string[];
}

export interface ResearchPaper {
  id: string;
  title: string;
  authors: string;
  date: string;
  summary: string;
  keyInsights: string[];
  url: string;
  category: 'vla' | 'world-model' | 'embodied' | 'llm' | 'general';
}

export interface DailyDigest {
  date: string;
  news: NewsArticle[];
  papers: ResearchPaper[];
}

export type Category = 'all' | 'vla' | 'world-model' | 'embodied' | 'llm' | 'general';

export const CATEGORIES: { key: Category; label: string; emoji: string }[] = [
  { key: 'all', label: 'All News', emoji: '📰' },
  { key: 'vla', label: 'VLA Models', emoji: '🤖' },
  { key: 'world-model', label: 'World Models', emoji: '🗺️' },
  { key: 'embodied', label: 'Embodied AI', emoji: '🎯' },
  { key: 'llm', label: 'LLM & Foundation', emoji: '🧠' },
  { key: 'general', label: 'General AI', emoji: '💡' },
];
