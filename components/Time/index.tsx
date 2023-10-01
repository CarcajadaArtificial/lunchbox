import setup, { iTime } from './setup.ts';

export default function (props: Partial<iTime>) {
  const {
    c,
    nostyle,
    nostyleAll,
    fref,
    fwd,
    dateObject,
    format,
    ...p
  } = setup(props);

  return <time dateTime={dateObject.toISO()}>{dateObject.format(format)}</time>;
}
