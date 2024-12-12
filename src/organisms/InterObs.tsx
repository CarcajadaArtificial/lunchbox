import { useEffect, useRef, useState } from 'preact/hooks';
import { JSX } from 'preact';
import { iAtom } from '../atoms.tsx';
import { apDef } from '../../deps.ts';

export type iInterObs = {
  isIntersectingCb: () => void;
  observerOptions: IntersectionObserverInit;
  fwd: iAtom<HTMLDivElement>;
};

const d: iInterObs = {
  isIntersectingCb: () => null,
  observerOptions: {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  },
  fwd: {},
};

export const setup = (props: Partial<iInterObs>) => apDef<iInterObs>(d, props);

export default function (props: Partial<iInterObs>): JSX.Element {
  const { isIntersectingCb, observerOptions, ...fwd } = setup(props);

  const ref = useRef<HTMLDivElement>(null);
  const [_isVisible, setIsVisible] = useState(false);

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

  return <div ref={ref} {...fwd} />;
}
