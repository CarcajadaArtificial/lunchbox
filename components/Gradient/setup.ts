//    ___             _ _         _     ___      _
//   / __|_ _ __ _ __| (_)___ _ _| |_  / __| ___| |_ _  _ _ __
//  | (_ | '_/ _` / _` | / -_) ' \  _| \__ \/ -_)  _| || | '_ \
//   \___|_| \__,_\__,_|_\___|_||_\__| |___/\___|\__|\_,_| .__/
//                                                       |_|
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * This module contains the prop type, default values, and styles for the `<Gradient />` component.
 *
 * @module
 */
import { apDef, o, part } from '../../src/utils.ts';
import { iComponent } from '../../src/types.ts';
import { GRADIENT_PATTERNS } from '../../src/enums.ts';
import { styles } from './styles.ts';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Properties of the `<Gradient />` component. */
export type iGradient = iComponent<HTMLDivElement> & {
  gradient_pattern: GRADIENT_PATTERNS | null;
  flip: boolean;
};

/** Default values of the `<Gradient />` component's props. */
const defaults: iGradient = {
  gradient_pattern: null,
  flip: false,
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Setup function of the `<Gradient />` component. */
export default (props: Partial<iGradient>) => {
  const p = apDef<iGradient>(defaults, props);

  const classes = part({
    gradient: o(
      [
        styles.gradient,
        p.gradient_pattern ? styles.patterns[p.gradient_pattern] : null,
        p.flip ? 'flip' : null,
      ],
      { ...p },
    ),
  });

  delete p.class;
  return { c: classes, ...p };
};
