import React from 'react';
import { useRouter } from '../../hooks/useRouter';

const Hero: React.FC = () => {
  const { navigate } = useRouter();
  return (
    <section className="hero hero--getronics">
      <div className="hero__overlay" />
      <div className="container hero__getronics-body">
        <p className="hero__getronics-eyebrow">Power. Connect. Secure.</p>
        <h1 className="hero__getronics-title">
          Building Your Solutions,<br /><em>Powering Progress</em>
        </h1>
        <p className="hero__getronics-body">
          We provide end‑to‑end infrastructure solutions that keep your business connected, secure,
          and productive — no matter where you operate across Kenya. From electrical systems and
          structured cabling to enterprise WiFi, CCTV, and security, our solutions are{' '}
          <strong>built to scale with you and work seamlessly across sites, buildings, and teams.</strong>
        </p>
        <a
          href="#"
          className="btn--getronics-cta"
          onClick={(e) => { e.preventDefault(); navigate('about-us'); }}
        >
          Why partner with us?
        </a>
      </div>
    </section>
  );
};

export default Hero;

