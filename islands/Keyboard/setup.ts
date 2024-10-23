import { iComponent } from '../../src/types.ts';
import { apDef, o } from '../../src/utils.ts';
import type { Keystroke } from '../../deps.ts';

export type iKeyboard = iComponent<HTMLDivElement> & {
  keystrokes: Keystroke[];
};

export const defaults: iKeyboard = {
  keystrokes: [],
  tabIndex: 0,
};

export default function (props: Partial<iKeyboard>) {
  const p = apDef<iKeyboard>(defaults, props);

  p.class = o('keyboard', { ...p });

  return p;
}
