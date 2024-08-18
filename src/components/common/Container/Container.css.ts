import { vars } from '@/styles/themes.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  paddingTop: vars.space.space04,
  paddingBottom: vars.space.space10,
  paddingRight: vars.space.space06,
  paddingLeft: vars.space.space06,
  display: 'flex',
  justifyContent: 'center',
});

export const content = style({
  maxWidth: vars.breakpoint.tablet,
  width: '100%',
});
