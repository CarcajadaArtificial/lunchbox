import { iMenu } from '../src/types/props.ts';
import Link from './Link.tsx';
import Button from './Button.tsx';
import setup from '../src/setup/Menu.ts';
import { BUTTON_TYPES } from '../mod.ts';

/**
 * @todo [!!] Add event listener that closes the menu when clicking on the body.
 * @todo [!!] Remove link schema, make the children the interior of the menu and add a prop for the button.
 * @todo [] Add `<nav>` and `<ul>` elements to the list.
 */
export default function (props: Partial<iMenu>) {
  const { c, isOpen, children, links, ...p } = setup(props);

  return (
    <div class={c.wrapper}>
      <div {...p} class={c.door}>
        <Button>{children}</Button>
      </div>
      {isOpen ? (
        <div class={c.menu}>
          {links.map((link) => (
            <Link href={link.href}>{link.label}</Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}
