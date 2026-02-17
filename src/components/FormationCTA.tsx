'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { Formation } from '@/data/formations';
import LeadForm from './LeadForm';

export default function FormationCTA({ formation }: { formation: Formation }) {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      {showForm && <LeadForm isModal onClose={() => setShowForm(false)} preselectedFormation={formation.slug} />}
      <div className="relative glass-strong rounded-2xl p-8 text-center overflow-hidden glow-purple">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 via-blue-600/10 to-violet-600/10" />
        <div className="relative z-10">
          <h2 className="text-2xl font-bold text-white mb-3">Intéressé par {formation.name} ?</h2>
          <p className="text-gray-400 mb-6">Recevez la brochure gratuite ou visitez directement leur site.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => setShowForm(true)}
              className="bg-gradient-to-r from-amber-500 to-orange-500 text-black px-8 py-3 rounded-xl font-bold hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300 hover:scale-105">
              📩 Demander une brochure gratuite
            </button>
            <a href={formation.affiliateUrl} target="_blank" rel="noopener noreferrer"
              className="glass text-white px-8 py-3 rounded-xl font-bold hover:bg-white/10 transition">
              Visiter le site →
            </a>
            <Link href="/comparateur" className="glass text-white px-8 py-3 rounded-xl font-bold hover:bg-white/10 transition border-violet-500/20">
              Comparer avec d&apos;autres
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
