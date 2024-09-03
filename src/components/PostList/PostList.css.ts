import { vars } from '@/styles/themes.css';
import { style } from '@vanilla-extract/css';
import { heading2, heading3 } from '../common/Markdown/Markdown.css';

export const title = style([heading2, {}]);

export const postList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.space03,
});

export const postListItem = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.space01,
  width: '100%',
  padding: vars.space.space02,
});

export const postTitle = style([
  heading3,
  {
    margin: vars.space.none,
  },
]);
