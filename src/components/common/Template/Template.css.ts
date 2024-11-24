import { vars } from '@/styles/themes.css';
import { style } from '@vanilla-extract/css';

export const root = style({
  padding: `${vars.space.space08} ${vars.space.space06}`,
  display: 'grid',
  justifyContent: 'center',
  columnGap: vars.space.space20,
  gridTemplateColumns: '260px 768px 260px',
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
  width: '260px',

  '@media': {
    'screen and (max-width: 1480px)': {
      display: 'none',
    },
  },
});
