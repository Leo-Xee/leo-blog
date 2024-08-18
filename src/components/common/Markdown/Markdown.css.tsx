import { vars } from '@/styles/themes.css';
import { globalStyle, style } from '@vanilla-extract/css';

export const markdown = style({});

/**
 * Heading
 */

globalStyle(`${markdown} h1`, {
  fontSize: vars.fontSize.heading1,
});

globalStyle(`${markdown} h2`, {
  fontSize: vars.fontSize.heading2,
  marginTop: vars.space.space08,
  marginBottom: vars.space.space03,
  borderBottom: `1px solid ${vars.themeColor.gray300}`,
});

globalStyle(`${markdown} h3`, {
  fontSize: vars.fontSize.heading3,
  marginTop: vars.space.space08,
  marginBottom: vars.space.space03,
  borderBottom: `1px solid ${vars.themeColor.gray300}`,
});

globalStyle(`${markdown} h4`, {
  fontSize: vars.fontSize.heading4,
  marginTop: vars.space.space08,
  marginBottom: vars.space.space03,
  borderBottom: `1px solid ${vars.themeColor.gray300}`,
});

globalStyle(`${markdown} h5`, {
  fontSize: vars.fontSize.heading5,
  marginTop: vars.space.space08,
  marginBottom: vars.space.space03,
  borderBottom: `1px solid ${vars.themeColor.gray300}`,
});

globalStyle(`${markdown} h6`, {
  fontSize: vars.fontSize.heading6,
  marginTop: vars.space.space08,
  marginBottom: vars.space.space03,
  borderBottom: `1px solid ${vars.themeColor.gray300}`,
});

/**
 * Text
 */

globalStyle(`${markdown} p`, {
  marginTop: vars.space.space04,
  marginBottom: vars.space.space04,
});

globalStyle(`${markdown} a`, {
  color: vars.themeColor.blue500,
});

globalStyle(`${markdown} em`, {
  fontStyle: 'italic',
});

globalStyle(`${markdown} strong`, {
  fontWeight: vars.fontWeight.bold,
});

globalStyle(`${markdown} del`, {
  textDecoration: 'line-through',
});

/**
 * List
 */

globalStyle(`${markdown} ul`, {
  listStyleType: 'disc',
  paddingLeft: vars.space.space06,
});

globalStyle(`${markdown} ol`, {
  listStyleType: 'decimal',
  paddingLeft: vars.space.space06,
});

globalStyle(`${markdown} > ul`, {
  marginTop: vars.space.space04,
  marginBottom: vars.space.space04,
});

globalStyle(`${markdown} > ol`, {
  marginTop: vars.space.space04,
  marginBottom: vars.space.space04,
});

/**
 * Task List
 */

globalStyle(`${markdown} ul.contains-task-list`, {
  listStyleType: 'none',
});

globalStyle(`${markdown} > ul.contains-task-list`, {
  paddingLeft: vars.space.none,
});

globalStyle(`${markdown} ul.contains-task-list input[type="checkbox"]`, {
  position: 'relative',
  border: `1px solid ${vars.themeColor.gray300}`,
  width: '14px',
  height: '14px',
  borderRadius: vars.borderRadius.radii01,
});

globalStyle(`${markdown} input[type="checkbox"]:checked:disabled`, {
  backgroundColor: '#f2f4f6',
});

globalStyle(`${markdown} input[type="checkbox"]:checked::after`, {
  content: '',
  position: 'absolute',
  top: '1px',
  left: '4px',
  width: '5px',
  height: '10px',
  border: `solid ${vars.themeColor.blue600}`,
  borderWidth: '0 2px 2px 0',
  transform: 'rotate(45deg)',
});

/**
 * Image
 */

globalStyle(`${markdown} img`, {
  width: '100%',
});

/**
 * Table
 */

globalStyle(`${markdown} table, th, td`, {
  padding: vars.space.space04,
  border: '1px solid',
});

/**
 * etc
 */

globalStyle(`${markdown} hr`, {
  marginTop: vars.space.space04,
  marginBottom: vars.space.space04,
  borderTop: `1px solid ${vars.themeColor.gray300}`,
});
