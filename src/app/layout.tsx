import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Daily - VLA & World Model Research News",
  description: "Daily AI research news focusing on VLA, World Models, and Embodied AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen bg-gray-50">
          {children}
        </main>
        <footer className="bg-white border-t border-gray-200 py-6 mt-12">
          <div className="max-w-6xl mx-auto px-4 text-center text-gray-500 text-sm">
            <p>AI Daily News © 2026 · Built with Next.js + Tailwind</p>
            <p className="mt-1">Data sources: Arxiv, VLA Research Tracker, AI News Aggregation</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
