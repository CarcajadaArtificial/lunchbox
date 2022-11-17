# Changelog

## v0.0.18

### Added

- Theme support to the Page component
  - `~/components/Page.tsx`
  - `~/src/setup/Page.ts`
  - `~/src/types/props.ts`

- Text component to input components
  - `~/components/Input.tsx`
  - `~/components/Select.tsx`
  - `~/components/TextArea.tsx`
  - `~/src/setup/Input.ts`
  - `~/src/setup/Select.ts`
  - `~/src/setup/TextArea.ts`

- Theme classes to components
  - `~/src/scss/themes.scss`
  - `~/src/scss/styles.scss`
  - `~/src/setup/Footer.ts`
  - `~/src/setup/Header.ts`
  - `~/src/setup/Input.ts`
  - `~/src/setup/Link.ts`
  - `~/src/setup/Menu.ts`
  - `~/src/setup/Navigation.ts`
  - `~/src/setup/Select.ts`
  - `~/src/setup/shared.ts`
  - `~/src/setup/Text.ts`
  - `~/src/setup/TextArea.ts`
  - `~/static/styles.css`

### Removed

- Border, outline, placeholder, and text classes
  - `~/src/scss/colors.scss`
  - `~/static/styles.css`

## Comming Soon (v0.1.0)

### Features

- [x] Published CSS.
- [x] Setup modules for `Page.tsx` and `Title.tsx`.
- [x] Move `Input.tsx` and `TextArea.tsx` from islands to components.
- [x] Move testing pages to another project.
- [x] Migrate all islands to components
- [x] Remove navigation properties in favor of children.
- [ ] Add standard htmlelement properties spreads in component interfaces. Things like `AriaMixins`, `JSX.HTMLAttributes<T>` and `GlobalEventHandlers`.

- Components
  - [x] Page layout
  - [x] Header
  - [x] Text
  - [x] Link
  - [x] Footer
  - [x] Navigation
    - [x] Menu
  - [x] Select
  - [ ] Button
  - [ ] Switch
  - [ ] Chip
