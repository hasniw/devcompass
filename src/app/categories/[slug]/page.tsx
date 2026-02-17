import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { categories, getCategoryBySlug } from '@/data/categories';
import { getFormationsByCategory } from '@/data/formations';
import FormationCard from '@/components/FormationCard';

export async function generateStaticParams() {
  return categories.map(c => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const category = getCategoryBySlug(params.slug);
  if (!category) return {};
  return {
    title: category.title,
    description: category.metaDescription,
    openGraph: { title: `${category.title} | DevCompass`, description: category.metaDescription },
  };
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = getCategoryBySlug(params.slug);
  if (!category) notFound();

  const categoryFormations = getFormationsByCategory(params.slug).sort((a, b) => b.rating - a.rating);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-violet-400 transition">Accueil</Link>
        <span className="mx-2">›</span>
        <span className="text-white">{category.name}</span>
      </nav>

      <div className="mb-10">
        <span className="text-5xl mb-4 block">{category.icon}</span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">{category.title}</h1>
        <p className="text-gray-400 text-lg max-w-3xl">{category.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoryFormations.map((f, i) => <FormationCard key={f.slug} formation={f} index={i} />)}
      </div>

      {categoryFormations.length === 0 && (
        <p className="text-gray-500 text-center py-12">Aucune formation dans cette catégorie pour le moment.</p>
      )}

      <div className="mt-12 text-center">
        <Link href="/comparateur" className="bg-gradient-to-r from-violet-600 to-blue-500 text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg hover:shadow-violet-500/25 transition-all hover:scale-105 inline-block">
          Comparer toutes les formations →
        </Link>
      </div>
    </div>
  );
}
