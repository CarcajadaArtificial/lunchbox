import type { JSX } from 'preact';
import { cn } from '@vyn/cn';
import type { iAtom } from '@lunchbox/ui';
import clr from '../particles/clr.ts';
import txt from '../particles/txt.ts';

// =====================================================================================================
/**
 * This dictionary contains the atoms that render text.
 *
 * - `Display`: The text with the largest font size. For aesthetic or branding purposes.
 * - `Title`: The standard text with the largest font size. sed for page titles.
 * - `Head`: Short for "heading", this text is for section titles.
 * - `Subhead`: Short for "subheading", this text is for sub-section titles.
 * - `Base`: The standard text for paragraphs, labels, and other body text.
 * - `Small`: The smallest text size, is slightly less accessible and can be used for subtle details.
 *
 * ```ts
 * import { Text } from '@lunchbox/ui';
 *
 * <Text.Display>Display text</Text.Display>
 * <Text.Title>Title text</Text.Title>
 * <Text.Head>Head text</Text.Head>
 * <Text.Subhead>Subhead text</Text.Subhead>
 * <Text.Base>Base text</Text.Base>
 * <Text.Small>Small text</Text.Small>
 * ```
 *
 * @todo [DOC] Why where these the selection for text types?
 * @todo [DEV] Remove the `Text` dictionary in favor of individual atoms for non base text, include h1,
 *    h2, and h3 for the Title, Head, and Subhead atoms.
 */
const Heading = {
  Display: (p: iAtom<HTMLSpanElement>): JSX.Element => (
    <span
      {...p}
      class={cn(
        'block',
        'font-heading',
        'font-bold',
        txt.display,
        clr.brand.txt,
        p.class,
      )}
    />
  ),
  Title: (p: iAtom<HTMLSpanElement>): JSX.Element => (
    <span
      {...p}
      class={cn(
        'block',
        'font-heading',
        'font-bold',
        txt.title,
        clr.brand.txt,
        p.class,
      )}
    />
  ),
  Head: (p: iAtom<HTMLSpanElement>): JSX.Element => (
    <span
      {...p}
      class={cn(
        'block',
        'font-heading',
        txt.head,
        clr.brand.txt,
        p.class,
      )}
    />
  ),
  Subhead: (p: iAtom<HTMLSpanElement>): JSX.Element => (
    <span
      {...p}
      class={cn(
        'block',
        txt.subhead,
        p.class,
      )}
    />
  ),
};

export default Heading;
