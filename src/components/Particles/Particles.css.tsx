import { vars } from '@/styles/themes.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  position: 'absolute',
  top: '-10px',
  width: '75%',
  height: '300px',
  willChange: 'transform, opacity',
  zIndex: -1,
});

export const particle1 = style({
  position: 'absolute',
  top: '90px',
  left: '10%',
  width: '12px',
  height: '12px',
  opacity: 0.4,
  backgroundColor: '#55a5ff',
  borderRadius: vars.borderRadius.rounded,
  willChange: 'transform, opacity',

  '@media': {
    'screen and (max-width: 480px)': {
      top: '90px',
      left: '8%',
      width: '6px',
      height: '6px',
    },
  },
});

export const particle2 = style({
  position: 'absolute',
  top: '50px',
  left: '33%',
  width: '16px',
  height: '16px',
  opacity: 0.2,
  backgroundColor: '#f4717d',
  borderRadius: vars.borderRadius.rounded,
  willChange: 'transform, opacity',

  '@media': {
    'screen and (max-width: 480px)': {
      top: '60px',
      left: '33%',
      width: '10px',
      height: '10px',
    },
  },
});

export const particle3 = style({
  position: 'absolute',
  top: '65px',
  right: '25%',
  width: '22px',
  height: '22px',
  opacity: 0.4,
  backgroundColor: '#8474f9',
  borderRadius: vars.borderRadius.rounded,
  willChange: 'transform, opacity',

  '@media': {
    'screen and (max-width: 480px)': {
      top: '70px',
      right: '28%',
      width: '14px',
      height: '14px',
    },
  },
});

export const particle4 = style({
  position: 'absolute',
  top: '100px',
  right: '7%',
  width: '12px',
  height: '12px',
  opacity: 0.15,
  backgroundColor: '#f4717d',
  borderRadius: vars.borderRadius.rounded,
  willChange: 'transform, opacity',

  '@media': {
    'screen and (max-width: 480px)': {
      top: '100px',
      right: '9%',
      width: '6px',
      height: '6px',
    },
  },
});

export const particle5 = style({
  position: 'absolute',
  bottom: '100px',
  left: '17%',
  width: '22px',
  height: '22px',
  opacity: 0.3,
  backgroundColor: '#f4717d',
  borderRadius: vars.borderRadius.rounded,
  willChange: 'transform, opacity',

  '@media': {
    'screen and (max-width: 480px)': {
      bottom: '125px',
      left: '17%',
      width: '14px',
      height: '14px',
    },
  },
});

export const particle6 = style({
  position: 'absolute',
  bottom: '115px',
  left: '36%',
  width: '16px',
  height: '16px',
  opacity: 0.2,
  backgroundColor: '#8474f9',
  borderRadius: vars.borderRadius.rounded,
  willChange: 'transform, opacity',

  '@media': {
    'screen and (max-width: 480px)': {
      bottom: '145px',
      left: '36%',
      width: '12px',
      height: '12px',
    },
  },
});

export const particle7 = style({
  position: 'absolute',
  bottom: '95px',
  right: '32%',
  width: '16px',
  height: '16px',
  opacity: 0.2,
  backgroundColor: '#55a5ff',
  borderRadius: vars.borderRadius.rounded,
  willChange: 'transform, opacity',

  '@media': {
    'screen and (max-width: 480px)': {
      bottom: '115px',
      right: '32%',
      width: '12px',
      height: '12px',
    },
  },
});

export const particle8 = style({
  position: 'absolute',
  bottom: '125px',
  right: '18%',
  width: '12px',
  height: '12px',
  opacity: 0.2,
  backgroundColor: '#8474f9',
  borderRadius: vars.borderRadius.rounded,
  willChange: 'transform, opacity',

  '@media': {
    'screen and (max-width: 480px)': {
      bottom: '145px',
      right: '16%',
      width: '6px',
      height: '6px',
    },
  },
});
