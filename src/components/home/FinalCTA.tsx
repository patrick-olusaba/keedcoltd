import React from 'react';
import { useRouter } from '../../hooks/useRouter';

const FinalCTA: React.FC = () => {
  const { navigate } = useRouter();
  return (
    <section className="final-cta">
      <div className="container final-cta__inner">
        <h2 className="final-cta__title">Ready to Get Started?</h2>
        <p className="final-cta__sub">
          We're ready to handle your ICT, electrical or security project — from small setups to large installations.
        </p>
        <div className="final-cta__btns">
          <a href="tel:+254720119984" className="btn--getronics-cta">📞 Call Now</a>
          <a href="https://wa.me/254715119984" target="_blank" rel="noopener noreferrer" className="btn--getronics-cta btn--getronics-cta--whatsapp">💬 WhatsApp</a>
          <a href="#" className="btn--getronics-cta btn--getronics-cta--outline" onClick={(e) => { e.preventDefault(); navigate('get-started'); }}>📩 Get Quote</a>
        </div>
        <p className="final-cta__nudge">Need a reliable contractor? Talk to us today.</p>
      </div>
    </section>
  );
};

export default FinalCTA;
