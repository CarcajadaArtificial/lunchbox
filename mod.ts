import * as styles from './src/styles.ts';

export const s = styles.s;

import renderMain, {
  type iMain,
  setup as setupMain,
} from './components/Main.tsx';

export const Main = (props: Partial<iMain>) =>
  renderMain(styles.main(setupMain(props)));

import renderHeader, {
  type iHeader,
  setup as setupHeader,
} from './components/Header.tsx';

export const Header = (props: Partial<iHeader>) =>
  renderHeader(styles.header(setupHeader(props)));

import renderLayout, {
  type iLayout,
  setup as setupLayout,
} from './components/Layout.tsx';

export const Layout = (props: Partial<iLayout>) =>
  renderLayout(styles.layout(setupLayout(props)));
