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

import { EmptyObject } from './types.ts';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * @todo [!!] Complete documentation
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
// Disabled linter in this line because I couldn't find a way to adapt the component type schema to support EmptyObject.
// deno-lint-ignore ban-types
export function applyDefaults<T extends {}>(d: T, i: Partial<T>): T {
  if (Object.keys(d).length === 0) {
    throw new Error(
      'Error in applyDefaults(): If there are no default values, this function must be avoided.'
    );
  } else if (Object.keys(i).length === 0) {
    return d;
  }
  return { ...d, ...i };
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * @todo [!!] Complete documentation
 */
export const partializeClasses = (classes: Record<string, string>) =>
  dMap<string | undefined>(classes, (entry) => (entry === '' ? undefined : entry));

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * @todo [!!] Complete documentation
 */
export const bring = async <ResponseObject>(
  url: string,
  method?: 'GET' | 'POST',
  body?: BodyInit | null
): Promise<ResponseObject> =>
  (await fetch(url, {
    method: method,
    body: body,
  }).then(async (res) => {
    return await res.json();
  })) as ResponseObject;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * This function emulates the behavior of `Array.prototype.map()` in Records. It calls a function
 * passing each entry of the record as an argument.
 *
 * @param {Dictionary<T>} record
 *  The record to be mapped.
 *
 * @param {function} callback
 *  The function that will map the entries of the dictionary.
 *
 * @returns {Dictionary<T>}
 *  A new dictionary with each entry mapped to the function.
 */
export function dMap<T>(
  record: Record<string, T>,
  callback: (entry: T, key?: string) => T
): Record<string, T> {
  const newRecord: Record<string, T> | EmptyObject = {};
  Object.keys(record).forEach((key) => {
    newRecord[key] = callback(record[key], key);
  });
  return newRecord;
}
