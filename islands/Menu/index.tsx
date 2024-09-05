//   __  __
//  |  \/  |___ _ _ _  _
//  | |\/| / -_) ' \ || |
//  |_|  |_\___|_||_\_,_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * ### Menu
 * *Organism*
 *
 * This module contains the render function for the `<Menu />` island.
 *
 * @module
 */
import { useState } from 'preact/hooks';
import setup, { iMenu } from './setup.ts';
import Button from '../../components/Button/index.tsx';

export default function (props: Partial<iMenu>) {
  const { fwd, button, children, closed, ...p } = setup(props);
  const [isClosed, setClosed] = useState<boolean>(closed);

  function handleOpenMenu(event: MouseEvent) {
    event.stopPropagation();
    setClosed(!isClosed);

    const handleClick = () => {
      setClosed(true);
      document.body.removeEventListener('click', handleClick);
    };

    document.body.addEventListener('click', handleClick);
  }

  return (
    <div {...fwd.container}>
      {button
        ? button
        : (
          <Button type='panel' onClick={handleOpenMenu} {...fwd.button}>
            Menu
          </Button>
        )}
      {isClosed ? undefined : (
        <div {...p}>
          {children}
        </div>
      )}
    </div>
  );
}
