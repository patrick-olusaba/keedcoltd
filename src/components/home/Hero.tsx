import React from 'react';
import { useRouter } from '../../hooks/useRouter';
import NetworkCanvas from '../shared/NetworkCanvas';

const Hero: React.FC = () => {
  const { navigate } = useRouter();
  return (
    <section className="hero hero--getronics">
      <div className="hero__overlay" />
      <NetworkCanvas className="hero__network-canvas" />

      <div className="hero__bands">
        {/* Band 1 — eyebrow */}
        <div className="hero__band hero__band--1">
          <div className="container">
            <p className="hero__band-eyebrow">Power. Connect. Secure. Consult.</p>
          </div>
        </div>

        {/* Band 2 — headline */}
        <div className="hero__band hero__band--2">
          <div className="container">
            <h1 className="hero__getronics-title">
              Building Your Solutions.<br /><em>Powering Progress.</em>
            </h1>
          </div>
        </div>

        {/* Band 3 — body + CTAs */}
        <div className="hero__band hero__band--3">
          <div className="container">
            <p className="hero__band-body">
              Reliable electrical, ICT, security, and consultancy infrastructure —
              for businesses, homes, warehouses, and institutions across Kenya.{' '}
              <strong>Built to scale with you and work seamlessly across sites, buildings, and teams.</strong>
            </p>
            <div className="hero__dual-ctas">
              <a href="#" className="btn--getronics-cta" onClick={(e) => { e.preventDefault(); navigate('managed-it'); }}>
                Explore Services
              </a>
              <a href="#" className="btn--getronics-cta btn--getronics-cta--outline" onClick={(e) => { e.preventDefault(); navigate('get-started'); }}>
                Book Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
