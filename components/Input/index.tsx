import Text from '../Text/index.tsx';
import setup, { iInput } from './setup.ts';
import { TEXT_TYPES } from '../../src/enums.ts';

export default function (props: Partial<iInput>) {
  const { c, fref, fwd, maxWidth, label, error, ...p } = setup(props);

  return (
    <div ref={fwd.container?.ref} class={c.container}>
      <label ref={fwd.label?.ref} class={c.label}>
        {label === '' ? null : (
          <Text fref={fwd.text?.ref} noMargins class={c.text}>
            {label}
            {p.required ? (
              <sup ref={fwd.required?.ref} title="Required" class={c.required}>
                *
              </sup>
            ) : null}
          </Text>
        )}
        <input ref={fref} class={c.input} {...p} />
      </label>
      {error ? (
        <Text fref={fwd.error?.ref} noMargins type={TEXT_TYPES.SMALL} inheritColor class={c.error}>
          {error}
        </Text>
      ) : null}
    </div>
  );
}
