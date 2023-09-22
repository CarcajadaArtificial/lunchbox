import { applyDefaults, cn, opt, partializeClasses } from '../../src/utils.ts';
import { iComponent, iFwd } from '../../src/types.ts';
import { css } from 'resin';
import type { iInput } from '../Input/setup.ts';

export type iFieldset = iComponent<HTMLFieldSetElement> & {
  allowMultiple: boolean;
  values: string[];
  selectedValues: string[];
  legend: string;
  fwd: Partial<{
    legend: iFwd<HTMLLegendElement>;
    input: Partial<iInput>;
  }>;
};

const defaults: iFieldset = {
  allowMultiple: false,
  values: [],
  selectedValues: [],
  legend: '',
  fwd: {},
};

const style = {
  fieldset: css`
    background-color: var(--clr-bg-panel-15);
    padding: var(--s-half) var(--s-single);
    border-radius: var(--s-quarter);
    margin-bottom: var(--s-single);
    max-width: 24rem;

    &:hover, &:has(:hover), &:has(:focus) {
      background-color: var(--clr-bg-panel-50);
    }
  `,
  legend: css``,
};

export default (props: Partial<iFieldset>) => {
  const p = applyDefaults<iFieldset>(defaults, props);

  const {} = p.fwd;

  const classes = partializeClasses({
    fieldset: opt(cn(style.fieldset), p.class, p.nostyle || p.nostyleAll),
    legend: 'undefined',
  });

  delete p.class;
  return { c: classes, ...p };
};
