# Changelog

## v0.0.25

### Added

- Button component
  - `~/components/Button.tsx`
  - `~/src/setup/Button.ts`
  - `~/src/types/props.ts`

- Adjusted styles for inputs in general.
  - `~/components/Input.tsx`
  - `~/src/setup/Input.ts`
  - `~/components/Select.tsx`
  - `~/src/setup/Select.ts`
  - `~/components/TextArea.tsx`
  - `~/src/setup/TextArea.ts`
  - `~/src/setup/shared.ts`

- Updated menu with a Button component door.
  - `~/components/Menu.tsx`
  - `~/src/setup/Menu.ts`

- Union string for component prop's types.
  - `~/src/types/unionStrings.ts`

- Hover and focus states for inputs and buttons.
  - `~/src/scss/components.scss`

- Adjusted theming border and outline logic.
  - `~/src/scss/themes.scss`

## Comming Soon (v0.1.0)

### Features

- [x] Published CSS.
- [x] Setup modules for `Page.tsx` and `Title.tsx`.
- [x] Move `Input.tsx` and `TextArea.tsx` from islands to components.
- [x] Move testing pages to another project.
- [x] Migrate all islands to components
- [x] Remove navigation properties in favor of children.
- [x] Add standard htmlelement properties spreads in component interfaces. Things like `AriaMixins`, `JSX.HTMLAttributes<T>` and `GlobalEventHandlers`.

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
