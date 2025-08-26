import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

const HEADER_OFFSET = 72;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// export function ScrollToHash() {
//   const { pathname, hash } = useLocation();

//   useEffect(() => {
//     if (!hash) return;
//     const id = hash.replace('#', '');
//     const el = document.getElementById(id);
//     if (!el) return;

//     const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
//     window.scrollTo({ top, behavior: 'smooth' });
//   }, [hash]);

//   return null;
// }

export function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's a hash, scroll to the element with header offset
    if (hash) {
      const id = hash.slice(1);
      // Use rAF to ensure layout is ready (helps when content loads after route change)
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (!el) return;

        const top =
          Math.max(
            0,
            el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET
          );

        // Respect prefers-reduced-motion
        const prefersReduced =
          typeof window !== 'undefined' &&
          window.matchMedia &&
          window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        window.scrollTo({
          top,
          left: 0,
          behavior: prefersReduced ? 'auto' : 'smooth',
        });
      });
      return;
    }

    // No hash → reset to top on every pathname change
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname, hash]);

  return null;
}