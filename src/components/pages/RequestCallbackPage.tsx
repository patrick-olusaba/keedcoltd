import React, { useState } from 'react';
import { Reveal } from '../shared';

const RequestCallbackPage: React.FC = () => {
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
        service: fd.get('service'),
        message: fd.get('message'),
      }),
    }).catch(() => {});
    setLoading(false);
    setSent(true);
  };

  return (
    <section className="callback-section">
      <div className="container callback__layout">

        {/* LEFT — photo + text */}
        <div className="callback__left">
          <Reveal>
            <h1 className="callback__title">Request a callback</h1>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="callback__subtitle">Talk with one of our experts</h2>
            <p className="callback__lead">
              If you're considering a new infrastructure project, whatever stage you're at in
              your journey, we'd love to talk.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <div className="callback__photo-wrap">
              <img
                  src="/new.png"
                  alt="Keedco expert"
                  className="callback__photo"
              />
            </div>
          </Reveal>
        </div>

        {/* RIGHT — dark form */}
        <Reveal delay={100} className="callback__form-panel">
          {sent ? (
            <div className="callback__success">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              <h3>Thank you!</h3>
              <p>We'll be in touch within one business day.</p>
            </div>
          ) : (
            <form className="callback__form" onSubmit={handleSubmit}>
              <div className="callback__form-row">
                <div className="callback__field">
                  <label>Name *</label>
                  <input type="text" name="name" required placeholder="Your name" />
                </div>
                <div className="callback__field">
                  <label>Telephone Number</label>
                  <input type="tel" name="phone" placeholder="+254 700 000 000" />
                </div>
              </div>
              <div className="callback__field">
                <label>Corporate Email *</label>
                <input type="email" name="email" required placeholder="you@company.com" />
              </div>
              <div className="callback__field">
                <label>Service Interested In</label>
                <select name="service">
                  <option value="">Select a service</option>
                  <option>Electrical Infrastructure</option>
                  <option>ICT Network Infrastructure</option>
                  <option>Security Systems</option>
                  <option>Connectivity Solutions</option>
                  <option>IT Consultancy</option>
                  <option>Custom Software</option>
                </select>
              </div>
              <div className="callback__field">
                <label>Would you like to give us more details?</label>
                <textarea name="message" rows={4} placeholder="Tell us about your project..." />
              </div>
              <label className="callback__consent">
                <input type="checkbox" />
                <span>I'd like to receive updates about Keedco products and services</span>
              </label>
              <p className="callback__legal">
                You agree that Keedco may process your personal data as described in our privacy policy.
              </p>
              <button type="submit" className="callback__submit" disabled={loading}>
                {loading ? 'SENDING…' : 'SEND ENQUIRY'}
              </button>
            </form>
          )}
        </Reveal>

      </div>
    </section>
  );
};

export default RequestCallbackPage;
