import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../../data/navigation';
import { useRouter } from '../../hooks/useRouter';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { currentPage, navigate } = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [currentPage]);

  const handleNav = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    navigate(href);
  };

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <a href="#" className="navbar__logo" onClick={(e) => handleNav(e, 'home')}>
          <img src="https://keedcoltd.com/wp-content/uploads/2023/05/Keedco-Logo-Final-2-2.png" alt="KeedCo" height="44" />
        </a>

        <ul className="navbar__links">
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
          <li>
            <a
              href="#"
              className={`navbar__link navbar__link--cta${currentPage === 'get-started' ? ' navbar__link--active' : ''}`}
              onClick={(e) => handleNav(e, 'get-started')}
            >
              Get Started
            </a>
          </li>
          <li>
            <button className="navbar__search" aria-label="Search">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
            </button>
          </li>
        </ul>

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
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href="#"
              className={`navbar__drawer-link${item.cta ? ' navbar__drawer-link--cta' : ''}${currentPage === item.href ? ' navbar__drawer-link--active' : ''}`}
              onClick={(e) => handleNav(e, item.href)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
