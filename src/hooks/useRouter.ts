import { useState, useEffect, useCallback } from 'react';
import { PageId } from '../types';

const VALID_PAGES: PageId[] = [
  'home', 'managed-it', 'electrical-cctv', 'cybersecurity',
  'backup-recovery', 'it-consultancy', 'custom-software',
  'about-us', 'our-work', 'case-studies', 'get-started', 'terms-of-use', 'callback',
];

function getPageFromHash(): string {
  const hash = window.location.hash.replace('#', '').trim();
  if (!hash) return 'home';
  if (VALID_PAGES.includes(hash as PageId)) return hash;
  if (hash === 'blog' || hash.startsWith('blog-')) return hash;
  return 'home';
}

export function useRouter() {
  const [currentPage, setCurrentPage] = useState<string>(getPageFromHash);

  useEffect(() => {
    const onHashChange = () => {
      setCurrentPage(getPageFromHash());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = useCallback((page: string) => {
    window.location.hash = page;
  }, []);

  return { currentPage, navigate };
}
