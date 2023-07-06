# Changelog

## v0.0.90

### Reorganized the Button component
  - `/components/Button/index.tsx`
  - `/components/Button/setup.ts`

### Updated to the new component directory schema
  - `/routes/index.tsx`
  - `/mod.ts`

### Duplicated the `type` directoy content.
  - The type and setup directory will be removed for the new component directory schema.
  - `/src/element.ts`
  - `/src/enums.ts`
  - `/src/props.ts`
  - `/src/utils.ts`

### Minor updates
  - `/static/style.css`
  - `/components/Menu.tsx`

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