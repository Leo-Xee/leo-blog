import { globalStyle } from '@vanilla-extract/css';
import { darkTheme, lightTheme, vars } from './themes.css';
import * as layers from './layers.css';

globalStyle('html', {
  scrollPaddingTop: '100px',
  scrollBehavior: 'smooth',
});

globalStyle('body', {
  '@layer': {
    [layers.global]: {
      backgroundColor: vars.themeColor.background,
      color: vars.themeColor.text,
      lineHeight: vars.lineHeight.base,
      fontFamily:
        'Pretendard Variable, Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, Helvetica Neue, Segoe UI, Apple SD Gothic Neo, Noto Sans KR, Malgun Gothic, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, sans-serif',
      minHeight: '100vh',
      margin: 0,
      display: 'grid',
      gridTemplateRows: 'auto 1fr auto',
    },
  },
});

/**
 * Task List
 */

// FIXME: rehype-class-names 패키지에서 ::after, ::before를 지원하지 않아서 globalStyle로 임시 작성
globalStyle(`input[type="checkbox"]:checked::after`, {
  content: '',
  position: 'absolute',
  top: '1px',
  left: '4px',
  width: '5px',
  height: '10px',
  border: `solid ${vars.themeColor.heading}`,
  borderWidth: '0 2px 2px 0',
  transform: 'rotate(45deg)',
});

/**
 * Code
 */

globalStyle(`${lightTheme} pre`, {
  backgroundColor: 'var(--shiki-light-bg)',
});

globalStyle(`${darkTheme} pre`, {
  backgroundColor: 'var(--shiki-dark-bg)',
});

globalStyle(`${lightTheme} code[data-theme*="light"] span`, {
  color: 'var(--shiki-light)',
});

globalStyle(`${darkTheme} code[data-theme*="dracula"] span`, {
  color: 'var(--shiki-dark)',
});

/* Code Container */

globalStyle(`figure`, {
  marginTop: vars.space.space05,
  marginBottom: vars.space.space05,
  lineHeight: vars.lineHeight.code,
});

globalStyle(`pre`, {
  margin: vars.space.none,
  border: `1px solid ${vars.themeColor.gray200}`,
  borderRadius: vars.borderRadius.radii02,
  overflowX: 'auto',
});

globalStyle('pre code > span', {
  padding: `0 ${vars.space.space05}`,
  borderLeft: `3px solid transparent`,
});

/* Code Block Title */

globalStyle(`figcaption`, {
  padding: `${vars.space.space03} ${vars.space.space05}`,
  backgroundColor: vars.themeColor.codeTitle,
  border: `1px solid ${vars.themeColor.gray200}`,
  borderBottom: vars.space.none,
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.semiBold,
  borderRadius: `${vars.borderRadius.radii02} ${vars.borderRadius.radii02} 0 0`,
});

globalStyle('figcaption + pre', {
  borderRadius: `0  0 ${vars.borderRadius.radii02} ${vars.borderRadius.radii02}`,
});

/* Block Code */

globalStyle(`pre > code`, {
  counterReset: 'line',
  fontFamily: 'Fira Code, monospace',
  fontSize: vars.fontSize.xs,
});

globalStyle(`pre > code > span[data-line]::before`, {
  marginRight: vars.space.space05,
  counterIncrement: 'line',
  content: `counter(line)`,
  display: 'inline-block',
  width: '2em',
  textAlign: 'right',
});

/* Inline Code */

globalStyle(`span code > span`, {
  margin: '0 2px',
  padding: '4px 6px',
  border: `1px solid ${vars.themeColor.gray200}`,
  borderRadius: vars.borderRadius.radii01,
  fontFamily: 'Fira Code, monospace',
  fontSize: vars.fontSize.xs,
});

/* HighLighting */

globalStyle('span[data-highlighted-line]', {
  backgroundColor: `${vars.themeColor.codeLineHighlighBackground}`,
});

globalStyle('pre code > span[data-highlighted-line]', {
  borderLeft: `3px solid ${vars.themeColor.codeHighlighBorder}`,
});

globalStyle(
  'mark[data-highlighted-chars], mark[data-highlighted-chars] > span',
  {
    backgroundColor: vars.themeColor.codeWordHighlighBackground,
  }
);
