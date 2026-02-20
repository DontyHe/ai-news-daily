'use client';

import { useState, useEffect } from 'react';
import { NewsArticle, ResearchPaper, Category } from '@/lib/types';
import { getDailyDigest, filterNewsByCategory, searchNews } from '@/lib/news-data';
import ArticleCard from '@/components/ArticleCard';
import CategoryFilter from '@/components/CategoryFilter';
import SearchBar from '@/components/SearchBar';
import { format } from 'date-fns';

export default function Home() {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [papers, setPapers] = useState<ResearchPaper[]>([]);
  const [filteredNews, setFilteredNews] = useState<NewsArticle[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const digest = await getDailyDigest();
        setNews(digest.news);
        setFilteredNews(digest.news);
        setPapers(digest.papers);
      } catch (error) {
        console.error('Failed to load data:', error);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  useEffect(() => {
    let result = news;
    result = filterNewsByCategory(result, selectedCategory);
    result = searchNews(result, searchQuery);
    setFilteredNews(result);
  }, [news, selectedCategory, searchQuery]);

  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            🤖 AI Daily News
          </h1>
          <p className="text-gray-600">
            Daily updates on VLA, World Models, Embodied AI & Research Papers
          </p>
          <p className="text-sm text-gray-400 mt-1">
            {format(new Date(), 'EEEE, MMMM d, yyyy')}
          </p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>

        <CategoryFilter selected={selectedCategory} onSelect={setSelectedCategory} />

        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <>
            {/* Research Papers Section */}
            {papers.length > 0 && (
              <section className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">📚</span>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Today's Research Papers
                  </h2>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  {papers.map(paper => (
                    <div key={paper.id} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div>
                          <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                            paper.category === 'vla' ? 'bg-blue-100 text-blue-700' :
                            paper.category === 'world-model' ? 'bg-purple-100 text-purple-700' :
                            paper.category === 'embodied' ? 'bg-green-100 text-green-700' :
                            'bg-gray-100 text-gray-700'
                          }`}>
                            {paper.category.replace('-', ' ').toUpperCase()}
                          </span>
                        </div>
                        <span className="text-sm text-gray-500">{paper.date}</span>
                      </div>

                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        <a href={paper.url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                          {paper.title}
                        </a>
                      </h3>

                      <p className="text-sm text-gray-600 mb-3">{paper.authors}</p>

                      <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                        {paper.summary}
                      </p>

                      <div className="space-y-2">
                        <p className="text-xs font-medium text-gray-500 uppercase">Key Insights</p>
                        <ul className="space-y-1">
                          {paper.keyInsights.map((insight, idx) => (
                            <li key={idx} className="text-xs text-gray-600 flex items-start gap-2">
                              <span className="text-blue-500 mt-1">•</span>
                              {insight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* News Section */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">📰</span>
                <h2 className="text-2xl font-bold text-gray-900">
                  Latest AI News
                </h2>
                <span className="text-sm text-gray-500">({filteredNews.length} articles)</span>
              </div>

              {filteredNews.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-1 xl:grid-cols-1">
                  {filteredNews.map(article => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500">No news found matching your criteria</p>
                </div>
              )}
            </section>
          </>
        )}
      </div>

      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center text-gray-500 text-sm">
          <p>Data sources: arXiv, Twitter/X, AI Newsletters, Feishu</p>
          <p className="mt-1">Built with Next.js + Tailwind • Deployed on Vercel</p>
        </div>
      </footer>
    </main>
  );
}
