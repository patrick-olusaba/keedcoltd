import React, { useState } from 'react';
import { POSTS, BLOG_CATEGORIES } from '../../data/blog';
import { Reveal } from '../shared';
import { useRouter } from '../../hooks/useRouter';

const BlogPage: React.FC = () => {
  const [active, setActive] = useState('All');
  const { navigate } = useRouter();
  const filtered = active === 'All' ? POSTS : POSTS.filter(p => p.category === active);
  const [featured, ...rest] = filtered;

  return (
    <>
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="container page-hero__content">
          <Reveal><h1>Insights & Resources</h1></Reveal>
          <Reveal delay={80}>
            <p className="page-hero__subtitle">
              IT tips, cybersecurity guides, and business technology insights for East African businesses.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="blog-page">
        <div className="container">

          {/* Filters */}
          <div className="portfolio__filters">
            {BLOG_CATEGORIES.map(cat => (
              <button
                key={cat}
                className={`portfolio__filter${active === cat ? ' portfolio__filter--active' : ''}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured post */}
          {featured && (
            <Reveal>
              <div className="blog-featured" onClick={() => navigate(`blog-${featured.slug}`)}>
                <div className="blog-featured__img">
                  <img src={featured.image} alt={featured.title} loading="lazy" />
                </div>
                <div className="blog-featured__body">
                  <span className="blog-card__cat">{featured.category}</span>
                  <h2 className="blog-featured__title">{featured.title}</h2>
                  <p className="blog-featured__excerpt">{featured.excerpt}</p>
                  <div className="blog-card__meta">
                    <span>{featured.author}</span>
                    <span>{featured.date}</span>
                  </div>
                  <span className="blog-featured__read">Read article →</span>
                </div>
              </div>
            </Reveal>
          )}

          {/* Grid */}
          <div className="blog-grid">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={i * 60}>
                <div className="blog-card" onClick={() => navigate(`blog-${post.slug}`)}>
                  <div className="blog-card__img">
                    <img src={post.image} alt={post.title} loading="lazy" />
                  </div>
                  <div className="blog-card__body">
                    <span className="blog-card__cat">{post.category}</span>
                    <h3 className="blog-card__title">{post.title}</h3>
                    <p className="blog-card__excerpt">{post.excerpt}</p>
                    <div className="blog-card__meta">
                      <span>{post.author}</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default BlogPage;
