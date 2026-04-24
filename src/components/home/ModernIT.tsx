import React from 'react';
import { Reveal } from '../shared';

const ModernIT: React.FC = () => (
  <section className="modern-it">
    <div className="container modern-it__inner">
      <Reveal><h2 className="modern-it__title">Keep your team focused</h2></Reveal>
      <Reveal delay={80}><h2 className="modern-it__title">with modern IT solutions</h2></Reveal>
      <Reveal delay={160}>
        <p className="modern-it__body">
          Whether you're upgrading from a legacy system or want to improve your levels of data compliance,
          transforming your business – and how your end users work – can free you from the frustrating
          technical concerns that clog up your day.
        </p>
      </Reveal>
    </div>
  </section>
);

export default ModernIT;
