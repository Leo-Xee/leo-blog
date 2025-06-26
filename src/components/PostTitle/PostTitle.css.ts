import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/themes.css';
import { heading1 } from '../common/CustomMDXRemote/CustomMDXRemote.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: vars.space.space05,
  marginTop: vars.space.space10,
  marginBottom: vars.space.space20,
});

export const postTagContainer = style({
  display: 'flex',
  gap: vars.space.space02,
});

export const postTitle = style([
  heading1,
  {
    width: '85%',
    textAlign: 'center',
    wordBreak: 'keep-all',
    lineHeight: vars.lineHeight.title,
  },
]);

export const postMeta = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.space02,
  color: vars.themeColor.gray800,
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
});
