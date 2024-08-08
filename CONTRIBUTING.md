# Contributing to Deno Fresh Component Library

## Tools and Types for Creating Components

Before we dive into creating a component, let's familiarize ourselves with some essential tools, types, and functions that will make our development process smoother and more efficient.

### Key Types

#### iComponent

The `iComponent` type is like a blueprint for our components. The `i` prefix is a convention that stands for "interface", indicating that this type defines a structure for our components. This type ensures consistency and provides important properties like `fref`, `nostyle`, and `nostyleAll`.

```typescript
    export type iComponent<T extends EventTarget = HTMLElement> =
      & iElement<T>
      & {
        fref?: Ref<T>;
        nostyle?: boolean;
        nostyleAll?: boolean;
      };
```

- **fref**: This property allows the component to receive a Preact reference pointing to the main HTML element, enabling direct manipulation of the DOM element.
- **nostyle**: When set to true, this property removes the default styles of the main element of the component, allowing for custom styling, secondary elements remain untouched.
- **nostyleAll**: This property removes all default styles and class names from all HTML elements within the component, providing complete styling control to the developer.

#### iFwd

The `iFwd` type is used for forwarding props and references to a component's secondary HTML elements. The `i` prefix indicates that it's an interface type, and `Fwd` stands for "Forward". This type allows secondary elements within a component to be configured and referenced, ensuring they can be styled and manipulated independently from the main element.

```typescript
    export type iFwd<T extends EventTarget = HTMLElement> = iElement<T> & {
      ref?: Ref<T>;
      nostyle?: boolean;
    };
```

### Useful Functions

#### o Function

The `o` function, short for "optional", allows custom classes to be appended or override default classes. It helps us manage class names efficiently by combining default class names with any additional classes provided through props.

```typescript
    export const o = (
      classes: string | unknown[],
      props?: {
        class?: string | JSX.SignalLike<string | undefined>;
        nostyle?: boolean;
      },
    ) => props && !props.nostyle ? classNames.default(classes, props.class) : '';
```

#### apDef Function

The `apDef` function, short for "Apply Defaults", merges default values with new values. This ensures that our components have the necessary defaults while allowing for customization.

```typescript
    export function apDef<T extends {}>(d: T, i: Partial<T>): T {
      if (Object.keys(d).length === 0) {
        throw new Error('Error in apDef(): If there are no default values, this function must be avoided.');
      } else if (Object.keys(i).length === 0) {
        return d;
      }
      return { ...d, ...i };
    }
```

#### part Function

The `part` function, short for "Partialize Classes", ensures empty strings are replaced with `undefined`. This helps avoid rendering elements with empty class attributes, which can lead to cleaner HTML output.

```typescript
    export const part = (
      classes: Record<string, string>,
      nostyleAll?: boolean,
    ): Record<string, string | undefined> =>
      nostyleAll ? {} : rMap<string | undefined>(
        classes,
        (entry) => (entry === '' ? undefined : entry),
      );
```

These types and functions are the foundation for creating consistent, customizable, and well-structured components. They help us maintain a clean codebase and provide flexibility in how components are styled and interacted with. Now that we understand them, let's move on to creating a new component.

## Creating a New Component

### Component Structure

Think of a component as a mini LEGO set. Each piece fits together to form the final product. Here's how we organize our component files:

```typescript
    ~/components/Example/
      ├── index.tsx
      ├── setup.ts
      └── styles.ts
```

- **index.tsx**: This is the main file where the component's structure and rendering logic live.
- **setup.ts**: This file defines the component's properties, default values, and setup logic.
- **styles.ts**: This file contains the styles specific to the component.

### Step-by-Step Guide

#### Step 1: Define the Component's Properties

First, let's define the properties and default values for our `<Example />` component. This is done in the `setup.ts` file. We'll include properties like `title` and `description`, and use the `fref` property to configure secondary elements.

```typescript
    // ~/components/Example/setup.ts

    import { apDef, o, part } from '../../src/utils.ts';
    import { iComponent, iFwd } from '../../src/types.ts';

    // Define the properties of the <Example /> component
    export type iExample = iComponent<HTMLDivElement> & {
      title: string;
      description: string;
      fref?: {
        title?: iFwd<HTMLHeadingElement>;
        description?: iFwd<HTMLParagraphElement>;
      };
    };

    // Default values for the <Example /> component's props
    const defaults: iExample = {
      title: 'Default Title',
      description: 'This is a default description.',
      fref: {},
      nostyle: false,
      nostyleAll: false,
    };

    // Setup function for the <Example /> component
    export default (props: Partial<iExample>) => {
      const p = apDef<iExample>(defaults, props);

      const c = part({
        example: o('example', { ...p }),
        title: o('example__title', { ...p.fref?.title }),
        description: o('example__description', { ...p.fref?.description }),
      }, p.nostyleAll);

      delete p.class;
      return { c, ...p };
    };
```

In this setup:
- **iExample**: Defines the properties specific to the `<Example />` component. We include `title` and `description` as main properties, and `fref` for configuring secondary elements.
- **defaults**: These are the default values for the component’s properties, ensuring the component has meaningful initial values.
- **setup function**: Merges the provided props with the default values and applies styles using our helper functions.

#### Step 2: Add Styles

```typescript
    // ~/components/Example/styles.ts

    import { css } from '../../deps.ts';

    export const styles = css`
    .example {
      padding: 1rem;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    .example__title {
      font-size: 1.5rem;
      font-weight: bold;
    }

    .example__description {
      font-size: 1rem;
      color: #666;
    }
    `;
```

#### Step 3: Implement the Component

Finally, let's put everything together in the `index.tsx` file. This file contains the render function for the `<Example />` component. We'll make sure to include all secondary elements and pass any relevant props.

```
    // ~/components/Example/index.tsx

    import setup, { iExample } from './setup.ts';

    // Render function for the <Example /> component
    export default function Example(props: Partial<iExample>) {
      const { c, fref, title, description, ...p } = setup(props);

      return (
        <div
          ref={fref}
          class={c.example}
          {...p}
        >
          <h2 ref={fref?.title?.ref} class={c.title} {...fref?.title}>{title}</h2>
          <p ref={fref?.description?.ref} class={c.description} {...fref?.description}>{description}</p>
        </div>
      );
    };
```

In this render function:
- **setup function**: We call this function to get the properties and styles for the component.
- **JSX structure**: This is the JSX code that defines what our component looks like. We ensure each secondary element (`title` and `description`) includes `ref` and `...fwd.secondaryElement` to handle forwarded props.

### Creating an Island (TBD)

### This section will be filled in later with information on creating islands.

---

We hope this guide helps you create awesome components for the Deno Fresh Component Library. If you have any questions, feel free to reach out to us. Happy coding!
