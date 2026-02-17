'use client';

import { useState, useMemo } from 'react';
import { formations } from '@/data/formations';
import Link from 'next/link';
import StarRating from './StarRating';
import LeadForm from './LeadForm';

export default function ComparateurClient() {
  const [priceMax, setPriceMax] = useState(10000);
  const [durationMax, setDurationMax] = useState(200);
  const [formatFilter, setFormatFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [cpfOnly, setCpfOnly] = useState(false);
  const [sortBy, setSortBy] = useState<'rating' | 'price' | 'insertion'>('rating');
  const [leadFormSlug, setLeadFormSlug] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const result = formations.filter(f => {
      if (f.price > priceMax && f.price !== 0) return false;
      if (f.durationWeeks > durationMax) return false;
      if (formatFilter !== 'all' && !f.format.includes(formatFilter)) return false;
      if (categoryFilter !== 'all' && !f.categories.includes(categoryFilter)) return false;
      if (cpfOnly && !f.cpf) return false;
      return true;
    });
    result.sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'price') return a.price - b.price;
      if (sortBy === 'insertion') return (b.insertionRate || 0) - (a.insertionRate || 0);
      return 0;
    });
    return result;
  }, [priceMax, durationMax, formatFilter, categoryFilter, cpfOnly, sortBy]);

  const formats = ['all', 'Présentiel', 'Remote', 'Temps plein', 'Temps partiel', 'Alternance'];
  const categories = ['all', 'dev-web', 'data', 'cybersec', 'design'];
  const catLabels: Record<string, string> = { all: 'Toutes', 'dev-web': 'Dev Web', data: 'Data & IA', cybersec: 'Cyber', design: 'Design' };

  return (
    <div>
      {leadFormSlug && <LeadForm isModal onClose={() => setLeadFormSlug(null)} preselectedFormation={leadFormSlug} />}
      
      {/* Filters */}
      <div className="glass-strong rounded-2xl p-6 mb-8">
        <h2 className="font-bold text-lg text-white mb-5">🎛 Filtres</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Budget max : <span className="text-white">{priceMax === 10000 ? '10 000+ €' : `${priceMax.toLocaleString()} €`}</span>
            </label>
            <input type="range" min={0} max={10000} step={500} value={priceMax}
              onChange={e => setPriceMax(Number(e.target.value))}
              className="w-full" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Durée max : <span className="text-white">{durationMax >= 200 ? '200+ sem.' : `${durationMax} sem.`}</span>
            </label>
            <input type="range" min={4} max={200} step={4} value={durationMax}
              onChange={e => setDurationMax(Number(e.target.value))}
              className="w-full" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Format</label>
            <div className="flex flex-wrap gap-2">
              {formats.map(f => (
                <button key={f} onClick={() => setFormatFilter(f)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${formatFilter === f ? 'bg-violet-600 text-white' : 'glass text-gray-400 hover:text-white'}`}>
                  {f === 'all' ? 'Tous' : f}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Catégorie</label>
            <div className="flex flex-wrap gap-2">
              {categories.map(c => (
                <button key={c} onClick={() => setCategoryFilter(c)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${categoryFilter === c ? 'bg-blue-600 text-white' : 'glass text-gray-400 hover:text-white'}`}>
                  {catLabels[c] || c}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Trier par</label>
            <div className="flex gap-2">
              {([['rating', '⭐ Note'], ['price', '💰 Prix'], ['insertion', '📈 Insertion']] as const).map(([val, label]) => (
                <button key={val} onClick={() => setSortBy(val)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${sortBy === val ? 'bg-amber-500 text-black' : 'glass text-gray-400 hover:text-white'}`}>
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-end">
            <button onClick={() => setCpfOnly(!cpfOnly)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${cpfOnly ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'glass text-gray-400 hover:text-white'}`}>
              {cpfOnly ? '✅' : '☐'} CPF uniquement
            </button>
          </div>
        </div>
      </div>

      <p className="text-sm text-gray-500 mb-4">{filtered.length} formation{filtered.length > 1 ? 's' : ''} trouvée{filtered.length > 1 ? 's' : ''}</p>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full glass rounded-2xl overflow-hidden">
          <thead>
            <tr className="border-b border-white/10 text-left text-sm font-medium text-gray-400">
              <th className="px-6 py-4">Formation</th>
              <th className="px-6 py-4">Note</th>
              <th className="px-6 py-4">Prix</th>
              <th className="px-6 py-4">Durée</th>
              <th className="px-6 py-4 hidden md:table-cell">Format</th>
              <th className="px-6 py-4 hidden lg:table-cell">Insertion</th>
              <th className="px-6 py-4 hidden md:table-cell">CPF</th>
              <th className="px-6 py-4"></th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((f, i) => (
              <tr key={f.slug} className={`border-b border-white/5 hover:bg-white/5 transition ${i % 2 === 0 ? 'bg-white/[0.02]' : ''}`}>
                <td className="px-6 py-4">
                  <Link href={`/formations/${f.slug}`} className="font-semibold text-white hover:text-violet-400 transition">
                    {f.name}
                  </Link>
                </td>
                <td className="px-6 py-4"><StarRating rating={f.rating} /></td>
                <td className="px-6 py-4 text-sm font-medium text-gray-300">{f.price === 0 ? 'Gratuit*' : `${f.price.toLocaleString()} €`}</td>
                <td className="px-6 py-4 text-sm text-gray-400">{f.durationWeeks} sem.</td>
                <td className="px-6 py-4 text-sm text-gray-400 hidden md:table-cell">{f.format[0]}</td>
                <td className="px-6 py-4 text-sm hidden lg:table-cell">
                  {f.insertionRate ? <span className="text-emerald-400 font-semibold">{f.insertionRate}%</span> : <span className="text-gray-600">—</span>}
                </td>
                <td className="px-6 py-4 hidden md:table-cell">
                  {f.cpf ? <span className="text-emerald-400">✓</span> : <span className="text-gray-600">✗</span>}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <Link href={`/formations/${f.slug}`} className="text-violet-400 hover:text-violet-300 text-sm font-medium">
                      Voir →
                    </Link>
                    <button onClick={() => setLeadFormSlug(f.slug)}
                      className="text-xs bg-gradient-to-r from-violet-600 to-blue-500 text-white px-3 py-1 rounded-full hover:shadow-lg hover:shadow-violet-500/25 transition-all whitespace-nowrap">
                      En savoir +
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          <p className="text-lg">Aucune formation ne correspond à vos critères.</p>
          <p className="text-sm mt-2">Essayez d&apos;élargir vos filtres.</p>
        </div>
      )}
    </div>
  );
}
