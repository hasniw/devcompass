'use client';

import LeadForm from './LeadForm';
import ScrollReveal from './ScrollReveal';

export default function HomeLeadSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a2e]/30 to-[#0a0a0a]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">🤔 Besoin d&apos;aide pour choisir ?</h2>
              <p className="text-gray-400 text-lg mb-6">
                Recevez gratuitement un guide comparatif personnalisé avec les formations qui correspondent à votre profil et vos objectifs.
              </p>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-2"><span className="text-emerald-400">✅</span> Comparatif détaillé envoyé par email</li>
                <li className="flex items-center gap-2"><span className="text-emerald-400">✅</span> Conseils personnalisés selon votre profil</li>
                <li className="flex items-center gap-2"><span className="text-emerald-400">✅</span> 100% gratuit, sans engagement</li>
              </ul>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="glass-strong rounded-2xl p-8 glow-purple">
              <h3 className="text-xl font-bold text-white mb-4">📩 Recevoir mon guide gratuit</h3>
              <LeadForm />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
