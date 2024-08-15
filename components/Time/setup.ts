//   _____ _             ___      _
//  |_   _(_)_ __  ___  / __| ___| |_ _  _ _ __
//    | | | | '  \/ -_) \__ \/ -_)  _| || | '_ \
//    |_| |_|_|_|_\___| |___/\___|\__|\_,_| .__/
//                                        |_|
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * This module contains the prop type, default values, and styles for the `<Kbd />` component.
 *
 * @module
 */
import { apDef, o } from '../../src/utils.ts';
import { iComponent, iFwd } from '../../src/types.ts';
import { DateTime, datetime } from '../../deps.ts';
import { styles } from './styles.ts';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Properties of the `<Time />` component. */
export type iTime = iComponent<HTMLTimeElement> & {
  timestamp: DateTime;
  format: string;
  fwd: Partial<{
    colon: iFwd<HTMLSpanElement>;
  }>;
};

/** These are the default values of the `<Time />` component's props. */
const defaults: iTime = {
  timestamp: datetime(new Date()),
  format: 'www, d MMM YYYY - h:mm a',
  fwd: {},
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Setup function of the `<Time />` component. */
export default (props: Partial<iTime>) => {
  const p = apDef<iTime>(defaults, props);

  p.dateTime = p.timestamp.toISO();
  p.class = o(styles, { ...p });

  return p;
};
