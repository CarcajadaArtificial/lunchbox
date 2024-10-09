//   ___                  _
//  | _ \_____ _____ __ _| |___ _ _
//  |   / -_) V / -_) _` | / -_) '_|
//  |_|_\___|\_/\___\__,_|_\___|_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * ### Revealer
 * *Organism*
 *
 * This module contains the render function for the `<Revealer />` island.
 *
 * @module
 */
import { useState } from 'preact/hooks';
import setup, { iRevealer } from './setup.ts';

export default function (props: Partial<iRevealer>) {
  const { children, fwd, actuator, ...p } = setup(props);
  const [isRevealed, setRevealed] = useState<boolean>(false);

  return (
    <div {...p}>
      {isRevealed ? null : (
        <div onClick={() => setRevealed(true)}>
          {actuator}
        </div>
      )}
      <div>
        {isRevealed ? children : null}
      </div>
    </div>
  );
}
