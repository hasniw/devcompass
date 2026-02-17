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
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-purple-500/5' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl group-hover:rotate-45 transition-transform duration-500">🧭</span>
            <span className="font-bold text-xl text-white">Dev<span className="gradient-text">Compass</span></span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/formations/le-wagon" className="text-gray-400 hover:text-white transition text-sm font-medium">Formations</Link>
            <Link href="/comparateur" className="text-gray-400 hover:text-white transition text-sm font-medium">Comparateur</Link>
            <Link href="/blog/devenir-developpeur-2026" className="text-gray-400 hover:text-white transition text-sm font-medium">Blog</Link>
            <Link href="/comparateur" className="relative bg-gradient-to-r from-violet-600 to-blue-500 text-white px-5 py-2 rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300 hover:scale-105">
              Comparer →
            </Link>
          </nav>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 text-white">
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
          <div className="md:hidden pb-4 space-y-2 glass rounded-xl mt-2 p-4">
            <Link href="/formations/le-wagon" className="block px-3 py-2 text-gray-300 hover:text-white transition" onClick={() => setMobileOpen(false)}>Formations</Link>
            <Link href="/comparateur" className="block px-3 py-2 text-gray-300 hover:text-white transition" onClick={() => setMobileOpen(false)}>Comparateur</Link>
            <Link href="/blog/devenir-developpeur-2026" className="block px-3 py-2 text-gray-300 hover:text-white transition" onClick={() => setMobileOpen(false)}>Blog</Link>
          </div>
        )}
      </div>
    </header>
  );
}
