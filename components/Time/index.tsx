//   _____ _
//  |_   _(_)_ __  ___
//    | | | | '  \/ -_)
//    |_| |_|_|_|_\___|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * ### Time
 * *Atom*
 *
 * This module contains the render function for the `<Time />` component.
 *
 * @module
 */
import setup, { iTime } from './setup.ts';

/**
 * Render function for the [`<Time/ >`](/x/lunchbox/components/Time/setup.ts?s=iLinkmap)
 * component.
 *
 * [Component properties are partial](https://deno.land/x/lunchbox#configure-anything-easily)
 *
 * @prop {DateTime} dateObject
 *    A standard DateTime object for consistent results.
 *
 * @prop {string} format
 *    The desired format to display the datetime object.
 *
 * @returns {JSXInternal.Element}
 *  The `<Time />` component.
 */
export default function (props: Partial<iTime>) {
  const { fwd, timestamp, format, ...p } = setup(props);

  console.log(timestamp);

  return (
    <time {...p}>
      {timestamp.format(format)}
    </time>
  );
}
