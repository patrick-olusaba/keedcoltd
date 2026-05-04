import React from 'react';
import Hero            from '../home/Hero';
import ServicesSection from '../home/ServicesSection';
import SocialProof     from '../home/SocialProof';
import TrustBar        from '../home/TrustBar';
import WhoWeServe      from '../home/WhoWeServe';
import WhyKeedCo       from '../home/WhyKeedCo';
import Industries      from '../home/Industries';
import RecentProjects  from '../home/RecentProjects';
import CustomerStories from '../home/CustomerStories';
import ProcessSection  from '../home/ProcessSection';
import Clients         from '../home/Clients';
import FinalCTA        from '../home/FinalCTA';
import { useRouter }   from '../../hooks/useRouter';

const CTANudge: React.FC = () => {
  const { navigate } = useRouter();
  return (
    <div className="cta-nudge">
      <p>Need a reliable contractor? Talk to us today.</p>
      <div className="cta-nudge__btns">
        <a href="tel:+254720119984" className="btn btn--primary">📞 Call Now</a>
        <a href="https://wa.me/254715119984" target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp">💬 WhatsApp</a>
        <a href="#" className="btn btn--outline" onClick={(e) => { e.preventDefault(); navigate('get-started'); }}>📩 Request Quote</a>
      </div>
    </div>
  );
};

const HomePage: React.FC = () => (
  <>
    <Hero />
    <ServicesSection />
    <SocialProof />
    <TrustBar />
    <WhoWeServe />
    <WhyKeedCo />
    <RecentProjects />
    <CTANudge />
    <Industries />
    <CustomerStories />
    <CTANudge />
    <ProcessSection />
    <Clients />
    <FinalCTA />
  </>
);

export default HomePage;
