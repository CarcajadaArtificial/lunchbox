//    ___         _       ___      _
//   / __|___  __| |___  / __| ___| |_ _  _ _ __
//  | (__/ _ \/ _` / -_) \__ \/ -_)  _| || | '_ \
//   \___\___/\__,_\___| |___/\___|\__|\_,_| .__/
//                                         |_|
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * This module contains the prop type, default values, and styles for the `<Code />` component.
 *
 * @module
 */
import { apDef, forward, o } from '../../src/utils.ts';
import { iComponent, iFwd } from '../../src/types.ts';
import { styles } from './styles.ts';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Properties of the `<Code />` component. */
export type iCode = iComponent & {
  fwd: Partial<iCodeFwd>;
};

type iCodeFwd = {
  wrapper: iFwd<HTMLDivElement>;
};

/** Default values of the `<Code />` component's props. */
const defaults: iCode = {
  fwd: {
    wrapper: {},
  },
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Setup function of the `<Code />` component. */
export default (props: Partial<iCode>) => {
  const p = apDef<iCode>(defaults, props);

  p.class = o('code', { ...p });
  p.fwd = forward({
    wrapper: [styles, 'code__wrapper'],
  }, p.fwd);

  return p;
};
