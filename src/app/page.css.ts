import { vars } from '@/styles/themes.css';
import { style } from '@vanilla-extract/css';

const test = style({
  padding: vars.space.space04,
  fontSize: vars.fontSize.heading1,
  fontWeight: vars.fontWeight.bold,
  color: vars.themeColor.blue500,
  backgroundColor: vars.themeColor.background,
});

export default test;
