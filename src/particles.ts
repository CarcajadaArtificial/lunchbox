/**
 * Think of particles as your design tokens, those nifty little helpers for your UI! While design tokens can be implemented in various ways (like css-in-js, CSS variables, or Sass modules), we've chosen to roll with **Tailwind components** for their flexibility and ease of use. Since particles are essentially Tailwind styles, they're represented as strings. But hey, strings can get messy, right? That's where the `@vyn/cn` package comes to the rescue, helping us keep things organized and manageable! Particles are primarily used by atoms, but feel free to sprinkle them as classes on any element you fancy.
 *
 * @module particles
 */
export { default as area } from '../ui/particles/area.ts';
export { default as btn } from '../ui/particles/btn.ts';
export { default as clr } from '../ui/particles/clr.ts';
export { default as focus } from '../ui/particles/focus.ts';
export { default as input } from '../ui/particles/input.ts';
export { default as layout } from '../ui/particles/layout.ts';
export { default as txt } from '../ui/particles/txt.ts';
