import React from 'react';

const STATS = [
  { value: '10+', label: 'Years Experience' },
  { value: '100+', label: 'Projects Completed' },
  { value: 'Nairobi', label: '& Across Kenya' },
];

const CERTS = [
  { name: 'NCA',      logo: '/nca.png' },
  { name: 'EPRA',     logo: '/EPRA.jpg' },
  { name: 'CA Kenya', logo: '/cA.jpg' },
];

const TrustBar: React.FC = () => (
  <div className="trust-bar">
    <div className="container trust-bar__inner">
      {/* Stats */}
      {STATS.map(s => (
        <div key={s.label} className="trust-bar__stat">
          <strong>{s.value}</strong>
          <span>{s.label}</span>
        </div>
      ))}

      <div className="trust-bar__divider" />

      {/* Certs */}
      <span className="trust-bar__label">Certified By</span>
      <div className="trust-bar__logos">
        {CERTS.map(c => (
          <div key={c.name} className="trust-bar__cert-item">
            <img src={c.logo} alt={c.name} loading="lazy"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
            <span>{c.name}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default TrustBar;
