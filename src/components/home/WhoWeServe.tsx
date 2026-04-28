import React from 'react';
import { Reveal } from '../shared';
import { useRouter } from '../../hooks/useRouter';

const SEGMENTS = [
  {
    icon: '🏢',
    title: 'Offices & Businesses',
    body: 'Network setup, IT support, structured cabling, CCTV, and access control — keeping your team connected and your premises secure.',
    tags: ['Network setup', 'IT support', 'Structured cabling'],
  },
  {
    icon: '🏠',
    title: 'Apartments & Real Estate',
    body: 'CCTV, intercom systems, access control, electrical works, and WiFi distribution for residential developments of any size.',
    tags: ['CCTV', 'Intercom', 'Access control', 'Electrical'],
  },
  {
    icon: '🌾',
    title: 'Farms & Large Compounds',
    body: 'Solar-powered CCTV, perimeter security, long-range wireless links, and electrical infrastructure for rural and large-area properties.',
    tags: ['Solar CCTV', 'Perimeter security', 'Wireless links'],
  },
];

const WhoWeServe: React.FC = () => {
  const { navigate } = useRouter();
  return (
    <section className="who-we-serve">
      <div className="container">
        <Reveal><p className="who-we-serve__eyebrow">Who We Serve</p></Reveal>
        <Reveal delay={60}><h2 className="who-we-serve__heading">Built for every property type across Kenya</h2></Reveal>
        <div className="who-we-serve__grid">
          {SEGMENTS.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <div className="wws-card">
                <div className="wws-card__icon">{s.icon}</div>
                <h3 className="wws-card__title">{s.title}</h3>
                <p className="wws-card__body">{s.body}</p>
                <div className="wws-card__tags">
                  {s.tags.map(t => <span key={t} className="wws-card__tag">{t}</span>)}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <a href="#" className="btn btn--primary btn--lg" onClick={(e) => { e.preventDefault(); navigate('get-started'); }}>
              Get a Free Consultation
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default WhoWeServe;
