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
import { LAYOUT_TYPES } from '../../src/enums.ts';
import { styles } from './styles.ts';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * Properties of the `<Layout />` component.
 *
 * `type` (LAYOUT_TYPES):
 *    Available options that represent the different column arrangements on the grid.
 *
 * `whitespaceMode` (boolean):
 *    If true, adds horizontal whitespace margins to the layout section. This is useful for making
 *    certain layout types more focused. Additionally, having this mode turned off would create a
 *    layout with the minimum whitespace, making it have a "dashboard-like" appearance.
 */
export type iLayout = iComponent<HTMLDivElement> & {
  type: LAYOUT_TYPES;
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
      cn(styles.module[p.type as LAYOUT_TYPES]),
      module?.class,
      module?.nostyle || p.nostyleAll,
    ),
  });

  delete p.class;
  return { c: classes, ...p };
};
