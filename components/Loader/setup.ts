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
import { apDef, o, part } from '../../src/utils.ts';
import { iComponent, iFwd } from '../../src/types.ts';
import { animation } from '../../src/styles.ts';
import { styles } from './styles.ts';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Properties of the `<Loader />` component. */
export type iLoader = iComponent<HTMLDivElement> & {
  fwd: Partial<{
    controller: iFwd<HTMLDivElement>;
    container: iFwd<HTMLDivElement>;
    children: iFwd<HTMLDivElement>;
  }>;
};

/** These are the default values of the `<Loader />` component's props. */
const defaults: iLoader = {
  fwd: {},
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Setup function of the `<Loader />` component. */
export default (props: Partial<iLoader>) => {
  const p = apDef<iLoader>(defaults, props);

  const classes = part({
    controller: o([styles, 'loader__controller'], { ...p }),
    container: o(
      [animation.spin, 'loader__container'],
      { ...p.fwd.container },
    ),
    children: o('loader__children', { ...p.fwd.children }),
  });

  delete p.class;
  return { c: classes, ...p };
};
