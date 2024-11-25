//   __  __      _
//  |  \/  |__ _(_)_ _
//  | |\/| / _` | | ' \
//  |_|  |_\__,_|_|_||_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @module
 */
import { iComponent } from '../src/types.ts';
import { apDef } from '../src/utils.ts';

export type iMain = iComponent & {
  whitespace: boolean;
};

const defaults: iMain = {
  whitespace: false,
};

export const setup = (props: Partial<iMain>) => apDef<iMain>(defaults, props);

export default (props: iMain) => <main {...props} />;
