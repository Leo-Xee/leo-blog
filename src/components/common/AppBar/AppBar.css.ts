import { vars } from '@/styles/themes.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  paddingTop: vars.space.space04,
  paddingLeft: vars.space.space06,
  paddingRight: vars.space.space06,
  position: 'sticky',
  top: 0,
  display: 'flex',
  justifyContent: 'center',

  '@media': {
    'screen and (max-width: 768px)': {
      display: 'none',
    },
  },
});

export const appBar = style({
  paddingTop: vars.space.space03,
  paddingBottom: vars.space.space03,
  paddingLeft: vars.space.space05,
  paddingRight: vars.space.space05,
  maxWidth: vars.breakpoint.tablet,
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  border: `1px solid ${vars.themeColor.gray200}`,
  borderRadius: vars.borderRadius.radii02,
  backgroundColor: vars.themeColor.appBar,
  backdropFilter: 'blur(3px)',
});

export const wrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.space03,
});

export const brand = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.space02,
  fontSize: vars.fontSize.lg,
  fontWeight: vars.fontWeight.bold,
});

export const navList = style({
  display: 'flex',
  gap: vars.space.space01,
});

export const navListItem = style({});

export const navItem = style({
  display: 'inline-block',
  paddingTop: vars.space.space02,
  paddingBottom: vars.space.space02,
  paddingLeft: vars.space.space03,
  paddingRight: vars.space.space03,
  borderRadius: vars.borderRadius.radii02,
  transitionProperty: 'all',
  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  transitionDuration: '150ms',

  ':hover': {
    backgroundColor: vars.themeColor.gray100,
  },
});

export const ActiveNavItem = style([
  navItem,
  {
    WebkitTextStroke: `1.2px ${vars.themeColor.text}`,
  },
]);

export const navigation = style({
  display: 'flex',
});
