import React from 'react';
import { CLIENTS } from '../../data/home';

const SocialProof: React.FC = () => {
  const doubled = [...CLIENTS, ...CLIENTS];
  return (
    <div className="social-proof">
      <span className="social-proof__label">Trusted by 60+ offices</span>
      <div className="social-proof__track-wrap">
        <div className="social-proof__track">
          {doubled.map((c, i) => (
            <span key={i} className="social-proof__name">{c.name}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialProof;
