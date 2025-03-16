//   ___                _   ___      _        _    ___           _
//  |_ _|_ _  _ __ _  _| |_/ __| ___| |___ __| |_ / __|___ _ __ | |__  ___
//   | || ' \| '_ \ || |  _\__ \/ -_) / -_) _|  _| (__/ _ \ '  \| '_ \/ _ \
//  |___|_||_| .__/\_,_|\__|___/\___|_\___\__|\__|\___\___/_|_|_|_.__/\___/
//           |_|
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Module for the `InputSelect` molecule.
 * @module molecules/InputSelect
 */
import type { ComponentChildren, JSX } from 'preact';
import { apDef } from '@lunchbox/ui';
import Input from '../atoms/Input.tsx';
import input from '../particles/input.ts';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Property interface for the `InputSelect` molecule. */
export interface iInputSelect {
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

  /**
   * This property helps add options to the select field.
   */
  children: ComponentChildren;
}

/** Default properties of the `InputSelect` molecule. */
const d: iInputSelect = {
  label: '',
  error: '',
  children: undefined,
  required: false,
};

// =====================================================================================================
/**
 * (description)
 *
 * @todo [DOC] Add a description and code example of how to propertly use this component.
 * @todo [DOC] Explain the relationship this molecule has with the Input atom.
 * @todo [DEV] Implement the special functionality for `default` and `placeholder` properties.
 * @todo [DEV] Implement an `<Input.Option>` atom for this molecule's children.
 *
 * @example
 * ```ts
 * import { InputSelect } from 'lunchbox/molecules';
 *
 * (example code)
 * ```
 */
export default function (props: Partial<iInputSelect>): JSX.Element {
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
        <Input.Select required={p.required}>{props.children}</Input.Select>
      </Input.Label>
      {p.error ? <Input.Error>{p.error}</Input.Error> : null}
    </Input.Container>
  );
}
