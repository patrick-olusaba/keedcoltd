import React from 'react';
import { Reveal } from '../shared';
import { useRouter } from '../../hooks/useRouter';

const ITEMS = [
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
    title: 'Fast Response',
    body: 'We respond to critical issues within minutes, not hours — 24/7, including weekends and public holidays.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
    title: 'Kenya-Based Team',
    body: 'Our engineers are local, on-the-ground, and understand the unique IT challenges businesses face in East Africa.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>,
    title: 'Fixed Monthly Cost',
    body: 'No surprise bills. One predictable monthly fee covers everything — support, monitoring, security, and more.',
  },
];

const WhyKeedCo: React.FC = () => {
  const { navigate } = useRouter();
  return (
    <section className="why-keedco">
      <div className="container">
        <Reveal><p className="why-keedco__eyebrow">Why businesses choose us</p></Reveal>
        <Reveal delay={60}><h2 className="why-keedco__heading">IT support that actually works</h2></Reveal>
        <div className="why-keedco__steps">
          {ITEMS.map((item, i) => (
            <Reveal key={i} delay={i * 120}>
              <div className="why-step">
                <div className="why-step__num">{String(i + 1).padStart(2, '0')}</div>
                <div className="why-step__icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <div className="why-keedco__cta">
            <a href="#" className="btn btn--primary btn--lg" onClick={(e) => { e.preventDefault(); navigate('get-started'); }}>
              Get a Free Consultation
            </a>
            <span className="why-keedco__cta-note">No commitment. Response within 1 business day.</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default WhyKeedCo;
