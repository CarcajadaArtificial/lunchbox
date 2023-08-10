# Changelog

## v0.2.4-beta.2

### Minor changes
  - `/components/Card/index.tsx`

### Added the Chip component
  - `/components/Chip/index.tsx`
  - `/components/Chip/setup.tsx`
  - `/src/scss/components.scss`
  - `/src/scss/animation.scss`
  - `/static/style.css`
  - `/mod.ts`

## Changes so far

- Added the `<Chip/>` component.
- Fixed components' use of `nostyle` and `nostyleAll`.

## Roadmap

### v0.2

- [ ] Update components to GarliCSS animations.
  - [ ] Button (click, focus, hover)
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
- [ ] Add components
  - [ ] Time
  - [x] Markdown
  - [ ] Menu
  - [ ] Page
  - [ ] Fieldset
  - [x] Chip
  - [ ] Spinner
  - [ ] Screen
  - [ ] Dialog
  - [ ] Image
  - [x] Gradient
- [ ] Minor updates
  - [ ] Add scss variables containing the css root variables.
  - [x] Add a nostyleAll global parameter to all components that ignores all classes in the component's elements.
  - [x] Ignore .md files in the .vscode settings for deno fmt.
  - [x] Fix layout responsivity.
  - [x] Add a tabindex to the Link component.
  - [x] Extend Heading and Footer padding.
  - [ ] Remove global component properties from the setup spreads.

### v0.3

- [ ] Make component's default prop values configurable.
