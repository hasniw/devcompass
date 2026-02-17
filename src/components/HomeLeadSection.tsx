'use client';

import LeadForm from './LeadForm';

export default function HomeLeadSection() {
  return (
    <section className="bg-gradient-to-br from-purple-50 to-indigo-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">🤔 Besoin d&apos;aide pour choisir ?</h2>
            <p className="text-gray-600 text-lg mb-6">
              Recevez gratuitement un guide comparatif personnalisé avec les formations qui correspondent à votre profil et vos objectifs.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-2"><span className="text-green-500">✅</span> Comparatif détaillé envoyé par email</li>
              <li className="flex items-center gap-2"><span className="text-green-500">✅</span> Conseils personnalisés selon votre profil</li>
              <li className="flex items-center gap-2"><span className="text-green-500">✅</span> 100% gratuit, sans engagement</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4">📩 Recevoir mon guide gratuit</h3>
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}
