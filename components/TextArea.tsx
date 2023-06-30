import Text from './Text.tsx';
import { iTextarea } from '../src/types/props.ts';
import setup from '../src/setup/Textarea.ts';
import { TEXT_TYPES } from '../mod.ts';

/**
 * @todo [!!] Choose a standard color for placeholders.
 */
export default function Textarea(props: Partial<iTextarea>) {
  const { c, refTextarea, maxWidth, label, error, ...p } = setup(props);

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
        <textarea ref={refTextarea} class={c.input} {...p} />
      </label>
      {error ? (
        <Text noMargins inheritColor type={TEXT_TYPES.SMALL} class={c.error}>
          {error}
        </Text>
      ) : null}
    </div>
  );
}
