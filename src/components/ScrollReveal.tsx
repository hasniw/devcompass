'use client';

import { ReactNode } from 'react';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function ScrollReveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return <div className={className}>{children}</div>;
}
