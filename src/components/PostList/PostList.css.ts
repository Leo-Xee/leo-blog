import { vars } from '@/styles/themes.css';
import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

export const title = style({
  paddingTop: vars.space.space12,
  paddingBottom: vars.space.space04,
  fontSize: calc.add(vars.fontSize.heading2, '4px'),
  fontWeight: vars.fontWeight.bold,
  color: vars.themeColor.heading,
});

export const postList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.space03,
});

export const postListItem = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.space02,
  width: '100%',
  padding: vars.space.space02,
});

export const postTitle = style({
  fontSize: calc.subtract(vars.fontSize.heading3, '2px'),
  fontWeight: vars.fontWeight.bold,
  color: vars.themeColor.heading,
});

export const postDescription = style({
  fontSize: '15px',
});
