# Changelog

## v0.0.31

### Added

- Reference to the Input component's `<input/>` element and to the TextArea component's `<textarea />` element.
  - `~/components/Input.tsx`
  - `~/components/TextArea.tsx`
  - `~/src/types/props.ts`

## Comming Soon (v0.1.0)

### Features

- [x] Published CSS.
- [x] Setup modules for `Page.tsx` and `Title.tsx`.
- [x] Move `Input.tsx` and `TextArea.tsx` from islands to components.
- [x] Move testing pages to another project.
- [x] Migrate all islands to components
- [x] Remove navigation properties in favor of children.
- [x] Add standard htmlelement properties spreads in component interfaces. Things like `AriaMixins`, `JSX.HTMLAttributes<T>` and `GlobalEventHandlers`.
- Identify all HTMLElements in all components as an individual "part".
  - [ ] Name each part a unique css class.
  - [ ] Use that name to connect the classnames dictionary with the component.
  - [ ] Add an optional forwarded reference to very part.
- Create a library of common functions for components when turning them into islands.

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
