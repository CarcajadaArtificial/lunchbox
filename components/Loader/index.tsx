import setup, { iLoader } from './setup.ts';
import Panel from '../Panel/index.tsx';
import Text from '../Text/index.tsx';
import { IconLoader2 } from '../../deps.ts';

export default function (props: Partial<iLoader>) {
  const { c, nostyle, nostyleAll, fref, fwd, children, ...p } = setup(props);

  return (
    <Panel ref={fref} {...p} class={c.loader}>
      <IconLoader2 ref={fwd.icon?.ref} class={c.icon} />
      <Text noMargins fref={fwd.text?.ref} class={c.text}>
        Loading...
      </Text>
    </Panel>
  );
}
