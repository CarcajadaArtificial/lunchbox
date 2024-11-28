//    ___         _
//   / __|___  __| |___
//  | (__/ _ \/ _` / -_)
//   \___\___/\__,_\___|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
import { apDef } from '../src/utils.ts';
import { iComponent, iFwd } from '../src/types.ts';

export type iCode = iComponent & {
  fwd: Partial<iCodeFwd>;
};

type iCodeFwd = {
  wrapper: iFwd<HTMLDivElement>;
};

const defaults: iCode = {
  fwd: {
    wrapper: {},
  },
};

export const setup = (props: Partial<iCode>) => apDef<iCode>(defaults, props);

export default function (props: Partial<iCode>) {
  const { fwd, ...p } = setup(props);

  return (
    <div {...fwd.wrapper}>
      <code {...p} />
    </div>
  );
}
