# Changelog

## In Progress

- `Uncaught (in promise) TypeError: Import assertions are deprecated. Use `with` keyword, instead of 'assert' keyword.` Still present
- Added the `setup-temp` example project as a temporal empty fresh projet to test the effects of simply importing lunchbox and running the plugin.
- Added the Components import inside `setup-temp` to the index page. This is what causes the present error.
- Added breaking changes to the `setup` example project.
- Moving out of Resin's CSS-in-JS philosophy, going for tailwind classes instead.
- [x] Add all lunchbox styles possible to tailwind.config.ts. The colors are missing but will be added gradually.
- [x] Add tailwind styles to a test component. Used the `<Main/>` component.
- [x] Define tailwind styles standard of usage.
- [ ] Update all components to the new standard.
- Added a new export patter in `./mod.ts` where this file exports a function that builds the component.
- Added new style proof of concept to the `<Main/>` component inside the `setup-temp` project.
- [x] Add a `<Body/>` component for the `_app.tsx` route.
- [ ] Add tailwind dependency to lunchbox to export the config object.
- Added the `<Header/>`, `<Layout/>`, `<Module/>`, and `<Main/>` components to the new standard.
- Added the concept of particles for Design Tokens, added the complete color palette, dark/light responsive color, grid settings, and text sizes.

## v1.0.6

- Added the `setup` example project.

## v1.0.5

- Removed the types `classNameString` and `EmptyObject`.

## v1.0.4

- Added the `Keyboard` island.
- Removed the `Autocomplete` and `Dialog` islands.
- Removed the `handlers.ts` module in favor of the `@carcajada/teclas` module.
- Updated `deno.json`, `plugin.ts`, and `deps.ts`.
- Removed the `hooks.ts` module.
- Added the `handleInteraction()` function to the `utils.ts` module.
- Added fixes to the `CONTRIBUTING.md` file.

## v1.0.3

- Added better documentation comments.

## v1.0.2

- Added the `Revealer` island for abstracting the common "See more..." functionality.

## v1.0.1

- Added the `InterObs` island for abstracting the native Intersection Observer
  js functionality.
- Added the `effects.transparent` global style for animations that start from
  `opacity: 0;`.

## v1.0.0

- This updates marks the beginning of Lunchbox as a fully released product.
  Everything is official from now on.
