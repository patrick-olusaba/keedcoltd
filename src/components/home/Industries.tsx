import React from 'react';
import { INDUSTRIES } from '../../data/home';
import { Reveal } from '../shared';

const ICONS: React.ReactNode[] = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 8h1a4 4 0 010 8h-1"/><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4.8 2.3A.3.3 0 105 2H4a2 2 0 00-2 2v5a6 6 0 006 6 6 6 0 006-6V4a2 2 0 00-2-2h-1a.2.2 0 10.3.3"/><path d="M8 15v1a6 6 0 006 6v0a6 6 0 006-6v-4"/><circle cx="20" cy="10" r="2"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 20V8l6 4V8l6 4V4l8 4v12H2z"/><rect x="6" y="14" width="3" height="6"/><rect x="11" y="14" width="3" height="6"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="19" width="20" height="2"/><rect x="4" y="10" width="2" height="9"/><rect x="9" y="10" width="2" height="9"/><rect x="14" y="10" width="2" height="9"/><rect x="19" y="10" width="2" height="9"/><polygon points="12 2 2 10 22 10"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/><line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/><line x1="18" y1="18" x2="18" y2="11"/><polygon points="12 2 20 7 4 7"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 2v6l-2 4h16l-2-4V2"/><line x1="6" y1="2" x2="18" y2="2"/><path d="M5 16a7 7 0 0014 0"/><line x1="12" y1="16" x2="12" y2="22"/><line x1="9" y1="22" x2="15" y2="22"/></svg>,
];

const Industries: React.FC = () => (
  <section className="industries">
    <div className="container">
      <Reveal><h3 className="industries__heading">Industries We Serve</h3></Reveal>
      <div className="industries__grid">
        {INDUSTRIES.map((ind, i) => (
          <Reveal key={ind.name} delay={i * 60}>
            <div className="industry-card">
              <div className="industry-card__icon">{ICONS[i]}</div>
              <h5>{ind.name}</h5>
              <p>{ind.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Industries;
