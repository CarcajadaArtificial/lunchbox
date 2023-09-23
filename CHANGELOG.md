# Changelog

## v0.2.18

- Added the css-in-js ot the `<Input/>`, `<Select/>`, and `<TextArea/>` components.
- Added the `input` shared style.
- Fixed the `<Fieldset/>` component's horizontal position.
 
## Changes so far

- Moved enums, types, utils and handlers out of `mod.ts`.
- Moved the stylesheets to another project.
- Fixed shorthand import paths issue.
- Fixed `SignalLike` type on component setup script.
- Added the `<Fieldset/>` component.

## Roadmap

### v0.2

- [ ] Update components to GarliCSS animations.
  - [x] Button (click, focus, hover)
  - [ ] Navigation
  - [x] Input (focus)
  - [x] Select (focus)
  - [x] TextArea (focus)
  - [x] Link (focus, hover)
  - [ ] Markdown (heading link hover)
- [ ] Markdown missing features that should also be components:
  - [ ] List
  - [ ] Blockquote
- [ ] Create an organized collection of island functions
- [ ] Update component features
  - [ ] **Card**: Add text, image, gradient spacers, and chips feature.
  - [ ] **Navigation**: Add appear/disappear when scrolling interaction on a
        fixed navigation.
  - [ ] **Code**: Add copy to clipboard.
  - [ ] **Separator**: Add gradient separators.
  - [x] **Header**, **Footer**: Add spacers with gradients that change.
  - [ ] **Button**
    - [ ] Add small variation.
    - [ ] Add large variation.
    - [ ] Add variation with a kbd element inside.
    - [ ] Add variation with a code element inside.
    - [ ] Add variation with an icon inside.
  - [ ] **Panel**
    - [ ] Add style condition for button_invisible and button_panel's background color.
  - [ ] **Chip**
    - [ ] If there `onRemove` is undefined, do not show the close icon.
    - [ ] Change the close icon to a standard icon.
- [ ] Add components
  - [ ] Time
  - [x] Markdown
  - [ ] Menu
  - [ ] Page
  - [x] Fieldset
  - [x] Chip
    - [x] Chiplist
  - [ ] Spinner
  - [ ] Screen
  - [ ] Dialog
  - [ ] Image
  - [x] Gradient
  - [ ] Kbd
- [ ] Minor updates
  - [x] Add a nostyleAll global parameter to all components that ignores all classes in the component's elements.
  - [x] Ignore .md files in the .vscode settings for deno fmt.
  - [x] Fix layout responsivity.
  - [x] Add a tabindex to the Link component.
  - [x] Extend Heading and Footer padding.
  - [ ] Remove global component properties from the setup spreads.
  - [ ] Update components to Resin's css-in-js schema.
  - [ ] Fix the Fwd interface in molecule setups. `Partial<>` is missing in subcomponent types.

### v0.3

- [ ] Make component's default prop values configurable.
