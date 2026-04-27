import React from 'react';
import { Reveal } from '../shared';
import { useRouter } from '../../hooks/useRouter';

const STEPS = [
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 0112 18.92a19.5 19.5 0 01-7.82-7.82 19.79 19.79 0 01-3-8.82A2 2 0 013.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 7.6a16 16 0 006.09 6.09l.95-1.95a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14z"/></svg>,
    title: 'Listen & Assess',
    body: 'Free consultation, site visit, or remote audit — we understand your needs first.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
    title: 'Design & Quote',
    body: 'Transparent proposal, right-sized solution — no over-spec, no surprises.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
    title: 'Deploy & Test',
    body: 'Professional installation with rigorous testing — zero downtime, seamless handover.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    title: 'Support & Evolve',
    body: 'Ongoing maintenance and upgrades — we grow with your business.',
  },
];

const ProcessSection: React.FC = () => {
  const { navigate } = useRouter();
  return (
    <section className="process">
      <div className="container">
        <Reveal><p className="process__eyebrow">How we work</p></Reveal>
        <Reveal delay={60}><h2 className="process__heading">Simple. Transparent. Reliable.</h2></Reveal>
        <div className="process__steps">
          {STEPS.map((step, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="process-step">
                <div className="process-step__num">{i + 1}</div>
                <div className="process-step__icon">{step.icon}</div>
                <h4>{step.title}</h4>
                <p>{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <a href="#" className="btn btn--primary btn--lg" onClick={(e) => { e.preventDefault(); navigate('get-started'); }}>
              Start the Process →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ProcessSection;
