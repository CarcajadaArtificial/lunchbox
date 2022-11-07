# Changelog

## v0.0.11

## Comming Soon (v1.0.0)

### Features

- [x] Published CSS.
- [x] Setup modules for `Page.tsx` and `Title.tsx`.
- [x] Move `Input.tsx` and `TextArea.tsx` from islands to components.

- Components/Islands
  - [x] Page layout (Component)
  - [x] Header (Component)
  - [x] Typographical components (Component)
  - [x] Link (Component)
  - [x] Footer (Component)
  - [x] Navigation (Component)
    - [x] Menu (Island)
  - [ ] Select (Component)

### Added

- Input and TextArea components
  - `~/components/Input.tsx`
  - `~/components/TextArea.tsx`

- `maxWidth` property to the Input and TextArea components
  - `~/src/setup/shared.ts`
  - `~/src/setup/Input.ts`
  - `~/src/setup/TextArea.ts`
  - `~/src/types/props.ts`

- `w-prose` to the twind override module
  - `~/src/scss/twind.scss`
  - `~/static/styles.css`
  - `~/src/setup/Text.ts`

- Testing page for texts
  - `~/routes/atoms/text.ts`

- Fixed layout on input testing page.
  - `~/routes/atoms&input.tsx`

### Removed

- Input and TextArea islands
  - `~/islands/Input.tsx`
  - `~/islands/TextArea.tsx`
