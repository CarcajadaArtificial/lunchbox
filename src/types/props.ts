import { JSXInternal } from 'https://esm.sh/v95/preact@10.11.0/src/jsx.d.ts';
import { JSX, ComponentChildren, ComponentChild } from 'preact';

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

export interface iLayout
  extends JSX.HTMLAttributes<HTMLDivElement>,
    Partial<ARIAMixin> {
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

export interface iNavigation
  extends JSX.HTMLAttributes<HTMLElement>,
    Partial<ARIAMixin> {
  title?: string;
  logo?: JSXInternal.Element;
}

export interface iPage
  extends JSX.HTMLAttributes<HTMLDivElement>,
    Partial<ARIAMixin> {
  children?: ComponentChildren;
  navigation?: JSXInternal.Element;
  header?: JSXInternal.Element;
}

export interface iHeader
  extends JSX.HTMLAttributes<HTMLElement>,
    Partial<ARIAMixin> {
  children?: ComponentChildren;
}

export interface iText
  extends JSX.HTMLAttributes<HTMLSpanElement>,
    Partial<ARIAMixin> {
  type:
    | 'display'
    | 'title'
    | 'subtitle'
    | 'heading'
    | 'subheading'
    | 'paragraph'
    | 'label'
    | 'small';
  children?: ComponentChildren;
}
