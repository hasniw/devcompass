import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🧭</span>
              <span className="font-bold text-xl text-white">DevCompass</span>
            </div>
            <p className="text-sm">Le comparateur de formations tech et bootcamps en France. Trouvez la formation qui vous correspond.</p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Formations</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/formations/le-wagon" className="hover:text-white transition">Le Wagon</Link></li>
              <li><Link href="/formations/ironhack" className="hover:text-white transition">Ironhack</Link></li>
              <li><Link href="/formations/jedha" className="hover:text-white transition">Jedha</Link></li>
              <li><Link href="/formations/la-capsule" className="hover:text-white transition">La Capsule</Link></li>
              <li><Link href="/formations/openclassrooms" className="hover:text-white transition">OpenClassrooms</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Catégories</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/categories/dev-web" className="hover:text-white transition">Développement Web</Link></li>
              <li><Link href="/categories/data" className="hover:text-white transition">Data Science & IA</Link></li>
              <li><Link href="/categories/cybersec" className="hover:text-white transition">Cybersécurité</Link></li>
              <li><Link href="/categories/design" className="hover:text-white transition">UX/UI Design</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Blog</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog/devenir-developpeur-2026" className="hover:text-white transition">Devenir développeur en 2026</Link></li>
              <li><Link href="/blog/reconversion-tech-30-ans" className="hover:text-white transition">Reconversion tech à 30 ans</Link></li>
              <li><Link href="/blog/bootcamp-vs-autodidacte" className="hover:text-white transition">Bootcamp vs autodidacte</Link></li>
              <li><Link href="/blog/le-wagon-avis-2026" className="hover:text-white transition">Le Wagon avis 2026</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>© 2026 DevCompass. Tous droits réservés. Comparateur indépendant de formations tech en France.</p>
          <p className="mt-2 text-xs text-gray-500">Les liens vers les formations peuvent contenir des liens d&apos;affiliation. Cela ne modifie pas nos avis qui restent 100% indépendants.</p>
        </div>
      </div>
    </footer>
  );
}
