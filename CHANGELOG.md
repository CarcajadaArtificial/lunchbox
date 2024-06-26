# Changelog

## v0.3.56

- Minor updates on the `<Kbd/>` and `<Panel/>` components.

## Changes so far

## Roadmap

### v0.3

- Component Updates
  - `<Chip/>`
    - [x] Focus on close icon css animation.
    - [x] OnActivate() listener - when the chip is activated.
    - [x] OnRemove() listener - when an added close button inside the chip is activated.
  - `<Chiplist/>`
    - [ ] useChiplistState() state
      - (param) starting chips: Chip[]
      - (state) updateChips() - add or/and remove many tags at once.
      - (state) chips - Array of current tags
    - [ ] Listeners onRemove, onAdd, and onActivate for every chip in the list.

- [ ] Finish CSS-in-JS migration
  - [x] Add grid and layout styles.
  - [x] Add reset as global styles.
  - [x] Add size global styles.
  - [x] Add theme styles.
  - [x] Add font configuration.
  - [ ] Change pattern from styles object, to a single styles constant and css classes inside.

- [ ] Project quality upgrade
 - [x] Fix plugin issues.
 - [ ] Build a project docker image.
 - [ ] Add git workflow. 
 - [ ] Add Fresh Stories.
 - [ ] Add unit testing for pertinent functions.
 - [ ] Fix deno.land documentation.
 - [ ] Deploy to jsr.

- [ ] Plugin upgrade
  - [x] Make lunchbox installable like a plugin.
  - [x] Automatically add the static stylesheet (Remove the `<Stylesheet />` component).
  - [ ] Migrate fresh project test functionality to the `/example` directory.
    - [x] Remove fresh boilerplate app from the `/example` project.
    - [x] Add utility functions to `mod.ts`.
    - [x] Add the plugin inside the `/example` project.
    - [x] Move the testing routes to the `/example` project.
    - [ ] Add a `CONTRIBUTING.md` file with running and setup instructions for 
  - [x] Remove twind plugin. All stylesheets inside lunchbox must be inline stylesheets or css-in-js.
  - [x] Correctly assign islands.
  - [ ] Update README to have the new installation instructions.

- [ ] Standarize subcomponent's property forwarding. Every component must:
  - Everycomponent must have module documentation with:
    - A banner comment in `index.tsx` and `setup.ts`.
    - A comment for the component's interface.
  - Every component must have a "main" element with:
    - The components type referenced using `iComponent` and that element.
    - The standarized css class. (`class={c.styles}`)
    - The reference must point to the component's forwarded reference. (`ref={fref}`)
    - The spread of the rest of component's parameters. (`{...p}`)
  - Any other element must have:
    - The standarized css bem class. (`class='foo-bar__element--modifier'`)
    - A reference comming from the `fwd` object. (`ref={fwd.foobar?.ref}`)
    - * A spread of the other forwarded attributes. (`{...fwd.foobar}`)
  - Any subcomponent must have:
    - The `nostyleAll` passed. (`nostyleAll={nostyleAll}`)
    - The standarized css class. (`class={c.foobar}`)
    - * Default value but configurable for component attributes. (`attr={fwd.foobar?.attr ?? ''}`)
    - * A spread of the other forwarded attributes. (`{...fwd.foobar}`)

### v0.4

- Features
  - [ ] Make component's default prop values configurable.

- New Components
  - `<Breadcrumbs/>`
    - [ ] Built using the `<Link/>` component.
  - `<ContentEditable/>`
    - [ ] Same aesthetic and similar features to `<Input/>`, `<TextArea/>`, and `<Select/>` components.
  - `<Pattern/>`
    - [ ] Replaces the current functionality of the `<Gradient/>` component

- Component Updates
  - `<Button/>`
    - [ ] Add focus bevel for the panel and invisible types.
  - `<Layout/>`
    - [ ] Add custom column spans for one or many layout-modules.
  - `<Gradient/>`
    - [ ] Rename to `<Pattern/>` and rename the "pattern" attribute to "type".
    - [ ] Remove the pattern functionality.
    - [ ] Rename the `gradient_pattern` property inside the `<Footer/>` and `<Header/>` components.
    - [ ] Easily create gradients using hex-values, rgba values, and css variables.
    - [ ] Easily alter the types, positions, and angles of the gradient.
    - [ ] Easily use similar to the `<Panel/>` component.
  - `<Dialog/>`
    - [ ] CSS animation of backdrop fading in and panel flying from top.
    - [ ] CloseDialog() - On determined close button and on the screen background.
    - [ ] OpenDialog()
  - `<Menu/>` 
    - [ ] Popup appears from button.
    - [ ] OpenMenu()
    - [ ] CloseMenu()
  - `<Navigation/>`
    - [ ] Add appearing animation.
  - `<Separator/>`
    - [ ] Add pattern separator types.

- Plugin upgrade
  - [ ] Palette: Add light transparent backgrounds.
  - [ ] Palette: Rename color transparencies to names that don't depend on opacity.