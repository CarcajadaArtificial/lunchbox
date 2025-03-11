# Changelog

## Working on

- Finish documentation of `atom.tsx` and molecules.

### Next up

- Update base example's fresh and std dependencies to jsr and preact to npm.
- Update tailwind to v4 and update the plugin colors.
- Initialize standard SEO files.

## Version History

### v1.0.44

- Updated the preact dependency version.

### v1.0.43

- Added better import routes for the project initialization code.

### v1.0.42

- Added better import routes for the project initialization code.
- Added font styles to the `static/styles.css` file and removed the `fonts.css` one.

### v1.0.41

- Added better import routes for the project initialization code.

### v1.0.40

- Updated the init process to include static font files, types and better import routes.
- Renamed the Markdown atom to Prose to avoid ambiguities.

### v1.0.39

- Updated package version.

### v1.0.38

- Added the package fonts.

### v1.0.37

- Added explicit typing to the init module.
- Added changes for package exporting and documentation.

### v1.0.36

- Added explicit typing to the tailwind plugin.

### v1.0.35

- Fixed package exporting settings.

### v1.0.34

- Fixed package exporting settings.
- Removed the GitHub Actions CI/CD publishing step.

### v1.0.33

- Added a typing fix for the `iAtom` type.

### v1.0.32

- Removed the `fwd` forwarding concept because the new distribution method
  implies code generation into the user's app.

### v1.0.31

- Removed the initialization module from the package export.

### v1.0.30

- Updated documentation.

### v1.0.29

- Added source modules to the package's documentation.

### v1.0.28

- Added fixes for the publishing action.

### v1.0.27

- Added fixes for the publishing action.

### v1.0.26

- Updated package version.

### v1.0.25

- Updated the publishing action to generate provenance.
- Moved the particles into their own module.

### v1.0.24

- Added basic publishing CI/CD with GitHub Actions.
- Added the tailwind plugin.

### v1.0.23

- Added the `init` example project.
- Added the `task.ts` module for `deno task` commands.
- Added the `init.ts` module for initializing a lunchbox project.

### v1.0.22

- Formatted the base example project.

### v1.0.21

- Removed the `error` input particle in favor of the `invalid` particle.
- Added more documentation to the `atom.tsx` file.

### v1.0.20

- Replaced spacing units to number fractions instead of text fractions.
- Removed the tailwind plugin module.
- Updated the `@lunchbox/plugin` package.

### v1.0.19

- Refactored the code according to jsr publishing standards.
- Added the `LICENSE` file.

### v1.0.18

- Updated base example to use @lunchbox/plugin and correct dependency imports.
- Added the `apDef()` function and updated everywhere that was using it.
- Removed the dependency module.

### v1.0.17

- Removed the organism components in favor of preact signals.
- Updated the base example.

### v1.0.16

- Added the Accordion molecule and the Details atom group.

### v1.0.15

- Removed the tailwind forms plugin from the base example.
- Added the `input` atom group with the new `invalid`, `error`, and `abstract`
  input atoms.

### v1.0.14

- Added the Fieldset molecules.

### v1.0.13

- Added the molecules testing page in the base example.

### v1.0.12

- Added the atoms testing page in the base example.
- Fixed issues with a few atoms.

### v1.0.11

- Added the particles page in the base example.
- Fixed issues with the color palette.

### v1.0.10

- Added the `<Navbar/>`, `<Footer/>`, and `<Logo/>` components in the base
  example.
- Updated the 404 page.

### v1.0.9

- Finished the `<Markdown/>` molecule component.

### v1.0.8

- Renamed the `setup-temp` example to `base`.
- Removed the typeface files.

### v1.0.7

- Refactored the `resin` implementation in favor of pure tailwind.
- Refactored components and islands into the `src` folder and organized them
  into an atomic hierarchy.
- Added the official native tailwind plugin for a base configuration.
- Removed the `deno-gfm` fork in favor of @tailwind/typography and prose styles.

### v1.0.6

- Added the `setup` example project.

### v1.0.5

- Removed the types `classNameString` and `EmptyObject`.

### v1.0.4

- Added the `Keyboard` island.
- Removed the `Autocomplete` and `Dialog` islands.
- Removed the `handlers.ts` module in favor of the `@carcajada/teclas` module.
- Updated `deno.json`, `plugin.ts`, and `deps.ts`.
- Removed the `hooks.ts` module.
- Added the `handleInteraction()` function to the `utils.ts` module.
- Added fixes to the `CONTRIBUTING.md` file.

### v1.0.3

- Added better documentation comments.

### v1.0.2

- Added the `Revealer` island for abstracting the common "See more..."
  functionality.

### v1.0.1

- Added the `InterObs` island for abstracting the native Intersection Observer
  js functionality.
- Added the `effects.transparent` global style for animations that start from
  `opacity: 0;`.

### v1.0.0

- This updates marks the beginning of Lunchbox as a fully released product.
  Everything is official from now on.
