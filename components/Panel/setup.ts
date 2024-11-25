//   ___               _           _
//  | _ \__ _ _ _  ___| |  ___ ___| |_ _  _ _ __
//  |  _/ _` | ' \/ -_) | (_-</ -_)  _| || | '_ \
//  |_| \__,_|_||_\___|_| /__/\___|\__|\_,_| .__/
//                                         |_|
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @module
 */
import { o } from '../../src/utils.ts';
import { iComponent } from '../../src/types.ts';
import { styles } from './styles.ts';

export type iPanel = iComponent<HTMLDivElement>;

export default (props: Partial<iPanel>) => {
  props.class = o([styles, 'panel'], { ...props });

  return props;
};
