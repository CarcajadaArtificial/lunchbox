import { applyDefaults, cn, opt, partializeClasses } from '../../src/utils.ts';
import { iComponent, iFwd } from '../../src/types.ts';
import { LAYOUT_TYPES } from '../../src/enums.ts';
import { css } from 'resin';

export type iLayout = iComponent<HTMLDivElement> & {
  type: LAYOUT_TYPES;
  dashboard: boolean;
  fwd: Partial<{
    module: iFwd<HTMLDivElement>;
  }>;
};

const defaults: iLayout = {
  dashboard: false,
  type: 'full',
  fwd: {},
};

const styles: {
  grid: string;
  dashboard: string;
  module: Record<LAYOUT_TYPES, string>;
} = {
  grid: css`
    display: grid; 
    @media screen and (max-width: 39.9375em) {
      gap: 0 0.8503100088rem;
      width: auto;
      margin: 0 0.8503100088rem;
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    @media screen and (min-width: 40em) and (max-width: 99.9375em) {
      gap: 0 2.1257750221%;
      width: auto;
      margin: 0 calc(23.13871222% - 134.488008342px);
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
    @media screen and (min-width: 100em) {
      gap: 0 1.5rem;
      width: min-content;
      margin: 0 auto;
      grid-template-columns: repeat(12, minmax(4.5rem, 4.5rem));
    }
  `,
  dashboard: css`
    display: grid; 
    gap: 0 1.5rem;
    margin: 0 1.5rem;
    width: auto;
    @media screen and (max-width: 39.9375em) {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    @media screen and (min-width: 40em){
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  `,
  module: {
    empty: css`
      grid-column: span 1;
    `,
    full: css`
      grid-column: span 12;
      @media screen and (max-width: 39.9375em) {
        grid-column: span 6;
      }
    `,
    center: css`
      grid-column: 2/span 10;
      @media screen and (max-width: 39.9375em) {
        grid-column: span 6;
      }
    `,
    focus: css`
      grid-column: 3/span 8;
      @media screen and (max-width: 39.9375em) {
        grid-column: span 6;
      }
    `,
    halves: css`
      grid-column: span 6;
    `,
    thirds: css`
      grid-column: span 4;
      @media screen and (max-width: 39.9375em) {
        grid-column: span 6;
      }
    `,
    right: css`
      grid-column: span 4;

      @media screen and (max-width: 39.9375em) {
        grid-column: span 6;
      }

      &:nth-child(even) {
        grid-column: span 8;

        @media screen and (max-width: 39.9375em) {
          grid-column: span 6;
        }
      }
    `,
    left: css`
      grid-column: span 4;

      @media screen and (max-width: 39.9375em) {
        grid-column: span 6;
      }
      
      &:nth-child(odd) {
        grid-column: span 8;

        @media screen and (max-width: 39.9375em) {
          grid-column: span 6;
        }
      }
    `,
  },
};

export default (props: Partial<iLayout>) => {
  const p = applyDefaults<iLayout>(defaults, props);

  const { module } = p.fwd;

  const classes = partializeClasses({
    layout: opt(
      cn(
        props.dashboard ? styles.dashboard : styles.grid,
      ),
      p.class,
      p.nostyle || p.nostyleAll,
    ),
    module: opt(
      cn(styles.module[p.type as LAYOUT_TYPES]),
      module?.class,
      module?.nostyle || p.nostyleAll,
    ),
  });

  delete p.class;
  return { c: classes, ...p };
};
