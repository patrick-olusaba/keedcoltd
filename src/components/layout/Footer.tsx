import React from 'react';
import { useRouter } from '../../hooks/useRouter';

const Footer: React.FC = () => {
  const { navigate } = useRouter();
  return (
    <footer className="footer">
      <div className="footer__cta">
        <div className="footer__overlay" />
        <div className="container footer__inner">
          <div className="footer__text">
            <h2 className="footer__title">Ready to modernize your IT?</h2>
            <p className="footer__subtitle">Get a free managed IT quote in minutes</p>
            <div className="footer__contact">
              <p className="footer__contact-label">Contact Us</p>
              <a href="tel:+254715119984" className="footer__contact-link">+(254) 715 119 984</a>
              <a href="mailto:contact@keedcoltd.com" className="footer__contact-link">contact@keedcoltd.com</a>
            </div>
          </div>
          <a
            href="#"
            className="btn btn--book"
            onClick={(e) => { e.preventDefault(); navigate('get-started'); }}
          >
            Book a meeting now
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 8 16 12 12 16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
          </a>
        </div>
      </div>
      <div className="footer__bar">
        <div className="container">
          <p>© {new Date().getFullYear()} keedcoltd.com.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
