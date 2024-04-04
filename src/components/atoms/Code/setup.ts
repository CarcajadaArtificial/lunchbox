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
import { applyDefaults, opt, partializeClasses } from '../../../utils.ts';
import { iComponent, iFwd } from '../../../types.ts';
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
  const p = applyDefaults<iCode>(defaults, props);

  const { wrapper } = p.fwd;

  const classes = partializeClasses({
    code: opt('code', p.class, p.nostyle || p.nostyleAll),
    wrapper: opt(styles, wrapper?.class, wrapper?.nostyle || p.nostyleAll),
  });

  delete p.class;
  return { c: classes, ...p };
};
