import { JSXInternal } from 'https://esm.sh/v95/preact@10.11.0/src/jsx.d.ts';
import { JSX, ComponentChildren, ComponentChild } from 'preact';

export interface iInput
  extends JSX.HTMLAttributes<HTMLInputElement>,
    Partial<ARIAMixin> {
  label?: string;
  error?: string;
  maxWidth: boolean;
}

export interface iTextArea
  extends JSX.HTMLAttributes<HTMLTextAreaElement>,
    Partial<ARIAMixin> {
  label?: string;
  error?: string;
  maxWidth: boolean;
}

export interface iSelect
  extends JSX.HTMLAttributes<HTMLSelectElement>,
    Partial<ARIAMixin> {
  label?: string;
  error?: string;
  placeholder: string;
  maxWidth: boolean;
  children: ComponentChildren;
  options:
    | {
        value: string;
        name: string;
      }[]
    | string[]
    | [];
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
  links: { label: string; href: string }[] | [];
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
  inheritColor: boolean;
}

export interface iLink
  extends JSX.HTMLAttributes<HTMLAnchorElement>,
    Partial<ARIAMixin> {
  children: ComponentChildren;
  nostyle: boolean;
}

export interface iFooter
  extends JSX.HTMLAttributes<HTMLElement>,
    Partial<ARIAMixin> {
  madeWithFresh: boolean;
  children: ComponentChildren;
}

export interface iMenu {
  children: ComponentChildren;
  links: { label: string; href: string }[] | [];
}
