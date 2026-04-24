import React from 'react';
import { Reveal } from '../shared';

const VALUES = [
  { num: '01', text: 'Deliver on each project with', em: 'no excuses.' },
  { num: '02', text: 'Always',                        em: 'deliver',      tail: 'to our clients.' },
  { num: '03', text: 'Build things that',             em: 'inspire',      tail: 'people.' },
];

const AboutPage: React.FC = () => (
  <>
    {/* Hero */}
    <section className="page-hero">
      <div className="page-hero__bg" />
      <div className="container page-hero__content">
        <Reveal><h1>We're redefining the way you IT.</h1></Reveal>
        <Reveal delay={100}>
          <p className="page-hero__subtitle">
            <strong>We're setting the bar high for IT</strong>, reshaping the way our team and yours
            experience technical support whether it's remotely or an on-site visit.
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
              Keedco Ltd is a privately owned IT Support and IT Services business formed in 2015.
              Today we're proud to boast a strong team of IT engineers who thrive on rolling up
              their sleeves and solving your IT problems and meeting your business needs.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <p>
              What sets Keedco apart is a talented and passionate team who truly loves what they do,
              demonstrating boundless enthusiasm and dedication in every single project.
            </p>
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
