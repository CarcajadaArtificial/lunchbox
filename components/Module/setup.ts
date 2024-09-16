//   __  __         _      _       ___      _
//  |  \/  |___  __| |_  _| |___  / __| ___| |_ _  _ _ __
//  | |\/| / _ \/ _` | || | / -_) \__ \/ -_)  _| || | '_ \
//  |_|  |_\___/\__,_|\_,_|_\___| |___/\___|\__|\_,_| .__/
//                                                  |_|
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * This module contains the prop type, default values, and styles for the `<Module />` component.
 *
 * @module
 */
import { apDef, o } from '../../src/utils.ts';
import { iComponent } from '../../src/types.ts';
import { styles } from './styles.ts';
import { ModuleSizes } from '../../src/enums.ts';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Properties of the `<Module />` component. */
export type iModule = Omit<iComponent, 'size'> & {
  size: ModuleSizes;
  half: ModuleSizes;
};

/** Default values of the `<Module />` component's props. */
const defaults: iModule = {
  size: 'full',
  half: 'full',
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Setup function of the `<Module />` component. */
export default (props: Partial<iModule>) => {
  const p = apDef<iModule>(defaults, props);

  p.class = o(
    [styles, `module--${p.size} module__half--${p.half}`],
    { ...p },
  );

  return p;
};
