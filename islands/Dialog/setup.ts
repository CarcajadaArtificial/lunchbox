import { apDef, o, part } from '../../src/utils.ts';
import { iComponent } from '../../src/types.ts';
import { iPanel } from '../../components/Panel/setup.ts';

export type iDialog = iComponent<HTMLDivElement> & {
  open: boolean;
  fwd: Partial<{
    panel: Partial<iPanel>;
  }>;
};

const defaults: iDialog = {
  open: false,
  fwd: {},
};

export default (props: Partial<iDialog>) => {
  const p = apDef<iDialog>(defaults, props);

  const classes = part({
    dialog: o('dialog', { ...p }),
    panel: o('dialog__panel', { ...p.fwd.panel }),
  });

  delete p.class;
  return { c: classes, ...p };
};
