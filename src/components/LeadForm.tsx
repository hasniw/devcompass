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

  const formContent = (
    <form onSubmit={handleSubmit} className="space-y-4">
      {status === 'success' ? (
        <div className="text-center py-8">
          <div className="text-5xl mb-4">🎉</div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Merci !</h3>
          <p className="text-gray-600">Nous vous enverrons les informations très bientôt.</p>
          {onClose && (
            <button onClick={onClose} className="mt-4 text-indigo-600 font-medium hover:text-indigo-800">
              Fermer
            </button>
          )}
        </div>
      ) : (
        <>
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">Prénom *</label>
            <input id="firstName" type="text" required value={firstName} onChange={e => setFirstName(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none" placeholder="Votre prénom" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
            <input id="email" type="email" required value={email} onChange={e => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none" placeholder="votre@email.com" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Téléphone <span className="text-gray-400">(optionnel)</span></label>
            <input id="phone" type="tel" value={phone} onChange={e => setPhone(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none" placeholder="06 12 34 56 78" />
          </div>
          <div>
            <label htmlFor="formation" className="block text-sm font-medium text-gray-700 mb-1">Formation qui vous intéresse *</label>
            <select id="formation" required value={formation} onChange={e => setFormation(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none">
              <option value="">Choisir une formation</option>
              {formations.map(f => <option key={f.slug} value={f.slug}>{f.name}</option>)}
            </select>
          </div>
          <button type="submit" disabled={status === 'loading'}
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg font-bold text-sm hover:from-indigo-700 hover:to-purple-700 transition disabled:opacity-50">
            {status === 'loading' ? 'Envoi...' : '📩 Recevoir la brochure gratuite'}
          </button>
          {status === 'error' && <p className="text-red-500 text-sm text-center">Une erreur est survenue. Réessayez.</p>}
          <p className="text-xs text-gray-400 text-center">Vos données restent confidentielles. Pas de spam.</p>
        </>
      )}
    </form>
  );

  if (isModal) {
    return (
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={onClose}>
        <div className="bg-white rounded-2xl p-8 max-w-md w-full relative" onClick={e => e.stopPropagation()}>
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl">✕</button>
          <h2 className="text-2xl font-bold text-gray-900 mb-1">📚 Demander une brochure</h2>
          <p className="text-gray-500 text-sm mb-6">Recevez gratuitement toutes les infos sur la formation.</p>
          {formContent}
        </div>
      </div>
    );
  }

  return formContent;
}
