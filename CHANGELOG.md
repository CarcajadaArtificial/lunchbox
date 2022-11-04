# Changelog

## v0.0.7

## Comming Soon (v1.0.0)

### Features

- [x] Published CSS.
- [x] Setup modules for `Page.tsx` and `Title.tsx`.
- [ ] Move `Input.tsx` and `TextArea.tsx` from islands to components.

- Components/Islands
  - [x] Page layout (Component)
  - [x] Header (Component)
  - [x] Typographical components (Component)
  - [ ] Link (Component)
  - [ ] Footer (Component)
  - [ ] Navigation (Component)
    - [ ] Menu (Island)
  - [ ] Select (Component)


### Added

- Text Component
  - `~/components/Text.tsx`
  - `~/src/setup/Text.ts`
  - `~/src/types/props.ts`
  - `~/mod.ts`

- Navigation and Header Components
  - `~/components/Navigation.tsx`
  - `~/components/Header.tsx`
  - `~/src/setup/Navigation.ts`
  - `~/src/setup/Header.ts`
  - `~/src/types/props.ts`
  - `~/mod.ts`

- Spread HTMLElement properties
  - `~/components/Layout.tsx`
  - `~/components/Page.tsx`
  - `~/src/types/props.ts`

- Updated Input page with new components.
  - `~/routes/atoms/input.tsx`

- Added color 'blanco'.
  - `~/src/scss/colors.scss`

### Removed

- Header and Navigation islands in favor of them being components.
  - `~/islands/Header.tsx`
  - `~/islands/Navigation.tsx`

- Title component in favor of the Text component.
  - `~/components/Title.tsx`
  - `~/src/setup/Title.ts`
