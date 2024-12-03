//   ___                _
//  |_ _|_ _  _ __ _  _| |_
//   | || ' \| '_ \ || |  _|
//  |___|_||_| .__/\_,_|\__|
//           |_|
////////////////////////////////////////////////////////////////////////////////////////////////////////
import { apDef } from '../src/utils.ts';
import { iComponent, iFwd } from '../src/types.ts';

export type iTextArea = iComponent<HTMLTextAreaElement> & {
  label: string;
  error: string;
  fwd: Partial<iTextAreaFwd>;
};

type iTextAreaFwd = {
  text: iFwd<HTMLParagraphElement>;
  label: iFwd<HTMLLabelElement>;
  error: iFwd<HTMLParagraphElement>;
  required: iFwd;
  container: iFwd<HTMLDivElement>;
};

const defaults: iTextArea = {
  label: '',
  error: '',
  required: false,
  fwd: {
    text: {},
    label: {},
    error: {},
    required: {
      title: 'Required',
    },
    container: {},
  },
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
export const setup = (props: Partial<iTextArea>) => {
  const p = apDef<iTextArea>(defaults, props);
  p.type = typeof p.type === 'string' ? p.type : p.type?.value;

  return p;
};

export default function (props: Partial<iTextArea>) {
  const { fwd, label, error, ...p } = setup(props);

  return (
    <div {...fwd.container}>
      <label {...fwd.label}>
        {label === '' ? null : (
          <p {...fwd.text}>
            <>{label}</>
            {p.required ? <code {...fwd.required}>*</code> : null}
          </p>
        )}
        <textarea {...p} />
      </label>
      {error === '' ? null : <p {...fwd.error}>{error}</p>}
    </div>
  );
}
