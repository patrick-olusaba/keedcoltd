import React from 'react';
import { Reveal } from '../shared';
import { useRouter } from '../../hooks/useRouter';

const POINTS = [
  { title: 'One stop. Zero finger-pointing.', body: 'We handle electrical, data, security, and advice end-to-end.' },
  { title: 'Built for Kenya.',                body: 'Designed for local power fluctuations, tropical climate, and security needs.' },
  { title: 'Future-proof by design.',         body: 'Systems that grow with you, not obsolete in two years.' },
  { title: 'Consult before you commit.',      body: 'We audit first, so you never over-pay or under-spec.' },
  { title: 'Fast response guaranteed.',       body: 'Based in Kenya, on-site fast when you need us.' },
  { title: 'Professional installation with ongoing support.', body: 'We show up, we deliver, we support.' },
];

const WhyKeedCo: React.FC = () => {
  const { navigate } = useRouter();
  return (
    <section className="why-keedco">
      <div className="container">
        <Reveal><p className="why-keedco__eyebrow">Why choose us</p></Reveal>
        <Reveal delay={60}><h2 className="why-keedco__heading">Why businesses and homeowners trust us</h2></Reveal>
        <div className="why-keedco__points">
          {POINTS.map((p, i) => (
            <Reveal key={i} delay={i * 70}>
              <div className="why-point">
                <span className="why-point__check">✅</span>
                <div>
                  <strong>{p.title}</strong>
                  <p>{p.body}</p>
                </div>
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
