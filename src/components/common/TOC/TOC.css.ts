import { APP_BAR_HEIGHT, TOC_WIDTH } from '@/constants';
import { vars } from '@/styles/themes.css';
import { style } from '@vanilla-extract/css';

export const list = style({
  position: 'sticky',
  top: '90px',
  width: TOC_WIDTH,
  maxHeight: `calc(100vh - ${APP_BAR_HEIGHT}px)`,
  overflowY: 'auto',
});

export const listItem = style({
  fontSize: vars.fontSize.sm,
  color: vars.themeColor.gray700,
  borderLeft: `2px solid ${vars.themeColor.gray300}`,

  ':hover': {
    color: vars.themeColor.heading,
    fontWeight: vars.fontWeight.medium,
    borderLeft: `2px solid ${vars.themeColor.heading}`,
    transition: 'all 0.2s ease',
  },
});

export const activeListItem = style({
  borderLeft: `2px solid ${vars.themeColor.heading}`,
  transition: 'all 0.2s ease',
});

export const activeListItemText = style({
  display: 'inline-block',
  color: vars.themeColor.heading,
  fontWeight: vars.fontWeight.medium,
  transform: 'scale(1.05)',
  transition: 'all 0.2s ease',
});
