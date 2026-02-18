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
      <div className="relative glass-strong rounded-3xl p-10 text-center overflow-hidden glow-purple">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 via-blue-600/10 to-violet-600/10" />
        <div className="relative z-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Intéressé par {formation.name} ?</h2>
          <p className="text-gray-400 mb-8 text-lg">Recevez la brochure gratuite ou visitez directement leur site.</p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button onClick={() => setShowForm(true)}
              className="btn-shine bg-gradient-to-r from-amber-500 to-orange-500 text-black px-10 py-4 rounded-2xl font-bold text-lg hover:shadow-xl hover:shadow-amber-500/30 transition-all duration-300 hover:scale-105">
              📩 Demander une brochure gratuite
            </button>
            <a href={formation.affiliateUrl} target="_blank" rel="noopener noreferrer"
              className="glass text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all duration-300">
              Visiter le site →
            </a>
            <Link href="/comparateur" className="glass text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all duration-300 border-violet-500/20">
              Comparer avec d&apos;autres
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
