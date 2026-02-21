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
      imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800',
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
      imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
    },
    {
      id: '3',
      title: 'Google DeepMind Achieves New SOTA in Embodied Reasoning',
      source: 'Google DeepMind',
      author: 'DeepMind Robotics Team',
      publishedAt: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
      summary: 'New breakthrough in embodied AI reasoning capabilities using hierarchical neural architectures.',
      category: 'embodied',
      url: 'https://deepmind.google',
      tags: ['embodied AI', 'reasoning', 'hierarchy'],
      imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800',
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
      imageUrl: 'https://images.unsplash.com/photo-1676299081847-824916de030a?w=800',
    },
    {
      id: '5',
      title: 'Tesla FSD V12 Learns World Model from Driving Data',
      source: 'Tesla',
      author: 'Tesla AI Team',
      publishedAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
      summary: 'Tesla reveals that FSD V12 uses a learned world model for planning, drawing insights from autonomous driving.',
      category: 'world-model',
      url: 'https://tesla.com/ai',
      tags: ['world model', 'autonomous driving', 'planning'],
      imageUrl: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800',
    },
    {
      id: '6',
      title: 'Stanford Introduces RoboGen: Generalist Robot Policy via Self-Play',
      source: 'Stanford AI Lab',
      author: 'Yijie Guo et al.',
      publishedAt: new Date(Date.now() - 28 * 60 * 60 * 1000).toISOString(),
      summary: 'Stanford researchers present RoboGen, a system that generates robot trajectories through self-supervised play.',
      category: 'embodied',
      url: 'https://robotics.stanford.edu',
      tags: ['robotics', 'self-play', 'policy learning'],
      imageUrl: 'https://images.unsplash.com/photo-1507591064344-75e9f1186237?w=800',
    },
    {
      id: '7',
      title: 'Microsoft Research Releases Phi-4-Multimodal with Strong VLA Capabilities',
      source: 'Microsoft Research',
      author: 'Microsoft AI Team',
      publishedAt: new Date(Date.now() - 32 * 60 * 60 * 1000).toISOString(),
      summary: 'Microsoft releases compact multimodal model achieving competitive performance on vision-language tasks.',
      category: 'vla',
      url: 'https://research.microsoft.com',
      tags: ['multimodal', 'Phi-4', 'vision-language'],
      imageUrl: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800',
    },
    {
      id: '8',
      title: 'UC Berkeley Releases DexDiffuser: Learning Fine-Grained Manipulation from Diffusion',
      source: 'UC Berkeley RISE Lab',
      author: 'Berkeley AI Research',
      publishedAt: new Date(Date.now() - 36 * 60 * 60 * 1000).toISOString(),
      summary: 'New diffusion-based approach for learning fine-grained dexterous manipulation policies.',
      category: 'embodied',
      url: 'https://bair.berkeley.edu',
      tags: ['diffusion', 'dexterous manipulation', 'robotics'],
      imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800',
    },
    {
      id: '9',
      title: 'NVIDIA GR00T N1: Foundation Model for Humanoid Robots',
      source: 'NVIDIA',
      author: 'NVIDIA Robotics Team',
      publishedAt: new Date(Date.now() - 40 * 60 * 60 * 1000).toISOString(),
      summary: 'NVIDIA introduces GR00T N1, a foundation model specifically designed for humanoid robot control.',
      category: 'world-model',
      url: 'https://nvidia.com/gr00t',
      tags: ['humanoid', 'foundation model', 'GR00T'],
      imageUrl: 'https://images.unsplash.com/photo-1504222490345-c075b6008014?w=800',
    },
    {
      id: '10',
      title: 'Meta Aria: Open Dataset for Embodied AI Research',
      source: 'Meta AI',
      author: 'Meta Reality Labs',
      publishedAt: new Date(Date.now() - 44 * 60 * 60 * 1000).toISOString(),
      summary: 'Meta releases large-scale egocentric dataset for advancing embodied AI and assistant research.',
      category: 'embodied',
      url: 'https://about.fb.com/research',
      tags: ['dataset', 'egocentric', 'embodied AI'],
      imageUrl: 'https://images.unsplash.com/photo-1535378620166-273708d44e4c?w=800',
    },
    {
      id: '11',
      title: 'Google DeepMind RT-2: Vision-Language-Action Model for Robot Learning',
      source: 'Google DeepMind',
      author: 'Robotics at DeepMind',
      publishedAt: new Date(Date.now() - 48 * 60 * 60 * 1000).toISOString(),
      summary: 'DeepMind presents RT-2, new VLA model that learns from web and robotics data for generalization.',
      category: 'vla',
      url: 'https://deepmind.google/rt',
      tags: ['RT-2', 'robot learning', 'generalization'],
      imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800',
    },
    {
      id: '12',
      title: 'OpenAI Shows Emergent Tool Use in Robotic Simulations',
      source: 'OpenAI',
      author: 'OpenAI Robotics Team',
      publishedAt: new Date(Date.now() - 52 * 60 * 60 * 1000).toISOString(),
      summary: 'OpenAI demonstrates emergent tool use capabilities in simulated robotic agents trained with reinforcement learning.',
      category: 'embodied',
      url: 'https://openai.com/robotics',
      tags: ['tool use', 'emergence', 'simulation'],
      imageUrl: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800',
    },
    {
      id: '13',
      title: 'Tesla Optimus: New Controller Based on Learned World Model',
      source: 'Tesla',
      author: 'Tesla AI Team',
      publishedAt: new Date(Date.now() - 56 * 60 * 60 * 1000).toISOString(),
      summary: 'Tesla reveals world model-based controller for Optimus humanoid, improving locomotion and manipulation.',
      category: 'world-model',
      url: 'https://tesla.com/optimus',
      tags: ['Optimus', 'humanoid', 'locomotion'],
      imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800',
    },
    {
      id: '14',
      title: 'MIT CSAIL: Hierarchical World Models for Long-Horizon Planning',
      source: 'MIT CSAIL',
      author: 'Nikolai Matni et al.',
      publishedAt: new Date(Date.now() - 60 * 60 * 60 * 1000).toISOString(),
      summary: 'MIT researchers develop hierarchical world models enabling efficient long-horizon planning for robots.',
      category: 'world-model',
      url: 'https://csail.mit.edu',
      tags: ['hierarchical planning', 'world models', 'long-horizon'],
      imageUrl: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=800',
    },
    {
      id: '15',
      title: 'NVIDIA DRIVE Thor: Next-Gen Platform for Autonomous Vehicles',
      source: 'NVIDIA',
      author: 'NVIDIA Automotive',
      publishedAt: new Date(Date.now() - 64 * 60 * 60 * 1000).toISOString(),
      summary: 'NVIDIA announces DRIVE Thor platform with unified computing for autonomous driving and AI assistants.',
      category: 'general',
      url: 'https://nvidia.com/drive',
      tags: ['autonomous driving', 'DRIVE', 'AI platform'],
      imageUrl: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800',
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
    {
      id: 'p2',
      title: 'Sink-Aware Pruning for Diffusion Language Models',
      authors: 'Zhiqiang Shen et al.',
      date: '2026-02-19',
      summary: 'Analyzes attention sink behavior in diffusion language models and proposes stability-based pruning strategy.',
      keyInsights: [
        'Attention sinks in DLMs show high temporal variance',
        'Transient sinks are less structurally essential than in AR models',
        'Sink-aware pruning achieves better quality-efficiency trade-off'
      ],
      url: 'https://arxiv.org/abs/2602.17664',
      category: 'llm',
    },
    {
      id: 'p3',
      title: 'Small LLMs for Medical NLP: Systematic Analysis in Italian',
      authors: 'Pietro Ferrazzi et al.',
      date: '2026-02-19',
      summary: 'Comprehensive study on using small LLMs for medical NLP tasks with various adaptation strategies.',
      keyInsights: [
        'Small LLMs (~1B params) can match larger models in medical tasks',
        'Fine-tuning most effective approach',
        'Qwen3-1.7B outperforms Qwen3-32B with proper fine-tuning'
      ],
      url: 'https://arxiv.org/abs/2602.17475',
      category: 'llm',
    },
    {
      id: 'p4',
      title: 'LLMs for Knowledge Component-level Labeling in Coding Problems',
      authors: 'Zhangqi Duan et al.',
      date: '2026-02-19',
      summary: 'Framework using LLMs for fine-grained skill assessment in student programming solutions.',
      keyInsights: [
        'Code-KC mapping with temporal context improves alignment',
        'LLM annotations show high agreement with expert evaluation',
        'Better learning curve fit compared to baseline methods'
      ],
      url: 'https://arxiv.org/abs/2602.17542',
      category: 'llm',
    },
    {
      id: 'p5',
      title: 'Lexical and Syntactic Sensitivity in LLM Evaluation',
      authors: 'Bogdan Kostić et al.',
      date: '2026-02-19',
      summary: 'Study on how meaning-preserving perturbations affect LLM evaluation benchmarks and rankings.',
      keyInsights: [
        'Lexical perturbations cause significant performance degradation',
        'Model robustness does not scale consistently with size',
        'Need for robustness testing in standard LLM evaluation'
      ],
      url: 'https://arxiv.org/abs/2602.17316',
      category: 'llm',
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
