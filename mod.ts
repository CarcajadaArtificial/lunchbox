import * as styles from './src/styles.ts';

export const s = styles.s;

import renderCode, {
  type iCode,
  setup as setupCode,
} from './components/Code.tsx';
export const Code = (props: Partial<iCode>) =>
  renderCode(styles.Code(setupCode(props)));

import renderInput, {
  type iInput,
  setup as setupInput,
} from './components/Input.tsx';
export const Input = (props: Partial<iInput>) =>
  renderInput(styles.Input(setupInput(props)));

import renderTextArea, {
  type iTextArea,
  setup as setupTextArea,
} from './components/TextArea.tsx';
export const TextArea = (props: Partial<iTextArea>) =>
  renderTextArea(styles.TextArea(setupTextArea(props)));
