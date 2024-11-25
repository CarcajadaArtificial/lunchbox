//   _                       _
//  | |   __ _ _  _ ___ _  _| |_
//  | |__/ _` | || / _ \ || |  _|
//  |____\__,_|\_, \___/\_,_|\__|
//             |__/
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @module
 */
import { apDef } from '../src/utils.ts';
import { iComponent } from '../src/types.ts';
import { ModuleSizes } from '../src/enums.ts';

export type iModule = Omit<iComponent, 'size'> & {
  size: ModuleSizes;
  half: ModuleSizes;
};

const defaults: iModule = {
  size: 'full',
  half: 'full',
};

export const setup = (props: Partial<iModule>) => {
  const p = apDef<iModule>(defaults, props);

  // p.class = o(
  //   [styles, `module--${p.size} module__half--${p.half}`],
  //   { ...p },
  // );

  return p;
};

export default function Module(props: Partial<iModule>) {
  // deno-lint-ignore no-unused-vars
  const { size, ...p } = setup(props);

  return <article {...p} />;
}
