//   _                 _
//  | |   ___  __ _ __| |___ _ _
//  | |__/ _ \/ _` / _` / -_) '_|
//  |____\___/\__,_\__,_\___|_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * This module contains the prop type, default values, and styles for the `<Loader />` component.
 *
 * @module
 */
import { apDef, forward, o } from '../../src/utils.ts';
import { iComponent, iFwd } from '../../src/types.ts';
import { animation } from '../../src/styles.ts';
import { styles } from './styles.ts';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Properties of the `<Loader />` component. */
export type iLoader = iComponent<HTMLDivElement> & {
  loaded: boolean;
  fwd: Partial<iLoaderFwd>;
};

type iLoaderFwd = {
  container: iFwd<HTMLDivElement>;
  children: iFwd<HTMLDivElement>;
};

/** These are the default values of the `<Loader />` component's props. */
const defaults: iLoader = {
  loaded: true,
  fwd: {
    container: {},
    children: {},
  },
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Setup function of the `<Loader />` component. */
export default (props: Partial<iLoader>) => {
  const p = apDef<iLoader>(defaults, props);

  p.class = o([styles, 'loader'], { ...p });
  p.fwd = forward({
    container: [animation.spin, 'loader__container'],
    children: [animation.fadein, 'loader__children'],
  }, p.fwd);

  return p;
};
