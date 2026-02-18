'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#0a0a0a]/80 backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_1px_20px_rgba(0,0,0,0.4)]' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className="text-2xl group-hover:rotate-12 transition-transform duration-500">🧭</span>
            <span className="font-bold text-xl font-display text-white">Dev<span className="gradient-text">Compass</span></span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {[
              { href: '/formations/le-wagon', label: 'Formations' },
              { href: '/comparateur', label: 'Comparateur' },
              { href: '/blog/devenir-developpeur-2026', label: 'Blog' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="text-gray-400 hover:text-white transition px-4 py-2 rounded-lg hover:bg-white/[0.05] text-sm font-medium">
                {link.label}
              </Link>
            ))}
            <Link href="/comparateur" className="ml-3 bg-gradient-to-r from-violet-600 to-blue-500 text-white px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-300 hover:shadow-[0_4px_20px_rgba(124,58,237,0.3)] hover:-translate-y-0.5">
              Comparer →
            </Link>
          </nav>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 text-white" aria-label="Menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden pb-4 space-y-1 glass rounded-2xl mt-2 p-4">
            <Link href="/formations/le-wagon" className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition" onClick={() => setMobileOpen(false)}>Formations</Link>
            <Link href="/comparateur" className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition" onClick={() => setMobileOpen(false)}>Comparateur</Link>
            <Link href="/blog/devenir-developpeur-2026" className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition" onClick={() => setMobileOpen(false)}>Blog</Link>
            <Link href="/comparateur" className="block px-4 py-3 mt-2 text-center bg-gradient-to-r from-violet-600 to-blue-500 text-white rounded-xl font-semibold" onClick={() => setMobileOpen(false)}>Comparer →</Link>
          </div>
        )}
      </div>
    </header>
  );
}
