import React from 'react';

const CERTS = [
  {
    name: 'Microsoft Partner',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png',
  },
  {
    name: 'Cisco',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/512px-Cisco_logo_blue_2016.svg.png',
  },
  {
    name: 'CompTIA',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/CompTIA_logo.svg/512px-CompTIA_logo.svg.png',
  },
  {
    name: 'ISO 27001',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/ISO_logo_%28Red_square%29.svg/512px-ISO_logo_%28Red_square%29.svg.png',
  },
  {
    name: 'Dell Technologies',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Dell_Logo.png/512px-Dell_Logo.png',
  },
  {
    name: 'HP',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/512px-HP_logo_2012.svg.png',
  },
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
