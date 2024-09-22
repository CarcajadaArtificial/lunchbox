# Contributing

I can't believe you are actually reading this, not only you got interested in
Lunchbox, but you are also willing to contribute to the project. I feel
extremely grateful that you've even considered doing it. That's why I took my
time drafting this document that will guide you through the actual development
process for this library. It will give you the context and reasoning behind
structure, style, and utility. Thank you and I hope you enjoy the read.

## Creating a Component

When diving into component creation, you'll immediately notice the separation
into `setup.ts`, `styles.ts`, and `index.tsx`. This triad isn't arbitrary, it's
a deliberate choice rooted in **readability** and **maintainability**. By
isolating configuration, styling, and rendering, each aspect remains clean and
focused.

JSX, while powerful, tends to be the most verbose and least readable part of our
stack. By compartmentalizing it, we minimize the cognitive load during
development, testing, and debugging. Each file serves a distinct purpose:

- **`setup.ts`**: Houses all configuration and logic, ensuring your component's
  behavior is transparent and manageable.
- **`styles.ts`**: Contains CSS or CSS-in-JS definitions, leveraging the
  strengths of **Deno Resin** for reusable and scalable styling.
- **`index.tsx`**: Focuses solely on rendering the JSX, keeping the markup
  minimal and purposeful.

This structure not only enhances clarity but also sets the stage for seamless
collaboration and future scalability. As you progress, this foundation ensures
that your merge requests are streamlined and poised for approval, maintaining
the integrity and coherence of the Lunchbox library.

### Tools and Types

Let's delve into the backbone of our component creation—the types and utilities
that seamlessly integrate to form a powerful, scalable system. Each piece,
though small on its own, plays a pivotal role in building something robust and
maintainable.

- **`iElement`**: This is your starting point. It merges native HTML attributes
  and event handlers with component-specific properties, providing the
  flexibility to extend from any HTML element—be it a `button`, `input`,
  or `div`. This foundational type ensures that your components are both
  powerful and adaptable.
- **`iComponent`**: Building upon `iElement`, `iComponent` extends this base to
  encapsulate the unique attributes of your component. It allows for additional
  properties without cluttering your JSX, maintaining a clean separation of
  concerns and enhancing reusability.
- **`iFwd`**: As components grow in complexity, containing multiple HTML
  elements or even other components, `iFwd`steps in. It facilitates the
  forwarding of props, styles, and refs to each internal part, ensuring seamless
  integration and interaction within the component hierarchy.

These types aren't just standalone entities; they interlock to form a cohesive
structure. For instance, when working with a compound component composed of
several internal elements, `iFwd` ensures that each part receives the necessary
props without overwhelming the main component's logic.

Now, let's introduce the **`o` function**—a sleek utility that elevates your
styling game. Instead of juggling template literals for class names, `o` offers
a streamlined approach to merging classes, handling conditional logic
effortlessly, and managing forwarded classes with finesse. This not only
simplifies your code but also enhances readability and maintainability.

And styles? We've transcended mere CSS. With **Deno Resin** powering our
CSS-in-JS approach, `styles.ts` becomes your playground for defining modular,
reusable styles that adapt dynamically. This method not only boosts reusability
but also integrates seamlessly with our component logic, making pure CSS a relic
of the past.

Every utility, every type, and every style definition is a testament to our
commitment to **modularity** and **maintainability**. As these small pieces come
together, they form the robust framework that ensures every component you build
is both powerful and easy to manage. This harmonious integration is what sets
Lunchbox apart, paving the way for seamless collaboration and future
scalability.

### Setting up

Now, let's get down to the heart of component creation. The journey always
begins with the `/Component/setup.ts` file. This isn't just a starting point,
it's the cornerstone of your component's existence. Here, you lay down the
foundation that everything else will build upon.

Defining your component starts with two crucial decisions: determining the main
HTML element and outlining the component's attributes. Deciding whether your
component revolves around a `div`, `span`, `section`, or another HTML element
might seem trivial at first glance. However, this choice is pivotal. Take, for
example, an `input` element. By anchoring your component to an `input`, you
inherit a wealth of native attributes and behaviors, allowing your component to
seamlessly integrate and extend the functionality inherent to that element.

Next, you define the component's attributes and their respective data types
within a type named `iComponentName`. This type is an extension
of `iComponent<Element Type Defined>` using our earlier
example, `iComponent<HTMLInputElement>` combined with your component's unique
attribute object. This meticulous definition ensures that your component is both
robust and flexible, ready to handle various configurations without compromising
on integrity.

```ts
// ~/components/Example/setup.ts
import { iComponent } from "../../src/types.ts";

type iExample = iComponent<HTMLInputElement> & {
  foo?: string;
};
```

But here's where things get real. Crafting this setup isn't just about writing
types and interfaces, it's about ensuring that every decision you make here
supports the component's longevity and usability. Skipping this step or
overlooking its importance can lead to a cascade of issues down the line,
affecting everything from maintainability to scalability. Trust in the process,
embrace the structure, and know that this meticulous setup is what keeps
Lunchbox components reliable and pristine.

Then comes the **unavoidable truth**: you still have to write JSX. In
your `index.tsx`, set up a rendering function with `Partial<iComponentName>` as
the prop. But remember, keep the JSX minimal.

```tsx
// ~/components/Example/index.tsx
import { iExample } from "./setup.ts";

export default function MyInput(props: Partial<iExample>) {
  return (
    <div>
      <input />
    </div>
  );
}
```

Don’t clutter it. Every HTML element should have a clear purpose—either
structuring or styling something. Nothing less. This disciplined approach is the
backbone of Lunchbox; overlook it, and the entire structure risks collapsing
under unnecessary complexity. Stay sharp, stay focused, and let your components
shine with clarity and purpose.

### Building it

Thought it was over? Think again. Now comes the real challenge—ensuring your
component stands strong in every scenario. This is where the stakes escalate to
a whole new level. Your component must gracefully handle any situation, whether
it's handed a full suite of props or nothing at all. Simply put: **a default
state is non-negotiable**.

Imagine this: someone uses your component like
this `<Component />` or `<Component>Test</Component>`. If your component throws
an error or behaves unpredictably, you've not only failed them but also
tarnished the integrity of the entire library. This is unacceptable. Every
property, attribute, class, and configuration must be optional, each accompanied
by a robust default value. The `defaults` object is your shield against chaos,
meticulously typed as `iComponent` no `Partial<>` here. Of course, there are
exceptions. Some attributes might default to `null`, but these must be
thoroughly justified and clearly documented.

Here's how to set it up: First, define your `defaults` object within
the `setup.ts` file. This object encapsulates all essential attributes of your
component, ensuring it remains functional out of the box.

```tsx
// ~/components/Example/setup.ts
import { iComponent } from "../../src/types.ts";

type iExample = iComponent<HTMLInputElement> & {
  foo?: string;
};

export const defaults: iExample = {
  type: "text",
  foo: "bar",
};
```

But setting defaults is just the beginning. Enter the **`apDef`** function a
game-changer in merging incoming props with your predefined defaults. This
utility ensures that your component gracefully handles any props it receives,
maintaining consistency and reliability. Next up is the **`forward`** function.
When your component evolves into something more intricate, like a molecule with
multiple internal elements`forward` becomes indispensable. It meticulously
forwards props, styles, and refs to each internal part, ensuring seamless
integration and interaction within your component's structure.

```tsx
// ~/components/Example/setup.ts
import { iComponent, iFwd } from '../../src/types.ts';
import { apDef, forward, o } from '../../src/utils.ts';
import { styles } from './styles.ts';

type iExample = iComponent<HTMLInputElement> & {
  foo?: string;
  fwd: {
    secondary: iFwd<HTMLDivElement>;
  }
};

export const defaults: iExample = {
  type: 'text',
  foo: 'bar',
  fwd: {
    secondary: {}
  }
};

export default(props: Partial<iExample>) {
  const p = apDef<iLayout>(defaults, props);

  p.class = o([styles, 'example'], { ...p });

  p.fwd = forward({
    secondary: 'example__secondary',
 . }, p.fwd);

  return p;
}
```

Here’s the brilliance of it all: by leveraging `apDef` and `forward`, you’re not
just merging props—you’re architecting a dynamic, resilient component that
adapts effortlessly to various states and configurations. This isn’t merely
coding; it’s building with foresight and precision.

But don’t get complacent. The journey doesn’t end here. Each step you take
reinforces the foundation of Lunchbox, ensuring that every component you create
not only meets but exceeds the standards of reliability and maintainability. The
higher the stakes, the sharper your skills must be. Rise to the challenge, and
watch your merge requests soar to approval with confidence.

```tsx
// ~/components/Example/index.tsx
import setup, { iExample } from "./setup.ts";

export default function MyInput(props: Partial<iExample>) {
  const { foo, fwd, ...p } = setup(props);

  return (
    <div {...fwd.secondary}>
      <input {...p} />
    </div>
  );
}
```

By meticulously connecting your defaults with the rendering logic
through `apDef` and `forward`, you ensure that every component is not just
functional but exceptional. This is how Lunchbox maintains its edge—through
unwavering commitment to quality and thoughtful architecture. Keep pushing the
boundaries, and let your components shine under the spotlight of excellence.

### Documenting it

You've reached the pinnacle of your component creation journey. The component is
not only built and tested, but it's also robust and ready to shine within the
Lunchbox library. But hold on—this isn't the endgame yet. The final hurdle
stands between you and that coveted merge request approval, and it's time to
face it head-on: **documentation**.

Documentation isn't just a checkbox; it's the beacon that guides others through
the brilliance you've crafted. Without it, your hard-earned work risks fading
into obscurity, leaving contributors in the dark and future contributors
stumbling through guesswork. This is your moment to ensure that every nuance,
every feature, and every clever design choice is immortalized for the community
to leverage and admire.

Every meaningful addition, be it a new component, a bug fix, or an enhancement,
needs to be documented. This isn't just for record-keeping; it's a roadmap for
anyone navigating the project's evolution.

```md
## vX.Y.Z

- Added the `<Example />` component that supports a new feature. [@yourusername](https://github.com/yourusername)
```

At the end of each bullet point, append your GitHub username as a markdown link.
This not only gives you the recognition you deserve but also creates a
breadcrumb trail that ties your contributions directly to your profile. It's a
subtle yet powerful way to ensure your efforts are acknowledged when changes are
squashed during the merge.

As you polish the documentation, remember that clarity and thoroughness are your
allies. This is the last stretch before your merge request crosses the finish
line. By meticulously documenting your contributions, you're not just enhancing
Lunchbox; you're empowering the entire community to build upon your foundation
with confidence and ease.

So, take a deep breath, review your documentation for completeness, and prepare
to unleash your component upon the world. Your attention to detail here ensures
that your legacy within Lunchbox is both impactful and enduring.
