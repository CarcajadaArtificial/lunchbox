import * as styles from './src/styles.ts';

export const s = styles.s;

import renderCode, {
  type iCode,
  setup as setupCode,
} from './components/Code.tsx';
export const Code = (props: Partial<iCode>) =>
  renderCode(styles.Code(setupCode(props)));
