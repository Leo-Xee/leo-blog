import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/themes.css';
import { heading1 } from '../common/Markdown/Markdown.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: vars.space.space05,
  marginBottom: vars.space.space15,
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
