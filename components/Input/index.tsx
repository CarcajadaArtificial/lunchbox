import Text from '../Text/index.tsx';
import { iInput } from '../../src/props.ts';
import setup from './setup.ts';
import { TEXT_TYPES } from '../../src/enums.ts';

export default function (props: Partial<iInput>) {
  const { c, fref, fwd, maxWidth, label, error, ...p } = setup(props);

  return (
    <div ref={fwd?.container?.ref} class={c.container}>
      <label ref={fwd?.label?.ref} class={c.label}>
        <Text noMargins class={c.text}>
          {label}
          {p.required ? (
            <sup ref={fwd?.required?.ref} title="Required" class={c.required}>
              *
            </sup>
          ) : null}
        </Text>
        <input ref={fref} class={c.input} {...p} />
      </label>
      {error ? (
        <Text noMargins type={TEXT_TYPES.SMALL} inheritColor class={c.error}>
          {error}
        </Text>
      ) : null}
    </div>
  );
}
