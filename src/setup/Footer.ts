import { applyDefaults, cn } from '../../deps.ts';
import { LAYOUT_TYPES } from '../types/enums.ts';
import { iFooter } from '../types/props.ts';

export default (props: Partial<iFooter>) => {
  const defaults: iFooter = {
    children: undefined,
    madeWithFresh: false,
    layout_type: LAYOUT_TYPES.LEFT,
  };

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
