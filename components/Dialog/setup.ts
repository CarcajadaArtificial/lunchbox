import { applyDefaults, cn, opt, partializeClasses } from '../../src/utils.ts';
import { iComponent } from '../../src/types.ts';
import { css } from '../../deps.ts';
import { iPanel } from '../../src/components/atoms/Panel/setup.ts';
import { iLayout } from '../../src/components/atoms/Layout/setup.ts';

export type iDialog = iComponent<HTMLDivElement> & {
  open: boolean;
  fwd: Partial<{
    panel: Partial<iPanel>;
    layout: Partial<iLayout>;
  }>;
};

const defaults: iDialog = {
  open: false,
  fwd: {},
};

const styles = {
  dialog: css`
    background-color: var(--clr-bg-panel-15);
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    backdrop-filter: blur(var(--s-three-quarters)) brightness(75%);
    -webkit-backdrop-filter: blur(var(--s-three-quarters)) brightness(75%);
    z-index: 50;
  `,
  panel: css`
    padding: var(--s-single);
    border-radius: var(--s-quarter);
    box-shadow: 0px var(--s-eighth) var(--s-one-and-half) var(--s-eighth) rgba(0, 0, 0, 0.3);
  `,
  layout: css`
    padding: var(--s-triple) 0;
  `,
};

export default (props: Partial<iDialog>) => {
  const p = applyDefaults<iDialog>(defaults, props);

  const { panel, layout } = p.fwd;

  const classes = partializeClasses({
    dialog: opt(cn(styles.dialog), p.class, p.nostyle || p.nostyleAll),
    panel: opt(
      cn(styles.panel),
      panel?.class,
      panel?.nostyle || p.nostyleAll,
    ),
    layout: opt(
      cn(styles.layout),
      layout?.class,
      layout?.nostyle || p.nostyleAll,
    ),
  });

  delete p.class;
  return { c: classes, ...p };
};
