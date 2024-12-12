import { iAtom } from '../atoms.tsx';
import { apDef } from '../../deps.ts';
import { handleKeyboard, type Keystroke } from 'jsr:@carcajada/teclas@^1.0.8';

export type iKeyboard = {
  keystrokes: Keystroke[];
  fwd: iAtom<HTMLDivElement>;
};

export const d: iKeyboard = {
  keystrokes: [],
  fwd: {
    tabIndex: 0,
  },
};

export const setup = (props: Partial<iKeyboard>) => apDef<iKeyboard>(d, props);

export default (props: Partial<iKeyboard>) => {
  const { keystrokes, fwd } = setup(props);
  return <div {...fwd} onKeyUp={handleKeyboard(keystrokes)} />;
};
