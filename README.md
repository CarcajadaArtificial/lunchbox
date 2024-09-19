# 🍱 Lunchbox

### Warning! This is an incomplete project and it will have breaking changes soon. Expect the version `v1.0.0` to be the first stable and permanent release.

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
nature's _subatomic particles_ a.k.a. pure HTML Elements. Am I stretching too
far with the atomic analogy?

### Trivial HTML good practices

Component libraries are usually ambiguous about how they handle inner logic,
creating the need to _find out how does it do X_. For example, some might have
only one component for both `<input/>` and `<textarea/>`, which might change
depending on a prop. "Or was it something else? Wait, what was the name of the
class that changes when it's a TextArea?" Having it closer to the HTML Element
logic makes the inner logic of the components really obvious and apparent.

Let's take as an example the `<Input>` component. When using it you're expected
to use the best practices with it, plus additional features. These best
practices are multidisciplinary. The field of UX foments the use of a label and
a contextual error message to guide the user. That gives us the props
`<Input label="" error="" />`. These features are not native to the simple
`<input />` HTEML element, it must work together with other elements. It is in
this next area where the good practices aren't forgotten. Like nesting the input
inside a label element (`<label><input /></label>`). Finally, every visual
element inside the component was designed to maintain a perfect vertical rhythm
for good aesthetic practices even in the aesthetics of the interface.

### Configure anything easily

Let us continue with the example of the `<Input />` component. As a very strict
rule, all components must be able to render a useful default state without any
defined prop. so simply using `<Input />` will create a functional input field
even without a label or anything. Likewise, styles and CSS classes are optional
and can be removed with the universal prop `nostyles`.

Also, additional classes can be appended simply by adding a class to the
component. Having `<Input class="x" />` will add the class `"x"` to the
`<input />` element inside it. Every HTML Element and framework component that
make up a particular component will be called a _"piece"_. Every piece of every
component can be referenced using the universal component `fwd`. This is an
oversimplified html code for the `<Input />` component:

```jsx
<div {...fwd.container}>
  <label {...fwd.label}>
    <Text {...fwd.text}>
      <sup {...fwd.required} />
    </Text>
    <input {...params} /> {/* Component's main element */}
  </label>
  <Text {...fwd.error} />
</div>
```

The piece name is used in the CSS classes and in the `fwd` prop
(`<Input fwd={{ label: {class: 'x'} }}` will add the class `'x'` to the piece
"label").

## Getting started

### Step 1: Importing Lunchbox

Assuming you are using Deno Fresh, you could simply add lunchbox's root
directory to your import section inside your project's `deno.json` file. I would
recommend the usage of [Resin](https://github.com/yahiro07/resin) by
[yahiro](https://github.com/yahiro07), it is an excellent CSS-in-JS library.

```json
{
  "imports": {
    "lunchbox/": "https://deno.land/x/lunchbox@vX.X.X/",
    "resin": "https://deno.land/x/resin@vX.X.X/mod.ts"
  }
}
```

### Step 2: Add the Lunchbox plugin

Inside your `fresh.config.ts` file, you can add the Lunchbox plugin. It is fully
compatible with Tailwind so you can run both without any issues:

```ts
// ~/fresh.config.ts
import { defineConfig } from "$fresh/server.ts";
import tailwind from "$fresh/plugins/tailwind.ts";
import lunchbox from "lunchbox/plugin.ts";

export default defineConfig({
  plugins: [tailwind(), lunchbox()],
});
```

### Step 3: Generate static font files

For Lunchbox to work as intended, the build task must be run once when setting
up. This will generate the static font files inside your `/static/` directory.
The imported fonts are: Figtree, FiraCode, and LibreCaslonText.

```
deno task build
```

This will create the following files:

```
~/static
|_ fonts
  |_ Figtree
  | |_ Figtree-700.woff2
  | |_ Figtree-Italic.woff2
  | |_ Figtree-Regular.woff2
  |
  |_ FiraCode
  | |_ FiraCode-Bold.woff2
  | |_ FiraCode-Regular.woff2
  |
  |_ LibreCaslonText
  | |_ Libre-Caslon-Text-700.woff2
  | |_ Libre-Caslon-Text-Italic.woff2
  | |_ Libre-Caslon-Text-Regular.woff2
  |
  |_ fonts.css
```

### Step 4: Setup the `_app.tsx` file

Finally, a few things must be added in the `_app.tsx` file:

1. Add `class="lunchbox"` to the `<html/>` tag.
2. Add the `<link rel="stylesheet" href="/fonts/fonts.css" />` font import link.
3. Add `id="lunchbox-body"` to the `<body/>` tag. It should end up with this
   modifications:

```tsx
// ~/routes/_app.tsx
import { type PageProps } from "$fresh/server.ts";

export default function App({ Component }: PageProps) {
  return (
    <html class="lunchbox">
      <head>
        <link rel="stylesheet" href="/fonts/fonts.css" />
      </head>
      <body id="lunchbox-body">
        <Component />
      </body>
    </html>
  );
}
```

## Usage

After setting up Lunchbox in your project, simply import from the `lunchbox/components/` to start using any component. By being inside the `/components/`

```tsx
// ~/routes/example.tsx. OR  ~/components/example.tsx
import Button from "lunchbox/components/Button/index.tsx";

export default function () {
  return <Button>Click me!</Button>;
}
```

### Using islands

It is a little different for islands, for starters, you must import them from the `~/islands/` directory. This informs you that the imported component requires client-side javascript to function.

```tsx
// ~/islands/Menu.tsx
export { default } from "lunchbox/islands/Menu/index.tsx";
```
 
 After doing this now you can import it from a route or wherever:
 
 ```tsx
// ~/routes/example.tsx. OR  ~/components/example.tsx
import Menu from "../islands/Menu.tsx";

export default function () {
  return <Menu>This is a menu!</Menu>;
}
```