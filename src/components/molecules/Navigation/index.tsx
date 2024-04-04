import setup, { iNavigation } from './setup.ts';
import Panel from '../../atoms/Panel/index.tsx';

/**
 * @todo [!] Add a property `scroll-height` that makes the menu appear after scrolling until that height.
 * @todo [!] Add an animation when the navigation appears.
 */
export default function (props: Partial<iNavigation>) {
  const { c, nostyle, nostyleAll, fref, fwd, children, fixed, ...p } = setup(
    props,
  );

  return (
    <div ref={fwd.wrapper?.ref} class={c.wrapper}>
      <Panel nostyleAll={nostyleAll} fref={fwd.panel?.fref} class={c.panel}>
        <nav ref={fref} class={c.nav} {...p}>
          {children}
        </nav>
      </Panel>
    </div>
  );
}
