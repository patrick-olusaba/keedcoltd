import React from 'react';
import { Reveal } from '../shared';
import { useRouter } from '../../hooks/useRouter';

const STATS = [
  { num: '50+',       label: 'CCTV installations completed' },
  { num: 'KSh 2M+',  label: 'saved for clients in downtime costs' },
  { num: '10+',       label: 'years serving Kenya businesses' },
  { num: '100%',      label: 'NCA, EPRA & CA certified work' },
];

const WhyKeedCo: React.FC = () => {
  const { navigate } = useRouter();
  return (
    <section className="why-keedco">
      <div className="container">
        <Reveal><p className="why-keedco__eyebrow">Why businesses choose us</p></Reveal>
        <Reveal delay={60}><h2 className="why-keedco__heading">Numbers that speak for themselves</h2></Reveal>
        <div className="why-keedco__stats">
          {STATS.map((s, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="why-stat">
                <strong className="why-stat__num">{s.num}</strong>
                <span className="why-stat__label">{s.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <div className="why-keedco__cta">
            <a href="#" className="btn btn--primary btn--lg" onClick={(e) => { e.preventDefault(); navigate('get-started'); }}>
              Get a Free Consultation
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default WhyKeedCo;

