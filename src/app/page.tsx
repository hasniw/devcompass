import Link from 'next/link';
import { formations } from '@/data/formations';
import { categories } from '@/data/categories';
import { blogPosts } from '@/data/blog';
import FormationCard from '@/components/FormationCard';
import HomeLeadSection from '@/components/HomeLeadSection';

export default function HomePage() {
  const topFormations = [...formations].sort((a, b) => b.rating - a.rating).slice(0, 4);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Trouvez la formation tech<br />
              <span className="text-yellow-300">qui vous correspond</span>
            </h1>
            <p className="text-xl text-indigo-100 max-w-2xl mx-auto mb-8">
              Comparez les meilleurs bootcamps et formations en France. 
              Prix, avis, durée, taux d&apos;insertion : toutes les infos pour faire le bon choix.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/comparateur" className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition shadow-lg">
                🔍 Comparer les formations
              </Link>
              <Link href="/categories/dev-web" className="bg-indigo-500/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-500/50 transition border border-white/20">
                📚 Explorer par catégorie
              </Link>
            </div>
            <div className="mt-8 flex items-center justify-center gap-6 text-indigo-200 text-sm">
              <span>✅ 8+ formations comparées</span>
              <span>✅ Avis vérifiés</span>
              <span>✅ 100% indépendant</span>
            </div>
          </div>
        </div>
      </section>

      {/* Top Formations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">🏆 Top formations</h2>
            <p className="text-gray-500 mt-1">Les formations les mieux notées par la communauté</p>
          </div>
          <Link href="/comparateur" className="text-indigo-600 font-medium hover:text-indigo-800 transition hidden sm:block">
            Voir toutes →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topFormations.map(f => <FormationCard key={f.slug} formation={f} />)}
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">📂 Explorer par catégorie</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map(cat => (
              <Link key={cat.slug} href={`/categories/${cat.slug}`}
                className="group bg-gray-50 rounded-2xl p-6 hover:bg-indigo-50 hover:border-indigo-200 border border-gray-200 transition-all">
                <span className="text-4xl mb-3 block">{cat.icon}</span>
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-indigo-600 transition">{cat.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{cat.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">📝 Articles récents</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.slice(0, 4).map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`}
              className="group bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg hover:border-indigo-200 transition-all">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                <span className="bg-indigo-100 text-indigo-600 px-2 py-0.5 rounded-full text-xs font-medium">{post.category}</span>
                <span>{post.readTime}</span>
                <span>•</span>
                <span>{new Date(post.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              </div>
              <h3 className="font-bold text-lg text-gray-900 group-hover:text-indigo-600 transition mb-2">{post.title}</h3>
              <p className="text-gray-600 text-sm line-clamp-2">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Lead Capture */}
      <HomeLeadSection />

      {/* CTA */}
      <section className="bg-indigo-600 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Prêt à vous lancer ?</h2>
          <p className="text-indigo-100 text-lg mb-8">Utilisez notre comparateur interactif pour trouver la formation idéale selon votre budget, votre disponibilité et vos objectifs.</p>
          <Link href="/comparateur" className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition shadow-lg inline-block">
            Comparer maintenant →
          </Link>
        </div>
      </section>
    </div>
  );
}
