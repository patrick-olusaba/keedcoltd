import React from 'react';
import { Reveal } from '../shared';

const VALUES = [
  { num: '01', text: 'Deliver on each project with', em: 'no excuses.' },
  { num: '02', text: 'Always',                        em: 'deliver',   tail: 'to our clients.' },
  { num: '03', text: 'Build things that',             em: 'inspire',   tail: 'people.' },
];

const CERTS = ['National Construction Authority (NCA)', 'Energy and Petroleum Regulatory Authority (EPRA)', 'Communications Authority of Kenya (CA)'];

const AboutPage: React.FC = () => (
  <>
    {/* Hero */}
    <section className="page-hero">
      <div className="page-hero__bg" />
      <div className="container page-hero__content">
        <Reveal><h1>Engineering Connectivity, Securing Progress.</h1></Reveal>
        <Reveal delay={100}>
          <p className="page-hero__subtitle">
            <strong>Keedco Ltd</strong> is a Nairobi-based engineering solutions provider specializing
            in electrical installations, ICT infrastructure, and integrated security systems.
          </p>
        </Reveal>
      </div>
    </section>

    {/* Body */}
    <section className="section section--white">
      <div className="container about__layout">
        <div className="about__text">
          <Reveal>
            <p>
              For over a decade, we have partnered with businesses, residential developers,
              institutions, and industrial facilities across Kenya to deliver future-ready
              infrastructure solutions that enhance connectivity, efficiency, and safety.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <p>
              Our integrated approach combines electrical engineering, advanced networking, and
              modern security technologies to provide systems that are reliable, scalable, and
              tailored to the unique needs of each client.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <h3>Our Mission</h3>
            <p>
              To empower businesses and communities with reliable electrical, networking, and
              security infrastructure — driving innovation, efficiency, and sustainable progress.
              We believe strong infrastructure is the backbone of growth, and we are committed to
              building solutions that support Kenya's evolving digital and industrial landscape.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <h3>Certifications</h3>
            <ul>
              {CERTS.map(c => <li key={c}>{c}</li>)}
            </ul>
          </Reveal>
        </div>

        <div className="about__values">
          <Reveal><h2>Our Values</h2></Reveal>
          {VALUES.map((v, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="value-item">
                <span className="value-item__num">{v.num}</span>
                <p>
                  {v.text} <em>{v.em}</em>{v.tail ? ` ${v.tail}` : ''}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default AboutPage;
