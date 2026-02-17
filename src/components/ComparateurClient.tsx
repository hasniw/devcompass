'use client';

import { useState, useMemo } from 'react';
import { formations } from '@/data/formations';
import Link from 'next/link';
import StarRating from './StarRating';

export default function ComparateurClient() {
  const [priceMax, setPriceMax] = useState(10000);
  const [durationMax, setDurationMax] = useState(200);
  const [formatFilter, setFormatFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [cpfOnly, setCpfOnly] = useState(false);
  const [sortBy, setSortBy] = useState<'rating' | 'price' | 'insertion'>('rating');

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

  return (
    <div>
      {/* Filters */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8">
        <h2 className="font-bold text-lg mb-4">🔍 Filtres</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Budget max : {priceMax === 10000 ? '10 000+ €' : `${priceMax.toLocaleString()} €`}
            </label>
            <input type="range" min={0} max={10000} step={500} value={priceMax}
              onChange={e => setPriceMax(Number(e.target.value))}
              className="w-full accent-indigo-600" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Durée max : {durationMax >= 200 ? '200+ semaines' : `${durationMax} semaines`}
            </label>
            <input type="range" min={4} max={200} step={4} value={durationMax}
              onChange={e => setDurationMax(Number(e.target.value))}
              className="w-full accent-indigo-600" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Format</label>
            <select value={formatFilter} onChange={e => setFormatFilter(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm">
              <option value="all">Tous les formats</option>
              <option value="Présentiel">Présentiel</option>
              <option value="Remote">Remote</option>
              <option value="Temps plein">Temps plein</option>
              <option value="Temps partiel">Temps partiel</option>
              <option value="Alternance">Alternance</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Catégorie</label>
            <select value={categoryFilter} onChange={e => setCategoryFilter(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm">
              <option value="all">Toutes les catégories</option>
              <option value="dev-web">Développement Web</option>
              <option value="data">Data Science & IA</option>
              <option value="cybersec">Cybersécurité</option>
              <option value="design">UX/UI Design</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Trier par</label>
            <select value={sortBy} onChange={e => setSortBy(e.target.value as typeof sortBy)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm">
              <option value="rating">Note</option>
              <option value="price">Prix (croissant)</option>
              <option value="insertion">Taux d&apos;insertion</option>
            </select>
          </div>

          <div className="flex items-end">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={cpfOnly} onChange={e => setCpfOnly(e.target.checked)}
                className="w-4 h-4 accent-indigo-600" />
              <span className="text-sm font-medium text-gray-700">Éligible CPF uniquement</span>
            </label>
          </div>
        </div>
      </div>

      {/* Results count */}
      <p className="text-sm text-gray-500 mb-4">{filtered.length} formation{filtered.length > 1 ? 's' : ''} trouvée{filtered.length > 1 ? 's' : ''}</p>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <thead>
            <tr className="bg-gray-50 text-left text-sm font-medium text-gray-500">
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
          <tbody className="divide-y divide-gray-100">
            {filtered.map((f) => (
              <tr key={f.slug} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4">
                  <Link href={`/formations/${f.slug}`} className="font-semibold text-gray-900 hover:text-indigo-600 transition">
                    {f.name}
                  </Link>
                </td>
                <td className="px-6 py-4"><StarRating rating={f.rating} /></td>
                <td className="px-6 py-4 text-sm font-medium">{f.price === 0 ? 'Gratuit*' : `${f.price.toLocaleString()} €`}</td>
                <td className="px-6 py-4 text-sm">{f.durationWeeks} sem.</td>
                <td className="px-6 py-4 text-sm hidden md:table-cell">{f.format[0]}</td>
                <td className="px-6 py-4 text-sm hidden lg:table-cell">
                  {f.insertionRate ? <span className="text-green-600 font-semibold">{f.insertionRate}%</span> : '—'}
                </td>
                <td className="px-6 py-4 hidden md:table-cell">
                  {f.cpf ? <span className="text-green-500">✓</span> : <span className="text-gray-300">✗</span>}
                </td>
                <td className="px-6 py-4">
                  <Link href={`/formations/${f.slug}`} className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                    Voir →
                  </Link>
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
