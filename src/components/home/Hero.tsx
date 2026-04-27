import React from 'react';
import { useRouter } from '../../hooks/useRouter';
import NetworkCanvas from '../shared/NetworkCanvas';

const Hero: React.FC = () => {
  const { navigate } = useRouter();
  return (
    <section className="hero hero--getronics">
      <div className="hero__overlay" />
      <NetworkCanvas className="hero__network-canvas" />
      <div className="container hero__getronics-body">
        <p className="hero__getronics-eyebrow">Power. Connect. Secure. Consult.</p>
        <h1 className="hero__getronics-title">
          Building Your Solutions.<br /><em>Powering Progress.</em>
        </h1>
        <p>
          Reliable electrical, ICT, security, and consultancy infrastructure —
          for businesses, homes, warehouses, and institutions across Kenya.
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
    </section>
  );
};

export default Hero;
