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
  const { fwd, button, children, hardToggle, open, ...p } = setup(props);
  const [isClosed, setClosed] = useState<boolean>(!open);

  function handleOpenMenu(event: MouseEvent) {
    event.stopPropagation();
    setClosed(!isClosed);

    const handleClick = () => {
      setClosed(true);

      if (!hardToggle) {
        document.body.removeEventListener('click', handleClick);
      }
    };

    if (!hardToggle) {
      document.body.addEventListener('click', handleClick);
    }
  }

  return (
    <div {...fwd.container}>
      <Button onClick={handleOpenMenu} {...fwd.button}>
        {button ? button : 'Menu'}
      </Button>
      {isClosed ? undefined : (
        <div {...fwd.floater}>
          <ul {...p}>
            {children}
          </ul>
        </div>
      )}
    </div>
  );
}
