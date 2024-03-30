//   _____        _
//  |_   _|____ _| |_
//    | |/ -_) \ /  _|
//    |_|\___/_\_\\__|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * ### Text
 * *Atom*
 *
 * This module contains the render function for the `<Text />` component.
 *
 * @module
 */
import setup, { iText } from './setup.ts';

/**
 *  Render function for the [`<Text/ >`](/x/lunchbox/components/Text/setup.ts?s=iText) component.
 *
 * @param {Partial<iText>} props
 *  {@link iText} (Partial by [design](https://deno.land/x/lunchbox#configure-anything-easily))
 *
 * @returns {JSXInternal.Element}
 *  The `<Text />` component.
 *
 * @todo [!] Add scroll-padding-top to headings.
 * @todo [!] Impleent the prop `indent`.
 * @todo [!] Impleent the prop `inheritColor`.
 */
export default function (props: Partial<iText>) {
  const {
    c,
    fref,
    type,
    indent,
    noMargins,
    children,
    nostyle,
    nostyleAll,
    inheritColor,
    ...p
  } = setup(props);

  return (
    <span ref={fref} class={c.span} {...p}>
      {children}
    </span>
  );
}
