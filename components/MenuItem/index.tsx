//   __  __              ___ _
//  |  \/  |___ _ _ _  _|_ _| |_ ___ _ __
//  | |\/| / -_) ' \ || || ||  _/ -_) '  \
//  |_|  |_\___|_||_\_,_|___|\__\___|_|_|_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * ### MenuItem
 * *Molecule*
 *
 * This module contains the render function for the `<MenuItem />` component.
 *
 * @module
 */
import setup, { iMenuItem } from './setup.ts';

export default function (props: Partial<iMenuItem>) {
  const { children, ...p } = setup(props);

  return (
    <li {...p}>
      {children}
    </li>
  );
}
