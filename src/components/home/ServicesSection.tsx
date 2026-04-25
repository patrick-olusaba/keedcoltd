import React from 'react';
import { SERVICES } from '../../data/home';
import { Reveal } from '../shared';
import { useRouter } from '../../hooks/useRouter';

// One representative Unsplash image per service
const SVC_IMAGES = [
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', // electrical panel
  'https://images.unsplash.com/photo-1606765962248-7ff407b51667?w=600&q=80', // network cables
  'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80', // CCTV camera
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80', // wireless/satellite
  'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80', // engineer on site
  'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80', // corporate office
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
