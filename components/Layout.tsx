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

export type iLayout = iComponent & {
  whitespace: boolean;
};

const defaults: iLayout = {
  whitespace: false,
};

export const setup = (props: Partial<iLayout>) => {
  const p = apDef<iLayout>(defaults, props);

  return p;
};

export default function (props: iLayout) {
  // deno-lint-ignore no-unused-vars
  const { whitespace, ...p } = props;

  return <section {...p} />;
}
