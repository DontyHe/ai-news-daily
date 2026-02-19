"use client";

import { useState, useEffect } from "react";
import NewsCard from "@/components/NewsCard";
import { Filter, Loader2 } from "lucide-react";
import { format } from "date-fns";

interface NewsItem {
  id: string;
  title: string;
  description: string;
  source: string;
  date: string;
  category: "vla" | "world-model" | "embodied" | "llm" | "general";
  url: string;
  authors?: string[];
}

// Mock data - Replace with real API calls
const mockNews: NewsItem[] = [
  {
    id: "1",
    title: "RT-X: Open-Scale Multimodal Embodied Agent",
    description: "Google DeepMind introduces RT-X, a large-scale multimodal model for embodied AI tasks. The model achieves state-of-the-art performance across multiple robotic manipulation benchmarks with 50x fewer training examples than previous methods.",
    source: "Google DeepMind",
    date: "2026-02-18",
    category: "embodied",
    url: "https://arxiv.org/abs/2303.00033",
    authors: ["Sudeep Dasari", "Moe He", "Yuxiang Zhou"]
  },
  {
    id: "2",
    title: "World Models for Vision-Language-Action: A Unified Framework",
    description: "NVIDIA presents a novel World Model architecture that jointly learns perception, planning, and control for VLA systems. The approach uses a latent dynamics model with cross-modal attention for efficient online planning.",
    source: "NVIDIA",
    date: "2026-02-17",
    category: "world-model",
    url: "https://arxiv.org/abs/2303.00033",
    authors: ["Jim Fan", "Tianhao Wu", "Anima Anandkumar"]
  },
  {
    id: "3",
    title: "Meta AI Releases LLaVA-NeXT: Enhanced Reasoning for Embodied AI",
    description: "Meta introduces LLaVA-NeXT with improved visual reasoning capabilities specifically optimized for embodied AI applications. The model shows 40% improvement in spatial understanding tasks.",
    source: "Meta",
    date: "2026-02-17",
    category: "vla",
    url: "https://llava-vl.github.io/",
    authors: ["Bo Zhang", "Hao Wu", "Yuxin Wu"]
  },
  {
    id: "4",
    title: " diffusion Policy: Learning Motion Generation with Diffusion Models",
    description: "A new approach to robot learning that uses diffusion models for smooth, safe, and generalizable motion generation. Achieves top results on both simulated and real-world manipulation tasks.",
    source: "Stanford / Google",
    date: "2026-02-16",
    category: "embodied",
    url: "https://diffusion-policy.cs.cmu.edu/",
    authors: ["Cheng Chi", "Alex Z. Ren", "Jiankai Sun"]
  },
  {
    id: "5",
    title: "OpenAI GPT-5 Technical Report: Embodied Reasoning Capabilities",
    description: "OpenAI's latest model demonstrates remarkable zero-shot performance on embodied reasoning benchmarks, suggesting strong transfer from pre-training to physical world understanding.",
    source: "OpenAI",
    date: "2026-02-15",
    category: "llm",
    url: "https://openai.com/research/gpt-5",
    authors: ["OpenAI Research Team"]
  },
  {
    id: "6",
    title: "Tesla FSD V13: End-to-End Learning for Autonomous Driving",
    description: "Tesla releases FSD V13 with a fully end-to-end neural network architecture. The system processes raw camera inputs directly to steering and acceleration commands, eliminating hand-coded planning layers.",
    source: "Tesla",
    date: "2026-02-14",
    category: "general",
    url: "https://www.tesla.com/ai",
    authors: ["Ashok Elluswamy", "Andrej Karpathy"]
  },
];

const categories = [
  { id: "all", label: "All" },
  { id: "vla", label: "VLA" },
  { id: "world-model", label: "World Model" },
  { id: "embodied", label: "Embodied AI" },
  { id: "llm", label: "LLM" },
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [news, setNews] = useState<NewsItem[]>(mockNews);
  const [loading, setLoading] = useState(false);

  // Filter news by category
  const filteredNews = activeCategory === "all"
    ? news
    : news.filter(item => item.category === activeCategory);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          AI Research Daily
        </h1>
        <p className="text-gray-600">
          {format(new Date(), "EEEE, MMMM d, yyyy")} · {filteredNews.length} articles
        </p>
      </header>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2">
        <Filter className="w-4 h-4 text-gray-500 mr-2" />
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
              activeCategory === cat.id
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* News Grid */}
      {loading ? (
        <div className="flex items-center justify-center py-20">
          <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
          {filteredNews.map(item => (
            <NewsCard key={item.id} {...item} />
          ))}
        </div>
      )}

      {/* VLA Research Tracker Section */}
      <section id="vla" className="mt-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            📚 VLA Research Tracker
          </h2>
          <a
            href="https://my.feishu.cn/wiki/JSBmwzcjTicu1Hk5ib0ci99bnXF"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 text-sm font-medium"
          >
            View Full Tracker →
          </a>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
              <span className="text-2xl">📄</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Latest Papers Tracked
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Papers from NVIDIA, Meta, Google DeepMind, and top research labs
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white rounded-full text-xs font-medium text-blue-700">
                  World Models
                </span>
                <span className="px-3 py-1 bg-white rounded-full text-xs font-medium text-purple-700">
                  VLA Architecture
                </span>
                <span className="px-3 py-1 bg-white rounded-full text-xs font-medium text-green-700">
                  Robotics
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4 border border-gray-100 text-center">
          <div className="text-2xl font-bold text-blue-600">{news.length}</div>
          <div className="text-sm text-gray-500">Papers This Week</div>
        </div>
        <div className="bg-white rounded-xl p-4 border border-gray-100 text-center">
          <div className="text-2xl font-bold text-purple-600">4</div>
          <div className="text-sm text-gray-500">Companies</div>
        </div>
        <div className="bg-white rounded-xl p-4 border border-gray-100 text-center">
          <div className="text-2xl font-bold text-green-600">12</div>
          <div className="text-sm text-gray-500">Research Labs</div>
        </div>
        <div className="bg-white rounded-xl p-4 border border-gray-100 text-center">
          <div className="text-2xl font-bold text-orange-600">3</div>
          <div className="text-sm text-gray-500">Categories</div>
        </div>
      </section>
    </div>
  );
}
