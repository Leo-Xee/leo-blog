import { TOC_WIDTH } from '@/constants';
import { vars } from '@/styles/themes.css';
import { style } from '@vanilla-extract/css';

export const root = style({
  padding: `${vars.space.space08} ${vars.space.space06}`,
  display: 'grid',
  justifyContent: 'center',
  columnGap: vars.space.space20,
  gridTemplateColumns: `${TOC_WIDTH}px 768px ${TOC_WIDTH}px`,
  gridTemplateAreas: `
    ". header ."
    ". main aside"
  `,

  '@media': {
    'screen and (max-width: 1480px)': {
      columnGap: vars.space.none,
      gridTemplateColumns: 'minmax(0, 768px)',
      gridTemplateAreas: `
        "header"
        "main"
      `,
    },
  },
});

export const header = style({
  gridArea: 'header',
  width: '100%',
  maxWidth: vars.breakpoint.tablet,
});

export const main = style({
  gridArea: 'main',
  width: '100%',
  maxWidth: vars.breakpoint.tablet,
});

export const aside = style({
  gridArea: 'aside',
  position: 'sticky',
  top: vars.space.space06,
  width: TOC_WIDTH,

  '@media': {
    'screen and (max-width: 1480px)': {
      display: 'none',
    },
  },
});
