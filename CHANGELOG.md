# Changelog

## v0.2.22

- Added css-in-js in the `<Markdown/>` component.
- Removed the `lunchbox-css` module for good.
 
## Changes so far

- Moved enums, types, utils and handlers out of `mod.ts`.
- Moved the stylesheets to another project.
- Fixed shorthand import paths issue.
- Fixed `SignalLike` type on component setup script.
- Added the `<Fieldset/>` component.
- Added Global styles and fonts

## Roadmap

### v0.2

- [x] Update components to GarliCSS animations.
  - [x] Button (click, focus, hover)
  - [x] Input (focus)
  - [x] Select (focus)
  - [x] TextArea (focus)
  - [x] Link (focus, hover)
- [ ] Markdown missing features that should also be components:
  - [ ] List
  - [ ] Blockquote
- [ ] Create an organized collection of island functions
- [ ] Update component features
  - [x] **Card**: Add text, image, gradient spacers, and chips feature.
  - [x] **Header**, **Footer**: Add spacers with gradients that change.
  - [ ] **Button**
    - [ ] Add small variation.
    - [ ] Add large variation.
    - [ ] Add variation with a kbd element inside.
    - [ ] Add variation with a code element inside.
    - [ ] Add variation with an icon inside.
  - [x] **Panel**
    - [x] Add style condition for button_invisible and button_panel's background color.
  - [ ] **Chip**
    - [x] If there `onRemove` is undefined, do not show the close icon.
    - [ ] Change the close icon to a standard icon.
- [ ] Add components
  - [ ] Time
  - [x] Markdown
  - [ ] Menu
  - [x] Fieldset
  - [x] Chip
    - [x] Chiplist
  - [ ] Spinner
  - [ ] Screen
  - [ ] Dialog
  - [ ] Stylesheets (includes ResinCSSEmitter)
    - [ ] Fonts
    - [ ] Themes
    - [ ] Reset
  - [x] Gradient
  - [ ] Kbd
- [ ] Minor updates
  - [x] Add a nostyleAll global parameter to all components that ignores all classes in the component's elements.
  - [x] Ignore .md files in the .vscode settings for deno fmt.
  - [x] Fix layout responsivity.
  - [x] Add a tabindex to the Link component.
  - [x] Extend Heading and Footer padding.
  - [ ] Remove global component properties from the setup spreads.
  - [x] Update components to Resin's css-in-js schema.
  - [ ] Fix the Fwd interface in molecule setups. `Partial<>` is missing in subcomponent types.

### v0.3

- [ ] Make component's default prop values configurable.
- [ ] Components
  - [ ] `<Input/>`
    - [ ] Enhance types color, range and file.
  - [x] `<Markdown/>`
    - [x] Add css-in-js styles.
- [x] Finish CSS-in-JS migration
  - [x] Add grid and layout styles.
  - [x] Add reset as global styles.
  - [x] Add size global styles.
  - [x] Add theme styles.
  - [x] Add font configuration.

