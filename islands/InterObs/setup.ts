//   ___     _            ___  _         ___      _
//  |_ _|_ _| |_ ___ _ _ / _ \| |__ ___ / __| ___| |_ _  _ _ __
//   | || ' \  _/ -_) '_| (_) | '_ (_-< \__ \/ -_)  _| || | '_ \
//  |___|_||_\__\___|_|  \___/|_.__/__/ |___/\___|\__|\_,_| .__/
//                                                        |_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * This module contains the prop type definitions, default values, and setup function
 * for the `<InterObs />` island component.
 *
 * @module InterObsSetup
 */
import { apDef, o } from '../../src/utils.ts';
import { iComponent } from '../../src/types.ts';

/**
 * Properties of the `<InterObs />` island.
 *
 * @typedef {Object} iInterObs
 * @property {string} animation - Class that makes a CSS animation.
 * @property {() => void} isIntersectingCb - Function that runs when the island is intersecting.
 * @property {IntersectionObserverInit} observerOptions - Options for the IntersectionObserver.
 * @property {...iComponent<HTMLDivElement>} [otherProps] - Additional properties inherited from iComponent.
 */
export type iInterObs = iComponent<HTMLDivElement> & {
  animation: string;
  isIntersectingCb: () => void;
  observerOptions: IntersectionObserverInit;
};

/** Default values for the `<InterObs />` island's props. */
const defaults: iInterObs = {
  animation: '',
  isIntersectingCb: () => null,
  observerOptions: {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  },
};

/**
 * Setup function for the `<InterObs />` island.
 *
 * @param {Partial<iInterObs>} props - The properties passed to the component.
 * @returns {iInterObs} The processed properties with defaults applied.
 */
export default function setup(props: Partial<iInterObs>): iInterObs {
  const p = apDef<iInterObs>(defaults, props);

  p.class = o('interObs', { ...p });

  return p;
}
