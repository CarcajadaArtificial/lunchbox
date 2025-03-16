//     _  _
//    /_\| |_ ___ _ __  ___
//   / _ \  _/ _ \ '  \(_-<
//  /_/ \_\__\___/_|_|_/__/
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * This module manages the base of the hierarchy of the components of this library. The definition
 * of an Atom is a component made up of an HTMLElement, because of this, they must be declared
 * using the type iAtom that links them to the properties of an HTMLElement. The rendered
 * element will contain a list of tailwind classes that give the element it's style.
 *
 * Atoms use {@linkcode /@lunchbox/ui/doc/particles | "Particles"}  to style themselves. Particles are smaller and more
 * abstract things that don't represent HTML elements, they are lists of classes that group common
 * styles. These particle classes can also be used directly in user-created elements that aren't atoms.
 * The particles module contains these style definitions which commonly come from tailwind theme settings.
 *
 * @module atoms
 */
export { default as Aside } from './atoms/Aside.tsx';
export { default as Button } from './atoms/Button.tsx';
export { default as Code } from './atoms/Code.tsx';
export { default as Details } from './atoms/Details.tsx';
export { default as Heading } from './atoms/Heading.tsx';
export { default as Input } from './atoms/Input.tsx';
export { default as KatexStyles } from './atoms/KatexStyles.tsx';
export { default as Kbd } from './atoms/Kbd.tsx';
export { default as Link } from './atoms/Link.tsx';
export { default as List } from './atoms/List.tsx';
export { default as Nav } from './atoms/Nav.tsx';
export { default as Page } from './atoms/Page.tsx';
export { default as Prose } from './atoms/Prose.tsx';
export { default as Separator } from './atoms/Separator.tsx';
