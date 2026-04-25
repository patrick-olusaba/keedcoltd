import React from 'react';
import { Reveal } from '../shared';

const FeaturedStory: React.FC = () => (
  <section className="featured-story">
    <div className="container featured-story__layout">
      <Reveal className="featured-story__img-wrap">
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&q=80"
          alt="Keedco client project"
          className="featured-story__img"
        />
      </Reveal>
      <Reveal delay={100} className="featured-story__content">
        <span className="featured-story__label">Customer Story</span>
        <h2 className="featured-story__title">
          Delivering enterprise-grade connectivity to a Nairobi business park
        </h2>
        <blockquote className="featured-story__quote">
          "Keedco transformed our entire network infrastructure — from structured cabling to
          enterprise WiFi and CCTV — within two weeks. The result was seamless connectivity
          across all 12 floors with zero downtime since installation."
        </blockquote>
        <cite className="featured-story__cite">
          <strong>James Mwangi</strong>
          <span>Facilities Manager, Nairobi Business Park</span>
        </cite>
      </Reveal>
    </div>
  </section>
);

export default FeaturedStory;
