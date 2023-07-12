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

/**
 * This function uses an object that stores the default values for an interface `T`. It uses an input object of type Partial<T> with new values to replace matching properties.
 *
 * @param d Default values for non-optional values in interface `T`.
 * @param i New values recieved with type `Partial<T>`
 *
 * @returns An object of type `T` that contains the default `d` values and the new input `i` values.
 *
 * @example ```Typescript
  interface Example {
    foo: string
    bar?: string
  }

  function doSomething(props: Partial<Example>) {
    const { foo, bar } = applyDefaults({foo: 'foo'}, props)
  }
  ```
 */
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

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
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
