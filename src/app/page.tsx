import Link from 'next/link';
import dynamic from 'next/dynamic';
import { formations } from '@/data/formations';
import { categories } from '@/data/categories';
import { blogPosts } from '@/data/blog';
import FormationCard from '@/components/FormationCard';
import HomeLeadSection from '@/components/HomeLeadSection';
import ScrollReveal from '@/components/ScrollReveal';

const HeroScene = dynamic(() => import('@/components/HeroScene'), { ssr: false });

export default function HomePage() {
  const topFormations = [...formations].sort((a, b) => b.rating - a.rating).slice(0, 4);

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* 3D Background */}
        <HeroScene />
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/30 via-transparent to-[#0a0a0a] z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-r from-violet-900/20 via-transparent to-blue-900/20 z-[1]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10 w-full">
          <div className="text-center">
            <div className="inline-block glass-strong rounded-full px-4 py-1.5 mb-6 text-sm text-gray-300">
              ✨ Le comparateur #1 de formations tech en France
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
              Trouvez la formation tech<br />
              <span className="gradient-text">qui vous correspond</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
              Comparez les meilleurs bootcamps et formations en France. 
              Prix, avis, durée, taux d&apos;insertion : toutes les infos pour faire le bon choix.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/comparateur" className="bg-gradient-to-r from-violet-600 to-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300 hover:scale-105">
                🔍 Comparer les formations
              </Link>
              <Link href="/categories/dev-web" className="glass text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300">
                📚 Explorer par catégorie
              </Link>
            </div>
            <div className="mt-10 flex items-center justify-center gap-6 text-gray-500 text-sm">
              <span>✅ 8+ formations comparées</span>
              <span>✅ Avis vérifiés</span>
              <span>✅ 100% indépendant</span>
            </div>
          </div>
        </div>
      </section>

      {/* Top Formations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <ScrollReveal>
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-white">🏆 Top formations</h2>
              <p className="text-gray-500 mt-1">Les formations les mieux notées par la communauté</p>
            </div>
            <Link href="/comparateur" className="text-violet-400 font-medium hover:text-violet-300 transition hidden sm:block">
              Voir toutes →
            </Link>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topFormations.map((f, i) => <FormationCard key={f.slug} formation={f} index={i} />)}
        </div>
      </section>

      {/* Categories */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a2e]/50 to-[#0a0a0a]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white mb-10">📂 Explorer par catégorie</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, i) => (
              <ScrollReveal key={cat.slug} delay={i * 0.1}>
                <Link href={`/categories/${cat.slug}`}
                  className="group glass rounded-2xl p-6 block hover:bg-white/10 hover:border-violet-500/30 transition-all duration-500 hover:scale-[1.02]">
                  <span className="text-4xl mb-3 block">{cat.icon}</span>
                  <h3 className="font-bold text-lg text-white group-hover:text-violet-300 transition">{cat.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{cat.title}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-white mb-10">📝 Articles récents</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.slice(0, 4).map((post, i) => (
            <ScrollReveal key={post.slug} delay={i * 0.1}>
              <Link href={`/blog/${post.slug}`}
                className="group glass rounded-2xl p-6 block hover:bg-white/10 hover:border-violet-500/30 transition-all duration-500">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <span className="bg-violet-500/20 text-violet-400 px-2 py-0.5 rounded-full text-xs font-medium">{post.category}</span>
                  <span>{post.readTime}</span>
                  <span>•</span>
                  <span>{new Date(post.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                </div>
                <h3 className="font-bold text-lg text-white group-hover:text-violet-300 transition mb-2">{post.title}</h3>
                <p className="text-gray-500 text-sm line-clamp-2">{post.excerpt}</p>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Lead Capture */}
      <HomeLeadSection />

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-900/30 via-blue-900/30 to-violet-900/30" />
        <div className="absolute inset-0 noise" />
        <ScrollReveal>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl font-bold text-white mb-4">Prêt à vous lancer ?</h2>
            <p className="text-gray-400 text-lg mb-8">Utilisez notre comparateur interactif pour trouver la formation idéale selon votre budget, votre disponibilité et vos objectifs.</p>
            <Link href="/comparateur" className="bg-gradient-to-r from-amber-500 to-orange-500 text-black px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300 hover:scale-105 inline-block">
              Comparer maintenant →
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
