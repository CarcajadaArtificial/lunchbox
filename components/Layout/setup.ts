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
import { apDef, o, part } from '../../src/utils.ts';
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
  type: 'default',
  fwd: {},
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Setup function of the `<Layout />` component. */
export default (props: Partial<iLayout>) => {
  const p = apDef<iLayout>(defaults, props);

  const { module } = p.fwd;

  const classes = part({
    layout: o(
      [
        styles,
        props.type === 'default'
          ? null
          : props.whitespaceMode
          ? 'layout--whitespace'
          : 'layout',
      ],
      { ...p },
    ),
    module: o(`layout__module--${props.type}`, { ...module }),
  });

  delete p.class;
  return { c: classes, ...p };
};
