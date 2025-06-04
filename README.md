# 🍱 Lunchbox

[![JSR](https://jsr.io/badges/@lunchbox/ui)](https://jsr.io/@lunchbox/ui)
[![JSR](https://jsr.io/badges/@lunchbox/ui/score)](https://jsr.io/@lunchbox/ui)

`` Hello ( ´ ω ` )ノﾞ `` Welcome to 🍱 Lunchbox. A lightweight, server-first
styling layer built on top of 💨 **TailwindCSS v4** and 🌼 **DaisyUI v5**,
tailor-made for 🦕 **Deno** 🍋 **Fresh v2** and **Preact**.

## Features

- 🎯 **Custom Design Tokens**: Includes extended spacing scale and responsive
  breakpoints tailored for fine-tuned layouts.
- ✍️ **GFM-Optimized Typography**: Integrates the Tailwind Typography plugin
  with custom styles specifically tuned for GitHub-Flavored Markdown.
- 🎨 **DaisyUI Theming**: Built on top of DaisyUI with both light and dark
  themes ready to go.
- 🧱 **Responsive Grid Layout**: Includes a flexible, column-based layout system
  for responsive content arrangement.
- ⌨️ **Keyboard Navigation Island**: Includes an interactive component for
  arrow-key-based focus navigation between elements.

## Installation

Before starting add the following configuration to `./deno.json`:

```json
{
  "nodeModulesDir": "auto"
}
```

### 1. Install 🍋 Fresh

There are three approaches to installing Fresh: v2 init, v1 init, and manual
setup. All of these have their own benefits so chose any you like as long as you
don't include Tailwind in your installation, if you do you will have to update
it to v4. It is definetly recommended at least a basic understanding of how
Fresh works as well.

Change `PROJECT_NAME` for the name of the root directory for the project.

```sh
deno run -Ar jsr:@fresh/init@2.0.0-alpha.34 PROJECT_NAME --tailwind=false
```

### 2. Install 💨 TailwindCSS

This library is built on top of the latest version of TailwindCSS (v4) and it's
incompatible for any previous one. It is because of this that TailwindCSS must
not be installed along with the Fresh boilerplate project.

1. Install TailwindCSS core v4.

```sh
deno add npm:tailwindcss
```

2. Install the Typography plugin for TailwindCSS.

```sh
deno add npm:@tailwindcss/typography@^0.5.16
```

3. Install [@pakornv's](https://github.com/pakornv) Fresh Plugin TailwindCSS for
   v4. Version 2.0 is still in alpha so try to keep up with this project's
   updates. As a note, there is an official Fresh Plugin TailwindCSS, but
   currently only supports v3.

```sh
deno add --allow-scripts jsr:@pakornv/fresh-plugin-tailwindcss@2.0.0-alpha.1
```

4. Enable the plugin in your application.

```ts
// dev.ts

import { tailwind } from "@fresh/plugin-tailwind";

tailwind(devApp);
```

5. Add the styles module.

```css
/* ./static/styles.css */

/* Add these: */
@import "tailwindcss";
@plugin "@tailwindcss/typography";
```

### 3. Install 🌼 DaisyUI

On top of TailwindCSS, DaisyUI adds a layer of purce SSR components made out of
pure HTML and CSS and a powerful theme system.

```sh
deno add npm:daisyui
```

```css
/* ./static/styles.css */

@import "tailwindcss";

@plugin "@tailwindcss/typography";

/* Add this: */
@plugin "daisyui" {
  /*
    Themes are disabled because they will be replaced by Lunchbox's
    custom themes.
  */
  themes: false;
}
```

### 4. Install 🍱 Lunchbox

Now that everything is set up, you can add this library. There are two parts of
this, one with Preact components and TypeScript utilities and another with a the
CSS modules.

```sh
deno add jsr:@lunchbox/ui npm:lunchbox-css
```

```css
/* ./static/styles.css */

@import "tailwindcss";
/* Add this: */
@import "../node_modules/lunchbox-css/index.css";

@plugin "@tailwindcss/typography";

@plugin "daisyui" {
  themes: false;
}
```

```ts
import /* Components and utilities. */ "@lunchbox/ui";
```

## Usage

There are a few layers of the interface where Lunchbox interacts, design tokens,
server components, and interactive islands.

> [!Warning] Here is where the actual opinions of this library appear. I've seen
> many packages speak about how "opinionated" they are. So here's a word of
> warning, these contain _opinionated opinion that you might not agree with (and
> that's okay)_.

### Design Tokens

- **Breakpoints**: The way the custom breakpoints are thought as "window"
  breakpoint and not "device" breakpoints. Lunchbox replaces
  [Tailwind's Responsive Design](https://tailwindcss.com/docs/responsive-design#overview)
  with two simple breakpoints: `md` with a value of `40em` (equivalent to
  Tailwind's `sm`), and `lg` with a value of `80em` (equivalent to Tailwind's
  `xl`).

  The _opinion_ here is that having five breakpoints create too many viewport
  width ranges that create UI variations for a ver small percentage of window
  instances. This implemantation also follows the "mobile first" philosophy by
  having no breakpoint for "small" devices by it being the default.

  ```html
  <!-- Only shown in viewports of 0px -> 40em dimensions. -->
  <div class="block md:hidden lg:hidden" />
  <!-- Only shown in viewports of 40em -> 80em dimensions. -->
  <div class="hidden md:block lg:hidden" />
  <!-- Only shown in viewports of 80em -> ∞ dimensions. -->
  <div class="hidden md:block lg:hidden" />
  ```

- **Spacing**: These ones are going to be controvertial, that's why they are
  additional to the spacing values already on Tailwind's margins, paddings, etc.
  The opinion here is that the fractional _real-lifeish_ measuring system for
  inches and feet is incredibly convenient. Tailwind already comes with an "inch
  analogue" being the `--spacing` variable (`0.25em` by default).

  Lunchbox adds a "foot analogue" with the `--spacing-1-1` variable having a
  value of `1em`. The reasoning behind the `-1-1` notation is for it to read as
  a "1/1" fraction, meaning a single unit.

  ```html
  <!-- Reads:   1 em      2 em      1/2 em     1/8 em       -->
  <div class="  mt-1-1    mr-2-1    mb-1-2     ml-1-8" />
  <!-- Is the same as:                                      -->
  <div class="  mt-4      mr-8      mb-2       ml-0.5" />
  <!-- Is the same as:                                      -->
  <div class="  mt-[1em]  mr-[2em]  mb-[0.5em] ml-[0.125em]" />
  ```

  Wait are those thirds?

  ```html
  <!-- Reads:   1/3 em                2/3 em               -->
  <div class="  mx-1-3                my-2-3" />
  <!-- Is the same as:                                     -->
  <div class="  mx-[0.3333333333em]   mt-[0.6666666666rem]" />
  ```

- **Responsive noise**: DaisyUI comes equipped with `--fx-noise` and `--noise`
  variables. The probelm is that `--fx-noise` doesn't look _perfectly balanced_
  when you compare it's usage between light and dark modes, light mode is much
  more subtle than dark mode. To solve this, the variable `--fx-noise-50` is
  added with an important change in opacity that goes from `0.2` to `0.05`, and
  using it for dark mode.

  This is an optional CSS module that must be imported individually from
  `.../styles/noise.css`. This module will also enable the `.noise` class for
  styling any component with the noise aesthetic.

  > [!WARNING] This module will style every page's main background with
  > responsive noise, making it really cool.

  ```css
  /* ./static/styles.css */

  @import "tailwindcss";
  @import "../node_modules/lunchbox-css/index.css";
  /* Add this: */
  @import "../node_modules/lunchbox-css/styles/noise.css";

  @plugin "@tailwindcss/typography";

  @plugin "daisyui" {
    themes: false;
  }
  ```

### Server Side Components

- **Markdown to Prose**: Lunchbox exports a `md()` utility function tailor made
  for the `.prose` component in the TailwindCSS Typography plugin. The idea is
  for this component to handle the sanitized parsing of a Markdown file that's
  easily readable through the file system or a fetch function.

  > [!NOTE] You can also you the file system to read the content of a markdown
  > file using `await Deno.readTextFile("...")`.

  ```tsx
  // routes/md.tsx

  import { define } from "@/utils.ts";
  import { md } from "@lunchbox/ui";

  const CONTENT_URL = "...";

  export default define.page(async function Md() {
    const options = {
      content: await (await fetch(CONTENT_URL)).text(),
      /*
        Optional: This is a configuration for deno-gfm's rendering function.
      */
      renderOptions: {},
      /*
        Optional: This is a string transformation function executed after
        the sanitation process.
      */
      transform: (content: string) => content,
    };

    /*
      md(options) returns:
      {
        dangerouslySetInnerHTML: { __html: content; }
      }
    */
    return <div class="prose" {...md(options)} />;
  });
  ```

- **Layout**: This component creates a predefined column-based grid system
  layout for most pages. It makes it easier not to define a grid system for most
  pages of most projects. This was you could only create a customized layout
  when it's really specific.

  This class works with the `col-span-*` TailwindCSS utility. In viewport widths
  smaller than `80em` (default and `md` breakpoints) it uses a **6** column grid
  and in viewports wider than that (`lg` breakpoint) it uses a **12** column
  grid.

  ```html
  <main class="layout">
    <!-- Uses all the columns. -->
    <div class="col-span-full" />
    <!-- Uses 3/6 columns and 6/12 columns (half each) -->
    <div class="col-span-3 lg:col-span-6" />
    <div class="col-span-3 lg:col-span-6" />
  </main>
  ```

### Interactive Islands

- **Directional Keyboard Navigation**: Without disrrupting the `tab` and
  `shift+tab` duo for it being the most common page navigation method, I added
  this feature to allow for they arrow keys as an alternative nagivation.
  Whenever you're focusing on an element you could use the arrow keys to move to
  the closest element in that direction.

  Also, there's included a small batch of animations that makes elements flicker
  on focus and shake a bit if there are no elements in that direction, or when
  you simply press enter. Credit and shoutout to [Commit Mono](https://commitmono.com/) for being the first implementation of this that I've ever seen.

  ```css
  /* ./static/styles.css */

  @import "tailwindcss";
  @import "../node_modules/lunchbox-css/index.css";
  /* Add this: */
  @import "../node_modules/lunchbox-css/styles/keynav.css";

  @plugin "@tailwindcss/typography";

  @plugin "daisyui" {
    themes: false;
  }
  ```

  ```tsx
  // ./islands/Keynav.tsx

  export { keynav as default } from "@lunchbox/ui";
  ```

  ```tsx
  // ./routes/_app.tsx

  import type { PageProps } from "fresh";
  // Add this:
  import Keynav from "../islands/Keynav.tsx";

  export default function App({ Component }: PageProps) {
    return (
      <html>
        <body>
          <Component />
          {/* Add this: */}
          <Keynav padding={100} />
        </body>
      </html>
    );
  }
  ```

### Coming soon

- Island for the IntersectionObserver api.
- Include a `daisyui-react` components wrapper.
- Layouts inside of layouts.
