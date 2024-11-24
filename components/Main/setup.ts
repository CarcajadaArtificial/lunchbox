//   __  __      _        ___      _
//  |  \/  |__ _(_)_ _   / __| ___| |_ _  _ _ __
//  | |\/| / _` | | ' \  \__ \/ -_)  _| || | '_ \
//  |_|  |_\__,_|_|_||_| |___/\___|\__|\_,_| .__/
//                                         |_|
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @module
 */
import { iComponent } from '../../src/types.ts';
import { apDef } from '../../src/utils.ts';

export type iMain = iComponent & {
  whitespace: boolean;
};

const defaults: iMain = {
  whitespace: false,
};

export default (props: Partial<iMain>) => apDef<iMain>(defaults, props);
