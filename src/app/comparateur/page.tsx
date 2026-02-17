import { Metadata } from 'next';
import Link from 'next/link';
import ComparateurClient from '@/components/ComparateurClient';

export const metadata: Metadata = {
  title: 'Comparateur de formations tech et bootcamps 2026',
  description: 'Comparez les meilleures formations tech et bootcamps en France en 2026. Filtrez par prix, durée, format, ville et financement CPF.',
  openGraph: {
    title: 'Comparateur de formations tech 2026 | DevCompass',
    description: 'Tableau comparatif interactif des formations tech en France.',
  }
};

export default function ComparateurPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-violet-400 transition">Accueil</Link>
        <span className="mx-2">›</span>
        <span className="text-white">Comparateur</span>
      </nav>

      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          🔍 Comparateur de formations tech
        </h1>
        <p className="text-gray-400 text-lg max-w-3xl">
          Comparez les meilleurs bootcamps et formations en France. 
          Utilisez les filtres pour trouver la formation qui correspond à votre budget, 
          votre disponibilité et vos objectifs.
        </p>
      </div>

      <ComparateurClient />
    </div>
  );
}
