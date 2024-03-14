//   ___                _
//  |_ _|_ _  _ __ _  _| |_
//   | || ' \| '_ \ || |  _|
//  |___|_||_| .__/\_,_|\__|
//           |_|
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * ### Input
 * *Molecule*
 *
 * This module contains the render function for the `<Input />` component.
 *
 * @module
 */
import Text from '../Text/index.tsx';
import setup, { iInput } from './setup.ts';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * Render function for the [`<Input/ >`](/x/lunchbox/components/Input/setup.ts?s=iInput) component.
 *
 * @param {Partial<iInput>} props
 *  {@link iInput} (Partial by [design](https://deno.land/x/lunchbox#configure-anything-easily))
 *
 * @returns {JSXInternal.Element}
 *  The `<Input />` component.
 */
export default function (props: Partial<iInput>) {
  const { c, nostyle, nostyleAll, fref, fwd, maxWidth, label, error, ...p } =
    setup(props);

  return (
    <div ref={fwd.container?.ref} class={c.container}>
      <label ref={fwd.label?.ref} class={c.label}>
        {label === '' ? null : (
          <Text
            nostyleAll={nostyleAll}
            fref={fwd.text?.fref}
            noMargins
            class={c.text}
          >
            <>{label}</>
            {p.required
              ? (
                <sup
                  ref={fwd.required?.ref}
                  title='Required'
                  class={c.required}
                >
                  *
                </sup>
              )
              : null}
          </Text>
        )}
        <input ref={fref} class={c.input} {...p} />
      </label>
      {error
        ? (
          <Text
            fref={fwd.error?.fref}
            noMargins
            type='small'
            inheritColor
            class={c.error}
            nostyleAll={nostyleAll}
          >
            {error}
          </Text>
        )
        : null}
    </div>
  );
}
