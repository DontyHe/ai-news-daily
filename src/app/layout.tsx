import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AI Daily News - VLA, World Models, Embodied AI',
  description: 'Daily updates on the latest AI research including VLA models, world models, and embodied AI.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
