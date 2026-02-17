'use client';

import Link from 'next/link';
import { Formation } from '@/data/formations';
import StarRating from './StarRating';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function FormationCard({ formation, index = 0 }: { formation: Formation; index?: number }) {
  return (
    <div>
      <Link href={`/formations/${formation.slug}`} className="group block h-full">
        <div className="glass rounded-2xl p-6 h-full flex flex-col hover:bg-white/10 hover:border-violet-500/30 hover:scale-[1.02] hover:glow-purple transition-all duration-500">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="font-bold text-lg text-white group-hover:text-violet-300 transition">{formation.name}</h3>
              <div className="flex items-center gap-2 mt-1">
                <StarRating rating={formation.rating} />
                <span className="text-sm text-gray-500">({formation.reviewCount} avis)</span>
              </div>
            </div>
            {formation.cpf && (
              <span className="bg-emerald-500/20 text-emerald-400 text-xs font-medium px-2.5 py-1 rounded-full border border-emerald-500/20">CPF</span>
            )}
          </div>

          <p className="text-gray-400 text-sm mb-4 flex-grow line-clamp-2">{formation.shortDescription}</p>

          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-gray-500">💰 Prix</span>
              <span className="font-semibold text-white">{formation.priceLabel}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-500">⏱ Durée</span>
              <span className="font-medium text-gray-300">{formation.duration.split('(')[0].trim()}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-500">📍 Format</span>
              <span className="font-medium text-gray-300">{formation.format.slice(0, 2).join(', ')}</span>
            </div>
            {formation.insertionRate && (
              <div className="flex items-center justify-between">
                <span className="text-gray-500">📈 Insertion</span>
                <span className="font-semibold text-emerald-400">{formation.insertionRate}%</span>
              </div>
            )}
          </div>

          <div className="mt-4 pt-4 border-t border-white/5 flex flex-wrap gap-1">
            {formation.features.slice(0, 4).map(f => (
              <span key={f} className="bg-white/5 text-gray-400 text-xs px-2 py-1 rounded">{f}</span>
            ))}
            {formation.features.length > 4 && (
              <span className="text-xs text-gray-600 px-2 py-1">+{formation.features.length - 4}</span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}
