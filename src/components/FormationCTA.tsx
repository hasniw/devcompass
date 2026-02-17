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
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-white mb-3">Intéressé par {formation.name} ?</h2>
        <p className="text-indigo-100 mb-6">Recevez la brochure gratuite ou visitez directement leur site.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={() => setShowForm(true)}
            className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-xl font-bold hover:bg-yellow-300 transition shadow-lg">
            📩 Demander une brochure gratuite
          </button>
          <a href={formation.affiliateUrl} target="_blank" rel="noopener noreferrer"
            className="bg-white text-indigo-600 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition">
            Visiter le site →
          </a>
          <Link href="/comparateur" className="bg-indigo-500/30 text-white px-8 py-3 rounded-xl font-bold hover:bg-indigo-500/50 transition border border-white/20">
            Comparer avec d&apos;autres
          </Link>
        </div>
      </div>
    </>
  );
}
