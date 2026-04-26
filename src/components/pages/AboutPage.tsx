import React from 'react';
import { Reveal } from '../shared';

const CERTS = ['National Construction Authority (NCA)', 'Energy and Petroleum Regulatory Authority (EPRA)', 'Communications Authority of Kenya (CA)'];

const VALUES = [
  {
    title: 'We Are', em: 'Reliable',
    body: 'We deliver on every commitment. Our clients trust us to show up, complete the job, and stand behind our work — no excuses.',
    img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=700&q=80',
  },
  {
    title: 'We Are', em: 'Expert',
    body: 'Our engineers are certified and experienced across electrical, ICT, and security disciplines. We bring deep technical knowledge to every project.',
    img: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=700&q=80',
  },
  {
    title: 'We Believe In', em: 'People',
    body: 'Our clients are partners. We listen, advise honestly, and build lasting relationships — not just one-off installations.',
    img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&q=80',
  },
  {
    title: 'We Are', em: 'Innovative',
    body: 'We stay ahead of technology trends to bring our clients future-ready solutions — from fiber optics to smart access control.',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=700&q=80',
  },
];

const AboutPage: React.FC = () => (
  <>
    {/* Hero */}
    <section className="page-hero page-hero--about">
      <div className="page-hero__bg" />
      <div className="container page-hero__split">
        <Reveal><p className="page-hero__eyebrow">About Keedco Ltd</p></Reveal>
        <Reveal delay={80}>
          <h1 className="page-hero__split-title">Engineering Connectivity, Securing Progress.</h1>
        </Reveal>
        <Reveal delay={140}>
          <p className="page-hero__subtitle">
            <strong>Keedco Ltd</strong> is a Nairobi-based engineering solutions provider specializing
            in electrical installations, ICT infrastructure, and integrated security systems.
          </p>
        </Reveal>
      </div>
    </section>

    {/* Mission + Certs */}
    <section className="section section--white">
      <div className="container about__layout">
        <div className="about__text">
          <Reveal>
            <p>For over a decade, we have partnered with businesses, residential developers, institutions, and industrial facilities across Kenya to deliver future-ready infrastructure solutions.</p>
          </Reveal>
          <Reveal delay={100}>
            <h3>Our Mission</h3>
            <p>To empower businesses and communities with reliable electrical, networking, and security infrastructure — driving innovation, efficiency, and sustainable progress.</p>
          </Reveal>
          <Reveal delay={150}>
            <h3>Certifications</h3>
            <ul>{CERTS.map(c => <li key={c}>{c}</li>)}</ul>
          </Reveal>
        </div>
      </div>
    </section>

    {/* Our Values heading */}
    <div className="about-values-heading">
      <Reveal><h2>Our Values</h2></Reveal>
    </div>

    {/* Values — alternating image rows */}
    {VALUES.map((v, i) => (
      <div key={v.em} className={`about-value${i % 2 === 1 ? ' about-value--flip' : ''}`}>
        <Reveal className="about-value__img-wrap">
          <img src={v.img} alt={v.em} className="about-value__img" />
        </Reveal>
        <Reveal delay={80} className="about-value__text">
          <h3>{v.title} <em>{v.em}</em></h3>
          <p>{v.body}</p>
        </Reveal>
      </div>
    ))}
  </>
);

export default AboutPage;
