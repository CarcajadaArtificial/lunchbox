# Changelog

## v0.1.1

### Rebranded the project from `Ana Components` to `Lunchbox`

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
  - [x] Reorganize project structure
    - [x] Every component has its own directory.
    - [x] Every component directory contains a setup file.
    - [x] Every setup file contains the prop type (`iComponent`).
    - [x] Every value inside a prop type (`iComponent`) must not be optional
      - Use a default value of null instead of undefined, in types where undefined is a useful option.
  - [x] Fix the fwd ref problem.
    - [x] Card
    - [x] Code
    - [x] Footer
    - [x] Header
    - [x] Input
    - [x] Layout
    - [x] Linkmap
    - [x] Main
    - [x] Navigation
    - [x] Select
    - [x] Textarea
  - [ ] Do a documentation cleanup.
    - [ ] Readme.md
      - [ ] What is this, features
      - [ ] Installation guide
      - [ ] Usage guide
  - [x] Minor Fixes
    - [x] Rename elements.ts to types.ts
    - [x] Move system scss modules to its own directory
    - [x] Removed the components scss directory

### v0.2

  - [ ] Update components to GarliCSS animations.
    - [ ] Button
    - [ ] Navigation
    - [ ] Separator
    - [ ] Input
    - [ ] Select
    - [ ] TextArea
    - [ ] Link
  - [ ] Create an organized collection of island functions
  - [ ] Add components
    - [ ] Menu
    - [ ] Page
    - [ ] Fieldset
    - [ ] Chip
    - [ ] Spinner