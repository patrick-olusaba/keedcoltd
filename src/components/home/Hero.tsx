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
          Building Your Solutions,<br /><em>Powering Progress</em>
        </h1>
        <p className="hero__band-body">
          We provide end‑to‑end infrastructure solutions that keep your business connected,
          secure, and productive — no matter where you operate across Kenya. From electrical
          systems and structured cabling to enterprise WiFi, CCTV, and security, our solutions
          are <strong>built to scale with you and work seamlessly across sites, buildings, and teams.</strong>
        </p>
        <p className="hero__why-label">Why us?</p>
        <ul className="hero__bullets">
          <li>Single source for electrical, data, and security</li>
          <li>Designed for Kenyan businesses, homes, and institutions</li>
          <li>Reliable, future‑ready, and locally supported</li>
        </ul>
        <div className="hero__dual-ctas">
          <a href="tel:+254720119984" className="btn--getronics-cta">
            📞 Call Now
          </a>
          <a href="https://wa.me/254715119984" target="_blank" rel="noopener noreferrer" className="btn--getronics-cta btn--getronics-cta--whatsapp">
            💬 WhatsApp Us
          </a>
          <a href="#" className="btn--getronics-cta btn--getronics-cta--outline" onClick={(e) => { e.preventDefault(); navigate('managed-it'); }}>
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
