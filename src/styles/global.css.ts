import { globalStyle } from '@vanilla-extract/css';
import { vars } from './themes.css';
import * as layers from './layers.css';

globalStyle('body', {
  '@layer': {
    [layers.global]: {
      backgroundColor: vars.themeColor.background,
      color: vars.themeColor.text,
      lineHeight: vars.lineHeight.base,
      fontFamily:
        '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
      minHeight: '100vh',
      margin: 0,
      display: 'grid',
      gridTemplateRows: 'auto 1fr auto',
    },
  },
});
