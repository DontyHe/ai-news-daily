'use client';

import { NewsArticle } from '@/lib/types';
import { formatDistanceToNow } from 'date-fns';
import { Image as ImageIcon } from 'lucide-react';

interface ArticleCardProps {
  article: NewsArticle;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-200">
      <div className="flex items-start justify-between mb-3">
        <span className="text-sm text-gray-500">
          {article.source}
        </span>
        <time className="text-sm text-gray-400">
          {formatDistanceToNow(new Date(article.publishedAt), { addSuffix: true })}
        </time>
      </div>

      {article.imageUrl ? (
        <div className="mb-4">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-48 object-cover rounded-lg"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        </div>
      ) : null}

      <h2 className="text-xl font-semibold mb-2 text-gray-900">
        {article.title}
      </h2>

      <p className="text-gray-600 mb-4 line-clamp-3">
        {article.summary}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex gap-2 flex-wrap">
          {article.tags.map(tag => (
            <span key={tag} className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {article.url && (
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline text-sm font-medium"
          >
            Read more →
          </a>
        )}
      </div>
    </article>
  );
}
