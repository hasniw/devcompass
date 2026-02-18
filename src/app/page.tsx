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
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <HeroScene />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/20 via-transparent to-[#0a0a0a] z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-r from-violet-900/15 via-transparent to-blue-900/15 z-[1]" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 relative z-10 w-full">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 glass-strong rounded-full px-5 py-2 mb-8 text-sm text-gray-300 badge-shimmer">
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
              Le comparateur #1 de formations tech en France
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold font-display text-white mb-8 leading-[1.08] tracking-tight">
              Trouvez la formation tech<br />
              <span className="gradient-text">qui vous correspond</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
              Comparez les meilleurs bootcamps et formations en France. 
              Prix, avis, durée, taux d&apos;insertion : toutes les infos pour faire le bon choix.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/comparateur" className="group bg-gradient-to-r from-violet-600 to-blue-500 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:shadow-[0_8px_30px_rgba(124,58,237,0.3)] hover:-translate-y-0.5">
                <span className="flex items-center justify-center gap-2">
                  Comparer les formations
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </span>
              </Link>
              <Link href="/categories/dev-web" className="glass text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all duration-300">
                Explorer par catégorie
              </Link>
            </div>
            <div className="mt-14 flex items-center justify-center gap-8 text-gray-500 text-sm">
              <span className="flex items-center gap-1.5"><span className="text-emerald-400">✓</span> 8+ formations</span>
              <span className="flex items-center gap-1.5"><span className="text-emerald-400">✓</span> Avis vérifiés</span>
              <span className="flex items-center gap-1.5"><span className="text-emerald-400">✓</span> 100% indépendant</span>
            </div>
          </div>
        </div>
      </section>

      {/* Top Formations */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <ScrollReveal>
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-violet-400 text-sm font-semibold tracking-wide uppercase mb-2">Sélection</p>
              <h2 className="text-3xl md:text-4xl font-extrabold font-display text-white">Top formations</h2>
              <p className="text-gray-500 mt-2 text-lg">Les formations les mieux notées par la communauté</p>
            </div>
            <Link href="/comparateur" className="text-violet-400 font-medium hover:text-violet-300 transition hidden sm:flex items-center gap-1 group">
              Voir toutes
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {topFormations.map((f, i) => (
            <ScrollReveal key={f.slug} delay={i * 0.08}>
              <FormationCard formation={f} index={i} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#12121f]/60 to-[#0a0a0a]" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <p className="text-blue-400 text-sm font-semibold tracking-wide uppercase mb-2">Parcourir</p>
            <h2 className="text-3xl md:text-4xl font-extrabold font-display text-white mb-12">Explorer par catégorie</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {categories.map((cat, i) => (
              <ScrollReveal key={cat.slug} delay={i * 0.08}>
                <Link href={`/categories/${cat.slug}`}
                  className="group card-premium glass rounded-2xl p-7 block hover:bg-white/[0.07] transition-all duration-500 hover:-translate-y-1">
                  <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform duration-500">{cat.icon}</span>
                  <h3 className="font-bold text-lg text-white group-hover:text-violet-300 transition">{cat.name}</h3>
                  <p className="text-sm text-gray-500 mt-2 leading-relaxed">{cat.title}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <ScrollReveal>
          <p className="text-amber-400 text-sm font-semibold tracking-wide uppercase mb-2">Ressources</p>
          <h2 className="text-3xl md:text-4xl font-extrabold font-display text-white mb-12">Articles récents</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {blogPosts.slice(0, 4).map((post, i) => (
            <ScrollReveal key={post.slug} delay={i * 0.08}>
              <Link href={`/blog/${post.slug}`}
                className="group card-premium glass rounded-2xl p-7 block hover:bg-white/[0.07] transition-all duration-500">
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                  <span className="bg-violet-500/15 text-violet-400 px-3 py-0.5 rounded-full text-xs font-semibold">{post.category}</span>
                  <span>{post.readTime}</span>
                  <span className="text-gray-700">•</span>
                  <span>{new Date(post.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                </div>
                <h3 className="font-bold text-lg text-white group-hover:text-violet-300 transition mb-3">{post.title}</h3>
                <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed">{post.excerpt}</p>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Lead Capture */}
      <HomeLeadSection />

      {/* CTA */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-900/20 via-blue-900/20 to-violet-900/20" />
        <div className="absolute inset-0 noise" />
        <ScrollReveal>
          <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold font-display text-white mb-5">Prêt à vous lancer ?</h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">Utilisez notre comparateur interactif pour trouver la formation idéale selon votre budget, votre disponibilité et vos objectifs.</p>
            <Link href="/comparateur" className="group inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-black px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:shadow-[0_8px_30px_rgba(245,158,11,0.3)] hover:-translate-y-0.5">
              Comparer maintenant
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
