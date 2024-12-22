import { vars } from '@/styles/themes.css';
import { style } from '@vanilla-extract/css';

export const blockquote = style({
  marginTop: vars.space.space06,
  marginBottom: vars.space.space06,
  padding: `${vars.space.space05} ${vars.space.space08}`,
  borderRadius: vars.borderRadius.radii03,

  selectors: {
    '&:first-child': {
      marginTop: vars.space.none,
    },
  },
});

export const info = style([
  blockquote,
  {
    backgroundColor: vars.themeColor.infoBackground,
  },
]);

export const warning = style([
  blockquote,
  {
    backgroundColor: vars.themeColor.warnBackground,
  },
]);

export const error = style([
  blockquote,
  {
    backgroundColor: vars.themeColor.errorBackground,
  },
]);

export const success = style([
  blockquote,
  {
    backgroundColor: vars.themeColor.successBackground,
  },
]);
