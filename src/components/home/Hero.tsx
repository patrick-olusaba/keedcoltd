import React, { useState, useEffect, useCallback } from 'react';
import { STATS, TESTIMONIALS } from '../../data/home';
import { useRouter } from '../../hooks/useRouter';
import { useCountUp } from '../../hooks/useCountUp';

function parseTarget(val: string) { return parseInt(val.replace(/\D/g, ''), 10) || 0; }
function parseSuffix(val: string) { return val.replace(/[0-9]/g, ''); }

const STAT_ICONS = [
  <svg key="0" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  <svg key="1" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
  <svg key="2" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="7" width="20" height="14" rx="1"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>,
];

const TRUST_BADGES = [
  { label: 'Microsoft Partner', icon: '🪟' },
  { label: 'ISO 27001', icon: '🔒' },
  { label: '24/7 Support', icon: '⚡' },
  { label: 'Kenya-Based', icon: '📍' },
];

const StatItem: React.FC<{ value: string; label: string; icon: React.ReactNode }> = ({ value, label, icon }) => {
  const target = parseTarget(value);
  const suffix = parseSuffix(value);
  const { count, ref } = useCountUp(target);
  return (
    <div className="hero__stat" ref={ref as React.RefObject<HTMLDivElement>}>
      <div className="hero__stat-icon">{icon}</div>
      <strong>{count}{suffix}</strong>
      <span>{label}</span>
    </div>
  );
};

const Hero: React.FC = () => {
  const { navigate } = useRouter();
  const [active, setActive] = useState(0);
  const total = TESTIMONIALS.length;
  const next = useCallback(() => setActive(i => (i + 1) % total), [total]);
  const prev = () => setActive(i => (i - 1 + total) % total);
  useEffect(() => { const id = setInterval(next, 5000); return () => clearInterval(id); }, [next]);
  const t = TESTIMONIALS[active];

  return (
    <section className="hero">
      <div className="hero__overlay" />
      <div className="hero__body">

        <div className="hero__eyebrow">East Africa's #1 Managed IT Provider</div>

        <h1 className="hero__title">
          Total IT Support for <em>Hybrid</em> workspaces
        </h1>

        <p className="hero__subtitle">
          Stop firefighting IT problems. Get a dedicated team that keeps your business running
          smoothly — so you can focus on growth.
        </p>

        {/* Carousel */}
        <div className="hero__carousel">
          <button className="hero__carousel-btn" onClick={prev} aria-label="Previous">&#8249;</button>
          <div className="hero__quote">
            <p>"{t.quote}"</p>
            <cite><strong>{t.author}</strong><span>{t.role}</span></cite>
          </div>
          <button className="hero__carousel-btn" onClick={next} aria-label="Next">&#8250;</button>
        </div>
        <div className="hero__dots">
          {TESTIMONIALS.map((_, i) => (
            <button key={i} className={`hero__dot${i === active ? ' hero__dot--active' : ''}`} onClick={() => setActive(i)} aria-label={`Testimonial ${i + 1}`} />
          ))}
        </div>

        {/* CTAs */}
        <div className="hero__ctas">
          <a href="#" className="btn btn--hero" onClick={(e) => { e.preventDefault(); navigate('get-started'); }}>
            I Need IT Support Now
          </a>
          <a href="#" className="hero__link" onClick={(e) => { e.preventDefault(); navigate('managed-it'); }}>
            See our services
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
          </a>
        </div>

        {/* Trust badges */}
        <div className="hero__badges">
          {TRUST_BADGES.map(b => (
            <div key={b.label} className="hero__badge">
              <span>{b.icon}</span>
              <span>{b.label}</span>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="hero__stats">
          {STATS.map((s, i) => (
            <StatItem key={i} value={s.value} label={s.label} icon={STAT_ICONS[i]} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hero;
