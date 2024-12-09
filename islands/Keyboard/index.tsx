import setup, { iKeyboard } from './setup.ts';
import { handleKeyboard } from 'jsr:@carcajada/teclas@^1.0.8';

export default function (props: Partial<iKeyboard>) {
  const { keystrokes, ...p } = setup(props);
  return <div {...p} onKeyUp={handleKeyboard(keystrokes)} />;
}
