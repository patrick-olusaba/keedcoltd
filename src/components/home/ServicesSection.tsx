import React from 'react';
import { SERVICES } from '../../data/home';
import { Reveal } from '../shared';
import { useRouter } from '../../hooks/useRouter';

const CARD_COLORS = ['#e8622a', '#1a2744', '#1a6b3c', '#0e9e8e', '#7a1c2e', '#7a7a1c'];

const CARD_ICONS: React.ReactNode[] = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3z"/><path d="M3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="22" x2="14" y2="22"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0018 8 6 6 0 006 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 018.91 14"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
];

const ServicesSection: React.FC = () => {
  const { navigate } = useRouter();
  return (
    <section className="services-section">
      <div className="container services-section__layout">
        <div className="services-section__left">
          <Reveal>
            <img src="https://keedcoltd.com/wp-content/uploads/2023/05/undraw_uploading_re_okvh.svg" alt="IT illustration" className="services-section__img" />
          </Reveal>
          <Reveal delay={80}>
            <h3 className="services-section__heading">
              <em>24/7 on-site team</em> to fix what's critical.
            </h3>
          </Reveal>
          <Reveal delay={160}>
            <p className="services-section__lead">
              Our team of dedicated technicians will visit you on-site to address and fix issues
              that can't be resolved with our remote platform.
            </p>
          </Reveal>
        </div>
        <div className="services-section__cards">
          {SERVICES.map((svc, i) => (
            <Reveal key={svc.name} delay={i * 80}>
              <a
                href="#"
                className="svc-card"
                style={{ background: CARD_COLORS[i] }}
                onClick={(e) => { e.preventDefault(); navigate(svc.href); }}
              >
                <span className="svc-card__icon">{CARD_ICONS[i]}</span>
                <h5>{svc.name}</h5>
                <p>{svc.description}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
