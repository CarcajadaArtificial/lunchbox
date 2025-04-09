# Changelog

## Working on

- Create an exposition site for the package.
  - Site is a single landing page.
  - Showcases particles, atoms and molecules.

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
  - Table (Atoms & Molecules)
  - Input.File (Atom)
  - Input.Date (Atom)
  - Input.Slider (Atom)
  - Input.Switch (Atom)
  - IntersectionObserver (Organism)
  - Modal (Atoms & Molecules)
  - GridModule (Atoms)

## Version History

### v2.0.26

- Removed the GitHub actions entirely. The www folder will probably
  go to another repository.

### v2.0.25

- Commented out the main commands in the `deploy.yml` and `publish.yml`. In
  favor of manually doing both with the `deno publish` command and deno
  deploy's bot after manual trigger.

### v2.0.24

- Removed `lunchbox` from the gitignore files.
- Updated the deploy action.

### v2.0.19

- added the deploy action again.

### v2.0.18

- Reset commits to v2.0.8.
- Removed the deploy action.

### v2.0.8

- `www/`
  - Added Chrome Lighthouse metric fixes.
  - Added tabindex to atoms and particles.

### v2.0.7

- Added a deploy workflow.

- `www/`
  - Refactored the index page.

### v2.0.6

- `www/`
  - Added an particle and atom visualization.

### v2.0.5

- Fixed the `@std/fs` package import.

### v2.0.4

- Added a project initialization process fix.

### v2.0.3

- Added a project initialization process fix.
- Removed grid template cols and col spans from the tailwind plugin.

### v2.0.2

- Added the `www` module with an exposition page for the package.
- Added a project initialization process fix.

### v2.0.1

- Fixed project initialization process.

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
