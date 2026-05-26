import React, { useState, useEffect, useRef } from 'react';
import { NAV_ITEMS, SERVICE_NAV } from '../../data/navigation';
import { useRouter } from '../../hooks/useRouter';

const ChevronDown = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{marginLeft:3,verticalAlign:'middle'}}>
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);



const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const dropRef = useRef<HTMLLIElement>(null);
  const { currentPage, navigate } = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); setDropOpen(false); }, [currentPage]);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) setDropOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleNav = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    navigate(href);
  };

  const isServiceActive = SERVICE_NAV.some(s => s.href === currentPage);

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <a href="#" className="navbar__logo" onClick={(e) => handleNav(e, 'home')}>
          <img src="/Keedco_Logo.jpg" alt="KeedCo" height="40" />
        </a>

        <ul className="navbar__links">
          {/* Services dropdown */}
          <li ref={dropRef} className="navbar__dropdown-wrap">
            <button
              className={`navbar__link navbar__dropdown-trigger${isServiceActive ? ' navbar__link--active' : ''}`}
              onClick={() => setDropOpen(v => !v)}
              aria-expanded={dropOpen}
            >
              Services <ChevronDown />
            </button>
            {dropOpen && (
              <ul className="navbar__dropdown">
                {SERVICE_NAV.map(item => (
                  <li key={item.label}>
                    <a
                      href="#"
                      className={`navbar__dropdown-item${currentPage === item.href ? ' navbar__dropdown-item--active' : ''}`}
                      onClick={(e) => handleNav(e, item.href)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {NAV_ITEMS.filter(i => !i.cta).map((item) => (
            <li key={item.href}>
              <a
                href="#"
                className={`navbar__link${currentPage === item.href ? ' navbar__link--active' : ''}`}
                onClick={(e) => handleNav(e, item.href)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side: Contact + Get Started */}
        <div className="navbar__actions">
          <a href="#" className="navbar__contact-btn" onClick={(e) => handleNav(e, 'callback')}>
            Contact Us
          </a>
          <a href="#" className="navbar__link navbar__link--cta" onClick={(e) => handleNav(e, 'get-started')}>
            Get Started
          </a>
        </div>

        <button
          className={`hamburger${menuOpen ? ' hamburger--open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {menuOpen && (
        <div className="navbar__drawer">
          <p className="navbar__drawer-group">Services</p>
          {SERVICE_NAV.map(item => (
            <a key={item.label} href="#" className="navbar__drawer-link" onClick={(e) => handleNav(e, item.href)}>
              {item.label}
            </a>
          ))}
          <p className="navbar__drawer-group">Menu</p>
          {NAV_ITEMS.map(item => (
            <a
              key={item.href}
              href="#"
              className={`navbar__drawer-link${item.cta ? ' navbar__drawer-link--cta' : ''}${currentPage === item.href ? ' navbar__drawer-link--active' : ''}`}
              onClick={(e) => handleNav(e, item.href)}
            >
              {item.label}
            </a>
          ))}
          <a href="#" className="navbar__drawer-link navbar__drawer-link--cta" onClick={(e) => handleNav(e, 'callback')}>
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
