# Changelog

## v0.2.2

### Added the `Markdown` component

- `/components/Markdown/index.tsx`
- `/components/Markdown/setup.ts`
- `/routes/md.tsx`
- `/mod.ts`
- `/src/scss/components.scss`

### Added `deno-gfm` project adapted to this case.

- `/src/katex.ts`
- `/src/markdown.ts`

### Minor updates

- Removed `/static/test.txt`
- `/static/content.md`
- `/import_map.json`

## Changes so far

- ✅ Markdown component
- Better task scripts.

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
  - [ ] Add scss variables containing the css root variables.

### v0.3

- [ ] Make component's default prop values configurable.
