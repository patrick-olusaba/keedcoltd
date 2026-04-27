import React from 'react';
import { Reveal } from '../shared';
import { useRouter } from '../../hooks/useRouter';

const PILLARS = [
  {
    icon: '⚡',
    title: 'Electrical Infrastructure',
    body: 'Professional installation, power distribution, modern lighting, UPS & generator integration.',
    benefit: 'Never lose power when it matters',
    href: 'electrical-cctv',
  },
  {
    icon: '🌐',
    title: 'ICT Network Infrastructure',
    body: 'Cat6/Fiber cabling, enterprise WiFi, server racks, switching, fiber splicing.',
    benefit: 'Connect like a Fortune 500 company',
    href: 'managed-it',
  },
  {
    icon: '🛡️',
    title: 'Security Systems',
    body: 'CCTV (analogue & IP), biometric/card access control, remote monitoring.',
    benefit: 'See and control everything, anywhere',
    href: 'electrical-cctv',
  },
  {
    icon: '📋',
    title: 'Consultancy Services',
    body: 'Technology audits, network design, risk assessments, BOQ, project planning.',
    benefit: 'Spend smart — no over-spec, no blind spots',
    href: 'it-consultancy',
  },
];

const ServicesSection: React.FC = () => {
  const { navigate } = useRouter();
  return (
    <section className="services-section">
      <div className="container">
        <Reveal>
          <h2 className="services-section__title">What We Deliver</h2>
          <p className="services-section__sub">Four pillars. One trusted partner.</p>
        </Reveal>
        <div className="svc-pillars">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="svc-pillar" onClick={() => navigate(p.href)}>
                <div className="svc-pillar__icon">{p.icon}</div>
                <h3 className="svc-pillar__title">{p.title}</h3>
                <p className="svc-pillar__body">{p.body}</p>
                <div className="svc-pillar__benefit">✅ {p.benefit}</div>
                <span className="svc-pillar__link">Learn more →</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
