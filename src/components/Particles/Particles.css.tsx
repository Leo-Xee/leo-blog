import { vars } from '@/styles/themes.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  position: 'absolute',
  top: '-20px',
  width: '75%',
  height: '300px',
  willChange: 'transform, opacity',
});

export const particle1 = style({
  position: 'absolute',
  top: '80px',
  left: '18%',
  width: '12px',
  height: '12px',
  opacity: 0.4,
  backgroundColor: '#55a5ff',
  borderRadius: vars.borderRadius.rounded,
  willChange: 'transform, opacity',
});

export const particle2 = style({
  position: 'absolute',
  top: '45px',
  left: '36%',
  width: '16px',
  height: '16px',
  opacity: 0.2,
  backgroundColor: '#f4717d',
  borderRadius: vars.borderRadius.rounded,
  willChange: 'transform, opacity',
});

export const particle3 = style({
  position: 'absolute',
  top: '50px',
  right: '31%',
  width: '24px',
  height: '24px',
  opacity: 0.4,
  backgroundColor: '#8474f9',
  borderRadius: vars.borderRadius.rounded,
  willChange: 'transform, opacity',
});

export const particle4 = style({
  position: 'absolute',
  top: '90px',
  right: '18%',
  width: '12px',
  height: '12px',
  opacity: 0.15,
  backgroundColor: '#f4717d',
  borderRadius: vars.borderRadius.rounded,
  willChange: 'transform, opacity',
});

export const particle5 = style({
  position: 'absolute',
  bottom: '120px',
  left: '23%',
  width: '24px',
  height: '24px',
  opacity: 0.3,
  backgroundColor: '#f4717d',
  borderRadius: vars.borderRadius.rounded,
  willChange: 'transform, opacity',
});

export const particle6 = style({
  position: 'absolute',
  bottom: '90px',
  left: '36%',
  width: '16px',
  height: '16px',
  opacity: 0.2,
  backgroundColor: '#8474f9',
  borderRadius: vars.borderRadius.rounded,
  willChange: 'transform, opacity',
});

export const particle7 = style({
  position: 'absolute',
  bottom: '80px',
  right: '35%',
  width: '16px',
  height: '16px',
  opacity: 0.2,
  backgroundColor: '#55a5ff',
  borderRadius: vars.borderRadius.rounded,
  willChange: 'transform, opacity',
});

export const particle8 = style({
  position: 'absolute',
  bottom: '120px',
  right: '20%',
  width: '12px',
  height: '12px',
  opacity: 0.2,
  backgroundColor: '#8474f9',
  borderRadius: vars.borderRadius.rounded,
  willChange: 'transform, opacity',
});
