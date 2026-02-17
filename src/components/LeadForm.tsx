'use client';

import { useState } from 'react';
import { formations } from '@/data/formations';

interface LeadFormProps {
  isModal?: boolean;
  onClose?: () => void;
  preselectedFormation?: string;
}

export default function LeadForm({ isModal = false, onClose, preselectedFormation }: LeadFormProps) {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [formation, setFormation] = useState(preselectedFormation || '');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, email, phone, formation }),
      });
      if (res.ok) {
        setStatus('success');
        setFirstName(''); setEmail(''); setPhone(''); setFormation('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputClass = "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:ring-2 focus:ring-violet-500 focus:border-violet-500 outline-none transition";

  const formContent = (
    <form onSubmit={handleSubmit} className="space-y-4">
      {status === 'success' ? (
        <div className="text-center py-8">
          <div className="text-5xl mb-4">🎉</div>
          <h3 className="text-xl font-bold text-white mb-2">Merci !</h3>
          <p className="text-gray-400">Nous vous enverrons les informations très bientôt.</p>
          {onClose && (
            <button onClick={onClose} className="mt-4 text-violet-400 font-medium hover:text-violet-300">Fermer</button>
          )}
        </div>
      ) : (
        <>
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-400 mb-1">Prénom *</label>
            <input id="firstName" type="text" required value={firstName} onChange={e => setFirstName(e.target.value)}
              className={inputClass} placeholder="Votre prénom" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email *</label>
            <input id="email" type="email" required value={email} onChange={e => setEmail(e.target.value)}
              className={inputClass} placeholder="votre@email.com" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-1">Téléphone <span className="text-gray-600">(optionnel)</span></label>
            <input id="phone" type="tel" value={phone} onChange={e => setPhone(e.target.value)}
              className={inputClass} placeholder="06 12 34 56 78" />
          </div>
          <div>
            <label htmlFor="formation" className="block text-sm font-medium text-gray-400 mb-1">Formation *</label>
            <select id="formation" required value={formation} onChange={e => setFormation(e.target.value)}
              className={inputClass}>
              <option value="">Choisir une formation</option>
              {formations.map(f => <option key={f.slug} value={f.slug}>{f.name}</option>)}
            </select>
          </div>
          <button type="submit" disabled={status === 'loading'}
            className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-black py-3 rounded-lg font-bold text-sm hover:shadow-lg hover:shadow-amber-500/25 transition-all disabled:opacity-50">
            {status === 'loading' ? 'Envoi...' : '📩 Recevoir la brochure gratuite'}
          </button>
          {status === 'error' && <p className="text-red-400 text-sm text-center">Une erreur est survenue. Réessayez.</p>}
          <p className="text-xs text-gray-600 text-center">Vos données restent confidentielles. Pas de spam.</p>
        </>
      )}
    </form>
  );

  if (isModal) {
    return (
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
        <div className="glass-strong rounded-2xl p-8 max-w-md w-full relative glow-purple" onClick={e => e.stopPropagation()}>
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-white text-xl transition">✕</button>
          <h2 className="text-2xl font-bold text-white mb-1">📚 Demander une brochure</h2>
          <p className="text-gray-500 text-sm mb-6">Recevez gratuitement toutes les infos sur la formation.</p>
          {formContent}
        </div>
      </div>
    );
  }

  return formContent;
}
