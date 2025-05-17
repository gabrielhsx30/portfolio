import { useEffect, useRef, useState, RefObject } from 'react';

interface InViewOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export function useInView(
  ref: RefObject<Element>,
  options: InViewOptions = {}
): boolean {
  const { threshold = 0, rootMargin = '0px', once = false } = options;
  const [isIntersecting, setIsIntersecting] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        
        // If "once" is true and the element is intersecting, disconnect the observer
        if (once && entry.isIntersecting && observerRef.current) {
          observerRef.current.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(ref.current);
    observerRef.current = observer;

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [ref, threshold, rootMargin, once]);

  return isIntersecting;
}