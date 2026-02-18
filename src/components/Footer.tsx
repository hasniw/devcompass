import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative bg-[#060610] border-t border-white/5">
      <div className="h-px bg-gradient-to-r from-transparent via-violet-500/60 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <span className="text-2xl">🧭</span>
              <span className="font-bold text-xl text-white">Dev<span className="gradient-text">Compass</span></span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              Le comparateur de formations tech et bootcamps en France. Trouvez la formation qui vous correspond.
            </p>
            <div className="flex gap-3">
              {['Twitter', 'LinkedIn', 'GitHub'].map(s => (
                <span key={s} className="text-xs text-gray-500 glass px-4 py-2 rounded-full hover:text-violet-400 hover:border-violet-500/30 cursor-pointer transition-all duration-300">{s}</span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-5 text-xs uppercase tracking-[0.2em] text-gray-400">Formations</h3>
            <ul className="space-y-3 text-sm">
              {['le-wagon', 'ironhack', 'jedha', 'la-capsule', 'openclassrooms'].map(slug => (
                <li key={slug}>
                  <Link href={`/formations/${slug}`} className="text-gray-500 hover:text-violet-400 transition-colors duration-200">
                    {slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-5 text-xs uppercase tracking-[0.2em] text-gray-400">Catégories</h3>
            <ul className="space-y-3 text-sm">
              {[{s:'dev-web',n:'Développement Web'},{s:'data',n:'Data Science & IA'},{s:'cybersec',n:'Cybersécurité'},{s:'design',n:'UX/UI Design'}].map(c => (
                <li key={c.s}>
                  <Link href={`/categories/${c.s}`} className="text-gray-500 hover:text-blue-400 transition-colors duration-200">{c.n}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-5 text-xs uppercase tracking-[0.2em] text-gray-400">Blog</h3>
            <ul className="space-y-3 text-sm">
              {[{s:'devenir-developpeur-2026',n:'Devenir développeur en 2026'},{s:'reconversion-tech-30-ans',n:'Reconversion tech à 30 ans'},{s:'bootcamp-vs-autodidacte',n:'Bootcamp vs autodidacte'},{s:'le-wagon-avis-2026',n:'Le Wagon avis 2026'}].map(p => (
                <li key={p.s}>
                  <Link href={`/blog/${p.s}`} className="text-gray-500 hover:text-amber-400 transition-colors duration-200">{p.n}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-16 pt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">© 2026 DevCompass. Tous droits réservés.</p>
          <p className="text-xs text-gray-700 max-w-lg text-center sm:text-right">
            Les liens vers les formations peuvent contenir des liens d&apos;affiliation. Nos avis restent 100% indépendants.
          </p>
        </div>
      </div>
    </footer>
  );
}
