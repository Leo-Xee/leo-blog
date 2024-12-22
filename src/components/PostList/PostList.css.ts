import { vars } from '@/styles/themes.css';
import { style } from '@vanilla-extract/css';
import {
  heading2,
  heading3,
} from '../common/CustomMDXRemote/CustomMDXRemote.css';

export const title = style([heading2, {}]);

export const postList = style({
  display: 'flex',
  flexDirection: 'column',
});

export const postListItem = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.space01,
  width: '100%',
  padding: vars.space.space03,
  borderRadius: vars.borderRadius.radii03,
  transitionDuration: '0.3s',

  '@media': {
    '(hover: hover) and (pointer: fine)': {
      ':hover': {
        backgroundColor: vars.themeColor.gray100,
        transform: 'translateX(8px)',
      },

      ':active': {
        transform: 'scale(0.95)',
      },
    },
  },

  ':active': {
    transform: 'scale(0.95)',
  },
});

export const postTitle = style([
  heading3,
  {
    margin: vars.space.none,
  },
]);
