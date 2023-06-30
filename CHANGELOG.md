# Changelog

## v0.0.77

### Updated the Textarea component to GarliCSS
  - `/routes/index.tsx`
  - `/src/scss/components.scss`
  - `/src/setup/Textarea.ts`
  - `/components/Textarea.tsx`
  - `/src/types/props.ts`
  - `/mod.ts`

### Minor updates
  - `/static/style.css`

## Comming Soon (v0.1.0)

### Features

- [x] Published CSS.
- [x] Setup modules for `Page.tsx` and `Title.tsx`.
- [x] Move `Input.tsx` and `Textarea.tsx` from islands to components.
- [x] Move testing pages to another project.
- [x] Migrate all islands to components
- [x] Remove navigation properties in favor of children.
- [x] Add standard htmlelement properties spreads in component interfaces. Things like `AriaMixins`, `JSX.HTMLAttributes<T>` and `GlobalEventHandlers`.
- [x] Markdown styles integration.
- Identify all HTMLElements in all components as an individual "part".
  - [ ] Name each part a unique css class.
  - [ ] Use that name to connect the classnames dictionary with the component.
  - [ ] Add an optional forwarded reference to every part.
- Create a library of common functions for components when turning them into islands.

- To-do
  - [x] Change `unionStrings.ts` to enums.
  - [x] Make the header and footer have variable layouts types.
  - [ ] Some input types have different styles in safari.
  - [x] Prose syntax highlighting missing tokens for scss and html.
    - [x] Add a stoke to code blocks.
    - [ ] Add scroll-padding-top to headings.
    - [ ] Include syntax highlighting on theming.
  - Text component
    - [x] Add a `compact` property for smaller line heights.
    - [ ] Add a `indent` property for literal prose.
    - [x] Add a `single` property for single lines overflown with ellipsis.
  - [ ] Theme.
    - [ ] Add theming system without light/dark mode.
    - [ ] Add typographical theming.
    - [ ] Add syntax highlighting theming. (After creating inhouse syntax highlighting)
  - [ ] Create media query classes for viewport sizes.
  - [ ] Limit `Code` component to only inline codes inside Text components.
  - [ ] Find the best way to export components, functions and types to other projects.
  - [x] Fix the unresponsive code blocks inside `.markdown-prose` element.
  - [x] Fix the background naming dilemama regarding hierarchy.
    - [x] Rename theming colors for no light/dark mode.
    - [x] Rename background colors and remove precedence (primary, secondary, tertiary).
    - [x] Rename button colors to this new mode.
  - Fix Markdown Parser. Use h5 instead of h4 for code block headings.

- Components
  - [ ] Fieldset
  - [ ] Chip
  - [ ] Linkmap
  - [ ] Spinner

- Documentation
  - [ ] Project README.md
  - [ ] CONTRIBUTING.md
  - Components
    - [x] Types
      - [ ] Properties
    - [ ] Setup functions (First document the component setup process)
    - [ ] Render functions (Gradually as the components are visually documented in ana-components-docs)
    - [ ] Documentation site ()
  - [ ] Sass code

### Roadmap

#### v0.1

  - [ ] Update all components to GarliCSS and display on index route.
    - [x] Button
    - [x] Card
    - [x] Code
    - [x] Footer
    - [x] Header
    - [x] Input
    - [x] Layout
    - [x] Link
    - [x] Linkmap
    - [x] Main
    - [ ] Menu
    - [x] Navigation
    - [ ] Page
    - [x] Panel
    - [ ] Select
    - [x] Separator
    - [x] Text
    - [x] Textarea
  - [ ] Document all needed fixes and upgrades possible using this structure:
    - Add a comment where the fix should be added using the `@todo`.
    - Grade the fix using one to three `!`s.
      - `!!!`: Urgent
      - `!!`: Before next version.
      - `!`: After next version.
      - ` `: Whenever
      - `?`: Possible fix, question it later.
    - Substitue the `Features` section of this document to a list of every feature with its pending.
  - [ ] Finish all components.
  - [ ] Fix `!!`s and `!!!`s.
  - [ ] Do a documentation cleanup.

#### v0.2

  - [ ] Update components to GarliCSS animations.