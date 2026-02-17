import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { formations, getFormationBySlug } from '@/data/formations';
import StarRating from '@/components/StarRating';
import FormationCTA from '@/components/FormationCTA';
import ScrollReveal from '@/components/ScrollReveal';

export async function generateStaticParams() {
  return formations.map(f => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const formation = getFormationBySlug(params.slug);
  if (!formation) return {};
  return {
    title: `${formation.name} : avis, prix, programme 2026`,
    description: `Avis détaillé sur ${formation.name} en 2026. Prix : ${formation.priceLabel}. Durée : ${formation.duration}. Note : ${formation.rating}/5. ${formation.shortDescription}`,
    openGraph: {
      title: `${formation.name} - Avis et comparatif 2026 | DevCompass`,
      description: formation.shortDescription,
    }
  };
}

function CourseSchema({ formation }: { formation: ReturnType<typeof getFormationBySlug> }) {
  if (!formation) return null;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: formation.name,
    description: formation.shortDescription,
    provider: { "@type": "Organization", name: formation.name, url: formation.website },
    offers: { "@type": "Offer", price: formation.price, priceCurrency: "EUR", availability: "https://schema.org/InStock" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: formation.rating, reviewCount: formation.reviewCount, bestRating: 5, worstRating: 1 },
    hasCourseInstance: { "@type": "CourseInstance", courseMode: formation.format.includes("Remote") ? "online" : "onsite", duration: `P${formation.durationWeeks}W` }
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

// Gradient per formation for unique headers
const gradients: Record<string, string> = {
  'le-wagon': 'from-red-600/40 to-orange-600/40',
  'ironhack': 'from-blue-600/40 to-cyan-600/40',
  'jedha': 'from-violet-600/40 to-purple-600/40',
  'la-capsule': 'from-emerald-600/40 to-teal-600/40',
  'openclassrooms': 'from-violet-600/40 to-pink-600/40',
  'wild-code-school': 'from-orange-600/40 to-yellow-600/40',
  'le-reacteur': 'from-cyan-600/40 to-blue-600/40',
  'dyma': 'from-indigo-600/40 to-violet-600/40',
};

function RatingBar({ label, value, max = 5 }: { label: string; value: number; max?: number }) {
  const pct = (value / max) * 100;
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-gray-400 w-24 shrink-0">{label}</span>
      <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-violet-500 to-blue-500 rounded-full transition-all duration-1000" style={{ width: `${pct}%` }} />
      </div>
      <span className="text-sm font-semibold text-white w-10 text-right">{value}/{max}</span>
    </div>
  );
}

export default function FormationPage({ params }: { params: { slug: string } }) {
  const formation = getFormationBySlug(params.slug);
  if (!formation) notFound();

  const grad = gradients[formation.slug] || 'from-violet-600/40 to-blue-600/40';

  return (
    <>
      <CourseSchema formation={formation} />
      
      {/* Hero header with unique gradient */}
      <section className={`relative bg-gradient-to-br ${grad} py-16 overflow-hidden`}>
        <div className="absolute inset-0 bg-[#0a0a0a]/60" />
        <div className="absolute inset-0 noise" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-violet-400 transition">Accueil</Link>
            <span className="mx-2">›</span>
            <Link href="/comparateur" className="hover:text-violet-400 transition">Formations</Link>
            <span className="mx-2">›</span>
            <span className="text-white">{formation.name}</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3">{formation.name}</h1>
          <div className="flex items-center gap-3 mb-4">
            <StarRating rating={formation.rating} size="lg" />
            <span className="text-gray-400">({formation.reviewCount} avis)</span>
            {formation.cpf && (
              <span className="bg-emerald-500/20 text-emerald-400 text-sm font-medium px-3 py-1 rounded-full border border-emerald-500/20">✅ CPF</span>
            )}
          </div>
          <p className="text-gray-300 text-lg max-w-2xl">{formation.shortDescription}</p>

          {/* Big stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { label: 'Prix', value: formation.priceLabel, icon: '💰' },
              { label: 'Durée', value: `${formation.durationWeeks} sem.`, icon: '⏱' },
              { label: 'Insertion', value: formation.insertionRate ? `${formation.insertionRate}%` : 'N/A', icon: '📈' },
              { label: 'Note', value: `${formation.rating}/5`, icon: '⭐' },
            ].map(s => (
              <div key={s.label} className="glass-strong rounded-xl p-4 text-center">
                <div className="text-2xl mb-1">{s.icon}</div>
                <div className="text-xl font-bold text-white">{s.value}</div>
                <div className="text-xs text-gray-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        {/* Rating bars */}
        <ScrollReveal>
          <div className="glass rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">📊 Évaluations détaillées</h2>
            <div className="space-y-4">
              <RatingBar label="Pédagogie" value={Math.min(5, formation.rating + 0.1)} />
              <RatingBar label="Contenu" value={formation.rating} />
              <RatingBar label="Insertion" value={Math.min(5, (formation.insertionRate || 70) / 20)} />
              <RatingBar label="Rapport Q/P" value={Math.max(3, formation.rating - 0.3)} />
              <RatingBar label="Support" value={Math.min(5, formation.rating - 0.1)} />
            </div>
          </div>
        </ScrollReveal>

        {/* Description */}
        <ScrollReveal>
          <div className="glass rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">📋 Description</h2>
            <div className="prose prose-invert max-w-none">
              {formation.description.split('\n\n').map((p, i) => (
                <p key={i} className="text-gray-400 mb-4 leading-relaxed">{p}</p>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Details grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ScrollReveal>
            <div className="glass rounded-2xl p-8 h-full">
              <h2 className="text-xl font-bold text-white mb-4">📍 Informations pratiques</h2>
              <dl className="space-y-3">
                {[
                  { label: 'Format', value: formation.format.join(', ') },
                  { label: 'Villes', value: formation.cities.join(', ') },
                  { label: 'Durée', value: formation.duration },
                  { label: 'CPF', value: formation.cpf ? '✅ Oui' : '❌ Non' },
                ].map(d => (
                  <div key={d.label} className="flex justify-between">
                    <dt className="text-gray-500">{d.label}</dt>
                    <dd className="font-medium text-gray-300 text-right">{d.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="glass rounded-2xl p-8 h-full">
              <h2 className="text-xl font-bold text-white mb-4">🛠 Technologies</h2>
              <div className="flex flex-wrap gap-2">
                {formation.features.map(f => (
                  <span key={f} className="bg-violet-500/15 text-violet-300 px-3 py-1 rounded-lg text-sm font-medium border border-violet-500/20">{f}</span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Pros / Cons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ScrollReveal>
            <div className="glass rounded-2xl p-8 border-emerald-500/20 h-full">
              <h2 className="text-xl font-bold text-emerald-400 mb-4">👍 Points forts</h2>
              <ul className="space-y-2">
                {formation.pros.map((p, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300">
                    <span className="mt-0.5 text-emerald-400">✅</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="glass rounded-2xl p-8 border-red-500/20 h-full">
              <h2 className="text-xl font-bold text-red-400 mb-4">👎 Points faibles</h2>
              <ul className="space-y-2">
                {formation.cons.map((c, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300">
                    <span className="mt-0.5 text-red-400">⚠️</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>

        {/* Reviews */}
        <ScrollReveal>
          <div className="glass rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">💬 Avis d&apos;anciens élèves</h2>
            <div className="space-y-6">
              {formation.reviews.map((review, i) => (
                <div key={i} className="glass rounded-xl p-5 hover:bg-white/5 transition">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">
                        {review.author[0]}
                      </div>
                      <div>
                        <span className="font-semibold text-white">{review.author}</span>
                        <span className="text-sm text-gray-500 ml-2">• {review.context}</span>
                      </div>
                    </div>
                    <StarRating rating={review.rating} />
                  </div>
                  <p className="text-gray-400 ml-10">{review.text}</p>
                  <p className="text-xs text-gray-600 mt-2 ml-10">{new Date(review.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal>
          <FormationCTA formation={formation} />
        </ScrollReveal>
      </div>
    </>
  );
}
