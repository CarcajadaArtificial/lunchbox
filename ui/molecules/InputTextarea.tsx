//   ___                _  _____        _                      ___           _
//  |_ _|_ _  _ __ _  _| ||_   _|____ _| |_ __ _ _ _ ___ __ _ / __|___ _ __ | |__  ___
//   | || ' \| '_ \ || |  _|| |/ -_) \ /  _/ _` | '_/ -_) _` | (__/ _ \ '  \| '_ \/ _ \
//  |___|_||_| .__/\_,_|\__||_|\___/_\_\\__\__,_|_| \___\__,_|\___\___/_|_|_|_.__/\___/
//           |_|
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Module for the `InputTextarea` molecule.
 * @module molecules/InputTextarea
 */
import type { JSX } from 'preact';
import { apDef } from '@lunchbox/ui';
import input from '../particles/input.ts';
import * as Input from '../atoms/Input.tsx';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Property interface for the `InputTextarea` molecule. */
export interface iInputTextarea {
  /**
   * The input's title. It is built using the `<label/>` element already without the need of linking
   * them with the ids.
   */
  label: string;

  /**
   * An error message to be displayed relative to this input. It also alters the appearance of the
   * component, giving it contrast against other parts of the form.
   */
  error: string;

  /**
   * Makes this input required during form submission.
   */
  required: boolean;
}

/** Default properties of the `InputTextarea` molecule. */
const d: iInputTextarea = {
  label: '',
  error: '',
  required: false,
};

// =====================================================================================================
/**
 * (description)
 *
 * @todo [DOC] Add a description and code example of how to propertly use this component.
 * @todo [DOC] Explain the relationship this molecule has with the Input atom.
 *
 * @example
 * ```ts
 * import { InputTextarea } from 'lunchbox/molecules';
 *
 * (example code)
 * ```
 */
export default function (props: Partial<iInputTextarea>): JSX.Element {
  const p = apDef(d, props);

  return (
    <Input.Container>
      <Input.Label class='flex-col'>
        {p.label
          ? (
            <Input.Text class={p.required ? input.required : undefined}>
              {p.label}
            </Input.Text>
          )
          : null}
        <Input.Textarea required={p.required} />
      </Input.Label>
      {p.error ? <Input.Error>{p.error}</Input.Error> : null}
    </Input.Container>
  );
}
