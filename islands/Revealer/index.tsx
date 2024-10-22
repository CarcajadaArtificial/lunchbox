//   ___                  _
//  | _ \_____ _____ __ _| |___ _ _
//  |   / -_) V / -_) _` | / -_) '_|
//  |_|_\___|\_/\___\__,_|_\___|_|
//
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Revealer component.
 *
 * This is an Organism component that renders the `<Revealer />` island.
 *
 * @module Revealer
 */

import { useState } from 'preact/hooks';
import setup, { iRevealer } from './setup.ts';
import { JSX } from 'preact';

/**
 * Revealer component.
 *
 * @param {Partial<iRevealer>} props - The properties passed to the component.
 * @returns {JSX.Element} The rendered component.
 */
export default function Revealer(props: Partial<iRevealer>): JSX.Element {
  const { children, fwd, actuator, ...p } = setup(props);
  const [isRevealed, setRevealed] = useState<boolean>(false);

  return (
    <div {...p}>
      {!isRevealed && (
        <div onClick={() => setRevealed(true)}>
          {actuator}
        </div>
      )}
      <div {...fwd.revelation}>
        {isRevealed && children}
      </div>
    </div>
  );
}
