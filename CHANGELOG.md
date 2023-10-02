# Changelog

## v0.2.30

- Change the close icon to a standard icon in the `<Chip/>` component.
 
## Changes so far

- Added the `<Fieldset/>` component.
- Added the `<Stylesheet/>` component.
- Added the `<Kbd/>` component.
- Added the `<Time/>` component with ptera formating implemented out of the box.
- Added the `<Dialog/>` component.
- Added Global styles and fonts
- Moved enums, types, utils and handlers out of `mod.ts`.
- Moved the stylesheets to css-in-js.
- Fixed shorthand import paths issue.
- Fixed `SignalLike` type on component setup script.
- Fixed the missing `Partial<>` in subcomponent types.

## Roadmap

### v0.2

- [x] Update components to GarliCSS animations.
  - [x] Button (click, focus, hover)
  - [x] Input (focus)
  - [x] Select (focus)
  - [x] TextArea (focus)
  - [x] Link (focus, hover)
- [x] Markdown missing features that should also be components:
  - [x] List
  - [x] Blockquote
- [x] Update component features
  - [x] **Card**: Add text, image, gradient spacers, and chips feature.
  - [x] **Header**, **Footer**: Add spacers with gradients that change.
  - [x] **Button**
    - [x] Add variation with a kbd element inside.
    - [x] Add variation with a code element inside.
    - [x] Add variation with an icon inside.
  - [x] **Panel**
    - [x] Add style condition for button_invisible and button_panel's background color.
  - [x] **Chip**
    - [x] If there `onRemove` is undefined, do not show the close icon.
    - [x] Change the close icon to a standard icon.
- [ ] Add components
  - [x] Time
  - [x] Markdown
  - [x] Fieldset
  - [x] Chip
    - [x] Chiplist
  - [x] Dialog
  - [x] Stylesheets (includes ResinCSSEmiutter)
  - [x] Gradient
  - [x] Kbd
  - [ ] Spinner
  - [ ] Menu
- [x] Minor updates
  - [x] Add a nostyleAll global parameter to all components that ignores all classes in the component's elements.
  - [x] Ignore .md files in the .vscode settings for deno fmt.
  - [x] Fix layout responsivity.
  - [x] Add a tabindex to the Link component.
  - [x] Extend Heading and Footer padding.
  - [x] Remove global component properties from the setup spreads.
  - [x] Update components to Resin's css-in-js schema.
  - [x] Fix the Fwd interface in molecule setups. `Partial<>` is missing in subcomponent types.

### v0.3

- [ ] Features
  - [ ] Create an organized collection of island functions
  - [ ] Make component's default prop values configurable.
- [ ] Components
  - [ ] `<Input/>`
    - [ ] Enhance types color, range and file.
  - [x] `<Markdown/>`
    - [x] Add css-in-js styles.
  - [ ] `<Button/>`
    - [ ] Add small variation.
    - [ ] Add large variation.
- [ ] Add CSS transitions
  - [ ] `<Dialog/>` - Backdrop fade and panel flies from top.
  - [ ] `<Menu/>` - Popup appears from button.
- [x] Finish CSS-in-JS migration
  - [x] Add grid and layout styles.
  - [x] Add reset as global styles.
  - [x] Add size global styles.
  - [x] Add theme styles.
  - [x] Add font configuration.

