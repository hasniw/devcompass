import { ReactNode } from 'react';

export default function ScrollReveal({ children, className = '' }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
