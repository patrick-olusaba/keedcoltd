import React from 'react';

const CERTS = [
  { name: 'Microsoft Partner', logo: '/Microsoft.jpg' },
  { name: 'Cisco',             logo: '/Cisco.jpg' },
  { name: 'CompTIA',           logo: '/CompTIA.jpg' },
  { name: 'ISO 27001',         logo: '/ISO27001.jpg' },
  { name: 'Dell Technologies', logo: '/Dell.jpg' },
  { name: 'HP',                logo: '/hp.jpg' },
];

const TrustBar: React.FC = () => (
  <div className="trust-bar">
    <div className="container trust-bar__inner">
      <span className="trust-bar__label">Certified & Partnered With</span>
      <div className="trust-bar__logos">
        {CERTS.map(c => (
          <div key={c.name} className="trust-bar__logo" title={c.name}>
            <img src={c.logo} alt={c.name} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default TrustBar;
