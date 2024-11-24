import renderMain from './components/Main/index.tsx';
import setupMain, { type iMain } from './components/Main/setup.ts';
import * as styles from './src/styles.ts';

export const Main = (props: Partial<iMain>) =>
  renderMain(styles.main(setupMain(props)));
