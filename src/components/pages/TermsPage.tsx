import React from 'react';
import { Reveal } from '../shared';

const TermsPage: React.FC = () => (
  <>
    <section className="page-hero">
      <div className="page-hero__bg" />
      <div className="container page-hero__content">
        <Reveal><h1>Terms of Use</h1></Reveal>
        <Reveal delay={80}><p className="page-hero__subtitle">Please read these terms carefully before using our services.</p></Reveal>
      </div>
    </section>

    <section className="section section--white">
      <div className="container terms__body">
        {[
          {
            title: '1. Acceptance of Terms',
            body: 'By accessing or using the KeedCo website and services, you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our services.',
          },
          {
            title: '2. Services',
            body: 'KeedCo provides managed IT services, cybersecurity, backup and recovery, IT consultancy, electrical and CCTV installation, and custom software development. We reserve the right to modify or discontinue any service at any time.',
          },
          {
            title: '3. Intellectual Property',
            body: 'All content on this website, including text, graphics, logos, and software, is the property of KeedCo Ltd and is protected by applicable intellectual property laws. You may not reproduce or distribute any content without prior written permission.',
          },
          {
            title: '4. Limitation of Liability',
            body: 'KeedCo shall not be liable for any indirect, incidental, or consequential damages arising from your use of our services or website. Our total liability shall not exceed the amount paid by you for the specific service giving rise to the claim.',
          },
          {
            title: '5. Privacy',
            body: 'Your use of our services is also governed by our Privacy Policy. We collect and process personal data in accordance with applicable data protection laws.',
          },
          {
            title: '6. Governing Law',
            body: 'These Terms of Use shall be governed by and construed in accordance with the laws of Kenya. Any disputes shall be subject to the exclusive jurisdiction of the courts of Nairobi, Kenya.',
          },
          {
            title: '7. Contact',
            body: 'If you have any questions about these Terms of Use, please contact us at contact@keedcoltd.com or call +254 715 119 984.',
          },
        ].map((section, i) => (
          <Reveal key={i} delay={i * 60}>
            <div className="terms__section">
              <h3>{section.title}</h3>
              <p>{section.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  </>
);

export default TermsPage;
