import React from 'react';
import { TOP_LINKS } from '../../data/navigation';
import { useRouter } from '../../hooks/useRouter';

const TopBar: React.FC = () => {
  const { navigate } = useRouter();
  return (
    <div className="topbar">
      <span className="topbar-contact">
        Have a questions? call{' '}
        <a href="tel:+254715119984">+254 715 119 984</a> or email{' '}
        <a href="mailto:contact@keedcoltd.com">contact@keedcoltd.com</a>
      </span>
      <nav className="topbar-links">
        {TOP_LINKS.map((link) => (
          <a
            key={link.href}
            href="#"
            onClick={(e) => { e.preventDefault(); navigate(link.href); }}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default TopBar;
