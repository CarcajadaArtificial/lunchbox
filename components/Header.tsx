//   _  _             _
//  | || |___ __ _ __| |___ _ _
//  | __ / -_) _` / _` / -_) '_|
//  |_||_\___\__,_\__,_\___|_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @module
 */
import { apDef } from '../src/utils.ts';
import { iComponent } from '../src/types.ts';

export type iHeader = iComponent & {
  banner: boolean;
};

const defaults: iHeader = {
  banner: false,
};

export const setup = (props: Partial<iHeader>) =>
  apDef<iHeader>(defaults, props);

export default function (props: iHeader) {
  // deno-lint-ignore no-unused-vars
  const { banner, ...p } = props;

  return <header {...p} />;
}
