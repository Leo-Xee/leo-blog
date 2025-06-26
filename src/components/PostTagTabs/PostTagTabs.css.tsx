import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/themes.css';
import { heading2 } from '../common/CustomMDXRemote/CustomMDXRemote.css';

export const container = style({
  marginBottom: vars.space.space03,
});

export const title = style([heading2, {}]);

export const tabContainer = style({
  display: 'flex',
  overflow: 'auto',
  gap: vars.space.space02,
  padding: `${vars.space.space03} ${vars.space.space04}`,
  border: `1px solid ${vars.themeColor.gray200}`,
  borderRadius: vars.borderRadius.radii02,
  backgroundColor: vars.themeColor.appBar,
  boxShadow: vars.themeColor.shadowSmall,

  scrollbarWidth: 'none',
  selectors: {
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
});

export const tabItem = style({
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

export const tabTagCount = style({
  fontSize: vars.fontSize.xs,
  fontWeight: vars.fontWeight.medium,
  color: vars.themeColor.gray700,
});

export const tabItemActive = style({
  backgroundColor: vars.themeColor.heading,
  color: vars.themeColor.background,
  borderColor: vars.themeColor.gray200,

  '@media': {
    '(hover: hover) and (pointer: fine)': {
      ':hover': {
        backgroundColor: vars.themeColor.heading,
      },
    },
  },

  ':active': {
    transform: 'none',
  },
});

export const tabTagCountActive = style({
  color: vars.themeColor.background,
});
