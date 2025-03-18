# 🍱 Lunchbox

`` Hello ( ´ ω ` )ノﾞ `` Welcome to 🍱 Lunchbox. So... you're into Deno 🦕 Fresh
🍋? Damn, me too. I've found myself using nothing but Fresh for most of my web
dev projects. But I'm not that much of a user of existing web component
libraries. Even though I respect these, I'm more of a _do-it-yourself_ kind of
guy. That is why I created Lunchbox, and I couldn't help creating an opinionated
product that is built to have my dream features.

## Ideas behind the library

Alright, so what are these features? Instead of listing what can _technically_
be done with this library, the way to describe it is by its core ideas.

### Based on [Atomic Design](https://atomicdesign.bradfrost.com/table-of-contents/)

Shoutout to [Brad Frost](https://bradfrost.com/), thank you for this great piece
of work. A popular concept about modularity in design systems is to consider
them inherently hierarchical. In this, I strongly disagree because atoms are of
no less importance than organisms. But I do agree that they have one
fundamentally different characteristic. Atoms are components only made by
nature's _subatomic particles_ a.k.a. pure Tailwind Classes. Am I stretching too
far with the atomic analogy?

- [Particles](https://jsr.io/@lunchbox/ui/doc/particles) are the fundamental
  design tokens of your UI, represented as Tailwind styles. They help maintain
  consistency and flexibility in your design system.

- [Atoms](https://jsr.io/@lunchbox/ui/doc/atoms) are the basic building blocks
  of your components, made up of HTML elements styled with Particles. They
  encapsulate the simplest UI elements, ensuring a clean and modular design.

- [Molecules](https://jsr.io/@lunchbox/ui/doc/molecules) are composed of Atoms
  and sometimes Particles, serving as the standard unit of interface. They
  strike a balance between simplicity and complexity, making them essential for
  building cohesive UI components.

### Trivial HTML good practices

Component libraries are usually ambiguous about how they handle inner logic,
creating the need to _find out how does it do X_. For example, some might have
only one component for both `<input/>` and `<textarea/>`, which might change
depending on a prop. "Or was it something else? Wait, what was the name of the
class that changes when it's a TextArea?" Having it closer to the HTML Element
logic makes the inner logic of the components really obvious and apparent.

Let's take as an example the `<InputField>` molecule. When using it, you're
expected to follow best practices that enhance user experience (UX). This
includes providing a label and a contextual error message to guide the user. The
props for `<InputField>` are `label`, `error`, and `required`, which ensure that
the input is both informative and accessible.

The `InputField` molecule integrates a label with the input element, ensuring
that the input is nested within a label element for better semantics and
usability. This design choice not only improves accessibility but also maintains
a consistent visual rhythm across the interface, adhering to good aesthetic
practices.

By using the `<InputField>` component, you can create forms that are
user-friendly and visually appealing, while also ensuring that users receive
immediate feedback on their input.

---

## Getting started

Welcome aboard! Whether you're diving into a brand new project or integrating
Lunchbox into an existing one, we've got you covered. Let’s break it down!

### New Project

Starting fresh? Awesome! Here’s how to get Lunchbox up and running in no time:

1. **Run the Initialization Command** Kick things off by running:

   ```bash
   deno run -A jsr:@lunchbox/ui/init
   ```

2. **Imported Libraries** Your new project will come pre-loaded with some
   fantastic libraries:

   - **Fresh** + **Preact**: For building your web app.
   - **Tailwind**: For styling like a pro.
   - **@vyn/cn**: For class name management.
   - **@deno/gfm**: For Markdown support.

3. **Upgrade Your Components** After setting up, keep your components fresh by
   running:
   ```bash
   deno run -A jsr:@lunchbox/ui/upgrade
   ```
   This ensures you’re always using the latest and greatest features!

### Existing Project

Integrating Lunchbox into an existing project? No sweat! Here’s what you need to
do:

1. **Add Lunchbox Package** First, include Lunchbox in your project with:

   ```bash
   deno add jsr:@lunchbox/ui
   ```

2. **Upgrade Components** Next, run the upgrade command to add the latest
   components and static files:

   ```bash
   deno run -A jsr:@lunchbox/ui/upgrade
   ```

3. **Configure Tailwind** Import and install the `lunchboxPlugin` from
   `@lunchbox/ui` and add it to your `tailwind.config.ts`. This step is crucial
   for making the most out of your styling!

   ```typescript:init/base/tailwind.config.ts
   import type { Config } from "tailwindcss";
   import { lunchboxPlugin } from "@lunchbox/ui"; // Ensure this package is installed
   import typographyPlugin from "npm:/@tailwindcss/typography@0.5.15";

    export default {
      content: [
        "{routes,islands,components}/**/*.{ts,tsx}", // Specify where to look for classes
      ],
      plugins: [lunchboxPlugin(), typographyPlugin], // Add Lunchbox and typography plugins
    } satisfies Config;
   ```

4. **Fonts and Styles** Don’t forget to download and add the official fonts for
   Lunchbox along with their styles. You can find these fonts in this same
   repository in the `static` directory.

5. **Configure `_app.tsx`** Finally, make sure to include the the stylesheet and
   the `<Page.Body/>` atom in your `_app.tsx` route. This is where the magic
   happens!

   ```typescript:init/base/routes/_app.tsx
    import type { PageProps } from "fresh";
    import { Body } from "lunchbox/atoms/Page.tsx";

    export default function App({ Component }: PageProps) {
      return (
        <html>
          <head>
            {/* ... */}
            <link rel="stylesheet" href="/styles.css" />
          </head>
          <Body>
            <Component />
          </Body>
        </html>
      );
    }
   ```

And there you have it! You're all set to start building with Lunchbox. If you
run into any hiccups, just holler!
