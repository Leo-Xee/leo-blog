import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/themes.css';

export const item = style({
  display: 'flex',
  fontSize: vars.fontSize.base,
  fontWeight: vars.fontWeight.semiBold,
  border: `1px solid ${vars.themeColor.gray200}`,
  borderRadius: vars.borderRadius.rounded,
  padding: `${vars.space.space01} ${vars.space.space03}`,
  whiteSpace: 'nowrap',

  '@media': {
    '(hover: hover) and (pointer: fine)': {
      ':hover': {
        backgroundColor: vars.themeColor.gray100,
      },
    },
  },

  ':active': {
    transform: 'scale(0.95)',
  },
});
