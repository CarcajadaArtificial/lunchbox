# Changelog

## v0.0.14

### Added

- Menu component
  - `~/components/Menu.tsx`
  - `~/setup/Menu.ts`
  - `~/src/types/props.ts`
  - `~/mod.ts`

- Children property to Navigation component
  - `~/components/Navigation.tsx`
  - `~/setup/Navigation.ts`

### Removed

- Menu island
  - `~/islands/Menu.tsx`

- Navigation component from pages.
  - `~/routes/atoms/color.tsx`
  - `~/routes/atoms/input.tsx`
  - `~/routes/atoms/text.tsx`

## Comming Soon (v1.0.0)

### Features

- [x] Published CSS.
- [x] Setup modules for `Page.tsx` and `Title.tsx`.
- [x] Move `Input.tsx` and `TextArea.tsx` from islands to components.
- [ ] Move testing pages to another project.
- [x] Migrate all islands to components
- [x] Remove navigation properties in favor of children.
- [ ] Export library constants.

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
