# Changelog

## v0.0.26

### Added

- isCompressed, isLabel, noMargins, indent properties to Text
  - `~/src/types/props.ts`
  - `~/src/setup/Text.ts`

- Component scss files
  - `~/src/scss/components.scss`
  - `~/src/scss/components/input.scss`
  - `~/src/scss/components/page.scss`
  - `~/src/scss/components/text.scss`

- Typography scss module for all things related to any type of text
  - `~/src/scss/utils/type.scss`

- Updated Page, Header and Input components to the latest Text features
  - `~/components/Header.tsx`
  - `~/components/Input.tsx`
  - `~/src/setup/Input.ts`
  - `~/src/setup/Page.ts`

### Removed

- Subtitle and label text types
  - `~/src/types/unionStrings.ts`

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
