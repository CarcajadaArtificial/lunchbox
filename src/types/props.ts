import { JSX } from 'preact';

export interface iInput
  extends JSX.HTMLAttributes<HTMLInputElement>,
    Partial<ARIAMixin> {
  label?: string;
  error?: string;
}

export interface iTextArea
  extends JSX.HTMLAttributes<HTMLTextAreaElement>,
    Partial<ARIAMixin> {
  label?: string;
  error?: string;
}
