import React from 'react';
import { SERVICES } from '../../data/home';
import { Reveal } from '../shared';
import { useRouter } from '../../hooks/useRouter';

// One representative Unsplash image per service
const SVC_IMAGES = [
  'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80', // electrician wiring panel
  'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&q=80', // network rack cabling
  'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80', // CCTV on building
  'https://images.unsplash.com/photo-1562408590-e32931084e23?w=600&q=80', // wireless tower/antenna
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80', // engineer on site hard hat
  'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80', // modern office building
];

const ServicesSection: React.FC = () => {
  const { navigate } = useRouter();
  return (
    <section className="services-section">
      <div className="container">
        <Reveal>
          <h2 className="services-section__title">Our Services</h2>
        </Reveal>

        {/* Timeline */}
        <div className="svc-timeline">
          {/* Vertical line */}
          <div className="svc-timeline__line" />

          {SERVICES.map((svc, i) => {
            const isLeft = i % 2 === 0;
            return (
              <Reveal key={svc.name} delay={i * 80}>
                <div className={`svc-timeline__row${isLeft ? '' : ' svc-timeline__row--right'}`}>
                  {/* Dot on the center line */}
                  <div className="svc-timeline__dot" />

                  {/* Card */}
                  <a
                    href="#"
                    className="svc-timeline__card"
                    onClick={(e) => { e.preventDefault(); navigate(svc.href); }}
                  >
                    <h3 className="svc-timeline__name">{svc.name}</h3>
                    <img
                      src={SVC_IMAGES[i]}
                      alt={svc.name}
                      className="svc-timeline__img"
                    />
                    <p className="svc-timeline__desc">{svc.description}</p>
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* View All */}
        <Reveal delay={80}>
          <div className="services-section__cta">
            <a href="#" className="btn btn--view-all" onClick={(e) => { e.preventDefault(); navigate('managed-it'); }}>
              VIEW ALL SERVICES
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ServicesSection;
