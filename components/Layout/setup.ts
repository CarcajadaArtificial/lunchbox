//   _                       _     ___      _
//  | |   __ _ _  _ ___ _  _| |_  / __| ___| |_ _  _ _ __
//  | |__/ _` | || / _ \ || |  _| \__ \/ -_)  _| || | '_ \
//  |____\__,_|\_, \___/\_,_|\__| |___/\___|\__|\_,_| .__/
//             |__/                                 |_|
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * This module contains the prop type, default values, and styles for the `<Layout />` component.
 *
 * @module
 */
import { apDef, o } from '../../src/utils.ts';
import { iComponent } from '../../src/types.ts';
import { styles } from './styles.ts';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Properties of the `<Layout />` component. */
export type iLayout = iComponent & {
  whitespace: boolean;
};

/** Default values of the `<Layout />` component's props. */
const defaults: iLayout = {
  whitespace: false,
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Setup function of the `<Layout />` component. */
export default (props: Partial<iLayout>) => {
  const p = apDef<iLayout>(defaults, props);

  p.class = o(
    [styles, `layout${p.whitespace ? '--whitespace' : ''}`],
    { ...p },
  );

  return p;
};
