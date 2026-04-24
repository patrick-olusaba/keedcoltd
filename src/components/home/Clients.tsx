import React from 'react';
import { CLIENTS } from '../../data/home';
import { Reveal } from '../shared';

const Stars = () => (
  <div className="clients__stars">
    {[...Array(5)].map((_, i) => (
      <svg key={i} width="22" height="22" viewBox="0 0 24 24" fill="#e8622a" stroke="none">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ))}
    <span>5.0 — Rated by our clients</span>
  </div>
);

const Clients: React.FC = () => {
  const doubled = [...CLIENTS, ...CLIENTS];
  return (
    <section className="clients">
      <div className="container">
        <Reveal>
          <h3 className="clients__heading">
            Here are a few clients that we have <em>served</em>
          </h3>
        </Reveal>
        <Reveal delay={80}><Stars /></Reveal>
      </div>

      {/* Auto-scrolling ticker — full width, outside container */}
      <div className="clients__ticker-wrap">
        <div className="clients__ticker">
          {doubled.map((client, i) => (
            <div key={i} className="clients__chip">
              <img src={client.logo} alt={client.name} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
