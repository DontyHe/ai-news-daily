'use client';

import { Category, CATEGORIES } from '@/lib/types';

interface CategoryFilterProps {
  selected: Category;
  onSelect: (category: Category) => void;
}

export default function CategoryFilter({ selected, onSelect }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {CATEGORIES.map(cat => (
        <button
          key={cat.key}
          onClick={() => onSelect(cat.key)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            selected === cat.key
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
          }`}
        >
          {cat.emoji} {cat.label}
        </button>
      ))}
    </div>
  );
}
