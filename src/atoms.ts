/**
 * This module manages the base of the hierarchy of the components of this library. The definition of an Atom is a component made up of an HTMLElement, because of this, they must be declared using the type iAtom that links them to the properties of an HTMLElement. Atoms use {@linkcode /@lunchbox/ui/doc/particles | "Particles"}  to style themselves. Particles are smaller and more abstract things that don't represent HTML elements.
 *
 * @module atoms
 */

/**
 * This collection of atoms contains the ones that render secondary sections of content made using the `<aside/>` element, usually for types of sidebars.
 * @namespace Aside
 */
export * as Aside from '../ui/atoms/Aside.tsx';

/**
 * This collection contains contextual button variations that adapt their visual hierarchy based on their surroundings rather than fixed primary/secondary patterns. Each button's prominence shifts naturally through color relationships with its container.
 */
export * as Button from '../ui/atoms/Button.tsx';

/**
 * A specialized component system for displaying code with proper contrast. To build proper code blocks, the {@linkcode /@lunchbox/ui/doc/atoms/~/Code.Container | Code.Container} atom must be inside a container atom.
 */
export * as Code from '../ui/atoms/Code.tsx';

/**
 * This dictionary contains the atoms that make up the `<details/>` element. A custom one could be built using this atoms, but for most cases the {@linkcode /@lunchbox/ui/doc/molecules/~/Accordion | Accordion} molecule is a standard solution.
 */
export * as Details from '../ui/atoms/Details.tsx';

/**
 * This collection contains atoms designed to build input components in a standardized way. Each atom represents a fundamental piece that, when combined, allows the creation of any type of input interface. The atoms handle core styling concerns like focus states, error highlighting, and spacing consistency, while remaining flexible enough to be customized through class props.
 */
export * as Input from '../ui/atoms/Input.tsx';

/**
 * A collection contains atoms that render lists.
 */
export * as List from '../ui/atoms/List.tsx';

/**
 * This collection contains atoms for building consistent navigation structures across your application.
 */
export * as Nav from '../ui/atoms/Nav.tsx';

export { H0, H1, H2, H3 } from '../ui/atoms/Heading.tsx';
export { Body, Footer, Header, Main } from '../ui/atoms/Page.tsx';
export { default as KatexStyles } from '../ui/atoms/KatexStyles.tsx';
export { default as Kbd } from '../ui/atoms/Kbd.tsx';
export { default as Link } from '../ui/atoms/Link.tsx';
export { default as Prose } from '../ui/atoms/Prose.tsx';
export { default as Separator } from '../ui/atoms/Separator.tsx';
