import React, { useState } from 'react';
import { FAQS } from '../../data/faqs';
import { Reveal, ChevronIcon } from '../shared';

/* ── FAQ accordion item ── */
const FAQItem: React.FC<{ q: string; a: string; defaultOpen?: boolean }> = ({ q, a, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={`faq-item${open ? ' faq-item--open' : ''}`}>
      <button className="faq-item__question" onClick={() => setOpen((v) => !v)}>
        <span>{q}</span>
        <ChevronIcon open={open} />
      </button>
      <div className="faq-item__answer">
        <p>{a}</p>
      </div>
    </div>
  );
};

/* ── Contact form ── */
const ContactForm: React.FC = () => {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    await fetch('/api/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name:    fd.get('name'),
        email:   fd.get('email'),
        phone:   fd.get('phone'),
        company: fd.get('company'),
        service: fd.get('service'),
        message: fd.get('details'),
      }),
    }).catch(() => {});
    setLoading(false);
    setSent(true);
  };

  if (sent) return (
    <div className="form-success">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
      <h3>Thanks! We'll be in touch shortly.</h3>
      <p>A member of our sales team will contact you within one business day.</p>
    </div>
  );

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" placeholder="Your full name" required />
      </div>
      <div className="form-group">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" placeholder="Company name" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" placeholder="you@company.com" required />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone number</label>
        <input id="phone" name="phone" type="tel" placeholder="+254 700 000 000" />
      </div>
      <div className="form-group">
        <label htmlFor="service">What are you interested in?</label>
        <select id="service" name="service">
          <option value="">Pick a service</option>
          <option>Managed IT services</option>
          <option>Cyber security</option>
          <option>IT support</option>
          <option>Custom software</option>
          <option>IT consultancy</option>
          <option>Backup &amp; recovery</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="details">Briefly describe the challenge you are facing</label>
        <textarea id="details" name="details" rows={4} placeholder="Tell us more about your needs..." />
      </div>
      <button type="submit" className="btn btn--primary btn--full" disabled={loading}>
        {loading ? 'Sending…' : 'Get Help Now'}
      </button>
    </form>
  );
};

/* ── Page ── */
const GetStartedPage: React.FC = () => (
  <>
    {/* Hero */}
    <section className="page-hero">
      <div className="page-hero__bg" />
      <div className="container page-hero__content">
        <Reveal><h1>Talk to an IT Expert</h1></Reveal>
        <Reveal delay={80}>
          <p className="page-hero__subtitle">
            Keedco delivers lightning-fast IT support with a team of elite IT experts that your
            business can depend on day and night. Whether you're remote or on-site, Keedco can
            provide real-time issue resolution, security at the device, app and network levels,
            and comprehensive IT management at a competitive rate.
          </p>
        </Reveal>
        <Reveal delay={160}>
          <p className="page-hero__phone">
            Sales &amp; Support:&nbsp;
            <a href="tel:+254715119984">+254 715 119 984</a>
          </p>
        </Reveal>
      </div>
    </section>

    {/* Form + FAQ */}
    <section className="section section--white">
      <div className="container get-started__layout">
        {/* Form */}
        <Reveal className="get-started__form-wrap">
          <h2>Book A Meeting</h2>
          <p>Simply enter your contact details below and a member of our sales team will be in touch.</p>
          <ContactForm />
        </Reveal>

        {/* FAQ */}
        <div className="get-started__faq-wrap">
          <Reveal><h2>Have any questions? We are here to help.</h2></Reveal>
          <div className="faq-list">
            {FAQS.map((faq, i) => (
              <Reveal key={i} delay={i * 50}>
                <FAQItem q={faq.question} a={faq.answer} defaultOpen={i === 0} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  </>
);

export default GetStartedPage;
