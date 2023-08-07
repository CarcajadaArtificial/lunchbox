# Changelog

## v0.2.3

### Added an Gradient testing route

- `/fresh.gen.ts`
- `/routes/test/gradient.tsx`

### Minor changes

- `/mod.ts`

## Changes so far

- ✅ Markdown component
- Better task scripts.
- Added UI Component testing routes.

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
  - [ ] Chip
  - [ ] Spinner
  - [ ] Screen
  - [ ] Dialog
  - [ ] Image
  - [x] Gradient
- [ ] Minor updates
  - [ ] Spread scss 
  - [ ] Add scss variables containing the css root variables.
  - [x] Add a nostyleAll global parameter to all components that ignores all classes in the component's elements.
  - [x] Ignore .md files in the .vscode settings for deno fmt.

### v0.3

- [ ] Make component's default prop values configurable.
