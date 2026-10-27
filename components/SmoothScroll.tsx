'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const progressRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      // snappy easing curve with a shorter duration so scroll feels instant-ish
      // instead of dragging behind the cursor for over a second
      duration: 0.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      prevent: (node) =>
        node.classList?.contains('confession-scroll') || node.hasAttribute?.('data-lenis-prevent'),
    });

    lenisRef.current = lenis;
    lenis.on('scroll', ScrollTrigger.update);

    const update = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    const updateProgress = (data: { scroll: number; limit: number }) => {
      const el = progressRef.current;
      if (el) el.style.transform = `scaleX(${data.limit > 0 ? data.scroll / data.limit : 0})`;
    };
    lenis.on('scroll', updateProgress);

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // re-sync the scroll engine after every route change so the page can never
  // get stuck between the old and the new scroll positions
  useEffect(() => {
    lenisRef.current?.scrollTo(0, { immediate: true });
  }, [pathname]);

  return (
    <>
      <div aria-hidden="true" className="scroll-progress" ref={progressRef} />
      {children}
    </>
  );
}
