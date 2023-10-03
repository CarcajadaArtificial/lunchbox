# Changelog

## v0.3.4

- Added twind dependencies.
- Added a bevel to the buttons.
- Added css-in-js styles to the `<Navigation/>` component.
- Added a delay to the outline interaction transition.
- Fixed layout in `<Card/>` component components without images.
 
## Changes so far

## Roadmap

### v0.3

- Features
  - [ ] Make component's default prop values configurable.

- Component updates:
  - `<Input/>`
    - [ ] Enhance types color, range and file.
  - `<Markdown/>`
    - [x] Add css-in-js styles.
  - `<Navigation/>`
    - [x] Add css-in-js styles.
    - [ ] Add property that makes it appear after scrolling past the header.
  - `<Link/>`
    - [ ] Add css-in-js styles.
  - `<Button/>`
    - [ ] Add small variation.
    - [ ] Add large variation.
  - `<Layout/>`
    - [ ] Apply the fill width styles by default.
    - [ ] Rename the "dashboard" attribute to "includeHorizontalWhitespace".
  - `<Separator/>`
    - [ ] Add gradient pattern separator types.
  - `<Gradient/>`
    - [ ] Rename to `<Pattern/>` and rename the "pattern" attribute to "type".

- Add CSS transitions and animations:
  - `<Button/>`
    - [x] Small hover detail.
    - [x] Small pressed detail. 
  - `<Dialog/>`
    - [ ] Backdrop fade and panel flies from top.
  - `<Menu/>` 
    - [ ] Popup appears from button.
  - `<Navigation/>`
    - [ ] Add appearing animation.
  - `<Chip/>` 
    - [ ] Focus on close icon

- [x] Finish CSS-in-JS migration
  - [x] Add grid and layout styles.
  - [x] Add reset as global styles.
  - [x] Add size global styles.
  - [x] Add theme styles.
  - [x] Add font configuration.

- Component Hooks and handlers:
  - `<Button/>`
    - [ ] OnExtendedClick() - click, tap, pressed enter, pressed, space
  - `<Chip/>`
    - [ ] OnExtendedClick() - remove button.
  - `<Chiplist/>`
    - [ ] UpdateTags() - add or/and remove many tags at once.
    - [ ] Tags - Array of current tags
  - `<Code/>`
    - [ ] OnExtendedClick() - Copy content to clipboard.
  - `<Dialog/>`
    - [ ] CloseDialog() - On determined close button and on the screen background.
    - [ ] OpenDialog() 
  - `<Fieldset/>`
    - ?
  - `<Input/>`, `<Select/>`, `<TextArea/>`
    - ?
  - `<Menu/>`
    - [ ] OpenMenu()
    - [ ] CloseMenu()

- [ ] Standarize subcomponent's property forwarding. Every component must:
  - Every component must have a "main" element with:
    - [ ] The components type referenced using `iComponent` and that element.
    - [ ] The standarized css class. (`class={c.foobar}`)
    - [ ] The reference must point to the component's forwarded reference. (`ref={fref}`)
    - [ ] The spread of the rest of component's parameters. (`{...p}`)
  - Any other element must have:
    - [ ] The standarized css class. (`class={c.foobar}`)
    - [ ] A reference comming from the `fwd` object. (`ref={fwd.foobar?.ref}`)
    - [ ] * A spread of the other forwarded attributes. (`{...fwd.foobar}`)
  - Any subcomponent must have:
    - [ ] The `nostyleAll` passed. (`nostyleAll={nostyleAll}`)
    - [ ] The standarized css class. (`class={c.foobar}`)
    - [ ] * Default value but configurable for component attributes. (`attr={fwd.foobar?.attr ?? ''}`)
    - [ ] * A spread of the other forwarded attributes. (`{...fwd.foobar}`)

### v0.4

- New Components
  - [ ] Breadcrumbs
