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
 * Render function for the [`<Text/ >`](/x/lunchbox/components/Text/setup.ts?s=iText) component.
 *
 * [Component properties are partial](https://deno.land/x/lunchbox#configure-anything-easily)
 *
 * @param {TextTypes} type
 *    Changes the style of the text.
 *    - **paragraph:** The default base text.
 *    - **small:** A smaller variation of the paragraph and smallest of all the types.
 *    - **title:** The standard large heading in the document
 *    - **display:** A larger version of the title and largest of all the types. It should be used for
 *        specific aesthetic purposes, it's too large to be readable on smaller screens.
 *    - **heading:** A smaller version of the title, used for sections within it.
 *    - **subheading:** The smaller heading type, has a unique style for smaller sections within
 *        headings.
 *
 * @param {boolean} inheritColor
 *    If true, the default text color will be avoided and instead it will inherit it.
 *
 * @param {boolean} noMargins
 *    If true, removes the default margins from the text.
 *
 * @param {boolean} indent
 *    If true, adds a default indentation to the text.
 *
 * @returns {JSXInternal.Element}
 *  The `<Text />` component.
 *
 * @todo [!] Add scroll-padding-top to headings.
 * @todo [!] Impleent the prop `indent`.
 * @todo [!] Impleent the prop `inheritColor`.
 */
export default function Text(props: Partial<iText>) {
  const {
    type,
    indent,
    noMargins,
    children,
    inheritColor,
    ...p
  } = setup(props);

  return <span {...p}>{children}</span>;
}
