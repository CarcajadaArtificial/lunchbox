# Changelog

## Working on

- Finish documentation of `atom.tsx` and molecules.
- Publish the package to jsr.

### Next up

- Update base example's fresh and std dependencies to jsr and preact to npm.
- Update tailwind to v4 and update the plugin colors.
- Test generated jsr documentation (@see tag).

## Version History

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
- Added the `input` atom group with the new `invalid`, `error`, and `abstract` input atoms.

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

- Added the `<Navbar/>`, `<Footer/>`, and `<Logo/>` components in the base example.
- Updated the 404 page.

### v1.0.9

- Finished the `<Markdown/>` molecule component.

### v1.0.8

- Renamed the `setup-temp` example to `base`.
- Removed the typeface files.

### v1.0.7

- Refactored the `resin` implementation in favor of pure tailwind.
- Refactored components and islands into the `src` folder and organized them into an atomic hierarchy.
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

- Added the `Revealer` island for abstracting the common "See more..." functionality.

### v1.0.1

- Added the `InterObs` island for abstracting the native Intersection Observer
  js functionality.
- Added the `effects.transparent` global style for animations that start from
  `opacity: 0;`.

### v1.0.0

- This updates marks the beginning of Lunchbox as a fully released product.
  Everything is official from now on.
