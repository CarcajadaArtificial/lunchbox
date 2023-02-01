# Changelog

## v0.0.35

### Changed `unionStrings.ts` to `enums.ts`
  - `~/src/types/enums.ts`
  - `~/src/types/props.ts`
  - `~/mod.ts`

### Updated Layout types and margins
  - `~/components/Footer.tsx`
  - `~/components/Navigation.tsx`
  - `~/src/setup/Layout.tsx`

### Updated Text types
  - `~/components/Input.tsx`
  - `~/src/setup/Text.tsx`

### Updated Page themes
  - `~/src/setup/Page.tsx`

### Updated Button colors and types
  - `~/components/Menu.tsx`
  - `~/components/Select.tsx`
  - `~/components/TextArea.tsx`
  - `~/src/setup/Button.tsx`
  - `~/src/setup/Button.tsx`
  - `~/src/setup/Input.tsx`
  - `~/src/setup/shared.tsx`

## Comming Soon (v0.1.0)

### Features

- [x] Published CSS.
- [x] Setup modules for `Page.tsx` and `Title.tsx`.
- [x] Move `Input.tsx` and `TextArea.tsx` from islands to components.
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
  - [x] Change `unionStrings.ts` to enums
  - [ ] Make the header and footer have variable layouts types
  - [ ] Some input types have different styles in safari.
  - [ ] Prose syntax highlighting missing tokens for scss and html.
    - [ ] Add a stoke to code blocks.
    - [ ] Add scroll-padding-top to headings
  - Text component
    - [ ] Add a `compact` property for smaller line heights.
    - [ ] Add a `indent` property for literal prose.
  - [ ] Add typographical theming.
  - [ ] Create media query classes for viewport sizes.
  - [ ] Limit `Code` component to only inline codes inside Text components.
  - [ ] Find the best way to export components, functions and types to other projects.

- Components
  - [x] Page layout
  - [x] Header
  - [x] Text
  - [x] Link
  - [x] Footer
  - [x] Navigation
    - [x] Menu
  - [x] Select
  - [x] Button
  - [ ] Fieldset
  - [ ] Chip
  - [x] Card
  - [x] Main
  - [ ] Linkmap
  - [x] Separator
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
