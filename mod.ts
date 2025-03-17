//   _                _    _
//  | |  _  _ _ _  __| |_ | |__  _____ __
//  | |_| || | ' \/ _| ' \| '_ \/ _ \ \ /
//  |____\_,_|_||_\__|_||_|_.__/\___/_\_\
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * # 🍱 Lunchbox
 *
 * `` Hello ( ´ ω ` )ノﾞ `` Welcome to the Lunchbox package page. This project hasn’t reached the point where a custom static site is necessary, but quality documentation remains a priority. JSR’s automatic documentation and thorough code comments help keep everything clear and accessible. This page will showcase and navigate everything Lunchbox has to offer.
 *
 * ## Introduction
 *
 * - `ui`: This module is my take on Atomic Design, balancing modularity with practical HTML usage. It provides composable building blocks, from simple HTML-based components to full interactive UI elements.
 * - `init`: This module is inspired by shadcn/ui’s local component generation. Instead of exporting components conventionally, this module allows seamless updates and local integration of UI components.
 * - `mod`: The default module serves as a collection of essential utilities and extensions, including a required Tailwind plugin that ensures styles work correctly across the package.
 *
 * ## UI
 *
 * ### Particles
 * A **particle** is a string containing Tailwind classes. It abstracts styling logic, ensuring a consistent design language across the library. A simple particle could be merely a string or a list of them joined by the `cn()` function from `jsr:@vyn/cn`. When many particles share a similar purpose or theme, they could be grouped in a collection; these groups of particles come in the form of Records of particles.
 *
 * | Particle             | Type       |
 * |----------------------|------------|
 * | { @linkcode area }   | Simple     |
 * | { @linkcode btn }    | Simple     |
 * | { @linkcode clr }    | Collection |
 * | { @linkcode focus }  | Simple     |
 * | { @linkcode input }  | Collection |
 * | { @linkcode layout } | Simple     |
 * | { @linkcode txt }    | Collection |
 *
 * ### Atoms
 * An **atom** is a function that returns a single `HTMLElement` stylized by tailwind classed that might include one or more particles. Every atom must hold all attributes of a single specific HTMLElement, behaving like an standarized and stylized element (e.g. the `<Link/>` atom is by all means equal to a normal `<a/>` element with extended styles and settings). Atoms are commonly grouped in collections, these are meant to feel like if you opened a boxset of building blocks that are all designed to fit into each other.
 *
 * | Atom                      | Type       |
 * |---------------------------|------------|
 * | { @linkcode Aside }       | Collection |
 * | { @linkcode Button }      | Collection |
 * | { @linkcode Code }        | Collection |
 * | { @linkcode Details }     | Collection |
 * | { @linkcode Heading }     | Collection |
 * | { @linkcode Input }       | Collection |
 * | { @linkcode KatexStyles } | Simple     |
 * | { @linkcode Kbd }         | Simple     |
 * | { @linkcode Link }        | Simple     |
 * | { @linkcode Nav }         | Collection |
 * | { @linkcode Page }        | Collection |
 * | { @linkcode Prose }       | Simple     |
 * | { @linkcode Separator }   | Simple     |
 *
 * ### Molecules
 * A **molecule** is a non-interactive, server-side rendered Preact component. These components compose atoms into structured UI elements that remain lightweight and predictable.
 *
 * | Molecule                    |
 * |-----------------------------|
 * | { @linkcode Accordion }     |
 * | { @linkcode FieldsetCheck } |
 * | { @linkcode FieldsetRadio } |
 * | { @linkcode InputCheck }    |
 * | { @linkcode InputField }    |
 * | { @linkcode InputRadio }    |
 * | { @linkcode InputSelect }   |
 * | { @linkcode InputTextarea } |
 * | { @linkcode Markdown }      |
 *
 * ### Organisms - WIP
 * - An **organism** is the only category of client-interactive Preact islands. Unlike molecules, organisms handle dynamic interactions and require JavaScript execution on the client side.
 *
 * ## Init
 *
 * Tailwind’s core design conflicts with conventionally exported component libraries. Because class-based styling is integral to Tailwind, importing components as functions disrupts its intended flow. Inspired by shadcn/ui, I opted for local code generation as the best solution. Instead of relying on external updates, a single command can regenerate and update any or all UI components while keeping them integrated within the project.
 *
 * ## Mod
 *
 * A **Tailwind plugin** is required for Lunchbox components to function properly. This plugin extends Tailwind configurations to ensure consistent utility classes and themes across the package. Additionally, utility types and functions are exported from this module. These include common patterns and helpers to improve development efficiency when working with Lunchbox components.
 *
 * @module lunchbox
 */

export * from './src/types.ts';
export * from './src/utils.ts';
export { default as lunchboxPlugin } from './src/tailwind.ts';
