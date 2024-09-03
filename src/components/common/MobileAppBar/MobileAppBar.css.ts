import { vars } from '@/styles/themes.css';
import { style } from '@vanilla-extract/css';

export const appBar = style({
  paddingTop: vars.space.space04,
  paddingBottom: vars.space.space04,
  paddingLeft: vars.space.space06,
  paddingRight: vars.space.space06,
  position: 'sticky',
  top: 0,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: `1px solid ${vars.themeColor.gray200}`,
  backgroundColor: vars.themeColor.appBar,
  backdropFilter: 'blur(3px)',
  boxShadow: vars.themeColor.shadowSmall,
  zIndex: 100,

  '@media': {
    'screen and (min-width: 769px)': {
      display: 'none',
    },
  },
});

export const avatar = style({
  display: 'flex',
  alignItems: 'center',
});

export const menus = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.space02,
});

export const button = style({
  padding: vars.space.space02,
  width: '40px',
  height: '40px',
  borderRadius: vars.borderRadius.rounded,

  '@media': {
    '(hover: hover) and (pointer: fine)': {
      ':hover': {
        backgroundColor: vars.themeColor.gray100,
      },
    },
  },

  ':active': {
    transform: 'scale(0.9)',
  },
});

export const navContainer = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100vh',
  paddingLeft: vars.space.space06,
  paddingRight: vars.space.space06,
  backgroundColor: vars.themeColor.background,
});

export const navHeader = style({
  display: 'flex',
  justifyContent: 'flex-end',
  paddingTop: vars.space.space04,
  paddingBottom: vars.space.space04,
});

export const navItem = style({
  display: 'inline-block',
  paddingTop: vars.space.space02,
  paddingBottom: vars.space.space02,
  paddingLeft: vars.space.space02,
  paddingRight: vars.space.space02,
  fontSize: vars.fontSize.xl2,
  fontWeight: vars.fontWeight.bold,

  '@media': {
    '(hover: hover) and (pointer: fine)': {
      ':hover': {
        textDecoration: 'underline',
      },
    },
  },
});
