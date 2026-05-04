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
        <p className="hero__band-eyebrow">Power. Connect. Secure.</p>
        <h1 className="hero__getronics-title">
          Reliable ICT, Electrical &<br /><em>Security Systems Solutions in Kenya</em>
        </h1>
        <p className="hero__band-body">
          We install and maintain systems for offices, apartments and farms — with fast response and dependable support.
        </p>
        <p className="hero__trust-line">✔ Trusted by businesses and property developers across Kenya</p>
        <div className="hero__dual-ctas">
          <a href="tel:+254720119984" className="btn--getronics-cta">
            📞 Call Now
          </a>
          <a href="https://wa.me/254715119984" target="_blank" rel="noopener noreferrer" className="btn--getronics-cta btn--getronics-cta--whatsapp">
            💬 WhatsApp Us
          </a>
          <a href="#" className="btn--getronics-cta btn--getronics-cta--outline" onClick={(e) => { e.preventDefault(); navigate('get-started'); }}>
            📩 Get a Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
