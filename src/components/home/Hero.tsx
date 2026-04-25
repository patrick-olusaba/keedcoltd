import React from 'react';
import { useRouter } from '../../hooks/useRouter';

const Hero: React.FC = () => {
  const { navigate } = useRouter();
  return (
    <section className="hero">
      <div className="hero__overlay" />
      <div className="hero__body">
        <div className="hero__eyebrow">Kenya's Trusted Electrical, ICT & Security Partner</div>
        <h1 className="hero__title">
          Engineering Connectivity,<br /><em>Securing</em> Progress
        </h1>
        <p className="hero__subtitle">
          From electrical installations to ICT networks and integrated security systems —
          Keedco delivers future-ready infrastructure for businesses and institutions across Kenya.
        </p>
        <a href="#" className="btn btn--hero" onClick={(e) => { e.preventDefault(); navigate('get-started'); }}>
          Get a Free Consultation
        </a>
      </div>
    </section>
  );
};

export default Hero;
