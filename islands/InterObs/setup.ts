//   ___     _            ___  _
//  |_ _|_ _| |_ ___ _ _ / _ \| |__ ___
//   | || ' \  _/ -_) '_| (_) | '_ (_-<
//  |___|_||_\__\___|_|  \___/|_.__/__/
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * This module contains the prop type, default values, and styles for the `<InterObs />` island.
 *
 * @module
 */
import { apDef, o } from '../../src/utils.ts';
import { iComponent } from '../../src/types.ts';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Properties of the `<InterObs />` island. */
export type iInterObs = iComponent<HTMLDivElement> & {
  /** Class that makes a CSS animation. */
  animation: string;
  /** Function that will run whenever the island is intersecting. */
  isIntersectingCb: () => void;
  observerOptions: IntersectionObserverInit;
};

/** These are the default values of the `<Menu />` island's props. */
const defaults: iInterObs = {
  animation: '',
  isIntersectingCb: () => null,
  observerOptions: {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  },
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Setup function of the `<Menu />` island. */
export default (props: Partial<iInterObs>) => {
  const p = apDef<iInterObs>(defaults, props);

  p.class = o('interObs', { ...p });

  return p;
};
