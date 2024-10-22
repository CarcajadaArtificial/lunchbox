//   ___     _            ___  _
//  |_ _|_ _| |_ ___ _ _ / _ \| |__ ___
//   | || ' \  _/ -_) '_| (_) | '_ (_-<
//  |___|_||_\__\___|_|  \___/|_.__/__/
//
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * InterObs component.
 *
 * This is an Organism component that renders the `<InterObs />` island.
 *
 * @module InterObs
 */
import { useEffect, useRef, useState } from 'preact/hooks';
import { JSX } from 'preact';
import setup, { iInterObs } from './setup.ts';
import { cn } from '../../src/utils.ts';
import { effects } from '../../src/styles.ts';

/**
 * InterObs component.
 *
 * @param {Partial<iInterObs>} props - The properties passed to the component.
 * @returns {JSX.Element} The rendered component.
 */
export default function InterObs(props: Partial<iInterObs>): JSX.Element {
  const { animation, isIntersectingCb, observerOptions, ...p } = setup(props);

  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observerCallback: IntersectionObserverCallback = (
      entries,
      observer,
    ) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          isIntersectingCb();
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );
    observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      {...p}
      class={cn(p.class, isVisible ? animation : effects.transparent)}
    />
  );
}
