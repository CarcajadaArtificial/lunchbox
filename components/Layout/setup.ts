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
import { applyDefaults, cn, opt, partializeClasses } from '../../src/utils.ts';
import { iComponent, iFwd } from '../../src/types.ts';
import { LayoutTypes } from '../../src/enums.ts';
import { styles } from './styles.ts';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Properties of the `<Layout />` component. */
export type iLayout = iComponent<HTMLDivElement> & {
  type: LayoutTypes;
  whitespaceMode: boolean;
  fwd: Partial<{
    module: iFwd<HTMLDivElement>;
  }>;
};

/** Default values of the `<Layout />` component's props. */
const defaults: iLayout = {
  whitespaceMode: false,
  type: 'full',
  fwd: {},
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Setup function of the `<Layout />` component. */
export default (props: Partial<iLayout>) => {
  const p = applyDefaults<iLayout>(defaults, props);

  const { module } = p.fwd;

  const classes = partializeClasses({
    layout: opt(
      cn(
        props.whitespaceMode ? styles.whitespaceGrid : styles.grid,
      ),
      p.class,
      p.nostyle || p.nostyleAll,
    ),
    module: opt(
      cn(styles.module[p.type as LayoutTypes]),
      module?.class,
      module?.nostyle || p.nostyleAll,
    ),
  });

  delete p.class;
  return { c: classes, ...p };
};
