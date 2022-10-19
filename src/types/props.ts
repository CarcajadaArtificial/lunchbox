import { JSXInternal } from 'https://esm.sh/v95/preact@10.11.0/src/jsx.d.ts';
import { JSX, ComponentChildren, ComponentChild } from 'preact';

export interface iInput
  extends JSX.HTMLAttributes<HTMLInputElement>,
    Partial<ARIAMixin>,
    Partial<ARIAMixin> {
  label?: string;
  error?: string;
}

export interface iTextArea
  extends JSX.HTMLAttributes<HTMLTextAreaElement>,
    Partial<ARIAMixin>,
    Partial<ARIAMixin> {
  label?: string;
  error?: string;
}

export interface iLayout {
  children: ComponentChildren;
  type:
    | 'full'
    | 'center'
    | 'focus'
    | 'halves'
    | 'thirds'
    | 'quarters'
    | 'right'
    | 'left';
  margin: 'full' | 'single' | 'none';
}

export interface iNavigation {
  title?: JSXInternal.Element | string;
  logo?: JSXInternal.Element | string;
}

export interface iPage {
  children?: ComponentChildren;
  navigation?: JSXInternal.Element;
  header?: JSXInternal.Element;
}

export interface iTitle
  extends JSX.HTMLAttributes<HTMLSpanElement>,
    Partial<ARIAMixin>,
    Partial<ARIAMixin> {
  children?: ComponentChildren;
}

export interface iHeader
  extends JSX.HTMLAttributes<HTMLHeadingElement>,
    Partial<ARIAMixin> {
  vanishes?: 'logo' | 'title';
  children?: ComponentChildren;
}
