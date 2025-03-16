import { apDef } from '../utils.ts';

type IconColors =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg';

type IconSizes =
  | 'base'
  | 'personality'
  | 'error';

export type iIcon = {
  size: IconSizes | number;
  color: IconColors;
  fill: string;
};

const defaults: iIcon = {
  size: 'sm',
  color: 'base',
  fill: '',
};

export default (props: Partial<iIcon>) => {
  const p = apDef<iIcon>(defaults, props);

  if (typeof p.size === 'string') {
    p.size = iconSizeToSvgSize(p.size);
  }

  if (p.fill === '') {
    p.fill = iconColorToCssVariable(p.color);
  }

  return p;
};

/**
 * -----------------------------------------------------------------------------------------------------
 * iconSizeToSvgSize
 * -----------------------------------------------------------------------------------------------------
 * @param size
 *  The size name that comes from the `<Icon/>` component parameter.
 *
 * @returns
 *  A number that will be used as the final `width` and `height` of the SVG element.
 * -----------------------------------------------------------------------------------------------------
 */
export const iconSizeToSvgSize = (size: IconSizes) =>
  /* deno-fmt-ignore */
  16 * (
    size === 'xs' ? 1.2 :
    size === 'sm' ? 2 :
    size === 'md' ? 4 :
    size === 'lg' ? 6 :
    8
  );

/**
 * -----------------------------------------------------------------------------------------------------
 * iconColorToCssVariable
 * -----------------------------------------------------------------------------------------------------
 * @param color
 *  The color name that comes from the `<Icon/>` component parameter.
 *
 * @returns
 *  A string that will be used as the final `fill` style of the SVG element.
 * -----------------------------------------------------------------------------------------------------
 */
export const iconColorToCssVariable = (
  color: IconColors,
) => /* deno-fmt-ignore */
(
    color === 'base' ? 'var(--clr-txt-base)' :
    color === 'personality' ? 'var(--clr-txt-personality)' :
    color === 'error' ? 'var(--clr-txt-error)' :
    'var(--clr-txt-base-25)'
  );
