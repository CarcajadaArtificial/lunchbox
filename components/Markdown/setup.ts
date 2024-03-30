//   __  __          _      _                           _
//  |  \/  |__ _ _ _| |____| |_____ __ ___ _    ___ ___| |_ _  _ _ __
//  | |\/| / _` | '_| / / _` / _ \ V  V / ' \  (_-</ -_)  _| || | '_ \
//  |_|  |_\__,_|_| |_\_\__,_\___/\_/\_/|_||_| /__/\___|\__|\_,_| .__/
//                                                              |_|
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * This module contains the prop type, default values, and styles for the `<Button />` component.
 *
 * @module
 */
import { applyDefaults, cn, opt, partializeClasses } from '../../src/utils.ts';
import { iComponent } from '../../src/types.ts';
import { RenderOptions } from '../../src/markdown.ts';
import { render } from '../../src/markdown.ts';
import { styles } from './styles.ts';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * Properties of the `<Button />` component.
 *
 * `markdownContent` (string):
 *    A string that contains content with markdown syntax.
 *
 * `renderOptions` (RenderOptions):
 *    Rendering options imported from the deno-gfm project.
 */
export type iMarkdown = iComponent<HTMLDivElement> & {
  markdownContent: string;
  renderOptions: RenderOptions;
};

/** Default values of the `<Button />` component's props. */
const defaults: iMarkdown = {
  markdownContent: '',
  renderOptions: {
    allowIframes: true,
    allowMath: true,
    customClasses: {
      code: [styles.code_wrapper],
      codespan: [styles.code],
      link: [styles.link],
      hr: [styles.separator],
    },
  },
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Setup function of the `<Button />` component. */
export default (props: Partial<iMarkdown>) => {
  const p = applyDefaults<iMarkdown>(defaults, props);

  const classes = partializeClasses({
    markdown: opt(
      cn(styles.markdown, styles.syntax),
      p.class,
      p.nostyle || p.nostyleAll,
    ),
  });

  p.markdownContent = render(p.markdownContent, p.renderOptions);

  delete p.class;
  return { c: classes, ...p };
};
