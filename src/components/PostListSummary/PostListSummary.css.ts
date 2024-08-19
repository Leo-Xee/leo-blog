import { vars } from '@/styles/themes.css';
import { style } from '@vanilla-extract/css';

export const title = style({
  fontSize: vars.fontSize.heading1,
  fontWeight: vars.fontWeight.bold,
  color: vars.themeColor.heading,
});

export const description = style({
  paddingLeft: vars.space.space02,
  paddingRight: vars.space.space02,
});
