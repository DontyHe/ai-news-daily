import Link from "next/link";
import { Flame, Rss } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Flame className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI Daily
            </span>
          </Link>

          <div className="flex items-center gap-6">
            <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
              Today
            </Link>
            <Link href="/#vla" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
              VLA
            </Link>
            <Link href="/#world-model" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
              World Model
            </Link>
            <Link href="/#embodied" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
              Embodied AI
            </Link>
            <a
              href="/rss.xml"
              className="flex items-center gap-1 text-orange-500 hover:text-orange-600 transition-colors text-sm font-medium"
            >
              <Rss className="w-4 h-4" />
              RSS
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
