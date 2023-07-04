import Text from './Text.tsx';
import { iInput } from '../src/types/props.ts';
import setup from '../src/setup/Input.ts';
import { TEXT_TYPES } from '../mod.ts';

export default function (props: Partial<iInput>) {
  const { c, refInput, maxWidth, label, error, ...p } = setup(props);

  return (
    <div class={c.container}>
      <label class={c.label}>
        <Text noMargins class={c.text}>
          {label}
          {p.required ? (
            <sup title="Required" class={c.required}>
              *
            </sup>
          ) : null}
        </Text>
        <input ref={refInput} class={c.input} {...p} />
      </label>
      {error ? (
        <Text noMargins type={TEXT_TYPES.SMALL} inheritColor class={c.error}>
          {error}
        </Text>
      ) : null}
    </div>
  );
}
