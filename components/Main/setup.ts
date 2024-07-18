//   __  __      _        ___      _
//  |  \/  |__ _(_)_ _   / __| ___| |_ _  _ _ __
//  | |\/| / _` | | ' \  \__ \/ -_)  _| || | '_ \
//  |_|  |_\__,_|_|_||_| |___/\___|\__|\_,_| .__/
//                                         |_|
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * This module contains the prop type, default values, and styles for the `<Main />` component.
 *
 * @module
 */
import { apDef, o, part } from '../../src/utils.ts';
import { iComponent } from '../../src/types.ts';
import { LayoutTypes } from '../../src/enums.ts';
import { iLayout } from '../Layout/setup.ts';
import { styles } from './styles.ts';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Properties of the `<Main />` component. */
export type iMain = Omit<iComponent, 'layout'> & {
  layout: LayoutTypes;
  fwd: Partial<{
    layout: Partial<iLayout>;
  }>;
};

/** These are the default values of the `<Main />` component's props. */
const defaults: iMain = {
  layout: 'default',
  fwd: {},
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Setup function of the `<Main />` component. */
export default (props: Partial<iMain>) => {
  const p = apDef<iMain>(defaults, props);

  const classes = part({
    main: o(styles, { ...p }),
    layout: o('', { ...p.fwd.layout }),
  });

  delete p.class;
  return { c: classes, ...p };
};
