import { vars } from '@/styles/themes.css';
import { style } from '@vanilla-extract/css';
import { heading1 } from '../common/Markdown/Markdown.css';

export const title = style([heading1, {}]);

export const description = style({
  paddingLeft: vars.space.space02,
  paddingRight: vars.space.space02,
});
