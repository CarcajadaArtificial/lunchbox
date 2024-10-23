import setup, { iKeyboard } from './setup.ts';
import { handleKeyboard } from '../../deps.ts';

export default function MyInput(props: Partial<iKeyboard>) {
  const { keystrokes, ...p } = setup(props);
  return <div {...p} onKeyUp={handleKeyboard(keystrokes)} />;
}
