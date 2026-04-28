import React from 'react';
import { Reveal } from '../shared';
import { useRouter } from '../../hooks/useRouter';

const PROJECTS = [
  { img: '/cctv1.jpg',           caption: 'CCTV Installation',        detail: 'Office Complex, Nairobi' },
  { img: '/serverrack1.jpg',     caption: 'Server Room Setup',         detail: 'Corporate Office, Nairobi' },
  { img: '/electricalpanel1.jpg',caption: 'Electrical Panel Fit-Out',  detail: '5-Floor Building, Nairobi' },
  { img: '/cableruns1.jpg',      caption: 'Structured Cabling',        detail: 'Enterprise Office, Nairobi' },
  { img: '/accesscontrol1.jpg',  caption: 'Access Control Install',    detail: 'Corporate Campus, Nairobi' },
  { img: '/cctv3.jpg',           caption: 'IP Camera System',          detail: 'Warehouse, Nairobi' },
  { img: '/serverrack3.jpg',     caption: 'Network Infrastructure',    detail: 'Business Park, Nairobi' },
  { img: '/electricalpanel3.jpg',caption: 'Power Distribution',        detail: 'Industrial Facility, Kenya' },
];

const RecentProjects: React.FC = () => {
  const { navigate } = useRouter();
  return (
    <section className="recent-projects">
      <div className="container">
        <Reveal><p className="recent-projects__eyebrow">Our Work</p></Reveal>
        <Reveal delay={60}><h2 className="recent-projects__heading">Recent Projects</h2></Reveal>
        <Reveal delay={100}><p className="recent-projects__sub">Real installations. Real results. Across Kenya.</p></Reveal>

        <div className="recent-projects__grid">
          {PROJECTS.map((p, i) => (
            <Reveal key={i} delay={i * 40}>
              <div className="rp-card">
                <img src={p.img} alt={p.caption} loading="lazy" className="rp-card__img" />
                <div className="rp-card__overlay">
                  <strong>{p.caption}</strong>
                  <span>{p.detail}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <a href="#" className="btn btn--primary btn--lg" onClick={(e) => { e.preventDefault(); navigate('case-studies'); }}>
              View All Case Studies →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default RecentProjects;
