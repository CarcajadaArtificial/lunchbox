# Changelog

## v0.0.4

## Comming Soon (v1.0.0)

### Features

- [ ] Published CSS.

- Components
  - [ ] Page layout
  - [ ] Navigation
  - [ ] Typographical components
  - [ ] Select
  - [ ] Footer
  - [ ] Link

### Added

- Compiled css map to gitignore.
  - `~/.gitignore`

- Deno task for compiling sass
  - `~/deno.json`
  - `~/src/scss/styles.json`
  - `~/static/styles.css`

- Compiled css to app route.
  - `~/routes/_app.tsx`

- Extension for twind.css
  - `~/static/twind.css`

- Theme colors.
  - `~/src/scss/colors.json`

- Prop interfaces to the types directory.
  - `~/src/types/props.ts`

- Classes and default props to the setup directory.
  - `~/src/setup/Input.ts`
  - `~/src/setup/TextArea.ts`
  - `~/src/setup/shared.ts`

- More tests in input page.
  - `~/routes/atoms/input`

### Removed

- Classes, default props and interfaces from islands.
  - `~/islands/Input.tsx`
  - `~/islands/TextArea.tsx`
