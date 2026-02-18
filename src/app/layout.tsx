import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' });

export const metadata: Metadata = {
  metadataBase: new URL('https://devcompass.fr'),
  title: {
    default: 'DevCompass - Comparateur de formations tech & bootcamps en France',
    template: '%s | DevCompass'
  },
  description: 'Comparez les meilleures formations tech et bootcamps en France : Le Wagon, Ironhack, Jedha, OpenClassrooms... Prix, avis, durée et taux d\'insertion.',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'DevCompass',
    title: 'DevCompass - Comparateur de formations tech & bootcamps en France',
    description: 'Comparez les meilleures formations tech et bootcamps en France. Prix, avis, durée et taux d\'insertion.',
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-[#0a0a0a]`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
