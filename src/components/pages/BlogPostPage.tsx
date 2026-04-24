import React from 'react';
import { POSTS } from '../../data/blog';
import { useRouter } from '../../hooks/useRouter';

interface Props { slug: string; }

const BlogPostPage: React.FC<Props> = ({ slug }) => {
  const { navigate } = useRouter();
  const post = POSTS.find(p => p.slug === slug);

  if (!post) return (
    <div className="container" style={{ padding: '100px 24px', textAlign: 'center' }}>
      <h2>Post not found</h2>
      <a href="#" onClick={e => { e.preventDefault(); navigate('blog'); }} style={{ color: 'var(--orange)' }}>← Back to blog</a>
    </div>
  );

  const related = POSTS.filter(p => p.slug !== slug && p.category === post.category).slice(0, 2);

  return (
    <>
      {/* Hero */}
      <div className="post-hero" style={{ backgroundImage: `url('${post.image}')` }}>
        <div className="post-hero__overlay" />
        <div className="container post-hero__content">
          <button className="post-hero__back" onClick={() => navigate('blog')}>← Back to blog</button>
          <span className="blog-card__cat">{post.category}</span>
          <h1>{post.title}</h1>
          <div className="post-hero__meta">
            <span>{post.author}</span>
            <span>·</span>
            <span>{post.date}</span>
          </div>
        </div>
      </div>

      {/* Content + Sidebar */}
      <section className="post-body">
        <div className="container post-body__layout">

          {/* Article */}
          <article className="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />

          {/* Sidebar */}
          <aside className="post-sidebar">
            <div className="post-sidebar__cta">
              <h3>Need help with {post.category}?</h3>
              <p>Talk to our team today — free consultation, no commitment.</p>
              <a href="#" className="btn btn--primary btn--full" onClick={e => { e.preventDefault(); navigate('get-started'); }}>
                Get Free Consultation
              </a>
              <a href="https://wa.me/254715119984" target="_blank" rel="noopener noreferrer" className="post-sidebar__wa">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Chat on WhatsApp
              </a>
            </div>

            {related.length > 0 && (
              <div className="post-sidebar__related">
                <h4>Related Articles</h4>
                {related.map(r => (
                  <div key={r.slug} className="post-related-card" onClick={() => navigate(`blog-${r.slug}`)}>
                    <img src={r.image} alt={r.title} loading="lazy" />
                    <div>
                      <p>{r.title}</p>
                      <span>{r.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </aside>

        </div>
      </section>
    </>
  );
};

export default BlogPostPage;
