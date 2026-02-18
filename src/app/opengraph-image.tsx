import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'DevCompass - Comparateur de formations tech en France';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)', fontFamily: 'sans-serif' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
          <div style={{ fontSize: '72px', fontWeight: 800, background: 'linear-gradient(90deg, #8b5cf6, #3b82f6)', backgroundClip: 'text', color: 'transparent' }}>DevCompass</div>
        </div>
        <div style={{ fontSize: '32px', color: '#9ca3af', textAlign: 'center', maxWidth: '800px', lineHeight: 1.4 }}>
          Comparateur de formations tech & bootcamps en France
        </div>
        <div style={{ display: 'flex', gap: '24px', marginTop: '40px', fontSize: '20px', color: '#6b7280' }}>
          <span>✅ 8+ formations</span>
          <span>✅ Avis vérifiés</span>
          <span>✅ 100% indépendant</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
