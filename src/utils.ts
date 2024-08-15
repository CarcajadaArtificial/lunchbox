//   _   _ _   _ _
//  | | | | |_(_) |___
//  | |_| |  _| | (_-<
//   \___/ \__|_|_/__/
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * This module contains various utility functions.
 * @module
 */

import { SignalLike } from '$fresh/src/types.ts';
import { classNames } from '../deps.ts';
import { EmptyObject } from './types.ts';
import { JSX } from 'preact';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * This function is a shorthand for `classNames.default(...classNames: any[]): string`
 * @param {any[]} classNames
 * @returns {string}
 */
export const cn = classNames.default;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * This function makes final `classNames` (the result of the `cn()` function) optional and allows a
 * custom class to be appended or to override it altogether.
 *
 * @param {string} className
 *  The library's assigned final `className` string, created using the `cn()` function.
 *
 * @param {string | undefined | JSX.SignalLike<string | undefined>} customClassName
 *  It is to be appended to or replace the library's `className`.
 *
 * @param {boolean | undefined} nostyle
 *  True if the `className` string should be ignored.
 *
 * @returns {string}
 *  `"${nostyle ? '' : className} ${customClassName}"`
 */
export const o = (
  classes: string | unknown[],
  props?: {
    class?: string | JSX.SignalLike<string | undefined>;
    nostyle?: boolean;
    nostyleAll?: boolean;
  },
) => {
  if (!props) {
    return;
  } else if (!props.nostyle && !props.nostyleAll) {
    return cn(classes, props.class);
  } else {
    delete props.nostyle, props.nostyleAll;
    return props.class;
  }
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * @todo [!] Complete documentation
 */
export function getDocumentation(relativeUrl: string, fileNames: string[]) {
  const doc: { [key: string]: string } = {};
  const decoder = new TextDecoder('utf-8');
  fileNames.forEach((name) => {
    doc[name] = decoder.decode(Deno.readFileSync(relativeUrl + name + '.md'));
  });
  return doc;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * This function uses an object that stores the default values for an interface `T`. It uses an input
 * object of type Partial<T> with new values to replace matching properties.
 *
 * @param {T} d
 *  Default values for non-optional values in interface `T`.
 *
 * @param {Partial<T>} i
 *  New values recieved with type `Partial<T>`
 *
 * @returns {T}
 *  An object of type `T` that contains the default `d` values and the new input `i` values.
 */
export function apDef<T extends object>(d: T, i: Partial<T>): T {
  if (Object.keys(d).length === 0) {
    throw new Error(
      'Error in applyDefaults(): If there are no default values, this function must be avoided.',
    );
  } else if (Object.keys(i).length === 0) {
    return d;
  }
  return { ...d, ...i };
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * When adding class to an element, say: `<div class={x} />` and `x`'s value ends up being an empty
 * string (`''`), the element will render `<div class />` and end up with tons of empty `class`
 * attributes. This function simplifies the code that replaces parts that end up having an empty string
 * and makes them have `undefined` value.
 *
 * @param {Record<string, string>}
 *  The record of parts that might contain empty string values.
 *
 * @returns {Record<string, string | undefined>}
 *  A new record of the same parts but an `undefined` value replaced empty string values.
 */
export const part = (
  classes: Record<string, string>,
  nostyleAll?: boolean,
): Record<string, string | undefined> =>
  nostyleAll ? {} : rMap<string | undefined>(
    classes,
    (entry) => (entry === '' ? undefined : entry),
  );
export const forward = <
  T extends Record<
    string,
    { class?: SignalLike<string | undefined> | string; nostyle?: boolean }
  >,
>(
  classes: Record<keyof T, string | unknown[]>,
  fwd: T,
): T => {
  Object.keys(fwd).forEach((key) => {
    fwd[key].class = o(classes[key], { ...fwd[key] });
    delete fwd[key].nostyle;
  });
  return fwd;
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * This function emulates the behavior of `Array.prototype.map()` in Records. It calls a function
 * passing each entry of the record as an argument.
 *
 * @param {Record<T>} record
 *  The record to be mapped.
 *
 * @param {function} callback
 *  The function that will map the entries of the record.
 *
 * @returns {Record<T>}
 *  A new cord with each entry mapped to the function.
 */
export function rMap<T>(
  record: Record<string, T>,
  callback: (entry: T, key?: string) => T,
): Record<string, T> {
  const newRecord: Record<string, T> | EmptyObject = {};
  Object.keys(record).forEach((key) => {
    newRecord[key] = callback(record[key], key);
  });
  return newRecord;
}

/**
 * -----------------------------------------------------------------------------------------------------
 * bring
 * -----------------------------------------------------------------------------------------------------
 * @param url
 * @param method
 * @param body
 *
 * @param errorMessage
 *  A string that will be printed when catching an error on the request.
 *
 * @returns
 *  The response JSON object obtained from the the API endpoint.
 * -----------------------------------------------------------------------------------------------------
 */
export async function bring<Req, Res = unknown>(
  url: string,
  method: 'POST' | 'GET',
  body: Req,
  errorMessage?: string,
): Promise<Res | null> {
  let responseObject: Res | null = null;

  await fetch(url, {
    method: method,
    mode: 'no-cors',
    body: JSON.stringify(body),
  })
    .then(async (res) => {
      responseObject = await res.json() as Res;
    })
    .catch((e) => {
      alert(errorMessage);
      console.error(errorMessage, responseObject, e);
    });

  return responseObject;
}
