// Pattern
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * This module contains the prop type, default values, and styles for the `<Pattern />` component.
 *
 * @module
 */
import { apDef, o } from '../../src/utils.ts';
import { iComponent } from '../../src/types.ts';
import { PatternTypes } from '../../src/enums.ts';
import { styles } from './styles.ts';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Properties of the `<Pattern />` component. */
export type iPattern = Omit<iComponent<HTMLDivElement>, 'type'> & {
  type: PatternTypes;
  flip: boolean;
};

/** Default values of the `<Pattern />` component's props. */
const defaults: iPattern = {
  type: 'default',
  flip: false,
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Setup function of the `<Pattern />` component. */
export default (props: Partial<iPattern>) => {
  const p = apDef<iPattern>(defaults, props);

  p.class = o(
    [styles.base, styles.patterns[p.type], p.flip ? 'flip' : null],
    { ...p },
  );

  return p;
};
