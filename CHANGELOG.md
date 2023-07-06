# Changelog

## v0.0.93

### Reorganized the Input, Link, Linkmap, Text, TextArea and Select components
  - `/components/Input/index.tsx`
  - `/components/Link/index.tsx`
  - `/components/Linkmap/index.tsx`
  - `/components/Select/index.tsx`
  - `/components/Text/index.tsx`
  - `/components/TextArea/index.tsx`
  - `/components/Input/setup.ts`
  - `/components/Link/setup.ts`
  - `/components/Linkmap/setup.ts`
  - `/components/Select/setup.ts`
  - `/components/Text/setup.ts`
  - `/components/TextArea/setup.ts`

### Updated to the new component directory schema
  - `/mod.ts`

### Minor updates
  - Removed the menu component
  - `/src/props.ts`
  - `/routes/index.tsx`

## Roadmap

### v0.1

  - [x] Update all components to GarliCSS and display on index route.
  - [x] Document all needed fixes and upgrades possible using this structure:
    - Add a comment where the fix should be added using the `@todo`.
    - Grade the fix using one to three `!`s.
      - `!!!`: Urgent
      - `!!`: Before next version.
      - `!`: After next version.
      - ` `: Whenever
      - `?`: Possible fix, question it later.
    - Substitue the `Features` section of this document to a list of every feature with its pending.
  - [x] Fix `!!`s and `!!!`s.
  - [ ] Fix the fwd ref problem.
    - [x] Card
    - [ ] Code
    - [ ] Footer
    - [ ] Header
    - [x] Input
    - [ ] Layout
    - [ ] Linkmap
    - [ ] Main*
    - [ ] Navigation
    - [ ] Select
    - [ ] Textarea
  - [ ] Do a documentation cleanup.

### v0.2

  - [ ] Update components to GarliCSS animations.
    - [ ] Button
    - [ ] Navigation
    - [ ] Separator
    - [ ] Input
    - [ ] Select
    - [ ] Textarea
  - [ ] Create an organized collection of island functions
  - [ ] Add components
    - [ ] Menu (Update to GarliCSS)
    - [ ] Page
    - [ ] Fieldset
    - [ ] Chip
    - [ ] Linkmap
    - [ ] Spinner