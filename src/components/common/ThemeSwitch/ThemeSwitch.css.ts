import { vars } from '@/styles/themes.css';
import { style } from '@vanilla-extract/css';

export const themeSwitch = style({
  padding: vars.space.space02,
  width: '40px',
  height: '40px',
  borderRadius: vars.borderRadius.rounded,

  '@media': {
    '(hover: hover) and (pointer: fine)': {
      ':hover': {
        padding: vars.space.space02,
        backgroundColor: vars.themeColor.gray100,
      },
    },
  },

  ':active': {
    transform: 'scale(0.9)',
  },
});
