//   _                 _
//  | |   ___  __ _ __| |___ _ _
//  | |__/ _ \/ _` / _` / -_) '_|
//  |____\___/\__,_\__,_\___|_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * This module contains the prop type, default values, and styles for the `<Loader />` component.
 *
 * @module
 */
import { Ref } from 'preact';
import { apDef, o, part } from '../../src/utils.ts';
import { iComponent } from '../../src/types.ts';
import { iText } from '../Text/setup.ts';
import { animation } from '../../src/styles.ts';
import { styles } from './styles.ts';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Properties of the `<Loader />` component. */
export type iLoader = iComponent<HTMLDivElement> & {
  fwd: Partial<{
    icon: Partial<{
      size: number;
      color: string;
      stroke: number;
      ref?: Ref<SVGSVGElement>;
      nostyle?: boolean;
      class: string;
    }>;
    text: Partial<iText>;
  }>;
};

/** These are the default values of the `<Loader />` component's props. */
const defaults: iLoader = {
  fwd: {},
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Setup function of the `<Loader />` component. */
export default (props: Partial<iLoader>) => {
  const p = apDef<iLoader>(defaults, props);

  const classes = part({
    loader: o(styles, { ...p }),
    icon: o(['loader__icon', animation.spin], { ...p.fwd.icon }),
    text: o('loader__text', { ...p.fwd.text }),
  });

  delete p.class;
  return { c: classes, ...p };
};
