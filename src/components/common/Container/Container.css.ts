import { vars } from '@/styles/themes.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  padding: `${vars.space.space08} ${vars.space.space06}`,
  display: 'flex',
  justifyContent: 'center',
});

export const content = style({
  maxWidth: vars.breakpoint.tablet,
  width: '100%',
});
