# Changelog

## v0.0.98

### Ordered the prop types of the Main, Navigation, Panel, Select, Separator, Text and TextArea components
  - Removed `/src/props.ts`
  - `/components/Main/index.tsx`
  - `/components/Navigation/index.tsx`
  - `/components/Panel/index.tsx`
  - `/components/Select/index.tsx`
  - `/components/Separator/index.tsx`
  - `/components/Text/index.tsx`
  - `/components/TextArea/index.tsx`
  - `/components/Main/setup.ts`
  - `/components/Navigation/setup.ts`
  - `/components/Panel/setup.ts`
  - `/components/Select/setup.ts`
  - `/components/Separator/setup.ts`
  - `/components/Text/setup.ts`
  - `/components/TextArea/setup.ts`

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
  - [ ] Reorganize project structure
    - [x] Every component has its own directory.
    - [x] Every component directory contains a setup file.
    - [ ] Every setup file contains the prop type (`iComponent`).
    - [ ] Every value inside a prop type (`iComponent`) must not be optional
      - Use a default value of null instead of undefined, in types where undefined is a useful option.
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