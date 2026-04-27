import React, { useState } from 'react';
import { SERVICE_PAGES } from '../../data/services';
import { Reveal, Badge, CheckIcon } from '../shared';
import { useRouter } from '../../hooks/useRouter';

/* ── Inline quote form ── */
const QuoteForm: React.FC = () => {
  const [sent, setSent] = useState(false);
  if (sent) return (
    <div className="quote-form__success">
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
      <p>Thanks! We'll be in touch shortly.</p>
    </div>
  );
  return (
    <form className="quote-form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
      <h3>Get a hassle-free managed IT quote!</h3>
      <div className="quote-form__fields">
        <input type="text"  placeholder="Name"         required />
        <input type="text"  placeholder="Company" />
        <input type="email" placeholder="Email"        required />
        <input type="tel"   placeholder="Phone number" />
        <select defaultValue="">
          <option value="" disabled>What are you interested in?</option>
          <option>Managed IT services</option>
          <option>Cyber security</option>
          <option>IT support</option>
          <option>Custom software</option>
          <option>IT consultancy</option>
          <option>Backup &amp; recovery</option>
        </select>
        <textarea rows={3} placeholder="Briefly describe the challenge you are facing" />
      </div>
      <button type="submit" className="btn btn--primary btn--full">Get quote now</button>
    </form>
  );
};

interface ServicePageProps { pageKey: string; }

const ServicePage: React.FC<ServicePageProps> = ({ pageKey }) => {
  const { navigate } = useRouter();
  const data = SERVICE_PAGES[pageKey];

  if (!data) return (
    <div className="container" style={{ padding: '100px 24px', textAlign: 'center' }}>
      <h2>Page not found</h2>
    </div>
  );

  return (
    <>
      {/* ── Hero: full-width large title over bg image ── */}
      <section className="svc-hero" style={{ backgroundImage: `url('${data.heroBg}')` }}>
        <div className="svc-hero__overlay" />
        <div className="container svc-hero__body">
          <Reveal><span className="badge">{data.badge}</span></Reveal>
          <Reveal delay={60}>
            <h1 className="svc-hero__title">
              {data.heroTitleLine1}{data.heroTitleLine2 && <><br /><em>{data.heroTitleLine2}</em></>}
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="svc-hero__subtitle">{data.heroSubtitle}</p>
          </Reveal>
          {data.heroKeyOfferings && (
            <Reveal delay={160}>
              <p className="hero__why-label">Key offerings</p>
              <ul className="hero__bullets">
                {data.heroKeyOfferings.map(o => <li key={o}>{o}</li>)}
              </ul>
            </Reveal>
          )}
          <Reveal delay={200}>
            <a href="#" className="btn--getronics-cta" onClick={(e) => { e.preventDefault(); navigate('get-started'); }}>
              Get a Free Quote
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Benefits – alternating text + image ── */}
      <section className="section section--white">
        <div className="container">
          <Reveal><h2 className="section-title">{data.benefitsTitle}</h2></Reveal>
          <Reveal delay={80}><p className="section-lead">{data.benefitsLead}</p></Reveal>
        </div>
        {data.benefits.map((b, i) => (
          <Reveal key={i} delay={i * 80}>
            <div className={`benefit-row${i % 2 === 1 ? ' benefit-row--reverse' : ''}`}>
              <div className="benefit-row__text">
                <h3>{b.title}</h3>
                <p>{b.description}</p>
              </div>
              {b.image && (
                <div className="benefit-row__img">
                  <img src={b.image} alt={b.title} loading="lazy" />
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </section>

      {/* ── What's Included ── */}
      <section className="section section--grey">
        <div className="container">
          <Reveal><h2 className="section-title">{data.includedTitle}</h2></Reveal>
          {data.includedLead && <Reveal delay={60}><p className="section-lead">{data.includedLead}</p></Reveal>}
          <div className="included-grid">
            {data.included.map((item, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="included-card">
                  <div className="included-card__icon"><CheckIcon /></div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicePage;
