import { cn } from '@vyn/cn';

/**
 * This is particle contains the styles for the library's grid system container. Children of elements
 * containing this styles should use the extended tailwind `gridColumn` settings.
 *
 * @example Usage
 * ```ts
 * import layout from 'lunchbox/particles/layout.ts';
 *
 * <div class={layout}>
 *  <div class="grid-cols-12">...</div>
 * </div>
 * ```
 */
const layout: string = cn(
  'grid',
  'grid-cols-6 md:grid-cols-12',
  'gap-x-[0.8503100088rem] md:gap-x-[2.1257750221%] lg:gap-x-[1.5rem]',
  'w-auto lg:min-w-min',
  'px-[0.8503100088rem] md:px-[calc(23.13871222%-134.488008342px)] lg:px-auto',
);

export default layout;
