import { iLink } from '../../src/props.ts';
import setup from './setup.ts';

/**
 * @todo [!] Add hover animation.
 */
export default function (props: Partial<iLink>) {
  const { c, fref, children, ...p } = setup(props);

  return (
    <a ref={fref} class={c.link} {...p}>
      {children}
    </a>
  );
}
