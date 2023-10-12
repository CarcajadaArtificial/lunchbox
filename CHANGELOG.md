# Changelog

## v0.3.9

- Minor fixes in the `<Menu/>` component.
 
## Changes so far

## Roadmap

### v0.3

- Features
  - [ ] Make component's default prop values configurable.

- Component updates:
  - `<Input/>`
    - [x] Enhance the types color and range.
    - [ ] Add ms styles for the color and range types.
    - [ ] Enhance the file type.
    - [ ] Add usage of icons.
  - `<Markdown/>`
    - [x] Add css-in-js styles.
  - `<Navigation/>`
    - [x] Add css-in-js styles.
    - [x] Make sticky style optional.
    - [x] Add a compact style variation.
    - [ ] Add property that makes it appear after scrolling past the header.
  - `<Link/>`
    - [x] Add css-in-js styles.
  - `<Button/>`
    - [x] Add compact variation.
    - [x] Add large variation.
  - `<Layout/>`
    - [x] Apply the fill width styles by default.
    - [x] Rename the "dashboard" attribute to "includeHorizontalWhitespace".
  - `<Separator/>`
    - [ ] Add gradient pattern separator types.
  - `<Gradient/>`
    - [ ] Rename to `<Pattern/>` and rename the "pattern" attribute to "type".
    - [ ] Rename the `gradient_pattern` property inside the `<Footer/>` and `<Header/>` components.

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
    - [x] OnExtendedClick() - click, tap, pressed enter, pressed, space
  - `<Chip/>`
    - [ ] OnExtendedClick() - remove button.
  - `<Chiplist/>`
    - [ ] UpdateTags() - add or/and remove many tags at once.
    - [ ] Tags - Array of current tags
  - `<Code/>`
    - [ ] OnExtendedClick() - Copy content to clipboard.
  - `<Dialog/>`
    - [x] CloseDialog() - On determined close button and on the screen background.
    - [x] OpenDialog() 
  - `<Menu/>`
    - [ ] OpenMenu()
    - [ ] CloseMenu()
  - `<Fieldset/>`
    - ?
  - `<Input/>`, `<Select/>`, `<TextArea/>`
    - ?

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
  - [ ] ContentEditable

- Component Updates
  - `<Button/>`
    - [ ] Add focus bevel for the panel and invisible types.
  - `<Stylesheet/>`
    - [ ] Palette: Add light transparent backgrounds.
    - [ ] Palette: Rename color transparencies to names that don't depend on opacity.
  - `<Layout/>`
    - [ ] Add custom column spans for one or many layout-modules.
