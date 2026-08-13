import { useEffect, useRef } from 'react';

/**
 * Lightweight scroll-reveal using IntersectionObserver.
 * No external libraries — zero bundle cost.
 */
export function useScrollReveal<T extends HTMLElement>(
  options?: IntersectionObserverInit
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

/**
 * Hook for staggered children reveal.
 * Attach to a parent and it will animate direct children one by one.
 */
export function useStaggerReveal<T extends HTMLElement>(
  staggerMs = 80
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const parent = ref.current;
    if (!parent) return;

    const children = Array.from(parent.children) as HTMLElement[];
    children.forEach((child, i) => {
      child.style.opacity = '0';
      child.style.transform = 'translateY(20px)';
      child.style.transition = `opacity 0.5s ease ${i * staggerMs}ms, transform 0.5s ease ${i * staggerMs}ms`;
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          children.forEach((child) => {
            child.style.opacity = '1';
            child.style.transform = 'translateY(0)';
          });
          observer.unobserve(parent);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(parent);
    return () => observer.disconnect();
  }, [staggerMs]);

  return ref;
}
