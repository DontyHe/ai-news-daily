'use client';

import { NewsArticle } from '@/lib/types';
import { formatDistanceToNow } from 'date-fns';

interface ArticleCardProps {
  article: NewsArticle;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700">
      <div className="flex items-start justify-between mb-3">
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {article.source}
        </span>
        <time className="text-sm text-gray-400 dark:text-gray-500">
          {formatDistanceToNow(new Date(article.publishedAt), { addSuffix: true })}
        </time>
      </div>

      <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
        {article.title}
      </h2>

      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
        {article.summary}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex gap-2 flex-wrap">
          {article.tags.map(tag => (
            <span key={tag} className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {article.url && (
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
          >
            Read more →
          </a>
        )}
      </div>
    </article>
  );
}
