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
import { apDef, cn, o, part } from '../../src/utils.ts';
import { iComponent, iFwd } from '../../src/types.ts';
import { styles } from './styles.ts';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Properties of the `<Code />` component. */
export type iCode = iComponent & {
  fwd: Partial<{
    wrapper: iFwd<HTMLDivElement>;
  }>;
};

/** Default values of the `<Code />` component's props. */
const defaults: iCode = {
  fwd: {},
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Setup function of the `<Code />` component. */
export default (props: Partial<iCode>) => {
  const p = apDef<iCode>(defaults, props);

  const { wrapper } = p.fwd;

  const classes = part({
    code: o(cn('code', p.class), { ...p }),
    wrapper: o(cn(styles, wrapper?.class), { ...wrapper }),
  });

  delete p.class;
  return { c: classes, ...p };
};
