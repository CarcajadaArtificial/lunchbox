# Changelog

## v0.0.44

### Minor updates
 - `components/Layout.tsx`

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
    - [ ] Add a `single` property for single lines overflown with ellipsis.
  - [ ] Theme.
    - [ ] Add theming system without light/dark mode.
    - [ ] Add typographical theming.
    - [ ] Add syntax highlighting theming. (After creating inhouse syntax highlighting)
  - [ ] Create media query classes for viewport sizes.
  - [ ] Limit `Code` component to only inline codes inside Text components.
  - [ ] Find the best way to export components, functions and types to other projects.
  - [x] Fix the unresponsive code blocks inside `.markdown-prose` element.
  - [ ] Fix the background naming dilemama regarding hierarchy.
    - [ ] Rename theming colors for no light/dark mode.
    - [ ] Rename background colors and remove precedence (primary, secondary, tertiary).
    - [ ] Rename button colors to this new mode.

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
  - [x] Panel

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
