import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] border-t border-white/5 mt-0">
      {/* Top gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🧭</span>
              <span className="font-bold text-xl text-white">Dev<span className="gradient-text">Compass</span></span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">Le comparateur de formations tech et bootcamps en France. Trouvez la formation qui vous correspond.</p>
            <div className="flex gap-3 mt-4">
              {['Twitter', 'LinkedIn', 'GitHub'].map(s => (
                <span key={s} className="text-xs text-gray-600 glass px-3 py-1 rounded-full hover:text-white cursor-pointer transition">{s}</span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Formations</h3>
            <ul className="space-y-2 text-sm">
              {['le-wagon', 'ironhack', 'jedha', 'la-capsule', 'openclassrooms'].map(slug => (
                <li key={slug}><Link href={`/formations/${slug}`} className="text-gray-500 hover:text-violet-400 transition">{slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Catégories</h3>
            <ul className="space-y-2 text-sm">
              {[{s:'dev-web',n:'Développement Web'},{s:'data',n:'Data Science & IA'},{s:'cybersec',n:'Cybersécurité'},{s:'design',n:'UX/UI Design'}].map(c => (
                <li key={c.s}><Link href={`/categories/${c.s}`} className="text-gray-500 hover:text-blue-400 transition">{c.n}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Blog</h3>
            <ul className="space-y-2 text-sm">
              {[{s:'devenir-developpeur-2026',n:'Devenir développeur en 2026'},{s:'reconversion-tech-30-ans',n:'Reconversion tech à 30 ans'},{s:'bootcamp-vs-autodidacte',n:'Bootcamp vs autodidacte'},{s:'le-wagon-avis-2026',n:'Le Wagon avis 2026'}].map(p => (
                <li key={p.s}><Link href={`/blog/${p.s}`} className="text-gray-500 hover:text-amber-400 transition">{p.n}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 text-sm text-center">
          <p className="text-gray-600">© 2026 DevCompass. Tous droits réservés. Comparateur indépendant de formations tech en France.</p>
          <p className="mt-2 text-xs text-gray-700">Les liens vers les formations peuvent contenir des liens d&apos;affiliation. Cela ne modifie pas nos avis qui restent 100% indépendants.</p>
        </div>
      </div>
    </footer>
  );
}
