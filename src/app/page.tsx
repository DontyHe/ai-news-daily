'use client';

import { useState, useEffect } from 'react';
import { NewsArticle, Category } from '@/lib/types';
import { getNews, filterByCategory, searchNews } from '@/lib/news-data';
import ArticleCard from '@/components/ArticleCard';
import CategoryFilter from '@/components/CategoryFilter';
import SearchBar from '@/components/SearchBar';

export default function Home() {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [filteredNews, setFilteredNews] = useState<NewsArticle[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadNews() {
      try {
        const data = await getNews();
        setNews(data);
        setFilteredNews(data);
      } catch (error) {
        console.error('Failed to load news:', error);
      } finally {
        setLoading(false);
      }
    }
    loadNews();
  }, []);

  useEffect(() => {
    let result = news;
    result = filterByCategory(result, selectedCategory);
    result = searchNews(result, searchQuery);
    setFilteredNews(result);
  }, [news, selectedCategory, searchQuery]);

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            🤖 AI Daily News
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Daily updates on VLA, World Models, Embodied AI, and more
          </p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>

        <CategoryFilter selected={selectedCategory} onSelect={setSelectedCategory} />

        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        ) : filteredNews.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1">
            {filteredNews.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">
              No news found matching your criteria
            </p>
          </div>
        )}
      </div>

      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-12">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center text-gray-500 dark:text-gray-400">
          <p>Data sources: arXiv, Twitter/X, AI Newsletters, Feishu</p>
          <p className="text-sm mt-2">
            Built with Next.js + Tailwind • Deployed on Vercel
          </p>
        </div>
      </footer>
    </main>
  );
}
