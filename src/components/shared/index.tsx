import React, { useEffect, useRef, useState } from 'react';

/* ─── Reveal on scroll ─── */
interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const Reveal: React.FC<RevealProps> = ({ children, delay = 0, className = '' }) => {
  const ref  = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal${visible ? ' reveal--visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

/* ─── Section badge ─── */
export const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="badge">{children}</span>
);

/* ─── Check icon ─── */
export const CheckIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

/* ─── Chevron icon ─── */
export const ChevronIcon: React.FC<{ open: boolean }> = ({ open }) => (
  <svg
    width="18" height="18" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5"
    style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: '0.25s ease' }}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);
