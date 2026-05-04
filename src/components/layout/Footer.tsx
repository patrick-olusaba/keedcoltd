import React from 'react';
import { useRouter } from '../../hooks/useRouter';

const FOOTER_COLS = [
  {
    heading: 'Services',
    links: [
      { label: 'Electrical Infrastructure',  href: 'electrical-cctv' },
      { label: 'ICT Network Infrastructure', href: 'managed-it' },
      { label: 'Security Systems',           href: 'security' },
      { label: 'Consultancy Services',       href: 'it-consultancy' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About Us',     href: 'about-us' },
      { label: 'Case Studies', href: 'case-studies' },
      { label: 'Our Work',     href: 'our-work' },
      { label: 'Blog',         href: 'blog' },
      { label: 'Get Started',  href: 'get-started' },
      { label: 'Terms of Use', href: 'terms-of-use' },
    ],
  },
  {
    heading: 'Contact',
    links: [],
    contact: true,
  },
];

const Footer: React.FC = () => {
  const { navigate } = useRouter();
  return (
    <footer className="footer">
      {/* Multi-column dark section */}
      <div className="footer__main">
        <div className="container footer__main-inner">
          {/* Brand col */}
          <div className="footer__brand">
            <div className="footer__brand-name">Keedco Ltd</div>
            <p className="footer__brand-tagline">Engineering Connectivity, Securing Progress</p>
            <div className="footer__brand-certs">
              {[
                { name: 'NCA',      logo: '/nca.png' },
                { name: 'EPRA',     logo: '/EPRA.jpg' },
                { name: 'CA Kenya', logo: '/cA.jpg' },
              ].map(c => (
                <div key={c.name} className="footer__cert" title={c.name}>
                  <img src={c.logo} alt={c.name}
                    onError={(e) => { (e.target as HTMLImageElement).style.display='none'; }} />
                  <span>{c.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_COLS.map(col => (
            <div key={col.heading} className="footer__col">
              <h6 className="footer__col-heading">{col.heading}</h6>
              {col.contact ? (
                <ul className="footer__col-links">
                  <li><span className="footer__contact-item">📍 Summit House, Suite 503, Monrovia Lane, Nairobi</span></li>
                  <li><a href="tel:+254720119984" className="footer__col-link">📞 Technical: 0720 119 984</a></li>
                  <li><a href="tel:+254115445418" className="footer__col-link">📞 Office: 0115 445 418</a></li>
                  <li><a href="mailto:contact@keedcoltd.com" className="footer__col-link">✉ contact@keedcoltd.com</a></li>
                </ul>
              ) : (
                <ul className="footer__col-links">
                  {col.links.map(l => (
                    <li key={l.label}>
                      <a href="#" className="footer__col-link" onClick={(e) => { e.preventDefault(); navigate(l.href); }}>
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTA band */}
      <div className="footer__cta">
        <div className="container footer__cta-inner">
          <div>
            <p className="footer__cta-title">Ready to Get Started?</p>
            <p className="footer__cta-sub">We're ready to handle your ICT, electrical or security project — from small setups to large installations.</p>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a href="tel:+254720119984" className="btn btn--book">📞 Call Now</a>
            <a href="https://wa.me/254715119984" target="_blank" rel="noopener noreferrer" className="btn btn--book">💬 WhatsApp</a>
            <a href="#" className="btn btn--book" onClick={(e) => { e.preventDefault(); navigate('get-started'); }}>
              📩 Get Quote
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bar">
        <div className="container footer__bar-inner">
          <p>© {new Date().getFullYear()} Keedco Ltd. All rights reserved.</p>
          <a href="#" className="footer__bar-link" onClick={(e) => { e.preventDefault(); navigate('terms-of-use'); }}>Terms of Use</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
