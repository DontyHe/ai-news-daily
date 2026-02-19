import Link from "next/link";
import { ExternalLink, Bookmark, Share2 } from "lucide-react";

interface NewsCardProps {
  title: string;
  description: string;
  source: string;
  date: string;
  category: "vla" | "world-model" | "embodied" | "llm" | "general";
  url: string;
  authors?: string[];
}

const categoryLabels = {
  "vla": "VLA",
  "world-model": "World Model",
  "embodied": "Embodied AI",
  "llm": "LLM",
  "general": "General"
};

export default function NewsCard({ title, description, source, date, category, url, authors }: NewsCardProps) {
  return (
    <article className="card p-5">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <span className={`tag tag-${category}`}>
              {categoryLabels[category]}
            </span>
            <span className="text-xs text-gray-500">{source}</span>
            <span className="text-xs text-gray-400">•</span>
            <span className="text-xs text-gray-500">{date}</span>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
            <a href={url} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </h3>

          <p className="text-gray-600 text-sm line-clamp-3 mb-3">
            {description}
          </p>

          {authors && authors.length > 0 && (
            <p className="text-xs text-gray-500">
              {authors.slice(0, 3).join(", ")}{authors.length > 3 && " et al."}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2 shrink-0">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            title="Open original"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
          <button
            className="p-2 text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 rounded-lg transition-colors"
            title="Bookmark"
          >
            <Bookmark className="w-4 h-4" />
          </button>
          <button
            className="p-2 text-gray-400 hover:text-green-500 hover:bg-green-50 rounded-lg transition-colors"
            title="Share"
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </article>
  );
}
