import React from 'react';
import { useRouter } from '../../hooks/useRouter';

const ResponseGuarantee: React.FC = () => {
  const { navigate } = useRouter();
  return (
    <div className="rg-banner">
      <div className="rg-banner__inner">
        <span className="rg-banner__pulse" />
        <span className="rg-banner__text">
          <strong>15-Minute Response Guarantee</strong> — We respond to every critical IT issue within 15 minutes, 24/7 or your next month is free.
        </span>
        <a href="#" className="rg-banner__cta" onClick={e => { e.preventDefault(); navigate('get-started'); }}>
          Hold us to it →
        </a>
      </div>
    </div>
  );
};

export default ResponseGuarantee;
