'use client';

import LeadForm from './LeadForm';
import ScrollReveal from './ScrollReveal';

export default function HomeLeadSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#12122a]/30 to-[#0a0a0a]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <div>
              <p className="text-emerald-400 font-semibold text-sm uppercase tracking-widest mb-3">Guide gratuit</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">🤔 Besoin d&apos;aide pour choisir ?</h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Recevez gratuitement un guide comparatif personnalisé avec les formations qui correspondent à votre profil et vos objectifs.
              </p>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-center gap-3"><span className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-sm">✓</span> Comparatif détaillé envoyé par email</li>
                <li className="flex items-center gap-3"><span className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-sm">✓</span> Conseils personnalisés selon votre profil</li>
                <li className="flex items-center gap-3"><span className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-sm">✓</span> 100% gratuit, sans engagement</li>
              </ul>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="glass-strong rounded-3xl p-10 glow-purple">
              <h3 className="text-xl font-bold text-white mb-6">📩 Recevoir mon guide gratuit</h3>
              <LeadForm />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
