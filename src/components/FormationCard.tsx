import Link from 'next/link';
import { Formation } from '@/data/formations';
import StarRating from './StarRating';

export default function FormationCard({ formation }: { formation: Formation }) {
  return (
    <Link href={`/formations/${formation.slug}`} className="group block">
      <div className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl hover:border-indigo-200 transition-all duration-300 h-full flex flex-col">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="font-bold text-lg text-gray-900 group-hover:text-indigo-600 transition">{formation.name}</h3>
            <div className="flex items-center gap-2 mt-1">
              <StarRating rating={formation.rating} />
              <span className="text-sm text-gray-500">({formation.reviewCount} avis)</span>
            </div>
          </div>
          {formation.cpf && (
            <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded-full">CPF</span>
          )}
        </div>

        <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-2">{formation.shortDescription}</p>

        <div className="space-y-2 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-gray-500">💰 Prix</span>
            <span className="font-semibold text-gray-900">{formation.priceLabel}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-500">⏱ Durée</span>
            <span className="font-medium text-gray-700">{formation.duration.split('(')[0].trim()}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-500">📍 Format</span>
            <span className="font-medium text-gray-700">{formation.format.slice(0, 2).join(', ')}</span>
          </div>
          {formation.insertionRate && (
            <div className="flex items-center justify-between">
              <span className="text-gray-500">📈 Insertion</span>
              <span className="font-semibold text-green-600">{formation.insertionRate}%</span>
            </div>
          )}
        </div>

        <div className="mt-4 pt-4 border-t border-gray-100 flex flex-wrap gap-1">
          {formation.features.slice(0, 4).map(f => (
            <span key={f} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">{f}</span>
          ))}
          {formation.features.length > 4 && (
            <span className="text-xs text-gray-400 px-2 py-1">+{formation.features.length - 4}</span>
          )}
        </div>
      </div>
    </Link>
  );
}
