import React from 'react';
import { Reveal } from '../shared';
import ResponseGuarantee from '../layout/ResponseGuarantee';
import { useRouter } from '../../hooks/useRouter';

const CERTS = [
  'National Construction Authority (NCA)',
  'Energy and Petroleum Regulatory Authority (EPRA)',
  'Communications Authority of Kenya (CA)',
];

const AboutPage: React.FC = () => {
  const { navigate } = useRouter();
  return (
    <>
      <ResponseGuarantee />

      {/* Hero */}
      <section className="page-hero page-hero--about">
        <div className="page-hero__bg" />
        <div className="container page-hero__content">
          <Reveal><span className="badge">About Keedco Ltd</span></Reveal>
          <Reveal delay={80}><h1>Not just installers. Your infrastructure partner.</h1></Reveal>
          <Reveal delay={140}>
            <p className="page-hero__subtitle">
              Building Your Solutions. Powering Progress.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Main body */}
      <section className="section section--white">
        <div className="container about__layout">
          <div className="about__text">
            <Reveal>
              <p>
                At <strong>KEEDCO Ltd</strong>, we bring together electrical infrastructure, ICT networks,
                security systems, and consultancy services into reliable, future-ready solutions. From
                businesses and residential developments to warehouses and institutions across Kenya, we
                design, advise, and deploy what you need to operate seamlessly.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <p>
                We provide end‑to‑end infrastructure that keeps you connected, secure, and productive —
                no matter where you operate. Need a full electrical fit-out? A high-speed enterprise WiFi
                network? CCTV with remote access? Or expert advice on what to install and where?{' '}
                <strong>We do it all.</strong>
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h3>Our Difference</h3>
              <p>
                We don't just install — we consult first. That means right-sized solutions, fewer
                surprises, and infrastructure that truly works for you.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <div className="about__promise">
                <strong>Our promise:</strong>
                <p>Technology that just works — everywhere you do in Kenya.</p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <h3>Certifications</h3>
              <ul>{CERTS.map(c => <li key={c}>{c}</li>)}</ul>
            </Reveal>
          </div>

          <div className="about__values">
            <Reveal><h2>Why partner with us?</h2></Reveal>
            {[
              { em: 'One stop.', body: 'Electrical, ICT, security, and consultancy — zero finger-pointing.' },
              { em: 'Built for Kenya.', body: 'Designed for local power fluctuations, tropical climate, and security needs.' },
              { em: 'Future-proof.', body: 'Systems that grow with you, not obsolete in two years.' },
              { em: 'Consult first.', body: 'We audit before we quote — so you never over-pay or under-spec.' },
              { em: 'Fast response.', body: 'Local team, based in Kenya, ready when you need us.' },
            ].map((v, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="value-item">
                  <span className="value-item__num">{i + 1}</span>
                  <p><em>{v.em}</em> {v.body}</p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={360}>
              <a href="#" className="btn btn--primary" style={{ marginTop: '24px', display: 'inline-block' }}
                onClick={(e) => { e.preventDefault(); navigate('get-started'); }}>
                Work with us →
              </a>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
