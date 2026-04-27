import React from 'react';

const CERTS = [
  { name: 'National Construction Authority', short: 'NCA', logo: '/nca.png' },
  { name: 'Energy & Petroleum Regulatory Authority', short: 'EPRA', logo: '/EPRA.jpg' },
  { name: 'Communications Authority of Kenya', short: 'CA Kenya', logo: '/cA.jpg' },
];

const TrustBar: React.FC = () => (
  <div className="trust-bar">
    <div className="container trust-bar__inner">
      <span className="trust-bar__label">Certified By</span>
      <div className="trust-bar__logos">
        {CERTS.map(c => (
          <div key={c.short} className="trust-bar__cert-item">
            <img
              src={c.logo}
              alt={c.short}
              loading="lazy"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
            <span>{c.name}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default TrustBar;
