import { applyDefaults, cn } from '../../deps.ts';
import { iExtendedElement } from '../../src/element.ts';
import { LAYOUT_TYPES } from '../../src/enums.ts';

export type iFooter = iExtendedElement & {
  madeWithFresh: boolean;
  layout_type: LAYOUT_TYPES | null;
};

const defaults: iFooter = {
  madeWithFresh: false,
  layout_type: null,
};

export default (props: Partial<iFooter>) => {
  props.children = props.children
    ? Array.isArray(props.children)
      ? props.children
      : [props.children]
    : [];

  const p = applyDefaults<iFooter>(defaults, props);

  const classes = {
    footer: cn('comp-footer'),
  };

  return { c: classes, ...p };
};
