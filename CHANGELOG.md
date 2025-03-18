# Changelog

## Working on

- Update Readme with new init instructions.

### Next up

- Add Contributing.md
- Find how to add documentation description to atom collection namespaces.
- Add package version as a top comment to all components.
  - Develop an individual component init/update function.
  - Create a script that automatically changes all components comment version
    based on deno.json.
  - Create a pipeline rule that verifies if all component versions are up to
    date.
- Creating testing routes that can be initialized in a special testing project.
- Update tailwind to v4 and update the plugin colors.
- Initialize standard SEO files (favicon, etc.).
- Reimplement icons into the package.
- Export a "palette" module in mod.ts where all colors of the palette can be
  accessed in TS.
- Future components:
  - Input.ContentEditable (Atom)
  - Key (Organism)
  - Form (Organism)
  - LazyImage (Atom)
  - Table (Atom & Molecules)
  - Input.File (Atom)
  - Input.Date (Atom)
  - Input.Slider (Atom)
  - Input.Switch (Atom)
  - IntersectionObserver (Organism)
  - Modal (Atom & Molecules)

## Version History

### v2.0.0

This is the first major release for Lunchbox since launch. It has come a long
way since `v1.0.0`. Here are a high level overview of everything that changed
since then:

- Published to JSR, not more deno.land.
- Removed CSS-IN-JS styling in favor of Tailwind styles and configuration.
- Implemented a Tailwind plugin that contains all necessary styles.
- Changed the package's architecture into importing components through code
  generated locally, similar to shadcn/ui.
- Implemented an initialization process for starting a new project with
  Lunchbox.
- Restructured and refactored the concept of particle, atom, and molecule
  components.
