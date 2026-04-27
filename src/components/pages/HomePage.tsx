import React from 'react';
import Hero            from '../home/Hero';
import ServicesSection from '../home/ServicesSection';
import SocialProof     from '../home/SocialProof';
import TrustBar        from '../home/TrustBar';
import ModernIT        from '../home/ModernIT';
import WhyKeedCo       from '../home/WhyKeedCo';
import Industries      from '../home/Industries';
import CustomerStories from '../home/CustomerStories';
import ProcessSection  from '../home/ProcessSection';
import Clients         from '../home/Clients';

const HomePage: React.FC = () => (
  <>
    <Hero />
    <ServicesSection />
    <SocialProof />
    <TrustBar />
    <ModernIT />
    <WhyKeedCo />
    <Industries />
    <CustomerStories />
    <ProcessSection />
    <Clients />
  </>
);

export default HomePage;
