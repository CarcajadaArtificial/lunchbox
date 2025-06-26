# Changelog

## Backlog

### New Features

- An island for using the IntersectionObserver API.
- Extend the `.layout` class for layouts inside layouts.
- Keynav that keeps the scroll position consitent.
- KeynavTutorial island that displays a `<kbd/>` element, a label and listens
  for the first key press of that keys and visually marks the keys as completed.

### JSR

- Module documentation.
- GitHub actions for publish.

## Version History

### 3.0.1

- Added an update to the `keynav` utility function where it outputs the effect
  function and not the whole island.

### 3.0.0

- Now built on top of DaisyUI and TailwindCSS.
- Added the DaisyUI compatible themes Lunchbox and Supperbox (nickname for the
  dark mode theme).
- Added noise style utilities.
- Removed components redundant to DaisyUI.
- Added the `md` utility function replacing the `<Markdown/>` component.
- Added the `<Keynav/>` island.
- Removed the CSS module in favor of `npm:lunchbox-css`.
