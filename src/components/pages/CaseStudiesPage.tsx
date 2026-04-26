import React, { useState } from 'react';
import { CASE_STUDIES, CaseStudy } from '../../data/caseStudies';
import { Reveal } from '../shared';
import { useRouter } from '../../hooks/useRouter';

/* ── Detail view ── */
const CaseStudyDetail: React.FC<{ study: CaseStudy; onBack: () => void }> = ({ study, onBack }) => {
  const [activeImg, setActiveImg] = useState(0);
  const { navigate } = useRouter();

  return (
    <>
      {/* Hero image */}
      <div className="cs-detail__hero" style={{ backgroundImage: `url(${study.images[activeImg]})` }}>
        <div className="cs-detail__hero-overlay" />
        <div className="container cs-detail__hero-content">
          <button className="cs-detail__back" onClick={onBack}>← All Case Studies</button>
          <span className="badge">{study.category}</span>
          <h1>{study.headline}</h1>
          <p className="cs-detail__meta">{study.client} · {study.sector}</p>
        </div>
      </div>

      {/* Stats bar */}
      <div className="cs-detail__stats-bar">
        {study.stats.map(s => (
          <div key={s.label} className="cs-detail__stat">
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </div>

      {/* Body */}
      <section className="section section--white">
        <div className="container cs-detail__body">
          <div className="cs-detail__text">
            <Reveal>
              <h2>The Challenge</h2>
              <p>{study.challenge}</p>
            </Reveal>
            <Reveal delay={80}>
              <h2>Our Solution</h2>
              <p>{study.solution}</p>
            </Reveal>
            <Reveal delay={140}>
              <h2>The Outcome</h2>
              <p>{study.outcome}</p>
            </Reveal>
          </div>

          {/* Photo gallery */}
          <div className="cs-detail__gallery">
            <img src={study.images[activeImg]} alt={study.headline} className="cs-detail__gallery-main" />
            <div className="cs-detail__thumbs">
              {study.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt=""
                  className={`cs-detail__thumb${i === activeImg ? ' cs-detail__thumb--active' : ''}`}
                  onClick={() => setActiveImg(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cs-detail__cta">
        <div className="container">
          <h3>Ready for results like these?</h3>
          <p>Tell us about your project and we'll respond within 15 minutes.</p>
          <a href="#" className="btn btn--primary btn--lg" onClick={e => { e.preventDefault(); navigate('get-started'); }}>
            Start Your Project
          </a>
        </div>
      </section>
    </>
  );
};

/* ── Listing page ── */
const CaseStudiesPage: React.FC = () => {
  const [selected, setSelected] = useState<CaseStudy | null>(null);
  const { navigate } = useRouter();

  if (selected) {
    return <CaseStudyDetail study={selected} onBack={() => setSelected(null)} />;
  }

  return (
    <>
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="container page-hero__content">
          <Reveal><span className="badge">Real Projects. Real Results.</span></Reveal>
          <Reveal delay={60}><h1>Case Studies</h1></Reveal>
          <Reveal delay={120}>
            <p className="page-hero__subtitle">
              A look at how we've solved real infrastructure challenges for businesses across Kenya — with photos from the actual sites.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="cs-grid">
            {CASE_STUDIES.map((study, i) => (
              <Reveal key={study.slug} delay={i * 60}>
                <article className="cs-card" onClick={() => setSelected(study)}>
                  <div className="cs-card__img-wrap">
                    <img src={study.images[0]} alt={study.headline} className="cs-card__img" loading="lazy" />
                    <span className="cs-card__cat">{study.category}</span>
                  </div>
                  <div className="cs-card__body">
                    <p className="cs-card__client">{study.client} · {study.sector}</p>
                    <h3 className="cs-card__title">{study.headline}</h3>
                    <div className="cs-card__stats">
                      {study.stats.map(s => (
                        <div key={s.label} className="cs-card__stat">
                          <strong>{s.value}</strong>
                          <span>{s.label}</span>
                        </div>
                      ))}
                    </div>
                    <span className="cs-card__read">Read case study →</span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="portfolio__cta" style={{ marginTop: '64px' }}>
              <h3>Want results like these?</h3>
              <p>Tell us about your project and we'll get back to you within 15 minutes.</p>
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

export default CaseStudiesPage;
