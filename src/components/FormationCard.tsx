'use client';

import Link from 'next/link';
import { Formation } from '@/data/formations';
import StarRating from './StarRating';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function FormationCard({ formation, index = 0 }: { formation: Formation; index?: number }) {
  return (
    <div>
      <Link href={`/formations/${formation.slug}`} className="group block h-full">
        <div className="card-premium glass rounded-2xl p-6 h-full flex flex-col hover:bg-white/[0.07] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(124,58,237,0.12)]">
          <div className="flex items-start justify-between mb-5">
            <div>
              <h3 className="font-bold text-lg text-white group-hover:text-violet-300 transition">{formation.name}</h3>
              <div className="flex items-center gap-2 mt-1.5">
                <StarRating rating={formation.rating} />
                <span className="text-sm text-gray-600">({formation.reviewCount})</span>
              </div>
            </div>
            {formation.cpf && (
              <span className="bg-emerald-500/15 text-emerald-400 text-xs font-semibold px-2.5 py-1 rounded-lg border border-emerald-500/20">CPF</span>
            )}
          </div>

          <p className="text-gray-400 text-sm mb-5 flex-grow line-clamp-2 leading-relaxed">{formation.shortDescription}</p>

          <div className="space-y-2.5 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-gray-500">Prix</span>
              <span className="font-semibold text-white">{formation.priceLabel}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-500">Durée</span>
              <span className="font-medium text-gray-300">{formation.duration.split('(')[0].trim()}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-500">Format</span>
              <span className="font-medium text-gray-300">{formation.format.slice(0, 2).join(', ')}</span>
            </div>
            {formation.insertionRate && (
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Insertion</span>
                <span className="font-semibold text-emerald-400">{formation.insertionRate}%</span>
              </div>
            )}
          </div>

          <div className="mt-5 pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
            {formation.features.slice(0, 3).map(f => (
              <span key={f} className="bg-white/5 text-gray-400 text-xs px-2.5 py-1 rounded-lg">{f}</span>
            ))}
            {formation.features.length > 3 && (
              <span className="text-xs text-gray-600 px-2 py-1">+{formation.features.length - 3}</span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}
