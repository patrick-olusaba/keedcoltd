import React, { useState } from 'react';
import { Reveal } from '../shared';

const STORIES = [
  {
    quote: 'Keedco transformed our entire network infrastructure — structured cabling, enterprise WiFi, and CCTV — within two weeks. Zero downtime since installation.',
    name: 'James Mwangi',
    role: 'Facilities Manager',
    company: 'Nairobi Business Park',
    tag: 'ICT Infrastructure',
  },
  {
    quote: 'Being back with Keedco just gives me peace of mind knowing that my technology is functioning seamlessly behind the scenes without disrupting our day-to-day operations.',
    name: 'Jeffrey',
    role: 'Director',
    company: 'Nairobi',
    tag: 'Managed IT',
  },
  {
    quote: 'Very late in the day, I received a request for laptops needed by noon the next day. Keedco had them to us first thing in the morning. Exceptional response.',
    name: 'Richard',
    role: 'Procurement Officer',
    company: 'Kerry Group Kenya',
    tag: 'ICT Supply',
  },
  {
    quote: 'The electrical fit-out for our new office was completed on schedule and passed EPRA inspection on the first submission. Professional team, clean work.',
    name: 'Sarah Otieno',
    role: 'Operations Manager',
    company: 'Médecins Sans Frontières',
    tag: 'Electrical',
  },
  {
    quote: 'Our 64-camera CCTV system was designed and installed across three floors with remote viewing set up in a single week. We can now monitor everything from our phones.',
    name: 'David Kamau',
    role: 'Security Manager',
    company: 'Mega Consolidated',
    tag: 'Security Systems',
  },
  {
    quote: 'Keedco audited our network before recommending anything. That honesty saved us from over-specifying. The solution they delivered was exactly what we needed.',
    name: 'Anne Wanjiku',
    role: 'IT Manager',
    company: 'Grant Thornton Kenya',
    tag: 'Consultancy',
  },
];

const CustomerStories: React.FC = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="stories">
      <div className="container">
        <Reveal><p className="stories__eyebrow">Customer Stories</p></Reveal>
        <Reveal delay={60}><h2 className="stories__heading">What our clients say</h2></Reveal>

        {/* Featured quote */}
        <Reveal delay={100}>
          <div className="stories__featured">
            <span className="stories__tag">{STORIES[active].tag}</span>
            <blockquote className="stories__quote">"{STORIES[active].quote}"</blockquote>
            <cite className="stories__cite">
              <strong>{STORIES[active].name}</strong>
              <span>{STORIES[active].role}, {STORIES[active].company}</span>
            </cite>
          </div>
        </Reveal>

        {/* Selector cards */}
        <div className="stories__cards">
          {STORIES.map((s, i) => (
            <button
              key={i}
              className={`stories__card${i === active ? ' stories__card--active' : ''}`}
              onClick={() => setActive(i)}
            >
              <strong>{s.name}</strong>
              <span>{s.company}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerStories;
