import { vars } from '@/styles/themes.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  marginTop: 'auto',
  paddingTop: vars.space.space06,
  paddingBottom: vars.space.space10,
  display: 'flex',
  justifyContent: 'center',
});

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: vars.space.space03,
});

export const list = style({
  display: 'flex',
  gap: vars.space.space03,
});

export const listItem = style({
  display: 'block',
  width: '40px',
  height: '40px',
  padding: vars.space.space02,
  borderRadius: vars.borderRadius.rounded,
  transitionProperty: 'all',
  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  transitionDuration: '150ms',

  ':hover': {
    backgroundColor: vars.themeColor.gray100,
  },

  ':active': {
    transform: 'scale(0.9)',
  },
});

export const rights = style({
  fontSize: vars.fontSize.sm,
});
