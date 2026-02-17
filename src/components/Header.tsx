'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🧭</span>
            <span className="font-bold text-xl text-gray-900">DevCompass</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/formations/le-wagon" className="text-gray-600 hover:text-indigo-600 transition text-sm font-medium">Formations</Link>
            <Link href="/comparateur" className="text-gray-600 hover:text-indigo-600 transition text-sm font-medium">Comparateur</Link>
            <Link href="/blog/devenir-developpeur-2026" className="text-gray-600 hover:text-indigo-600 transition text-sm font-medium">Blog</Link>
            <Link href="/comparateur" className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition">
              Comparer →
            </Link>
          </nav>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2">
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
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/formations/le-wagon" className="block px-3 py-2 text-gray-600 hover:text-indigo-600" onClick={() => setMobileOpen(false)}>Formations</Link>
            <Link href="/comparateur" className="block px-3 py-2 text-gray-600 hover:text-indigo-600" onClick={() => setMobileOpen(false)}>Comparateur</Link>
            <Link href="/blog/devenir-developpeur-2026" className="block px-3 py-2 text-gray-600 hover:text-indigo-600" onClick={() => setMobileOpen(false)}>Blog</Link>
          </div>
        )}
      </div>
    </header>
  );
}
