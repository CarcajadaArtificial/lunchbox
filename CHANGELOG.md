# Changelog

## v0.0.88

### Added an optional layout_type prop to the Footer, Header and Main components
  - `/src/types/props.ts`
  - `/src/setup/Footer.ts`
  - `/src/setup/Header.ts`
  - `/components/Footer.tsx`
  - `/components/Header.tsx`
  - `/components/Main.tsx`

### Minor updates
  - `/components/Button.tsx`
  - `/components/TextArea.tsx`
  - `/routes/index.tsx`

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
  - [ ] Create media query classes for viewport sizes.
  - [x] Limit `Code` component to only inline codes inside Text components.
  - [x] Find the best way to export components, functions and types to other projects.
  - [x] Fix the unresponsive code blocks inside `.markdown-prose` element.
  - [x] Fix the background naming dilemama regarding hierarchy.
    - [x] Rename theming colors for no light/dark mode.
    - [x] Rename background colors and remove precedence (primary, secondary, tertiary).
    - [x] Rename button colors to this new mode.
  - Fix Markdown Parser. Use h5 instead of h4 for code block headings.

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

  - [x] Update all components to GarliCSS and display on index route.
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
    - [x] Navigation
    - [x] Panel
    - [x] Select
    - [x] Separator
    - [x] Text
    - [x] Textarea
  - [x] Document all needed fixes and upgrades possible using this structure:
    - Add a comment where the fix should be added using the `@todo`.
    - Grade the fix using one to three `!`s.
      - `!!!`: Urgent
      - `!!`: Before next version.
      - `!`: After next version.
      - ` `: Whenever
      - `?`: Possible fix, question it later.
    - Substitue the `Features` section of this document to a list of every feature with its pending.
  - [ ] Fix `!!`s and `!!!`s.
    - [x] Footer
    - [x] Header
    - [x] Main
    - [x] Textarea
    - [ ] components.scss   1!!
  - [ ] Fix the fwd ref problem.
    - [x] Card
    - [ ] Code
    - [ ] Footer
    - [ ] Header
    - [x] Input
    - [ ] Layout
    - [ ] Linkmap
    - [ ] Main*
    - [ ] Navigation
    - [ ] Select
    - [ ] Textarea
      
  - [ ] Do a documentation cleanup.

#### v0.2

  - [ ] Update components to GarliCSS animations.
    - [ ] Button
    - [ ] Navigation
    - [ ] Separator
    - [ ] Input
    - [ ] Select
    - [ ] Textarea
  - [ ] Add components
    - [ ] Menu (Update to GarliCSS)
    - [ ] Page
    - [ ] Fieldset
    - [ ] Chip
    - [ ] Linkmap
    - [ ] Spinner