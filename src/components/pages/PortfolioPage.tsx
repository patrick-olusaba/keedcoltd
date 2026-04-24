import React, { useState } from 'react';
import { PROJECTS, CATEGORIES } from '../../data/portfolio';
import { Reveal } from '../shared';
import { useRouter } from '../../hooks/useRouter';

const PortfolioPage: React.FC = () => {
  const [active, setActive] = useState('All');
  const { navigate } = useRouter();
  const filtered = active === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === active);

  return (
    <>
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="container page-hero__content">
          <Reveal><h1>Our Work</h1></Reveal>
          <Reveal delay={80}>
            <p className="page-hero__subtitle">
              Real projects. Real results. A look at work we've delivered for businesses across East Africa.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="portfolio">
        <div className="container">

          {/* Filter pills */}
          <div className="portfolio__filters">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                className={`portfolio__filter${active === cat ? ' portfolio__filter--active' : ''}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry-style grid */}
          <div className="portfolio__grid">
            {filtered.map((project, i) => (
              <Reveal key={project.id} delay={i * 50}>
                <div className="pcard">
                  <img src={project.image} alt={project.title} loading="lazy" className="pcard__img" />
                  <div className="pcard__outcome">{project.outcome}</div>
                  <div className="pcard__hover">
                    <span className="pcard__cat">{project.category}</span>
                    <h3 className="pcard__title">{project.title}</h3>
                    <p className="pcard__client">{project.client}</p>
                    <p className="pcard__desc">{project.description}</p>
                    <div className="pcard__tags">
                      {project.tags.map(t => <span key={t} className="pcard__tag">{t}</span>)}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Bottom CTA */}
          <Reveal>
            <div className="portfolio__cta">
              <h3>Want results like these?</h3>
              <p>Tell us about your project and we'll get back to you within one business day.</p>
              <a href="#" className="btn btn--primary btn--lg" onClick={e => { e.preventDefault(); navigate('get-started'); }}>
                Start a Project
              </a>
            </div>
          </Reveal>

        </div>
      </section>
    </>
  );
};

export default PortfolioPage;
