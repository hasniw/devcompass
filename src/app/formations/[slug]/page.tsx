import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { formations, getFormationBySlug } from '@/data/formations';
import StarRating from '@/components/StarRating';

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
    provider: {
      "@type": "Organization",
      name: formation.name,
      url: formation.website
    },
    offers: {
      "@type": "Offer",
      price: formation.price,
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock"
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: formation.rating,
      reviewCount: formation.reviewCount,
      bestRating: 5,
      worstRating: 1
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: formation.format.includes("Remote") ? "online" : "onsite",
      duration: `P${formation.durationWeeks}W`
    }
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function FormationPage({ params }: { params: { slug: string } }) {
  const formation = getFormationBySlug(params.slug);
  if (!formation) notFound();

  return (
    <>
      <CourseSchema formation={formation} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-indigo-600">Accueil</Link>
          <span className="mx-2">›</span>
          <Link href="/comparateur" className="hover:text-indigo-600">Formations</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-900">{formation.name}</span>
        </nav>

        {/* Header */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">{formation.name}</h1>
              <div className="flex items-center gap-3 mb-4">
                <StarRating rating={formation.rating} size="lg" />
                <span className="text-gray-500">({formation.reviewCount} avis)</span>
                {formation.cpf && (
                  <span className="bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full">✅ Éligible CPF</span>
                )}
              </div>
              <p className="text-gray-600 text-lg">{formation.shortDescription}</p>
            </div>
          </div>

          {/* Key metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-gray-100">
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-gray-900">{formation.priceLabel}</div>
              <div className="text-sm text-gray-500">Prix</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-gray-900">{formation.durationWeeks} sem.</div>
              <div className="text-sm text-gray-500">Durée</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-green-600">{formation.insertionRate ? `${formation.insertionRate}%` : 'N/A'}</div>
              <div className="text-sm text-gray-500">Insertion</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-yellow-500">{formation.rating}/5</div>
              <div className="text-sm text-gray-500">Note</div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">📋 Description</h2>
          <div className="prose prose-gray max-w-none">
            {formation.description.split('\n\n').map((p, i) => (
              <p key={i} className="text-gray-600 mb-4">{p}</p>
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">📍 Informations pratiques</h2>
            <dl className="space-y-3">
              <div className="flex justify-between">
                <dt className="text-gray-500">Format</dt>
                <dd className="font-medium">{formation.format.join(', ')}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-500">Villes</dt>
                <dd className="font-medium text-right">{formation.cities.join(', ')}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-500">Durée</dt>
                <dd className="font-medium">{formation.duration}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-500">CPF</dt>
                <dd className="font-medium">{formation.cpf ? '✅ Oui' : '❌ Non'}</dd>
              </div>
            </dl>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">🛠 Technologies enseignées</h2>
            <div className="flex flex-wrap gap-2">
              {formation.features.map(f => (
                <span key={f} className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-lg text-sm font-medium">{f}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Pros / Cons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-green-50 rounded-2xl border border-green-200 p-8">
            <h2 className="text-xl font-bold text-green-800 mb-4">👍 Points forts</h2>
            <ul className="space-y-2">
              {formation.pros.map((p, i) => (
                <li key={i} className="flex items-start gap-2 text-green-700">
                  <span className="mt-0.5">✅</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-red-50 rounded-2xl border border-red-200 p-8">
            <h2 className="text-xl font-bold text-red-800 mb-4">👎 Points faibles</h2>
            <ul className="space-y-2">
              {formation.cons.map((c, i) => (
                <li key={i} className="flex items-start gap-2 text-red-700">
                  <span className="mt-0.5">⚠️</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Reviews */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">💬 Avis d&apos;anciens élèves</h2>
          <div className="space-y-6">
            {formation.reviews.map((review, i) => (
              <div key={i} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <span className="font-semibold text-gray-900">{review.author}</span>
                    <span className="text-sm text-gray-500 ml-2">• {review.context}</span>
                  </div>
                  <StarRating rating={review.rating} />
                </div>
                <p className="text-gray-600">{review.text}</p>
                <p className="text-xs text-gray-400 mt-2">{new Date(review.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-indigo-600 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Intéressé par {formation.name} ?</h2>
          <p className="text-indigo-100 mb-6">Visitez leur site pour en savoir plus et vous inscrire à une session d&apos;information.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={formation.website} target="_blank" rel="noopener noreferrer"
              className="bg-white text-indigo-600 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition">
              Visiter le site →
            </a>
            <Link href="/comparateur" className="bg-indigo-500/30 text-white px-8 py-3 rounded-xl font-bold hover:bg-indigo-500/50 transition border border-white/20">
              Comparer avec d&apos;autres
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
