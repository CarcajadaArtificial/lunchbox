# Changelog

## v0.0.21

### Added

- Main component
  - `~/src/setup/Main.ts`
  - `~/components/Main.tsx`
  - `~/src/types/props.ts`

- Card component
  - `~/src/setup/Card.ts`
  - `~/components/Card.tsx`
  - `~/src/types/props.ts`

- `sass-out` script
  - `~/deno.json`

- Better theme logic
  - `~/src/scss/colors.scss`
  - `~/static/styles.css`

- The color `borrador`
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
  - [ ] Fieldset
  - [ ] Chip
  - [x] Card
  - [x] Main
  - [ ] Linkmap

- Documentation
  - [ ] Project README.md
  - [ ] CONTRIBUTING.md
  - Components
    - [ ] Interfaces
    - [ ] Render functions
    - [ ] Documentation site
  - [ ] Sass code
