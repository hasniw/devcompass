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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Organization",
        name: "DevCompass", url: "https://devcompass.vercel.app",
        description: "Comparateur de formations tech et bootcamps en France",
        sameAs: []
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: "https://devcompass.vercel.app" },
          { "@type": "ListItem", position: 2, name: "Comparateur", item: "https://devcompass.vercel.app/comparateur" },
          { "@type": "ListItem", position: 3, name: "Blog", item: "https://devcompass.vercel.app/blog/devenir-developpeur-2026" }
        ]
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "Quelle est la meilleure formation dev web en France ?", acceptedAnswer: { "@type": "Answer", text: "Le Wagon, Ironhack et Jedha sont parmi les bootcamps les mieux notés. Le choix dépend de votre budget, disponibilité et objectifs de carrière." }},
          { "@type": "Question", name: "Combien coûte un bootcamp en développement web ?", acceptedAnswer: { "@type": "Answer", text: "Les prix varient entre 4 000€ et 10 000€ selon la durée et le format (temps plein ou temps partiel). Certaines formations sont éligibles au CPF." }},
          { "@type": "Question", name: "Les formations bootcamp sont-elles éligibles au CPF ?", acceptedAnswer: { "@type": "Answer", text: "Oui, la majorité des bootcamps reconnus comme Le Wagon, Jedha ou OpenClassrooms sont éligibles au CPF, permettant un financement partiel ou total." }},
          { "@type": "Question", name: "Quelle est la durée moyenne d'un bootcamp tech ?", acceptedAnswer: { "@type": "Answer", text: "Un bootcamp intensif dure généralement 9 à 12 semaines à temps plein. Les formats temps partiel s'étalent sur 4 à 6 mois." }},
          { "@type": "Question", name: "Quel taux d'insertion après un bootcamp ?", acceptedAnswer: { "@type": "Answer", text: "Les meilleurs bootcamps affichent des taux d'insertion de 80% à 95% dans les 6 mois suivant la formation." }}
        ]
      }) }} />
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <HeroScene />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/40 via-transparent to-[#0a0a0a] z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-r from-violet-900/15 via-transparent to-blue-900/15 z-[1]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-40 relative z-10 w-full">
          <div className="text-center">
            <div className="inline-block glass-strong rounded-full px-5 py-2 mb-8 text-sm text-gray-300 tracking-wide">
              ✨ Le comparateur #1 de formations tech en France
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white mb-8 leading-[1.05] tracking-tight">
              Trouvez la formation<br />
              <span className="gradient-text">qui vous correspond</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
              Comparez les meilleurs bootcamps et formations en France. 
              Prix, avis, durée, taux d&apos;insertion : toutes les infos pour faire le bon choix.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link href="/comparateur" className="btn-shine bg-gradient-to-r from-violet-600 to-blue-500 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-xl hover:shadow-violet-500/30 transition-all duration-300 hover:scale-105">
                🔍 Comparer les formations
              </Link>
              <Link href="/categories/dev-web" className="glass text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all duration-300 hover:scale-[1.03]">
                📚 Explorer par catégorie
              </Link>
            </div>
            <div className="mt-14 flex flex-wrap items-center justify-center gap-8 text-gray-500 text-sm">
              <span className="flex items-center gap-2">✅ 8+ formations comparées</span>
              <span className="flex items-center gap-2">✅ Avis vérifiés</span>
              <span className="flex items-center gap-2">✅ 100% indépendant</span>
            </div>
          </div>
        </div>
      </section>

      {/* Top Formations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <ScrollReveal>
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="text-violet-400 font-semibold text-sm uppercase tracking-widest mb-3">Les mieux notées</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">🏆 Top formations</h2>
              <p className="text-gray-500 mt-2 text-lg">Les formations les mieux notées par la communauté</p>
            </div>
            <Link href="/comparateur" className="text-violet-400 font-medium hover:text-violet-300 transition hidden sm:flex items-center gap-1 text-sm group">
              Voir toutes <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {topFormations.map((f, i) => <FormationCard key={f.slug} formation={f} index={i} />)}
        </div>
      </section>

      <div className="section-divider max-w-5xl mx-auto" />

      {/* Categories */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#12122a]/40 to-[#0a0a0a]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-3">Domaines</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-14">📂 Explorer par catégorie</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {categories.map((cat, i) => (
              <ScrollReveal key={cat.slug} delay={i * 0.1}>
                <Link href={`/categories/${cat.slug}`}
                  className="group glass rounded-2xl p-8 block card-hover">
                  <span className="text-5xl mb-4 block">{cat.icon}</span>
                  <h3 className="font-bold text-lg text-white group-hover:text-violet-300 transition">{cat.name}</h3>
                  <p className="text-sm text-gray-500 mt-2 leading-relaxed">{cat.title}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider max-w-5xl mx-auto" />

      {/* Blog */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <ScrollReveal>
          <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-3">Ressources</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-14">📝 Articles récents</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {blogPosts.slice(0, 4).map((post, i) => (
            <ScrollReveal key={post.slug} delay={i * 0.1}>
              <Link href={`/blog/${post.slug}`}
                className="group glass rounded-2xl p-8 block card-hover">
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                  <span className="bg-violet-500/20 text-violet-400 px-3 py-1 rounded-full text-xs font-semibold">{post.category}</span>
                  <span>{post.readTime}</span>
                  <span className="text-gray-700">•</span>
                  <span>{new Date(post.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                </div>
                <h3 className="font-bold text-xl text-white group-hover:text-violet-300 transition mb-3">{post.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{post.excerpt}</p>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Lead Capture */}
      <HomeLeadSection />

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">❓ Questions fréquentes</h2>
        </ScrollReveal>
        <div className="space-y-6">
          {[
            { q: "Quelle est la meilleure formation dev web en France ?", a: "Le Wagon, Ironhack et Jedha sont parmi les bootcamps les mieux notés. Le choix dépend de votre budget, disponibilité et objectifs de carrière." },
            { q: "Combien coûte un bootcamp en développement web ?", a: "Les prix varient entre 4 000€ et 10 000€ selon la durée et le format (temps plein ou temps partiel). Certaines formations sont éligibles au CPF." },
            { q: "Les formations bootcamp sont-elles éligibles au CPF ?", a: "Oui, la majorité des bootcamps reconnus comme Le Wagon, Jedha ou OpenClassrooms sont éligibles au CPF, permettant un financement partiel ou total." },
            { q: "Quelle est la durée moyenne d'un bootcamp tech ?", a: "Un bootcamp intensif dure généralement 9 à 12 semaines à temps plein. Les formats temps partiel s'étalent sur 4 à 6 mois." },
            { q: "Quel taux d'insertion après un bootcamp ?", a: "Les meilleurs bootcamps affichent des taux d'insertion de 80% à 95% dans les 6 mois suivant la formation." },
          ].map((faq, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className="glass rounded-2xl p-6">
                <h3 className="font-bold text-lg text-white mb-2">{faq.q}</h3>
                <p className="text-gray-400 leading-relaxed">{faq.a}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-900/20 via-blue-900/20 to-violet-900/20" />
        <div className="absolute inset-0 noise" />
        <ScrollReveal>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">Prêt à vous lancer ?</h2>
            <p className="text-gray-400 text-lg sm:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Utilisez notre comparateur interactif pour trouver la formation idéale selon votre budget, votre disponibilité et vos objectifs.
            </p>
            <Link href="/comparateur" className="btn-shine bg-gradient-to-r from-amber-500 to-orange-500 text-black px-12 py-5 rounded-2xl font-bold text-xl hover:shadow-xl hover:shadow-amber-500/30 transition-all duration-300 hover:scale-105 inline-block pulse-glow">
              Comparer maintenant →
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
