import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/themes.css';

export const container = style({
  position: 'relative',
  paddingTop: vars.space.space10,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const title = style({
  whiteSpace: 'pre-wrap',
  fontSize: vars.fontSize.introHeading,
  fontWeight: vars.fontWeight.bold,
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  backgroundImage: 'linear-gradient(310deg, #a0f3e9, #8077ff 32%, #ff7271 98%)',

  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: vars.fontSize.mobileIntroHeading,
    },
  },
});

export const location = style({
  paddingTop: vars.space.space06,
  paddingBottom: vars.space.space12,
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.space01,
  fontWeight: vars.fontWeight.medium,
});

export const description = style({
  maxWidth: '550px',
  textAlign: 'center',
});
